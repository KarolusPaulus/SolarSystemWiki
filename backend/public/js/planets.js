fetch('/planet-data.json')
.then(response => {
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
})
.then(data => {
    const planets = data.bodies.filter(body => body.isPlanet);
    const tableBody = document.getElementById('planet-data');

    if (planets.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="4">No data available.</td></tr>';
        return;
    }

    planets.forEach(planet => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${planet.planetName}</td>
            <td>${(planet["Diameter (km)"]).toFixed(2)}</td>
            <td>${planet["Gravity (m/s^2)"].toFixed(2)}</td>
            <td>${(planet["Distance from Sun (10^6 km)"]).toFixed(2)}</td>
            <td>${planet["Mean Temperature (°C)"]}</td>
            <td>${planet["Number of Moons"] !== null ? planet["Number of Moons"] : 0}</td>
            <td>${planet["Ring System?"]}</td>
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => {
    document.getElementById('planet-data').textContent = 'Failed to load data.';
    console.error(error);
});

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
                planetInfoContainer.style.display = 'block';
            }
        });
    });
})
.catch(error => {
    document.getElementById('planet-info').textContent = 'Failed to load information.';
    console.error(error);
});
document.getElementById('close-info').addEventListener('click', () => {
    document.getElementById('planet-info').style.display = 'none';
});
