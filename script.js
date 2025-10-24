// DONNÉES DES PROJETS (Base de données simple en JavaScript)
const projectsData = [
  {
    id: 1,
    title: "Tableau de Bord SaaS",
    longDesc:
      "Création d'un tableau de bord performant avec des graphiques en temps réel. Le défi était l'optimisation des requêtes API et l'intégration de web sockets. J'ai utilisé React Query pour la gestion du cache et des états.",
    tech: "React, Redux, Chart.js, Bootstrap 5",
    role: "Développeur Front-end Lead",
    demoLink: "http://demo.saas-dashboard.com",
  },
  {
    id: 2,
    title: "Calculatrice de Prêt",
    longDesc:
      "Développement d'un outil purement frontend pour calculer les amortissements de prêts. Mise en œuvre d'une logique de calcul complexe sans aucune dépendance externe, pour une rapidité maximale.",
    tech: "Vanilla JS (ES6+), HTML5, CSS3",
    role: "Développeur Full Stack",
    demoLink: "http://demo.calculator.com",
  },
  {
    id: 3,
    title: "API de Recettes",
    longDesc:
      "Construction d'un service d'API évolutif pour une application mobile. Le travail comprenait la modélisation des données, l'authentification JWT et l'optimisation des index MongoDB pour les recherches rapides.",
    tech: "Node.js, Express, MongoDB, Mongoose",
    role: "Développeur Back-end",
    demoLink: "http://api.recettes-projet.com",
  },
];

/**
 * 1. Logique de Filtrage des Projets
 * (Amélioration du script précédent avec les classes Bootstrap)
 */
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", function () {
    // Gestion des classes 'active' pour le style Bootstrap
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");

    const filter = this.getAttribute("data-filter");
    const projectItems = document.querySelectorAll(".project-item");

    projectItems.forEach((item) => {
      const tech = item.getAttribute("data-tech");

      if (filter === "all" || tech === filter) {
        item.style.display = "block"; // Afficher avec Bootstrap grid
      } else {
        item.style.display = "none"; // Cacher
      }
    });
  });
});

/**
 * 2. Logique d'Affichage de la Modale (Interaction JS + Composant Bootstrap)
 * C'est la partie "cool" où l'utilisateur clique sur une carte de projet.
 */
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", function () {
    const projectId = parseInt(this.getAttribute("data-project-id"));
    const project = projectsData.find((p) => p.id === projectId);

    if (project) {
      // Mettre à jour le contenu de la Modale
      document.getElementById("modal-project-title").textContent =
        project.title;
      document.getElementById("modal-project-long-desc").textContent =
        project.longDesc;
      document.getElementById("modal-project-tech").textContent = project.tech;
      document.getElementById("modal-project-role").textContent = project.role;
      document.getElementById("modal-project-link").href = project.demoLink;

      // Afficher la Modale Bootstrap
      const projectModal = new bootstrap.Modal(
        document.getElementById("projectModal")
      );
      projectModal.show();
    }
  });
});
