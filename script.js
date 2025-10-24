// DONNÉES DES PROJETS (Base de données simple en JavaScript)
const projectsData = [
  {
    id: 1,
    title: "Projet Voyages",
    longDesc:
      "Création d'un tableau de bord performant avec des graphiques en temps réel. Le défi était l'optimisation des requêtes API et l'intégration de web sockets. J'ai utilisé React Query pour la gestion du cache et des états.",
    tech: "HTML5, CSS3, Figma",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/voyages/index.html",
    codeLink: "https://github.com/mohamed-amine-namasse/voyages",
  },
  {
    id: 2,
    title: "Projet module-connexion",
    longDesc:
      "Développement d'un outil purement frontend pour calculer les amortissements de prêts. Mise en œuvre d'une logique de calcul complexe sans aucune dépendance externe, pour une rapidité maximale.",
    tech: "HTML5, CSS3, PHP, SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/module-connexion/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/module-connexion",
  },
  {
    id: 3,
    title: "Projet livre-or",
    longDesc:
      "Construction d'un service d'API évolutif pour une application mobile. Le travail comprenait la modélisation des données, l'authentification JWT et l'optimisation des index MongoDB pour les recherches rapides.",
    tech: "HTML5, CSS3, PHP, SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/livre-or/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/livre-or",
  },
  {
    id: 4,
    title: "Projet mediatheque",
    longDesc:
      "Construction d'un service d'API évolutif pour une application mobile. Le travail comprenait la modélisation des données, l'authentification JWT et l'optimisation des index MongoDB pour les recherches rapides.",
    tech: "HTML5, CSS3, PHP, SQL, MVC, Figma",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/mediatheque_paris_grp3-main/public",
    codeLink: "https://github.com/mohamed-amine-namasse/mediatheque_paris_grp3",
  },
  {
    id: 5,
    title: "Projet memory",
    longDesc:
      "Construction d'un service d'API évolutif pour une application mobile. Le travail comprenait la modélisation des données, l'authentification JWT et l'optimisation des index MongoDB pour les recherches rapides.",
    tech: "HTML5, CSS3, PHP, SQL, PHP POO",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/memory/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/memory",
  },
];

/**
 * 1. Logique de Filtrage des Projets
 *
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Sélection des éléments
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");
  const projectsGrid = document.getElementById("projects-grid");

  // 2. Événement de clic sur les boutons de filtre
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Désactiver le bouton 'actif' précédent et activer le nouveau
      document.querySelector(".filter-btn.active").classList.remove("active");
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");

      // 3. Logique de filtrage par technologie
      projectItems.forEach((item) => {
        const itemTechs = item.getAttribute("data-tech"); // Récupère la chaîne "html css php sql"

        if (filterValue === "all") {
          // Si 'Tous' est sélectionné, on affiche tous les projets
          item.style.display = "block";
        } else {
          // **LOGIQUE CLÉ** : Vérifie si la chaîne de technologies contient la valeur du filtre
          if (itemTechs && itemTechs.includes(filterValue)) {
            item.style.display = "block"; // Affiche le projet
          } else {
            item.style.display = "none"; // Masque le projet
          }
        }
      });
    });
  });
});

/*
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
      document.getElementById("modal-project-link").href = project.demoLink;
      document.getElementById("modal-code-link").href = project.codeLink;
      // Afficher la Modale Bootstrap
      const projectModal = new bootstrap.Modal(
        document.getElementById("projectModal")
      );
      projectModal.show();
    }
  });
});
