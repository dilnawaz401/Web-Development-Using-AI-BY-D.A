// src/data/courses.js
// Static course catalogue used by the Courses, Register and Dashboard pages.

const img = (prompt, size) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;

export const courses = [
  {
    id: "software-engineering",
    title: "Software Engineering",
    tone: "green",
    icon: "bi-code-slash",
    degree: "B.Sc. Software Engineering",
    level: "Undergraduate",
    duration: "4 Years",
    credits: 160,
    mode: "On Campus",
    tuition: "$9,800 / year",
    image: img(
      "software engineering students writing code in a modern bright university computer lab",
      "landscape_4_3"
    ),
    summary:
      "Learn to design, build and ship reliable software systems — from clean code and architecture to testing, DevOps and agile delivery.",
    description:
      "The Software Engineering program combines strong computer-science foundations with professional engineering practice. You will work in team-based studios, ship real products and graduate ready for roles across the software industry.",
    highlights: [
      "Industry-mentored capstone project",
      "Cloud, DevOps and CI/CD pipelines",
      "Agile and Scrum team practice",
      "12-month optional paid internship",
    ],
    careers: [
      "Software Engineer",
      "Full-Stack Developer",
      "DevOps Engineer",
      "QA / Automation Engineer",
      "Technical Product Owner",
    ],
    curriculum: [
      {
        year: "Year 1",
        modules: [
          "Programming Fundamentals",
          "Discrete Mathematics",
          "Web Technologies",
          "Computer Systems",
        ],
      },
      {
        year: "Year 2",
        modules: [
          "Data Structures & Algorithms",
          "Object-Oriented Design",
          "Database Systems",
          "Software Requirements",
        ],
      },
      {
        year: "Year 3",
        modules: [
          "Software Architecture",
          "Cloud & DevOps",
          "Software Testing",
          "Team Project Studio",
        ],
      },
      {
        year: "Year 4",
        modules: [
          "Advanced Software Engineering",
          "Agile Project Management",
          "Security Engineering",
          "Capstone Project",
        ],
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    tone: "blue",
    icon: "bi-graph-up-arrow",
    degree: "B.Sc. Data Science",
    level: "Undergraduate",
    duration: "4 Years",
    credits: 160,
    mode: "On Campus",
    tuition: "$10,200 / year",
    image: img(
      "students analysing data dashboards and charts on large screens in a university analytics lab",
      "landscape_4_3"
    ),
    summary:
      "Turn raw data into decisions using statistics, machine learning and modern data engineering on real-world datasets.",
    description:
      "The Data Science program blends mathematics, statistics and computing with hands-on analytics. You will build models, tell stories with data and learn the engineering needed to run analytics at scale.",
    highlights: [
      "Statistics and machine learning core",
      "Real industry datasets and case studies",
      "Python, SQL and cloud analytics tooling",
      "Visualisation and storytelling studio",
    ],
    careers: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
      "Business Intelligence Analyst",
      "Data Engineer",
    ],
    curriculum: [
      {
        year: "Year 1",
        modules: [
          "Programming with Python",
          "Calculus & Linear Algebra",
          "Introduction to Statistics",
          "Data Literacy",
        ],
      },
      {
        year: "Year 2",
        modules: [
          "Probability & Inference",
          "Data Wrangling & SQL",
          "Machine Learning Foundations",
          "Data Visualisation",
        ],
      },
      {
        year: "Year 3",
        modules: [
          "Deep Learning",
          "Big Data Engineering",
          "Experimentation & A/B Testing",
          "Applied Analytics Project",
        ],
      },
      {
        year: "Year 4",
        modules: [
          "Advanced Machine Learning",
          "MLOps & Deployment",
          "Ethics in AI",
          "Capstone Project",
        ],
      },
    ],
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    tone: "violet",
    icon: "bi-shield-lock",
    degree: "B.Sc. Cyber Security",
    level: "Undergraduate",
    duration: "4 Years",
    credits: 160,
    mode: "On Campus",
    tuition: "$10,500 / year",
    image: img(
      "cyber security operations centre with analysts monitoring network threat screens at a university",
      "landscape_4_3"
    ),
    summary:
      "Defend systems and networks by mastering ethical hacking, digital forensics, cryptography and security operations.",
    description:
      "The Cyber Security program prepares you to protect organisations from modern threats. You will learn offensive and defensive techniques in our dedicated security lab and take part in national cyber-defence competitions.",
    highlights: [
      "Dedicated cyber range and SOC lab",
      "Ethical hacking and penetration testing",
      "Digital forensics and incident response",
      "Capture-the-Flag competition team",
    ],
    careers: [
      "Security Analyst",
      "Penetration Tester",
      "SOC Engineer",
      "Digital Forensics Analyst",
      "Security Consultant",
    ],
    curriculum: [
      {
        year: "Year 1",
        modules: [
          "Programming Fundamentals",
          "Networking Essentials",
          "Operating Systems",
          "Cyber Security Foundations",
        ],
      },
      {
        year: "Year 2",
        modules: [
          "Cryptography",
          "Network Security",
          "Linux & Scripting",
          "Secure Coding",
        ],
      },
      {
        year: "Year 3",
        modules: [
          "Ethical Hacking",
          "Digital Forensics",
          "Incident Response",
          "Security Operations Centre Lab",
        ],
      },
      {
        year: "Year 4",
        modules: [
          "Cloud Security",
          "Governance, Risk & Compliance",
          "Advanced Threat Hunting",
          "Capstone Project",
        ],
      },
    ],
  },
];

export const getCourseById = (id) => courses.find((course) => course.id === id);
