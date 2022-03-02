document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      "name": "Ethiopia Project",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "featured_image": "Rectangle_21.jpg",
      "technologies": ["HTML/CSS", "Ruby on Rails", "Javascript"],
      "live_link": "#",
      "source_link": "#"
    },
    {
      "name": "Project Two",
      "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      "featured_image": "Rectangle_21.jpg",
      "technologies": ["HTML/CSS", "Ruby on Rails", "Javascript"],
      "live_link": "#",
      "source_link": "#"
    },
    {
      "name": "Project Three",
      "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      "featured_image": "Rectangle_21.jpg",
      "technologies": ["HTML/CSS", "Ruby on Rails", "Javascript"],
      "live_link": "#",
      "source_link": "#"
    },
    {
      "name": "Project Four",
      "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
      "featured_image": "Rectangle_21.jpg",
      "technologies": ["HTML/CSS", "Ruby on Rails", "Javascript"],
      "live_link": "#",
      "source_link": "#"
    }
  ];

  const projectContainer = document.getElementById('projectsContainer');
  const popupContainer = document.querySelector('.project-detail');

  const renderedProjects = projects.map((element)=> {
    return `<div class="project-item project-item-one">
              <img src="./img/projects/${element.featured_image}" alt="${element.name}" />
              <div class="project-description">
                <h3>${element.name}</h3>
                <div class="project-actions">
                  <button type="button">HTML/CSS</button>
                  <button type="button">Ruby on Rails</button>
                  <button type="button">Javascript</button>
                </div>
                <button type="button" onclik="showModal(${element})" class="see-project-btn">
                  See this project &#10132;
                </button>
              </div>
            </div>
          `;
  }).join('');

  const showModal = (project) => {
    
  }

  projectContainer.innerHTML = renderedProjects;

  const popupContent = (project) => {
    return `
        <div class="project-details-container">
        <button class="modal-close-btn">&times;</button>
        <h2>${project.name}</h2>
        <ul class="modal-technologies">
          ${project.technologies.foreach(technology => {
            return `
                <li class="single-technology">
                  <a href="#">${technology}</a>
                </li>
            `;
          })}
        </ul>
        <div class="caroussel">
          <img src="img/projects/${project.featured_image}" />
        </div>
        <div class="project-details">
          <p>${project.description}</p>
          <div class="project-buttons">
            <a href="${project.live_link}"
              ><span>See live</span><img src="img/Union.svg"
            /></a>
            <a href="${project.source_link}"
              ><span>See source</span><img src="img/social/ic_github.svg"
            /></a>
          </div>
        </div>
        <div class="next-previous">
          <a href="#" class="previous arrows"
            ><img src="" /><span>Previous project</span></a
          >
          <a href="#" class="next arrows"
            ><span>Next project</span><img src=""
          /></a>
        </div>
      </div>
    `;
  };


});

