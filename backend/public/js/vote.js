document.addEventListener('DOMContentLoaded', () => {
    const voteForm = document.getElementById('voteForm');
    const viewResultsBtn = document.getElementById('viewResultsBtn');
    const resultsDiv = document.getElementById('results');

    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            document.getElementById("vote-message").innerHTML = this.responseText;
        }
        xhttp.open("GET", "votemessage.txt", true);
        xhttp.send();
    }

    voteForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const favoritePlanet = document.getElementById('planet').value;

        fetch('/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ planet: favoritePlanet }),
        })
        .then(() => {
            loadDoc();
        })
        .catch(err => console.error(error));
    });
    
    viewResultsBtn.addEventListener('click', () => {
        fetch('/votes')
            .then(response => response.json())
            .then(voteData => {
                resultsDiv.innerHTML = '';

                voteData.forEach(vote => {
                    const planetResult = document.createElement('p');
                    planetResult.textContent = `${vote.planet_name}: ${vote.votes} votes`;
                    resultsDiv.appendChild(planetResult);
                });
            })
            .catch(err => console.error(error));
    });
});
