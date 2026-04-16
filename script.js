// --------------------------------------
// Données des projets (Mock Data)
// --------------------------------------
const projectsData = [
  {
    id: "1",
    title: "Projet livre-or",
    longDesc:
      "Un livre d'or interactif permettant aux utilisateurs de laisser des messages. Le contenu est géré dynamiquement en PHP et stocké dans une base de données SQL.",
    tech: "HTML, CSS, PHP, SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/livre-or/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/livre-or",
  },
  {
    id: "2",
    title: "Projet mediatheque",
    longDesc:
      "Application de gestion de médiathèque permettant de suivre les emprunts et retours de livres et autres médias. Utilise PHP pour le backend et SQL pour la gestion des données.",
    tech: "HTML, CSS, PHP, SQL, Figma, MVC",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/mediatheque_paris_grp3-main/public",
    codeLink:
      "https://github.com/mohamed-amine-namasse/mediatheque_paris_grp3-main",
  },
  {
    id: "3",
    title: "Projet memory",
    longDesc:
      "Jeu de Memory interactif. Ce projet met l'accent sur la programmation orientée objet (POO) en PHP pour gérer la logique du jeu, les cartes et les scores.",
    tech: "HTML, CSS, PHP(POO), SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/memory/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/memory",
  },
  {
    id: "4",
    title: "Projet O'clock",
    longDesc:
      " Le but de ce projet est de reproduire un minuteur, un chronomètre, un réveil, et une horloge. Ce projet est fait en javascript,CSS et HTML.",
    tech: "HTML, CSS, JS",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/oclock/index.html",
    codeLink: "https://github.com/mohamed-amine-namasse/oclock",
  },
  {
    id: "5",
    title: "Site La Plateforme_",
    longDesc:
      " Il s'agit d'un site internet permettant d’anticiper le nombre d’étudiants qui seront présents au sein des locaux de l'école La plateforme_. Ce projet est fait en Boostrap,javascript, CSS et HTML.",
    tech: "HTML, CSS, JS, Boostrap",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/bigjob/index.html",
    codeLink:
      "https://github.com/mohamed-amine-namasse/runtrackJs/tree/main/bigjob",
  },
  {
    id: "6",
    title: "Autocompletion",
    longDesc:
      " L’outil de barre de recherche est un outil très utilisé sur les sites. Elle englobe un élément très important : l’autocomplétion. L’autocomplétion va permettre de faire une recherche plus ou moins précise selon son paramétrage. Il s’agit du mécanisme qui permet de proposer à l’utilisateur des résultats pour sa recherche, en fonction de ce qu’il tape dans l’input. Les résultats s’adaptent à chaque fois que l’utilisateur entre un caractère supplémentaire.",
    tech: "HTML, CSS, JS,Boostrap, PHP, SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/autocompletion/index.php",
    codeLink: "https://github.com/mohamed-amine-namasse/autocompletion",
  },
  {
    id: "7",
    title: "MemoryReact",
    longDesc: "Jeu de memoire fait en ReactJS",
    tech: "HTML, CSS, JS, ReactJS",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/memoryReact/index.html",
    codeLink: "https://github.com/mohamed-amine-namasse/memoryReact",
  },
  {
    id: "8",
    title: "WordPress",
    longDesc:
      "Il s’agit d’un blog WordPress qui parle des dernières actualités sportives.Il regroupe essentiellement les dernières infos dans le football et dans le tennis. Les articles sont datés et triés.",
    tech: "WordPress",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/wordpress-6.8.3/wordpress/index.php",
  },
  {
    id: "9",
    title: "FootMarket",
    longDesc:
      " Il s’agit d’une boutique en ligne qui vend des crampons pour femmes.Boutique codée avec ReactJS/Boostrap pour le front-end et WordPress/WOOCommerce pour le back-end.",
    tech: "HTML, CSS, JS, Figma, ReactJS",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/FootMarket",
    codeLink: "https://github.com/mohamed-amine-namasse/ecom-grp4",
  },
  {
    id: "10",
    title: "MarsAI",
    longDesc:
      "Le festival marsAI est un concours international de courts-métrages de 1 minute dont la particularité est d'être intégralement générés par Intelligence Artificielle.",
    tech: "HTML, CSS, JS, Figma, Vite, S3, SQL, NodeJS, Wordpress, TailwindCSS, i18n, SEO(Google Analytics, Google Search Console), Brevo",
    demoLink:
      "https://samuel-corinthe.students-laplateforme.io/MarsAiFestival/accueil",
    codeLink: "https://github.com/mohamed-amine-namasse/MarsAi",
  },
  {
    id: "11",
    title: "Cinetech",
    longDesc:
      " Le but de ce projet est de réaliser une bibliothèque de films et de séries, grâce à une API publique disponible en ligne.",
    tech: "HTML, CSS, JS, Typescript",
    demoLink: "https://mohamed-amine-namasse.students-laplateforme.io/cinetech",
    codeLink: "https://github.com/mohamed-amine-namasse/cinetech",
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
    },
  );

  // Cible tous les éléments qui doivent avoir une animation d'introduction
  document.querySelectorAll(".fade-in").forEach((element) => {
    // Démarre l'observation pour chaque élément
    observer.observe(element);
  });
});

// --------------------------------------
//  Logique du slider ✨
// --------------------------------------
const swiper = new Swiper(".skillSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  pagination: { el: ".swiper-pagination", clickable: true },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
