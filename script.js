// --------------------------------------
// Données des projets (Mock Data)
// --------------------------------------
const projectsData = [
  {
    id: "1",
    title: "Projet voyages",
    longDesc:
      "Une application de destination de voyages utilisant HTML et CSS.",
    tech: "HTML, CSS, Figma",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/voyages/index.html",
    codeLink: "https://github.com/mohamed-amine-namasse/voyages",
  },
  {
    id: "2",
    title: "Projet module-connexion",
    longDesc:
      "Un module complet de connexion et d'inscription sécurisé, gérant les sessions utilisateur avec PHP et utilisant SQL pour stocker les données de manière sécurisée.",
    tech: "HTML, CSS, PHP, SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/module-connexion/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/module-connexion",
  },
  {
    id: "3",
    title: "Projet livre-or",
    longDesc:
      "Un livre d'or interactif permettant aux utilisateurs de laisser des messages. Le contenu est géré dynamiquement en PHP et stocké dans une base de données SQL.",
    tech: "HTML, CSS, PHP, SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/livre-or/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/livre-or",
  },
  {
    id: "4",
    title: "Projet mediatheque",
    longDesc:
      "Application de gestion de médiathèque permettant de suivre les emprunts et retours de livres et autres médias. Utilise PHP pour le backend et SQL pour la gestion des données.",
    tech: "HTML, CSS, PHP, SQL, Figma, MVC",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/mediatheque_paris_grp3-main/public",
    codeLink: "https://github.com/mohamed-amine-namasse/mediatheque",
  },
  {
    id: "5",
    title: "Projet memory",
    longDesc:
      "Jeu de Memory interactif. Ce projet met l'accent sur la programmation orientée objet (POO) en PHP pour gérer la logique du jeu, les cartes et les scores.",
    tech: "HTML, CSS, PHP(POO), SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/memory/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/memory",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------
  //  Logique du Modal (détails du projet) 💡
  // --------------------------------------
  const projectModalElement = document.getElementById("projectModal");
  // Crée une instance Bootstrap de la modale une seule fois
  const projectModalInstance = new bootstrap.Modal(projectModalElement);

  const modalTitle = document.getElementById("modal-project-title");
  const modalLongDesc = document.getElementById("modal-project-long-desc");
  const modalTech = document.getElementById("modal-project-tech");
  const modalLink = document.getElementById("modal-project-link");
  const modalCodeLink = document.getElementById("modal-code-link");
  // Cibler tous les boutons avec la nouvelle classe 'discover-btn'

  document.querySelectorAll(".discover-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien (le "#") // Récupérer l'ID du projet directement depuis le bouton

      const projectId = this.dataset.projectId;
      const project = projectsData.find((p) => p.id === projectId);

      if (project) {
        // Remplir la modale avec les données du projet
        modalTitle.textContent = project.title;
        modalLongDesc.textContent = project.longDesc;
        modalTech.textContent = project.tech; // Mettre à jour les liens (Demo et Code)

        modalLink.href = project.demoLink;
        modalCodeLink.href = project.codeLink; // Afficher la modale

        projectModalInstance.show();
      }
    });
  });
  // --------------------------------------
  //  Logique du Filtre de Projets
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
  //  Logique de l'Animation (Intersection Observer) ✨
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
