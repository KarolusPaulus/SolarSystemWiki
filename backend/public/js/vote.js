document.addEventListener('DOMContentLoaded', () => {
    const voteForm = document.getElementById('voteForm');
    const resultsDiv = document.getElementById('results');
    const voteMessageDiv = document.getElementById('vote-message');
    const chartContainer = document.getElementById('chart-container');

    function loadDoc() {
        const xhttp = new XMLHttpRequest();
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
        .catch(error => console.error("Failed to submit your vote", error));
    });

    function fetchResults() {
        fetch('/votes')
            .then(response => response.json())
            .then(voteData => {
                const maxVotes = Math.max(...voteData.map(vote => vote.votes), 1);
                chartContainer.innerHTML = '';
                
                voteData.forEach(vote => {
                    const barWrapper = document.createElement('div');
                    barWrapper.classList.add('bar-wrapper');
    
                    const voteBar = document.createElement('div');
                    voteBar.classList.add('vote-bar');
                    voteBar.textContent = vote.planet_name;
    
                    const voteCount = document.createElement('span');
                    voteCount.textContent = `${vote.votes} votes`;
                    voteCount.classList.add('vote-count');
    
                    barWrapper.appendChild(voteBar);
                    barWrapper.appendChild(voteCount);
                    chartContainer.appendChild(barWrapper);
    
                    setTimeout(() => {
                        const percentageWidth = (vote.votes / maxVotes) * 100;
                        voteBar.style.width = `${percentageWidth}%`;
                        voteBar.classList.add('animated');
                    }, 100);
                });

                resultsDiv.classList.add('show');
            })
            .catch(error => console.error("Failed to fetch votes", error));
    }
});