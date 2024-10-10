fetch('/planet-info.json')
.then(response => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
})
.then(data => {
    const planets = data.bodies;
    const planetInfoContainer = document.getElementById('planet-info');
    const planetName = document.getElementById('planet-name');
    const planetDescription = document.getElementById('planet-description');

    if (planets.length === 0) {
        planetInfoContainer.innerHTML = '<p>No information available.</p>';
        return;
    }

    const planetElements = document.querySelectorAll('.planet');

    planetElements.forEach(planetElement => {
        planetElement.addEventListener('click', () => {
            const planetNameFromImage = planetElement.alt.toLowerCase();
            const planet = planets.find(p => p.name.toLowerCase() === planetNameFromImage);

            if (planet) {
                planetName.textContent = planet.name;
                planetDescription.textContent = planet.description;

                if (planetInfoContainer.classList.contains('show')) {
                    planetInfoContainer.classList.remove('show');
                    
                    void planetInfoContainer.offsetWidth;
                }

                planetInfoContainer.style.display = 'block';
                
                setTimeout(() => {
                    planetInfoContainer.classList.add('show');
                }, 10);
            }
        });
    });
})
.catch(error => {
    document.getElementById('planet-info').textContent = 'Failed to load information.';
    console.error(error);
});
const closeButton = document.getElementById('close-info');
closeButton.addEventListener('click', () => {
    const planetInfoContainer = document.getElementById('planet-info');

    planetInfoContainer.classList.remove('show');
    planetInfoContainer.style.animation = 'fadeOut 0.5s ease forwards';

    setTimeout(() => {
        planetInfoContainer.style.display = 'none';
        planetInfoContainer.style.animation = '';
    }, 500);
});