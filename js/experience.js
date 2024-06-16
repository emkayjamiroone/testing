// Fetching experience data from the server
fetch('experienceData.json')
    .then(response => response.json())
    .then(data => loadExperienceData(data));

// Function to load experience data
function loadExperienceData(data) {
    const experienceSection = document.getElementById('experience-section');

    data.forEach(item => {
        const experienceDiv = document.createElement('div');
        experienceDiv.className = 'experience-item';

        const title = document.createElement('h3');
        title.textContent = item.title;
        experienceDiv.appendChild(title);

        const company = document.createElement('p');
        company.textContent = `Company: ${item.company}`;
        experienceDiv.appendChild(company);

        const duration = document.createElement('p');
        duration.textContent = `Duration: ${item.duration}`;
        experienceDiv.appendChild(duration);

        const description = document.createElement('p');
        description.textContent = `Description: ${item.description}`;
        experienceDiv.appendChild(description);

        experienceSection.appendChild(experienceDiv);
    });
}