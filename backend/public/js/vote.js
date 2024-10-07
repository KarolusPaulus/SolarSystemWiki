document.addEventListener('DOMContentLoaded', () => {
    const voteForm = document.getElementById('voteForm');
    const resultsDiv = document.getElementById('results');
    const voteMessageDiv = document.getElementById('vote-message');

    function loadDoc() {
        const xhttp = new XMLHttpRequest();
        /*xhttp.onload = function() {
            document.getElementById("vote-message").innerHTML = this.responseText;
        }*/
            xhttp.onload = function() {
                voteMessageDiv.innerHTML = this.responseText;
                voteMessageDiv.classList.add('zoom-in');
                fetchResults();
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
        .catch(error => console.error(error));
    });

    function fetchResults() {
        fetch('/votes')
            .then(response => response.json())
            .then(voteData => {
                resultsDiv.innerHTML = '';

                voteData.forEach(vote => {
                    const planetResult = document.createElement('p');
                    planetResult.textContent = `${vote.planet_name}: ${vote.votes} votes`;
                    resultsDiv.appendChild(planetResult);
                });

                resultsDiv.classList.add('show');
            })
            .catch(error => console.error(error));
    }
});