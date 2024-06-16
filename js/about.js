// Fetching profile data from the exported variable
const profileData = require('../data/profileData');

// Function to load profile data
function loadProfileData() {
    const profileSection = document.getElementById('profile-section');

    // Creating elements for profile data
    const nameElement = document.createElement('h2');
    const imageElement = document.createElement('img');
    const descriptionElement = document.createElement('p');

    // Setting values for the elements
    nameElement.textContent = profileData.name;
    imageElement.src = 'images/profile.jpg';
    descriptionElement.textContent = profileData.description;

    // Appending elements to the profile section
    profileSection.appendChild(nameElement);
    profileSection.appendChild(imageElement);
    profileSection.appendChild(descriptionElement);
}

// Event listener for 'loadProfile' message
window.addEventListener('loadProfile', loadProfileData);