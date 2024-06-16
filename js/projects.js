var projectData = [
    {
        "title": "Project 1",
        "description": "Description of Project 1",
        "image": "images/project1.jpg"
    },
    {
        "title": "Project 2",
        "description": "Description of Project 2",
        "image": "images/project2.jpg"
    },
    {
        "title": "Project 3",
        "description": "Description of Project 3",
        "image": "images/project3.jpg"
    }
];

function loadProjectData() {
    var projectSection = document.getElementById('project-section');
    projectData.forEach(function(project) {
        var projectDiv = document.createElement('div');
        var projectTitle = document.createElement('h2');
        var projectDescription = document.createElement('p');
        var projectImage = document.createElement('img');

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description;
        projectImage.src = project.image;

        projectDiv.appendChild(projectTitle);
        projectDiv.appendChild(projectDescription);
        projectDiv.appendChild(projectImage);

        projectSection.appendChild(projectDiv);
    });
}

document.addEventListener('loadProjects', loadProjectData);