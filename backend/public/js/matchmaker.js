document.getElementById('quiz').addEventListener('submit', function(e) {
    e.preventDefault();

    const weather = document.querySelector('input[name="weather"]:checked').value;
    const drinks = document.querySelector('input[name="drinks"]:checked').value;

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
        } else if (weather === 'cloudy') {
            planetScores.Venus += 20;
            planetScores.Earth += 10;
        }
        
        if (drinks === 'shots') {
            planetScores.Mars += 20;
            planetScores.Jupiter += 15;
        } else if (drinks === 'liquor') {
            planetScores.Venus += 20;
            planetScores.Earth += 15;
        } else if (drinks === 'wine') {
            planetScores.Earth += 20;
            planetScores.Venus += 15;
        } else if (drinks === 'lights') {
            planetScores.Uranus += 20;
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
