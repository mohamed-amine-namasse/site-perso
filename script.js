// --------------------------------------
// Données des projets (Mock Data)
// --------------------------------------
const projectsData = [
  {
    id: "1",
    title: "Projet voyages",
    longDesc:
      "Un site de planification de voyages utilisant HTML et CSS pour une présentation responsive et moderne. C'est un projet axé sur le design et l'expérience utilisateur de base.",
    tech: "HTML, CSS, Bootstrap",
    demoLink: "#",
    codeLink: "https://github.com/mohamed-amine-namasse/voyages",
  },
  {
    id: "2",
    title: "Projet module-connexion",
    longDesc:
      "Un module complet de connexion et d'inscription sécurisé, gérant les sessions utilisateur avec PHP et utilisant SQL pour stocker les données de manière sécurisée.",
    tech: "HTML, CSS, PHP, SQL",
    demoLink: "#",
    codeLink: "https://github.com/mohamed-amine-namasse/module-connexion",
  },
  {
    id: "3",
    title: "Projet livre-or",
    longDesc:
      "Un livre d'or interactif permettant aux utilisateurs de laisser des messages. Le contenu est géré dynamiquement en PHP et stocké dans une base de données SQL.",
    tech: "HTML, CSS, PHP, SQL",
    demoLink: "#",
    codeLink: "https://github.com/mohamed-amine-namasse/livre-or",
  },
  {
    id: "4",
    title: "Projet mediatheque",
    longDesc:
      "Application de gestion de médiathèque permettant de suivre les emprunts et retours de livres et autres médias. Utilise PHP pour le backend et SQL pour la gestion des données.",
    tech: "HTML, CSS, PHP, SQL",
    demoLink: "#",
    codeLink: "https://github.com/mohamed-amine-namasse/mediatheque",
  },
  {
    id: "5",
    title: "Projet memory",
    longDesc:
      "Jeu de Memory interactif. Ce projet met l'accent sur la programmation orientée objet (POO) en PHP pour gérer la logique du jeu, les cartes et les scores.",
    tech: "HTML, CSS, PHP POO, SQL",
    demoLink: "#",
    codeLink: "https://github.com/mohamed-amine-namasse/memory",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------
  // 1. Logique du Modal (détails du projet) 💡
  // --------------------------------------
  const projectModalElement = document.getElementById("projectModal");
  // Crée une instance Bootstrap de la modale une seule fois
  const projectModalInstance = new bootstrap.Modal(projectModalElement);

  const modalTitle = document.getElementById("modal-project-title");
  const modalLongDesc = document.getElementById("modal-project-long-desc");
  const modalTech = document.getElementById("modal-project-tech");
  const modalLink = document.getElementById("modal-project-link");
  const modalCodeLink = document.getElementById("modal-code-link");

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", function () {
      const projectId = this.dataset.projectId;
      const project = projectsData.find((p) => p.id === projectId);

      if (project) {
        // Remplir la modale avec les données du projet
        modalTitle.textContent = project.title;
        modalLongDesc.textContent = project.longDesc;
        modalTech.textContent = project.tech;

        // Mettre à jour les liens (Demo et Code)
        modalLink.href = project.demoLink;
        modalCodeLink.href = project.codeLink;

        // Afficher la modale
        projectModalInstance.show();
      }
    });
  });

  // --------------------------------------
  // 2. Logique du Filtre de Projets
  // --------------------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Gérer la classe active des boutons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;

      projectItems.forEach((item) => {
        const techs = item.dataset.tech.split(" ");

        if (filter === "all" || techs.includes(filter)) {
          item.style.display = "block";
          // Réappliquer l'animation au changement de filtre
          item.classList.remove("visible");
          setTimeout(() => item.classList.add("visible"), 50);
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // --------------------------------------
  // 3. Logique de l'Animation (Intersection Observer) ✨
  // --------------------------------------

  /**
   * Configure l'Intersection Observer pour détecter quand un élément entre dans le viewport.
   */
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        // Si l'élément est dans le champ de vision (visible)
        if (entry.isIntersecting) {
          // Ajoute la classe 'visible' pour déclencher l'animation CSS
          entry.target.classList.add("visible");

          // Arrête d'observer l'élément pour ne déclencher l'animation qu'une seule fois
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Déclenche l'animation dès que 10% de l'élément est visible
      threshold: 0.1,
    }
  );

  // Cible tous les éléments qui doivent avoir une animation d'introduction
  document.querySelectorAll(".fade-in").forEach((element) => {
    // Démarre l'observation pour chaque élément
    observer.observe(element);
  });
});
