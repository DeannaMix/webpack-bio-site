import projectData from '../data/projectData';

const buildProjects = () => {
  projectData.getProjects().forEach((project) => {
    if (project.available === true) {
      $('#projects').append(
        `<div id="project-${project.id}" class="projectCard">
        <div class="title"><h3>${project.title}</h3></div>
        <div class="projectImage" style="background-image: url(${project.screenshot})"></div>
        <div class="project-description"><h5>${project.description}</h5></div>
        <div id="buttonContainer">
          <div class="projectButton"><h4><a href=${project.url} class="btn btn-outline-info">view project</a></h4></div>
          <div class="projectButton"><h4><a href=${project.githubProject} class="btn btn-outline-info">visit site</a></h4></div>
        </div>
      </div>`
      );
    }
  });
};

export default { buildProjects };
