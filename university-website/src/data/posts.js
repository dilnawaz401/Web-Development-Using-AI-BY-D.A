// src/data/posts.js
// Mock blog data used by the Blog page.

const img = (prompt, size) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(
    prompt
  )}&image_size=${size}`;

export const posts = [
  {
    id: 1,
    title: "Tech University Opens New AI & Robotics Research Centre",
    excerpt:
      "Our new 12,000 sq. ft. research centre brings together faculty and students to work on applied AI, robotics and autonomous systems.",
    author: "Dr. Anita Desai",
    date: "2026-10-28",
    tags: ["Campus", "Research", "AI"],
    readingTime: "4 min read",
    image: img(
      "modern university artificial intelligence and robotics research centre interior with robots",
      "landscape_4_3"
    ),
  },
  {
    id: 2,
    title: "Five Habits of Highly Effective Software Engineering Students",
    excerpt:
      "From writing tests early to reading other people's code, here are the habits our top graduates share.",
    author: "Prof. Rajesh Menon",
    date: "2026-10-20",
    tags: ["Software Engineering", "Study Tips"],
    readingTime: "6 min read",
    image: img(
      "student desk with laptop code editor notebooks and coffee in a university library",
      "landscape_4_3"
    ),
  },
  {
    id: 3,
    title: "How Our Students Won the National Cyber Defence Challenge",
    excerpt:
      "Meet the team that took first place in a 48-hour capture-the-flag competition against 120 universities.",
    author: "Ms. Fatima Sheikh",
    date: "2026-10-12",
    tags: ["Cyber Security", "Student Life", "Achievements"],
    readingTime: "5 min read",
    image: img(
      "university students celebrating a trophy win at a cyber security competition",
      "landscape_4_3"
    ),
  },
  {
    id: 4,
    title: "A Beginner's Guide to Data Storytelling",
    excerpt:
      "Great analysis is only half the job. Learn how to turn charts and numbers into a story your audience will remember.",
    author: "Dr. Meera Nair",
    date: "2026-10-03",
    tags: ["Data Science", "Tutorial"],
    readingTime: "7 min read",
    image: img(
      "colourful data visualisation charts and dashboards displayed on a large monitor",
      "landscape_4_3"
    ),
  },
  {
    id: 5,
    title: "Campus Life: 10 Clubs You Should Join This Semester",
    excerpt:
      "From competitive programming to photography, there is a community for everyone at Tech University.",
    author: "Student Affairs Team",
    date: "2026-09-25",
    tags: ["Campus", "Student Life"],
    readingTime: "3 min read",
    image: img(
      "diverse university students socialising on a green campus lawn in the afternoon",
      "landscape_4_3"
    ),
  },
  {
    id: 6,
    title: "Internship Diaries: A Summer at a Cloud Startup",
    excerpt:
      "Final-year student Aarav shares what he learned shipping production code as a summer intern.",
    author: "Aarav Sharma",
    date: "2026-09-14",
    tags: ["Careers", "Internship", "Student Life"],
    readingTime: "5 min read",
    image: img(
      "young intern working at a modern startup office with developers collaborating",
      "landscape_4_3"
    ),
  },
];

export const allTags = [
  "All",
  ...Array.from(new Set(posts.flatMap((post) => post.tags))).sort(),
];
