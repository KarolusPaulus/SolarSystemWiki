function Quiz(weather, drinks, storm, colors, dates, music) {

        this.weather = weather;
        this.drinks = drinks;
        this.storm = storm;
        this.colors = colors;
        this.dates = dates;
        this.music = music;

        this.calculatePlanetScores = function() {
        const planetScores = {
            Mercury: 0,
            Venus: 0,
            Earth: 0,
            Mars: 0,
            Jupiter: 0,
            Saturn: 0,
            Uranus: 0,
            Neptune: 0
        };

        if (this.weather === 'sunny') {
            planetScores.Mercury += 20;
            planetScores.Venus += 15;
        } else if (this.weather === 'snowy') {
            planetScores.Neptune += 20;
            planetScores.Uranus += 15;
            planetScores.Mars += 10;
        } else if (this.weather === 'rainy') {
            planetScores.Earth += 20;
            planetScores.Venus += 15;
            planetScores.Jupiter += 10;
        } else if (this.weather === 'cloudy') {
            planetScores.Venus += 20;
            planetScores.Jupiter += 15;
        }
        
        if (this.drinks === 'shots') {
            planetScores.Mercury += 20;
            planetScores.Jupiter += 10;
        } else if (this.drinks === 'liquor') {
            planetScores.Venus += 20;
            planetScores.Mars += 15;
        } else if (this.drinks === 'wine') {
            planetScores.Earth += 20;
            planetScores.Saturn += 15;
        } else if (this.drinks === 'lights') {
            planetScores.Uranus += 20;
            planetScores.Neptune += 15;
        }

        if (this.storm === 'angry') {
            planetScores.Mercury += 20;
            planetScores.Mars += 15;
        } else if (this.storm === 'relax') {
            planetScores.Venus += 20;
            planetScores.Saturn += 15;
        } else if (this.storm === 'outside') {
            planetScores.Jupiter += 20;
        } else if (this.storm === 'idc') {
            planetScores.Neptune += 20;
            planetScores.Earth += 10;
        }

        if (this.colors === 'neons') {
            planetScores.Uranus += 20;
            planetScores.Earth += 15;
            planetScores.Neptune += 10;
        } else if (this.colors === 'pastels') {
            planetScores.Uranus += 20;
            planetScores.Neptune += 10;
        } else if (this.colors === 'muted') {
            planetScores.Mars += 20;
            planetScores.Venus += 15;
            planetScores.Mercury += 10;
        } else if (this.colors === 'grayscale') {
            planetScores.Mercury += 20;
        }

        if (this.dates === 'stars') {
            planetScores.Venus += 20;
            planetScores.Jupiter += 15;
            planetScores.Earth += 10;
        } else if (this.dates === 'art') {
            planetScores.Jupiter += 20;
            planetScores.Mars += 15;
            planetScores.Saturn += 10;
        } else if (this.dates === 'outdoors') {
            planetScores.Saturn += 20;
        } else if (this.dates === 'cozy') {
            planetScores.Neptune += 20;
            planetScores.Uranus += 15;
            planetScores.Mercury += 10;
        }

        if (this.music === 'pop') {
            planetScores.Venus += 20;
            planetScores.Earth += 15;
            planetScores.Saturn += 10;
        } else if (this.music === 'rock') {
            planetScores.Mars += 20;
            planetScores.Earth += 15;
        } else if (this.music === 'classical') {
            planetScores.Saturn += 20;
            planetScores.Mercury += 15;
            planetScores.Uranus += 10;
        } else if (this.music === 'electro') {
            planetScores.Jupiter += 20;
            planetScores.Saturn += 15;
            planetScores.Neptune += 10;
        }

        return planetScores;
    };
}

const planetGifs = {
    Mercury: 'assets/mercury.gif',
    Venus: 'assets/venus.gif',
    Earth: 'assets/earth.gif',
    Mars: 'assets/mars.gif',
    Jupiter: 'assets/jupiter.gif',
    Saturn: 'assets/saturn.gif',
    Uranus: 'assets/uranus.gif',
    Neptune: 'assets/neptune.gif'
};

document.getElementById('quiz').addEventListener('submit', function(e) {
    e.preventDefault();

    const quiz = new Quiz(
        document.querySelector('input[name="weather"]:checked').value,
        document.querySelector('input[name="drinks"]:checked').value,
        document.querySelector('input[name="storm"]:checked').value,
        document.querySelector('input[name="colors"]:checked').value,
        document.querySelector('input[name="dates"]:checked').value,
        document.querySelector('input[name="music"]:checked').value
    );

    const submitButton = document.getElementById('find-match');
    submitButton.style.display = 'none';

    const matchResult = document.getElementById('match-result');
    const loadingGif = document.getElementById('loading-gif');
    matchResult.classList.remove('show');
    
    loadingGif.style.display = 'block';
    matchResult.textContent = '';

    setTimeout(() => {

        const planetScores = quiz.calculatePlanetScores();
        const bestMatch = Object.keys(planetScores).reduce((a, b) => planetScores[a] > planetScores[b] ? a : b);
       
        fetch('/planet-matchmessage.json')
            .then(response => response.json())
            .then(data => {
                const planetMessage = data.bodies.find(body => body.name === bestMatch).message;
                
                loadingGif.style.display = 'none';
                const planetGif = planetGifs[bestMatch];
                matchResult.innerHTML = `
                <h3>Your perfect match is ${bestMatch}!</h3>
                <img src="${planetGif}" alt="${bestMatch} GIF" style="display:block; margin: 0 auto; width: 200px; height: 200px;">
                <p>${planetMessage}</p>
                `;

                matchResult.classList.add('show');
            })
            .catch(error => {
                console.error(error);
                loadingGif.style.display = 'none';
                matchResult.textContent = 'Error fetching match message.';
                alert('Oops! There was an error fetching your perfect match D:');
            });
    }, 3000);
});