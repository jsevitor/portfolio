const projects = document.querySelector(".proj-content");

// Função para carregar o arquivo JSON
fetch("../data/data_projects.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Falha ao carregar o arquivo JSON");
    }
    return response.json();
  })
  .then((data) => {
    projectCards(data);
  })
  .catch((error) => {
    console.error("Erro:", error);
  });

const projectCards = (data) => {
  data.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("proj-card");

    projects.appendChild(card);

    card.innerHTML = `
        <div class="proj-img">
            <img src="../assets/${project.imagem}" alt="${project.nome}" />
        </div>
        <div class="proj-description">
            <div class="proj-title">
                <h4>${project.nome}</h4>
            </div>
            <div class="proj-text">
                <p>
                    ${project.texto}
                </p>
            </div>
            <div class="proj-techs">
                <h5>Tecnologias</h5>
                <ul>
                  ${Object.values(project.techs)
                    .map((tech) => `<li>${tech}</li>`)
                    .join("<li>|</li>")}                
                </ul>
            </div>
            <div class="actions-btn">
                <button>
                    <a href="${project.links.projeto}" target="_blank">Demo</a>
                </button>
                <button class="repo">
                    <a
                    href="${project.links.repositorio}"
                    target="_blank"
                    >Repositório</a
                    >
                </button>
            </div>
        </div>
    `;
  });
};
