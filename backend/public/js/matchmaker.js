document.getElementById('quiz').addEventListener('submit', function(e) {
    e.preventDefault();

    const weather = document.querySelector('input[name="weather"]:checked').value;
    const drinks = document.querySelector('input[name="drinks"]:checked').value;
    const storm = document.querySelector('input[name="storm"]:checked').value;
    const colors = document.querySelector('input[name="colors"]:checked').value;
    const dates = document.querySelector('input[name="dates"]:checked').value;
    const music = document.querySelector('input[name="music"]:checked').value;

    const matchResult = document.getElementById('match-result');
    const loadingGif = document.getElementById('loading-gif');
   
    loadingGif.style.display = 'block';
    matchResult.textContent = '';

    setTimeout(() => {
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

        if (weather === 'sunny') {
            planetScores.Mercury += 20;
            planetScores.Venus += 15;
        } else if (weather === 'snowy') {
            planetScores.Mars += 20;
            planetScores.Uranus += 15;
            planetScores.Neptune += 15;
        } else if (weather === 'rainy') {
            planetScores.Earth += 20;
            planetScores.Venus += 10;
            planetScores.Saturn += 10;
            planetScores.Jupiter += 10;
        } else if (weather === 'cloudy') {
            planetScores.Venus += 20;
            planetScores.Saturn += 15;
            planetScores.Earth += 10;
        }
        
        if (drinks === 'shots') {
            planetScores.Mercury += 20;
            planetScores.Jupiter += 15;
        } else if (drinks === 'liquor') {
            planetScores.Venus += 20;
            planetScores.Mars += 15;
        } else if (drinks === 'wine') {
            planetScores.Earth += 20;
            planetScores.Saturn += 20;
            planetScores.Venus += 10;
        } else if (drinks === 'lights') {
            planetScores.Earth += 10;
            planetScores.Uranus += 20;
            planetScores.Neptune += 15;
        }

        if (storm === 'angry') {
            planetScores.Mercury += 20;
            planetScores.Mars += 10;
        } else if (storm === 'relax') {
            planetScores.Venus += 20;
            planetScores.Saturn += 20;
            planetScores.Mars += 15;
        } else if (storm === 'outside') {
            planetScores.Jupiter += 20;
            planetScores.Earth += 15;
            planetScores.Venus += 10;
        } else if (storm === 'idc') {
            planetScores.Earth += 10;
            planetScores.Saturn += 15;
            planetScores.Uranus += 15;
            planetScores.Neptune += 20;
        }

        if (colors === 'neons') {
            planetScores.Jupiter += 20;
            planetScores.Neptune += 20;
            planetScores.Venus += 10;
        } else if (colors === 'pastels') {
            planetScores.Venus += 20;
            planetScores.Earth += 15;
            planetScores.Saturn += 10;
            planetScores.Uranus += 20;
        } else if (colors === 'muted') {
            planetScores.Saturn += 20;
            planetScores.Earth += 10;
            planetScores.Mars += 15;
            planetScores.Mercury += 10;
        } else if (colors === 'grayscale') {
            planetScores.Mercury += 20;
        }

        if (dates === 'stars') {
            planetScores.Earth += 15;
            planetScores.Venus += 20;
            planetScores.Saturn += 15;
        } else if (dates === 'art') {
            planetScores.Jupiter += 20;
            planetScores.Mars += 10;
            planetScores.Neptune += 15;
        } else if (dates === 'outdoors') {
            planetScores.Earth += 10;
            planetScores.Mars += 15;
            planetScores.Uranus += 15;
        } else if (dates === 'cozy') {
            planetScores.Mercury += 20;
            planetScores.Venus += 10;
        }

        if (music === 'pop') {
            planetScores.Venus += 20;
        } else if (music === 'rock') {
            planetScores.Mars += 20;
            planetScores.Earth += 15;
        } else if (music === 'classical') {
            planetScores.Jupiter += 20;
            planetScores.Earth += 10;
            planetScores.Saturn += 15;
        } else if (music === 'electro') {
            planetScores.Mercury += 20;
            planetScores.Uranus += 15;
            planetScores.Neptune += 15;
        }

        const bestMatch = Object.keys(planetScores).reduce((a, b) => planetScores[a] > planetScores[b] ? a : b);
       
        fetch('/planet-matchmessage.json')
            .then(response => response.json())
            .then(data => {
                const planetMessage = data.bodies.find(body => body.name === bestMatch).message;
                loadingGif.style.display = 'none';
                matchResult.textContent = `Your perfect match is ${bestMatch}! ${planetMessage}`;
            })
            .catch(error => {
                console.error(error);
                loadingGif.style.display = 'none';
                matchResult.textContent = 'Error fetching match message.';
            });
    }, 3000);
});
