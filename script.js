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
    tech: "HTML5, CSS3, SQL, PHP POO",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/memory/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/memory",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------
  // 1. Logique du Modal (détails du projet) - Non liée à l'animation
  // --------------------------------------
  const projectModal = document.getElementById("projectModal");
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
        modalTitle.textContent = project.title;
        modalLongDesc.textContent = project.longDesc;
        modalTech.textContent = project.tech;
        modalLink.href = project.demoLink;
        modalCodeLink.href = project.codeLink;

        const modal = new bootstrap.Modal(projectModal);
        modal.show();
      }
    });
  });

  // --------------------------------------
  // 2. Logique du Filtre de Projets - Non liée à l'animation
  // --------------------------------------
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      const filter = this.dataset.filter;

      projectItems.forEach((item) => {
        const techs = item.dataset.tech.split(" ");

        if (filter === "all" || techs.includes(filter)) {
          item.style.display = "block";
          // Lorsque le filtre est appliqué, on réanime l'élément
          item.classList.remove("visible");
          setTimeout(() => item.classList.add("visible"), 50);
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // --------------------------------------
  // 3. Logique de l'Animation (Intersection Observer)
  // C'est la partie que vous recherchez !
  // --------------------------------------

  /**
   * Crée un nouvel Intersection Observer pour gérer l'animation "fade-in".
   * L'observateur exécute un callback chaque fois qu'un élément observé
   * croise la zone de seuil (viewport).
   */
  const observer = new IntersectionObserver(
    (entries, observer) => {
      // 'entries' est un tableau de tous les éléments observés qui ont changé d'état
      entries.forEach((entry) => {
        // Si l'élément est dans le viewport (visible)
        if (entry.isIntersecting) {
          // Ajoute la classe 'visible' qui est définie dans le CSS
          // et qui contient les styles d'opacité: 1 et transform: translateY(0).
          entry.target.classList.add("visible");

          // On arrête d'observer l'élément pour que l'animation ne se
          // redéclenche pas à chaque défilement.
          observer.unobserve(entry.target);
        }
      });
    },
    {
      // Configuration: le 'threshold' est la quantité de l'élément (en pourcentage)
      // qui doit être visible pour que le callback se déclenche.
      // Ici, 10% de l'élément doit être visible (0.1)
      threshold: 0.1,
    }
  );

  // Cible tous les éléments HTML ayant la classe 'fade-in'
  // (que nous avons ajoutée aux sections dans le fichier index.html)
  document.querySelectorAll(".fade-in").forEach((element) => {
    // Démarre l'observation pour chaque élément trouvé
    observer.observe(element);
  });
});
