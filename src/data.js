const asset = (p) => import.meta.env.BASE_URL + p

export const PAGES = ['home', 'about', 'experience', 'projects', 'certificates', 'contacts']
export const FILE = {
  home: '~ home',
  about: 'about.py',
  experience: 'experience.py',
  projects: 'projects.py',
  certificates: 'certs.py',
  contacts: 'contacts.py',
}
export const ICON = { home: '⌂', about: '◉', experience: '❯', projects: '▤', certificates: '✦', contacts: '✉' }
export const CNT = { home: '', about: '', experience: '4', projects: '8', certificates: '10', contacts: '' }

export const CV_URL = asset('CV_Simeon_Golemdzhiev.pdf')

export const social = {
  email: 'simeon.golemdzhiev@gmail.com',
  linkedin: 'https://www.linkedin.com/in/simeon-golemdzhiev-892312257',
  github: 'https://github.com/simeon011',
}

<<<<<<< HEAD
export const FORMSPREE_URL = 'https://formspree.io/f/xkodwldg'

=======
>>>>>>> 829f1adfbe1a41e12e1fdcff1b78bb3fc59348b0
export const heroCode = [
  ['<span class="dec">@dataclass</span>', 0],
  ['<span class="kw">class</span> <span class="cls">Developer</span><span class="pn">:</span>', 0],
  ['<span class="vr">name</span> <span class="pn">=</span> <span class="str">"Simeon Golemdzhiev"</span>', 1],
  ['<span class="vr">title</span> <span class="pn">=</span> <span class="str">"Assoc. Software Dev @ ISI Markets"</span>', 1],
  ['<span class="vr">stack</span> <span class="pn">=</span> <span class="pn">[</span><span class="str">"Django"</span><span class="pn">, </span><span class="str">"PostgreSQL"</span><span class="pn">]</span>', 1],
]

export const bootLines = [
  '<span class="dim">$</span> python -m portfolio',
  '<span class="ok">[ok]</span> importing sys, django, simeon',
  '<span class="ok">[ok]</span> loading skills ............ done',
  '<span class="ok">[ok]</span> connecting @ ISI Markets ... done',
  '<span class="arw">→</span> ready · launching <span class="yl">UI</span>',
]

export const aboutStory = [
  `Hello, my name is <strong>Simeon</strong>. My journey into programming began in high school with C#, which gave me a solid logical foundation and led me to the Technical University of Sofia, where I studied "Information Technology in Industry" — and recently <strong>graduated</strong>.`,
  `Throughout my studies I worked with Java, C, C++ and MySQL — but it was <strong>Python</strong> that impressed me most. At SoftUni's Python track I built a deep understanding of backend development with <strong>Django</strong>, PostgreSQL and ORM-based data modeling.`,
  `Today I'm putting all of that into practice as an <strong>Associate Software Developer (Intern) at ISI Markets</strong> — my first professional role, and the start of a real career in backend development.`,
]

export const skillGroups = [
  ['Backend', ['Python', 'Django', 'Django REST (DRF)', 'Perl']],
  ['Databases', ['PostgreSQL', 'MySQL', 'Python ORM']],
  ['DevOps & Cloud', ['Docker', 'AWS', 'Linux / Ubuntu', 'Nginx', 'Celery']],
  ['Frontend', ['HTML', 'CSS', 'JavaScript']],
  ['Tools', ['Git', 'PyCharm', 'C']],
]

export const learning = [
  ['Production workflows @ ISI', 60],
  ['Perl alongside Python', 40],
  ['Testing (pytest)', 55],
]

export const facts = [
  ['📍', 'Based in <b>Sofia, Bulgaria</b>'],
  ['💼', 'Interning at <b>ISI Markets</b> · Linux / Ubuntu'],
  ['🗣️', 'Bulgarian (native) · <b>English (B2)</b>'],
  ['🎯', 'Goal: grow into a <b>backend engineer</b>'],
]

export const experience = [
  {
    ic: '💼', t: 'ISI Markets', per: '2026 — present', tag: 'Current role',
    place: 'Associate Software Developer (Intern)',
    pts: [
      'My first professional role — applying Python in a real product team.',
      'Working day-to-day on Linux / Ubuntu environments.',
      'Using Python and some Perl within the existing codebase.',
      'Learning production workflows, code review and collaboration alongside experienced developers.',
    ],
  },
  {
    ic: '🎓', t: 'Technical University of Sofia', per: '2022 — 2026', tag: 'Degree',
    place: 'BSc in Information Technology in Industry',
    pts: [
      'Graduated with a Bachelor\'s degree in Sofia.',
      'Experience with Python, Java, C, C++.',
      'Worked with databases (MySQL).',
      'System design, software development and algorithmic thinking.',
    ],
  },
  {
    ic: '🐍', t: 'SoftUni', per: '2024 — 2026', tag: 'Python path',
    place: 'Python Development Path',
    pts: [
      'Python Basics, Fundamentals, Advanced, OOP.',
      'Web basics: HTML, CSS, JavaScript.',
      'Python Databases (PostgreSQL) and Python ORM.',
      'Full-stack Python Web projects with Django & Django REST.',
    ],
  },
  {
    ic: '🏫', t: 'PMG "Boyan Petkanchin"', per: 'Graduated 2022', tag: 'Foundation',
    place: 'Informatics & IT profile · Haskovo',
    pts: [
      'Profile in Informatics and Information Technology.',
      'First steps in programming and fundamentals.',
      'Built problem-solving and algorithmic thinking.',
    ],
  },
]

export const projects = [
  {
    n: 'API Documentation Manager', url: 'https://github.com/simeon011/API-Documentation-Manager',
    d: 'Django application for managing and organizing API documentation.',
    t: ['Python', 'Django', 'PostgreSQL', 'Docker', 'AWS', 'Celery'], feat: true,
    d2: 'My most complete backend project. A Django web app for managing API documentation — containerized with Docker & Docker Compose (PostgreSQL + Nginx), deployed to AWS for high availability, with Celery handling async background tasks in a support ticketing system, and unit tests across models, views and forms.',
  },
  { n: 'Petstagram', url: 'https://github.com/simeon011/Petstagramb', d: 'Instagram-style social app for pets — profiles, photos, likes.', t: ['Python', 'Django'] },
  { n: 'Python Web', url: 'https://github.com/simeon011/Python-Web', d: 'Full-stack web projects from the SoftUni Python Web module.', t: ['Python', 'Django'] },
  { n: 'Python ORM', url: 'https://github.com/simeon011/Python-ORM', d: 'ORM data modeling, migrations and queries with Django ORM.', t: ['Python', 'SQL'] },
  { n: 'Mini Python Projects', url: 'https://github.com/simeon011/MiniPythonProjects', d: 'A collection of small Python projects and exercises.', t: ['Python'] },
  { n: 'Mini JS Projects', url: 'https://github.com/simeon011/MiniJavaScriptProjects', d: 'Small interactive front-end projects in vanilla JS.', t: ['JavaScript'] },
  { n: 'First Steps in PostgreSQL', url: 'https://github.com/simeon011/FirstPostgreSQL', d: 'Relational database design and SQL queries.', t: ['SQL'] },
  { n: 'First Steps in HTML/CSS', url: 'https://github.com/simeon011/FirstStepsInHTML-CSS', d: 'First front-end layouts and styling experiments.', t: ['JavaScript'] },
]
export const projectFilters = ['All', 'Python', 'Django', 'JavaScript', 'SQL']

export const certificates = [
  { src: asset('photos/Django Advanced - February 2026 - Certificate.jpeg'), title: 'Django Advanced', date: 'Feb 2026', year: '2026' },
  { src: asset('photos/Django Basics - January 2026 - Certificate.jpeg'), title: 'Django Basics', date: 'Jan 2026', year: '2026' },
  { src: asset('photos/Python ORM - October 2025 - Certificate.jpeg'), title: 'Python ORM', date: 'Oct 2025', year: '2025' },
  { src: asset('photos/PostgreSQL - September 2025 - Certificate.jpeg'), title: 'PostgreSQL', date: 'Sep 2025', year: '2025' },
  { src: asset('photos/JS Front-End - June 2025 - Certificate.jpeg'), title: 'JS Front-End', date: 'Jun 2025', year: '2025' },
  { src: asset('photos/HTML & CSS - May 2025 - Certificate.jpeg'), title: 'HTML & CSS', date: 'May 2025', year: '2025' },
  { src: asset('photos/Python OOP - February 2025 - Certificate.jpeg'), title: 'Python OOP', date: 'Feb 2025', year: '2025' },
  { src: asset('photos/Python Advanced - January 2025 - Certificate.jpeg'), title: 'Python Advanced', date: 'Jan 2025', year: '2025' },
  { src: asset('photos/Programming Fundamentals with Python - September 2024 - Certificate.jpeg'), title: 'Prog. Fundamentals', date: 'Sep 2024', year: '2024' },
  { src: asset('photos/Programming Basics - May 2024 - Certificate.jpeg'), title: 'Programming Basics', date: 'May 2024', year: '2024' },
]
export const certFilters = ['All', '2026', '2025', '2024']
