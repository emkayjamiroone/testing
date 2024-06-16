// Importing required data
import profileData from '../data/profileData.js';
import experienceData from '../data/experienceData.js';
import projectData from '../data/projectData.js';

// Importing required functions
import loadProfileData from './about.js';
import loadExperienceData from './experience.js';
import loadProjectData from './projects.js';
import submitContactForm from './contact.js';

// Event Listener for DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    loadProfileData(profileData, 'profile-section');
    loadExperienceData(experienceData, 'experience-section');
    loadProjectData(projectData, 'project-section');
});

// Event Listener for Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    submitContactForm('contact-section');
});