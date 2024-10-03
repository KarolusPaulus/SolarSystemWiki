document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();

    //const name = document.getElementById('quiz-name').value;
    const weather = document.getElementById('weather').value;
    const storms = document.getElementById('drinks').value;

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

        if (climate === 'sunny') {
            planetScores.Mercury += 20;
            planetScores.Venus += 20;
        } else if (climate === 'cold') {
            planetScores.Mars += 20;
            planetScores.Uranus += 20;
            planetScores.Neptune += 20;
        } else {
            planetScores.Earth += 20;
        }

        const bestMatch = Object.keys(planetScores).reduce((a, b) => planetScores[a] > planetScores[b] ? a : b);
       
        loadingGif.style.display = 'none';
        matchResult.textContent = `Your perfect planet match is ${bestMatch}!`;
    }, 3000);
});
