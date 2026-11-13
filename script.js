// --------------------------------------
// Données des projets (Ton tableau exact)
// --------------------------------------
const projectsData = [
  {
    id: "1",
    title: "Projet livre-or",
    longDesc:
      "Un livre d'or interactif permettant aux utilisateurs de laisser des messages. Le contenu est géré dynamiquement en PHP et stocké dans une base de données SQL.",
    tech: "HTML, CSS, PHP, SQL",
    demoLink: "https://mohamed-amine-namasse.students-laplateforme.io/livre-or",
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
    demoLink: "https://mohamed-amine-namasse.students-laplateforme.io/memory",
    codeLink: "https://github.com/mohamed-amine-namasse/memory",
  },
  {
    id: "4",
    title: "Projet O'clock",
    longDesc:
      "Le but de ce projet est de reproduire un minuteur, un chronomètre, un réveil, et une horloge. Ce projet est fait en javascript,CSS et HTML.",
    tech: "HTML, CSS, JS",
    demoLink: "https://mohamed-amine-namasse.students-laplateforme.io/oclock",
    codeLink: "https://github.com/mohamed-amine-namasse/oclock",
  },
  {
    id: "5",
    title: "Site La Plateforme_",
    longDesc:
      "Il s'agit d'un site internet permettant d’anticiper le nombre d’étudiants qui seront présents au sein des locaux de l'école La plateforme_. Ce projet est fait en Bootstrap,javascript, CSS et HTML.",
    tech: "HTML, CSS, JS, Bootstrap",
    demoLink: "https://mohamed-amine-namasse.students-laplateforme.io/bigjob",
    codeLink:
      "https://github.com/mohamed-amine-namasse/runtrackJs/tree/main/bigjob",
  },
  {
    id: "6",
    title: "Autocompletion",
    longDesc:
      "L’outil de barre de recherche est un outil très utilisé sur les sites. Elle englobe un élément très important : l’autocomplétion. L’autocomplétion va permettre de faire une recherche plus ou moins précise selon son paramétrage. Il s’agit du mécanisme qui permet de proposer à l’utilisateur des résultats pour sa recherche, en fonction de ce qu’il tape dans l’input. Les résultats s’adaptent à chaque fois que l’utilisateur entre un caractère supplémentaire.",
    tech: "HTML, CSS, JS,Bootstrap, PHP, SQL",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/autocompletion",
    codeLink: "https://github.com/mohamed-amine-namasse/autocompletion",
  },
  {
    id: "7",
    title: "MemoryReact",
    longDesc: "Jeu de memoire fait en ReactJS",
    tech: "HTML, CSS, JS, ReactJS",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/memoryReact",
    codeLink: "https://github.com/mohamed-amine-namasse/memoryReact",
  },
  {
    id: "8",
    title: "WordPress",
    longDesc:
      "Il s’agit d’un blog WordPress qui parle des dernières actualités sportives.Il regroupe essentiellement les dernières infos dans le football et dans le tennis. Les articles sont datés et triés.",
    tech: "WordPress",
    demoLink:
      "https://mohamed-amine-namasse.students-laplateforme.io/wordpress-6.8.3/wordpress",
  },
  {
    id: "9",
    title: "FootMarket",
    longDesc:
      "Il s’agit d’une boutique en ligne qui vend des crampons pour femmes.Boutique codée avec ReactJS/Bootstrap pour le front-end et WordPress/WOOCommerce pour le back-end.",
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
    tech: "HTML, CSS, JS, Figma,React JS, Vite, S3, SQL, NodeJS, Wordpress, TailwindCSS, i18n, SEO(Google Analytics, Google Search Console, Lighthouse), Brevo",
    demoLink:
      "https://samuel-corinthe.students-laplateforme.io/MarsAiFestival/accueil",
    codeLink: "https://github.com/mohamed-amine-namasse/MarsAi",
  },
  {
    id: "11",
    title: "Cinetech",
    longDesc:
      "Le but de ce projet est de réaliser une bibliothèque de films et de séries, grâce à une API publique disponible en ligne.",
    tech: "HTML, CSS, JS, Typescript",
    demoLink: "https://mohamed-amine-namasse.students-laplateforme.io/cinetech",
    codeLink: "https://github.com/mohamed-amine-namasse/cinetech",
  },
  {
    id: "12",
    title: "Intra scolaire",
    longDesc:
      "Le but de ce projet est de réaliser un intranet scolaire pour les étudiants et les professeurs en utilisant Symfony et Docker. L'application permet de gérer les cours, les notes, les absences et les communications entre étudiants et enseignants.",
    tech: "Symfony, PHP, Docker, Bootstrap",
    demoLink: "https://intrax.alwaysdata.net",
    codeLink: "https://github.com/mohamed-amine-namasse/Intra-Scolaire-",
  },
];

// --------------------------------------
// Déblocage garanti de l'écran BIOS
// --------------------------------------
let bootHidden = false;
function dismissBootScreen() {
  if (bootHidden) return;
  bootHidden = true;
  const boot = document.getElementById("bios-boot");
  if (!boot) return;
  if (typeof window.gsap !== "undefined") {
    window.gsap.to(boot, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        boot.style.display = "none";
      },
    });
  } else {
    boot.style.opacity = "0";
    setTimeout(() => {
      boot.style.display = "none";
    }, 420);
  }
}
setTimeout(dismissBootScreen, 1100);

// --------------------------------------
// Utilitaires pour exploiter projectsData
// --------------------------------------
function parseTechList(techString) {
  return techString
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function toRetroFilename(title, id) {
  const clean = title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "_")
    .replace(/^_|_$/g, "")
    .toUpperCase();
  return `${id.padStart(2, "0")}_${clean}.EXE`;
}

function matchesProjectFilter(project, filter) {
  if (filter === "all") return true;
  const t = project.tech.toLowerCase();
  if (filter === "react")
    return t.includes("react") || t.includes("typescript");
  if (filter === "php") return t.includes("php") || t.includes("symfony");
  if (filter === "js")
    return t.includes("js") || t.includes("javascript") || t.includes("nodejs");
  if (filter === "wordpress") return t.includes("wordpress");
  return true;
}

document.addEventListener("DOMContentLoaded", () => {
  // --------------------------------------
  // 1. Horloge Système & Thèmes CRT
  // --------------------------------------
  const clockEl = document.getElementById("sys-clock");
  function updateClock() {
    if (!clockEl) return;
    const now = new Date();
    clockEl.textContent = now.toTimeString().split(" ")[0];
  }
  updateClock();
  setInterval(updateClock, 1000);

  const themeColorsHex = {
    green: 0x22c55e,
    amber: 0xf59e0b,
    cyber: 0x00f0ff,
  };

  const themeCssColors = {
    green: { head: "#bbf7d0", tail: "#22c55e" },
    amber: { head: "#fef3c7", tail: "#f59e0b" },
    cyber: { head: "#cffafe", tail: "#00f0ff" },
  };

  let matrixStreams = [];
  let matrixMaterials = [];
  let gridHelper = null;
  let currentCrtTheme = "green";

  function createMatrixColumnTexture(themeName) {
    const palette = themeCssColors[themeName] || themeCssColors.green;
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, 64, 512);
    ctx.font = 'bold 26px "Fira Code", monospace';
    ctx.textAlign = "center";

    const glyphs =
      "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEF<>/";
    const rows = 16;
    const rowHeight = 512 / rows;

    for (let i = 0; i < rows; i++) {
      const char = glyphs[Math.floor(Math.random() * glyphs.length)];
      const y = i * rowHeight + 24;
      const progress = i / (rows - 1);

      if (i === rows - 1) {
        ctx.fillStyle = palette.head;
        ctx.shadowColor = palette.tail;
        ctx.shadowBlur = 12;
      } else {
        ctx.fillStyle = palette.tail;
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = Math.pow(progress, 1.45);
      ctx.fillText(char, 32, y);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.needsUpdate = true;
    return tex;
  }

  function setCrtTheme(themeName) {
    if (!themeColorsHex[themeName]) return;
    currentCrtTheme = themeName;
    document.body.setAttribute("data-theme", themeName);
    document.querySelectorAll(".crt-theme-btn").forEach((btn) => {
      const active = btn.dataset.crt === themeName;
      btn.classList.toggle("border-white", active);
      btn.classList.toggle("scale-110", active);
      btn.classList.toggle("border-transparent", !active);
      btn.classList.toggle("opacity-70", !active);
    });
    matrixMaterials.forEach((mat) => {
      if (mat.map) mat.map.dispose();
      mat.map = createMatrixColumnTexture(themeName);
      mat.needsUpdate = true;
    });
  }

  document.querySelectorAll(".crt-theme-btn").forEach((btn) => {
    btn.addEventListener("click", () => setCrtTheme(btn.dataset.crt));
  });

  // --------------------------------------
  // 2. Rendu des Projets & Modale Détails
  // --------------------------------------
  const projectsGrid = document.getElementById("projects-grid");
  const countHero = document.getElementById("projects-count-hero");
  const countTitle = document.getElementById("projects-count-title");
  let currentFilter = "all";

  if (countHero)
    countHero.textContent = String(projectsData.length).padStart(2, "0");
  if (countTitle) countTitle.textContent = String(projectsData.length);

  function renderProjects() {
    if (!projectsGrid) return;
    const filtered = projectsData.filter((p) =>
      matchesProjectFilter(p, currentFilter),
    );

    projectsGrid.innerHTML = filtered
      .map((project) => {
        const tags = parseTechList(project.tech);
        const filename = toRetroFilename(project.title, project.id);
        const primaryBadge = tags.slice(0, 2).join(" // ");

        return `
          <article class="retro-window flex flex-col justify-between group">
            <div>
              <div class="retro-titlebar px-3.5 py-2 flex items-center justify-between text-[11px] font-bold">
                <span class="text-phosphor truncate"><i class="fa-regular fa-file-code mr-1.5"></i>${filename}</span>
                <span class="text-slate-400">#${project.id.padStart(2, "0")}</span>
              </div>
              <div class="p-5">
                <span class="inline-block px-2 py-0.5 bg-phosphor text-black font-bold text-[10px] uppercase mb-3">
                  ${primaryBadge}
                </span>
                <h3 class="font-pixel text-sm sm:text-base text-white leading-snug group-hover:text-phosphor transition-colors">
                  ${project.title}
                </h3>
                <p class="text-xs text-slate-300 mt-3 leading-relaxed line-clamp-4">
                  ${project.longDesc}
                </p>
              </div>
            </div>

            <div class="p-5 pt-0 space-y-4">
              <div class="flex flex-wrap gap-1.5">
                ${tags
                  .slice(0, 5)
                  .map(
                    (t) =>
                      `<span class="px-2 py-0.5 bg-black/70 border border-white/15 text-[11px] text-slate-300">${t}</span>`,
                  )
                  .join("")}
                ${
                  tags.length > 5
                    ? `<span class="px-2 py-0.5 bg-black/70 border border-phosphor/50 text-[11px] text-phosphor">+${tags.length - 5}</span>`
                    : ""
                }
              </div>

              <div class="flex flex-wrap items-center gap-2 pt-1">
                <button type="button" data-project-id="${project.id}" class="discover-btn retro-btn flex-1 py-2 px-3 bg-phosphor text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <i class="fa-solid fa-terminal"></i>
                  <span>Détails</span>
                </button>
                <a href="${project.demoLink}" target="_blank" rel="noopener noreferrer" title="Voir la démo en ligne" class="retro-btn py-2 px-3 bg-black text-phosphor hover:bg-white/10 text-xs font-bold uppercase flex items-center justify-center gap-1.5">
                  <i class="fa-solid fa-up-right-from-square"></i>
                  <span>Démo</span>
                </a>
                ${
                  project.codeLink
                    ? `<a href="${project.codeLink}" target="_blank" rel="noopener noreferrer" title="Code source GitHub" class="retro-btn py-2 px-3 bg-black text-slate-200 hover:text-phosphor text-xs font-bold uppercase flex items-center justify-center">
                        <i class="fa-brands fa-github"></i>
                      </a>`
                    : ""
                }
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  // Filtres de projets
  document.querySelectorAll(".pfilter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".pfilter-btn").forEach((b) => {
        b.classList.remove("active", "bg-phosphor", "text-black");
        b.classList.add("bg-black/80", "text-slate-200");
      });
      this.classList.add("active", "bg-phosphor", "text-black");
      this.classList.remove("bg-black/80", "text-slate-200");
      currentFilter = this.dataset.pfilter;
      renderProjects();
    });
  });

  // Modale Rétro (remplace bootstrap.Modal avec tes mêmes IDs)
  const projectModalElement = document.getElementById("projectModal");
  const modalFilename = document.getElementById("modal-filename");
  const modalBadge = document.getElementById("modal-badge");
  const modalTitle = document.getElementById("modal-project-title");
  const modalLongDesc = document.getElementById("modal-project-long-desc");
  const modalTech = document.getElementById("modal-project-tech");
  const modalLink = document.getElementById("modal-project-link");
  const modalCodeLink = document.getElementById("modal-code-link");

  function openProjectModal(projectId) {
    const project = projectsData.find((p) => p.id === projectId);
    if (!project || !projectModalElement) return;

    const tags = parseTechList(project.tech);
    modalFilename.textContent = toRetroFilename(project.title, project.id);
    modalBadge.textContent = `PROJET #${project.id.padStart(2, "0")}`;
    modalTitle.textContent = project.title;
    modalLongDesc.textContent = project.longDesc;

    modalTech.innerHTML = tags
      .map(
        (t) =>
          `<span class="px-2.5 py-1 bg-black border border-phosphor text-xs text-phosphor">${t}</span>`,
      )
      .join("");

    modalLink.href = project.demoLink;

    if (project.codeLink) {
      modalCodeLink.href = project.codeLink;
      modalCodeLink.classList.remove("hidden");
      modalCodeLink.classList.add("flex");
    } else {
      modalCodeLink.classList.add("hidden");
      modalCodeLink.classList.remove("flex");
    }

    projectModalElement.classList.remove("hidden");
    projectModalElement.classList.add("flex");
  }

  function closeProjectModal() {
    if (!projectModalElement) return;
    projectModalElement.classList.add("hidden");
    projectModalElement.classList.remove("flex");
  }

  projectsGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".discover-btn");
    if (button) {
      event.preventDefault();
      openProjectModal(button.dataset.projectId);
    }
  });

  document
    .getElementById("close-modal-btn")
    .addEventListener("click", closeProjectModal);
  projectModalElement.addEventListener("click", (event) => {
    if (event.target === projectModalElement) closeProjectModal();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeProjectModal();
  });

  // --------------------------------------
  // 3. Terminal Interactif Bash
  // --------------------------------------
  const termOutput = document.getElementById("terminal-output");
  const termForm = document.getElementById("terminal-form");
  const termInput = document.getElementById("terminal-input");
  let spinImpulse = 0;

  function printTermLine(html, className = "text-slate-200") {
    const p = document.createElement("p");
    p.className = className;
    p.innerHTML = html;
    termOutput.appendChild(p);
    termOutput.scrollTop = termOutput.scrollHeight;
  }

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;
    printTermLine(
      `<span class="text-phosphor font-bold">visitor@namasse:~$</span> ${cmd.replace(/</g, "&lt;")}`,
    );

    const lower = cmd.toLowerCase();
    if (lower === "help") {
      printTermLine(
        'Commandes disponibles : <span class="text-phosphor">about</span>, <span class="text-phosphor">projects</span>, <span class="text-phosphor">skills</span>, <span class="text-phosphor">contact</span>, <span class="text-phosphor">theme green|amber|cyber</span>, <span class="text-phosphor">matrix</span>, <span class="text-phosphor">clear</span>',
      );
    } else if (lower === "about") {
      printTermLine(
        "Mohamed-Amine NAMASSE — Développeur Full-Stack passionné par le développement web et web mobile. Mission : transformer des idées complexes en applications élégantes et efficaces.",
      );
    } else if (lower === "skills") {
      printTermLine(
        "FRONTEND: HTML5, CSS3, JS, TS, ReactJS, Redux, Sass, Tailwind, Bootstrap | BACKEND: PHP, Symfony, NodeJS, SQL, MongoDB | LANGAGES: C, C++, Python | DEVOPS & TESTS: Git, Docker, S3, PHPUnit, Jest.",
      );
    } else if (lower === "projects") {
      const titles = projectsData
        .map((p) => `[${p.id}] ${p.title}`)
        .join(" • ");
      printTermLine(
        `${projectsData.length} projets chargés depuis script.js : ${titles}`,
      );
    } else if (lower === "contact") {
      printTermLine(
        'GitHub : <a href="https://github.com/mohamed-amine-namasse" target="_blank" class="text-phosphor underline">github.com/mohamed-amine-namasse</a> | LinkedIn : <a href="https://linkedin.com/in/mohamed-amine-namasse" target="_blank" class="text-phosphor underline">linkedin.com/in/mohamed-amine-namasse</a>',
      );
    } else if (lower.startsWith("theme ")) {
      const chosen = lower.split(" ")[1];
      if (themeColorsHex[chosen]) {
        setCrtTheme(chosen);
        printTermLine(
          `Phosphore CRT basculé sur le mode : <span class="text-phosphor uppercase">${chosen}</span>.`,
        );
      } else {
        printTermLine(
          "Thème inconnu. Choix valides : green, amber, cyber.",
          "text-rose-400",
        );
      }
    } else if (lower === "matrix") {
      spinImpulse = 0.25;
      setCrtTheme("green");
      printTermLine(
        "Impulsion matricielle injectée dans le moteur 3D !",
        "text-phosphor",
      );
    } else if (lower === "clear") {
      termOutput.innerHTML = "";
    } else {
      printTermLine(
        `Commande introuvable : '${cmd}'. Tape <span class="text-phosphor">help</span> pour voir la liste.`,
        "text-rose-400",
      );
    }
  }

  termForm.addEventListener("submit", (e) => {
    e.preventDefault();
    executeCommand(termInput.value);
    termInput.value = "";
  });

  document.querySelectorAll(".quick-cmd").forEach((btn) => {
    btn.addEventListener("click", () => executeCommand(btn.dataset.cmd));
  });

  // --------------------------------------
  // 4. Scène 3D Three.js (Pluie Matrix)
  // --------------------------------------
  function initRetroThree() {
    const container = document.getElementById("retro-webgl");
    if (!container || typeof THREE === "undefined") return;

    try {
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x050807, 0.045);

      const camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        100,
      );
      camera.position.set(0, 0.8, 9);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      container.appendChild(renderer.domElement);

      gridHelper = new THREE.GridHelper(48, 48, 0x22c55e, 0x0e1f16);
      gridHelper.position.y = -4.5;
      scene.add(gridHelper);

      for (let t = 0; t < 6; t++) {
        const mat = new THREE.MeshBasicMaterial({
          map: createMatrixColumnTexture(currentCrtTheme),
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          side: THREE.DoubleSide,
        });
        matrixMaterials.push(mat);
      }

      const planeGeo = new THREE.PlaneGeometry(0.55, 5.2);
      const streamCount = 130;
      for (let i = 0; i < streamCount; i++) {
        const mat = matrixMaterials[i % matrixMaterials.length];
        const mesh = new THREE.Mesh(planeGeo, mat);

        mesh.position.x = (Math.random() - 0.5) * 24;
        mesh.position.y = (Math.random() - 0.5) * 18;
        mesh.position.z = (Math.random() - 0.5) * 18 - 2;

        const scale = 0.7 + Math.random() * 0.75;
        mesh.scale.set(scale, scale, 1);

        mesh.userData = {
          speed: 0.035 + Math.random() * 0.075,
        };

        matrixStreams.push(mesh);
        scene.add(mesh);
      }

      let mouseX = 0;
      let mouseY = 0;
      window.addEventListener("pointermove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      });

      document.getElementById("boost-3d-btn").addEventListener("click", () => {
        spinImpulse = 0.25;
      });
      document
        .getElementById("wireframe-toggle-btn")
        .addEventListener("click", () => {
          if (gridHelper) gridHelper.visible = !gridHelper.visible;
        });

      function onResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }
      onResize();
      window.addEventListener("resize", onResize);

      function animate() {
        requestAnimationFrame(animate);

        matrixStreams.forEach((col) => {
          col.position.y -= col.userData.speed + spinImpulse;
          if (col.position.y < -10) {
            col.position.y = 10 + Math.random() * 4;
            col.position.x = (Math.random() - 0.5) * 24;
          }
        });

        if (spinImpulse > 0) {
          spinImpulse *= 0.95;
          if (spinImpulse < 0.0005) spinImpulse = 0;
        }

        if (gridHelper && gridHelper.visible) {
          gridHelper.position.z = (gridHelper.position.z + 0.03) % 1;
        }

        camera.position.x += (mouseX * 1.4 - camera.position.x) * 0.04;
        camera.position.y += (0.8 - mouseY * 0.9 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, -2);

        renderer.render(scene, camera);
      }
      animate();
    } catch (err) {
      console.warn("WebGL fallback :", err);
    }
  }

  // --------------------------------------
  // 6. Animations GSAP & ScrollTrigger
  // --------------------------------------
  function initGsap() {
    if (typeof gsap === "undefined") return;
    try {
      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
      }

      gsap.from(".hero-reveal", {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.2,
      });

      if (typeof ScrollTrigger !== "undefined") {
        gsap.utils.toArray(".scroll-reveal").forEach((section) => {
          gsap.from(section, {
            y: 30,
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          });
        });
      }
    } catch (err) {
      console.warn("GSAP warning :", err);
    }
  }

  renderProjects();
  initRetroThree();
  initGsap();
  setTimeout(dismissBootScreen, 400);
});

document.getElementById("year").textContent = new Date().getFullYear();
