const translations = {
  en: {
    "nav.inicio": "Home",
    "nav.experiencia": "Experience",
    "nav.projetos": "Projects",
    "nav.conteudos": "Content",
    "nav.tecnologias": "Technologies",
    "nav.sobre": "About",
    "nav.contato": "Contact",

    "hero.eyebrow": "Hi, I'm",
    "hero.role": `Data Scientist <span class="dot">•</span> AI Engineer <span class="dot">•</span>
          Specialist in Machine Learning, Computer Vision and Generative AI`,
    "hero.text": "Building intelligent solutions that turn data into real results through Artificial Intelligence, Automation and Advanced Analytics.",
    "hero.btn1": "View Experience",
    "hero.btn2": "Explore Projects",

    "exp.eyebrow": "Journey",
    "exp.title": "Professional Experience",

    "exp.vale.title": "Data Scientist",
    "exp.vale.desc": "Responsible for designing, developing and deploying Artificial Intelligence solutions for large-scale industrial operations, from model conception to integration with real-time monitoring systems.",
    "exp.vale.areasTitle": "Main areas",
    "exp.vale.areasList": `
        <li>Machine Learning</li>
        <li>Generative AI</li>
        <li>Intelligent Agents</li>
        <li>Computer Vision</li>
        <li>Advanced Analytics</li>
        <li>Azure AI</li>
    `,
    "exp.vale.projectsTitle": "Related projects",
    "exp.vale.projectsList": `
        <li>Predictive maintenance</li>
        <li>Asset monitoring</li>
        <li>Railways</li>
        <li>Crushers</li>
        <li>Pumps</li>
        <li>Conveyor belts</li>
        <li>Off-road trucks</li>
    `,
    "exp.vale.resultsTitle": "Results",
    "exp.vale.resultsList": `
        <li>Reduced operational losses</li>
        <li>Early failure detection</li>
        <li>Increased reliability</li>
        <li>Process automation</li>
        <li>Decision-making support</li>
    `,
    "exp.vale.toolsTitle": "Everyday tools & technologies",

    "exp.pesquisa.title": "Industrial Automation Researcher",
    "exp.pesquisa.desc": "Research project focused on Augmented Reality, Industry 5.0, Human-Machine Interfaces and Digital Transformation.",
    "exp.pesquisa.tagsList": `
        <li>Augmented Reality</li>
        <li>Industry 5.0</li>
        <li>Human-Machine Interfaces</li>
        <li>Digital Transformation</li>
    `,
    "exp.pesquisa.resultsTitle": "Results",
    "exp.pesquisa.resultsList": `
        <li>Scientific publications</li>
        <li>Conference presentations</li>
        <li>Full augmented reality application development</li>
    `,

    "exp.analyst.title": "Data & IT Analyst",
    "exp.analyst.desc": "Worked with:",
    "exp.analyst.tagsList": `
        <li>Business Intelligence</li>
        <li>Systems Development</li>
        <li>Power BI</li>
        <li>SQL</li>
        <li>Project Management</li>
        <li>Process Automation</li>
    `,

    "projects.eyebrow": "Portfolio",
    "projects.title": "Featured Projects",

    "project.ar.category": "Augmented Reality",
    "project.ar.title": "AR Tutorial — Master's Degree Project",
    "project.ar.summary": "Augmented Reality application developed as a master's thesis to create interactive industrial tutorials, guiding operators through equipment maintenance and operation procedures with instructions overlaid on the real environment.",
    "project.ar.techsList": `
        <li>Unity</li>
        <li>C#</li>
        <li>AR Foundation</li>
        <li>Vuforia</li>
    `,
    "project.ar.cta": "View on GitHub →",

    "content.eyebrow": "Technical Blog",
    "content.title": "Articles & Insights",
    "content.card.meta": "Technology · 6 min read",
    "content.card.title": "Industry 5.0: the evolution from 1.0 to 5.0",
    "content.card.summary": "An overview of how industry evolved from steam mechanization to the collaboration between humans and Artificial Intelligence.",
    "content.card.date": "Jun 20, 2026",
    "content.card.readMore": "Read full article →",

    "tech.eyebrow": "Stack",
    "tech.title": "Technologies",

    "about.eyebrow": "Who I am",
    "about.title": "About Me",
    "about.p1": "I'm a Data Scientist and AI Engineer, working on Artificial Intelligence solutions applied to large-scale operations, combining Machine Learning, Computer Vision and Generative AI with real business problems.",
    "about.p2": "I'm interested in research and innovation, with publications and conference presentations in industrial automation and Augmented Reality. I constantly seek to combine data science, engineering and cutting-edge technology to generate measurable impact.",
    "about.edu.engTitle": "Engineering",
    "about.edu.engDesc": "Engineer from UFSJ (Federal University of São João del-Rei).",
    "about.edu.masterTitle": "Master's Degree",
    "about.edu.masterDesc": "Master's degree from PROFICAM (UFSJ), with research in industrial automation and Augmented Reality.",

    "certs.title": "Certifications",

    "contact.eyebrow": "Let's talk",
    "contact.title": "Contact",
    "contact.text": "Open to new connections, projects and opportunities in Artificial Intelligence.",
    "contact.btnEmail": "Send Email",

    "footer.quote": "“Turning data into intelligence, and intelligence into results.”",

    "modal.industria.title": "Industry 5.0: the evolution from 1.0 to 5.0",
    "modal.industria.body": `
        <p>
          <strong>Industry 1.0</strong> emerged at the end of the 18th century with steam
          mechanization, replacing manual labor with machines and starting large-scale
          factory production.
        </p>
        <p>
          <strong>Industry 2.0</strong>, in the early 20th century, brought electrical power
          and mass production lines, popularized by the Fordist model, drastically
          increasing manufacturing speed and standardization.
        </p>
        <p>
          <strong>Industry 3.0</strong> arrived with electronics, computers and process
          automation from the second half of the 20th century onward, enabling more
          precise control and replacing repetitive tasks with automated systems.
        </p>
        <p>
          <strong>Industry 4.0</strong> introduced connectivity: IoT, big data, cloud
          computing and cyber-physical systems began integrating machines, data and
          real-time decisions, forming smart factories.
        </p>
        <p>
          <strong>Industry 5.0</strong> represents the next stage: it puts humans back
          at the center, promoting collaboration between people, robots and Artificial
          Intelligence, focusing on resilience, sustainability and personalization —
          technology at the service of people, not the other way around.
        </p>
    `,
  },
};

function applyLanguage(lang) {
  document.documentElement.lang = lang === "en" ? "en" : "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const dict = lang === "en" ? translations.en : null;
    if (lang === "pt" || !dict || !(key in dict)) {
      const original = el.getAttribute("data-i18n-original");
      if (original !== null) {
        if (el.hasAttribute("data-i18n-html")) {
          el.innerHTML = original;
        } else {
          el.textContent = original;
        }
      }
      return;
    }

    if (el.hasAttribute("data-i18n-html")) {
      el.innerHTML = dict[key];
    } else {
      el.textContent = dict[key];
    }
  });

  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.textContent = lang === "en" ? "PT" : "EN";
  }

  localStorage.setItem("lang", lang);
}

function initI18n() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    if (el.hasAttribute("data-i18n-html")) {
      el.setAttribute("data-i18n-original", el.innerHTML.trim());
    } else {
      el.setAttribute("data-i18n-original", el.textContent.trim());
    }
  });

  const saved = localStorage.getItem("lang") || "pt";
  applyLanguage(saved);

  const langToggle = document.getElementById("langToggle");
  langToggle.addEventListener("click", () => {
    const current = localStorage.getItem("lang") || "pt";
    applyLanguage(current === "pt" ? "en" : "pt");
  });
}

document.addEventListener("DOMContentLoaded", initI18n);
