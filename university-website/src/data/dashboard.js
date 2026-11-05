// src/data/dashboard.js
// Mock data for the student dashboard UI (backend API comes later).

export const studentProfile = {
  program: "Software Engineering",
  term: "Fall 2026",
  year: "Year 3",
  advisor: "Dr. Anita Desai",
  creditsEarned: 96,
  creditsTotal: 160,
  gpa: 3.7,
};

export const enrolledCourses = [
  {
    id: "se-301",
    code: "SE-301",
    title: "Software Architecture",
    instructor: "Dr. Anita Desai",
    credits: 4,
    progress: 78,
    grade: "A",
    schedule: "Mon & Wed · 09:00 AM",
    room: "Lab 204",
    nextTopic: "Design Patterns: Observer & Strategy",
    materials: 12,
    icon: "bi-diagram-3",
    tone: "green",
  },
  {
    id: "se-312",
    code: "SE-312",
    title: "Cloud & DevOps",
    instructor: "Prof. Rajesh Menon",
    credits: 3,
    progress: 64,
    grade: "A-",
    schedule: "Tue & Thu · 11:30 AM",
    room: "Online · Zoom",
    nextTopic: "CI/CD pipelines with GitHub Actions",
    materials: 9,
    icon: "bi-cloud",
    tone: "blue",
  },
  {
    id: "se-320",
    code: "SE-320",
    title: "Software Testing",
    instructor: "Ms. Fatima Sheikh",
    credits: 3,
    progress: 52,
    grade: "B+",
    schedule: "Mon & Fri · 02:00 PM",
    room: "Lab 108",
    nextTopic: "Mutation testing & coverage metrics",
    materials: 8,
    icon: "bi-bug",
    tone: "amber",
  },
  {
    id: "se-330",
    code: "SE-330",
    title: "Team Project Studio",
    instructor: "Dr. Anita Desai",
    credits: 4,
    progress: 88,
    grade: "A",
    schedule: "Wed · 02:00 PM",
    room: "Studio B",
    nextTopic: "Sprint 6 review & demo",
    materials: 15,
    icon: "bi-people",
    tone: "violet",
  },
  {
    id: "ma-210",
    code: "MA-210",
    title: "Discrete Mathematics",
    instructor: "Dr. Meera Nair",
    credits: 3,
    progress: 71,
    grade: "B+",
    schedule: "Tue & Thu · 08:00 AM",
    room: "Room 12",
    nextTopic: "Graph theory: shortest paths",
    materials: 7,
    icon: "bi-calculator",
    tone: "rose",
  },
];

export const weekSchedule = [
  {
    day: "Monday",
    short: "Mon",
    classes: [
      {
        time: "09:00 AM",
        code: "SE-301",
        title: "Software Architecture",
        room: "Lab 204",
        tone: "green",
      },
      {
        time: "02:00 PM",
        code: "SE-320",
        title: "Software Testing",
        room: "Lab 108",
        tone: "amber",
      },
    ],
  },
  {
    day: "Tuesday",
    short: "Tue",
    classes: [
      {
        time: "08:00 AM",
        code: "MA-210",
        title: "Discrete Mathematics",
        room: "Room 12",
        tone: "rose",
      },
      {
        time: "11:30 AM",
        code: "SE-312",
        title: "Cloud & DevOps",
        room: "Online · Zoom",
        tone: "blue",
      },
    ],
  },
  {
    day: "Wednesday",
    short: "Wed",
    classes: [
      {
        time: "09:00 AM",
        code: "SE-301",
        title: "Software Architecture",
        room: "Lab 204",
        tone: "green",
      },
      {
        time: "02:00 PM",
        code: "SE-330",
        title: "Team Project Studio",
        room: "Studio B",
        tone: "violet",
      },
    ],
  },
  {
    day: "Thursday",
    short: "Thu",
    classes: [
      {
        time: "08:00 AM",
        code: "MA-210",
        title: "Discrete Mathematics",
        room: "Room 12",
        tone: "rose",
      },
      {
        time: "11:30 AM",
        code: "SE-312",
        title: "Cloud & DevOps",
        room: "Online · Zoom",
        tone: "blue",
      },
    ],
  },
  {
    day: "Friday",
    short: "Fri",
    classes: [
      {
        time: "10:00 AM",
        code: "SE-330",
        title: "Team Project Studio",
        room: "Studio B",
        tone: "violet",
      },
      {
        time: "02:00 PM",
        code: "SE-320",
        title: "Software Testing",
        room: "Lab 108",
        tone: "amber",
      },
    ],
  },
];

export const todayClasses = [
  {
    time: "09:00 AM",
    code: "SE-301",
    title: "Software Architecture",
    room: "Lab 204",
    instructor: "Dr. Anita Desai",
    tone: "green",
    icon: "bi-diagram-3",
  },
  {
    time: "11:30 AM",
    code: "SE-312",
    title: "Cloud & DevOps",
    room: "Online · Zoom",
    instructor: "Prof. Rajesh Menon",
    tone: "blue",
    icon: "bi-cloud",
  },
  {
    time: "02:00 PM",
    code: "SE-330",
    title: "Team Project Studio",
    room: "Studio B",
    instructor: "Dr. Anita Desai",
    tone: "violet",
    icon: "bi-people",
  },
];

export const onlineClasses = [
  {
    id: "oc-1",
    code: "SE-312",
    title: "Cloud & DevOps — Live Lecture",
    instructor: "Prof. Rajesh Menon",
    status: "live",
    platform: "Zoom",
    time: "Now · ends 12:30 PM",
    tone: "green",
    icon: "bi-cloud",
  },
  {
    id: "oc-2",
    code: "SE-301",
    title: "Software Architecture — Tutorial",
    instructor: "Dr. Anita Desai",
    status: "soon",
    platform: "Microsoft Teams",
    time: "Today · 03:00 PM",
    tone: "blue",
    icon: "bi-diagram-3",
  },
  {
    id: "oc-3",
    code: "MA-210",
    title: "Discrete Mathematics — Revision",
    instructor: "Dr. Meera Nair",
    status: "upcoming",
    platform: "Google Meet",
    time: "Tomorrow · 08:00 AM",
    tone: "rose",
    icon: "bi-calculator",
  },
  {
    id: "oc-4",
    code: "SE-330",
    title: "Team Project Studio — Standup",
    instructor: "Dr. Anita Desai",
    status: "upcoming",
    platform: "Zoom",
    time: "Thu · 02:00 PM",
    tone: "violet",
    icon: "bi-people",
  },
];

export const recordings = [
  {
    title: "Deploying containers to Kubernetes",
    code: "SE-312",
    duration: "48 min",
    date: "Oct 30, 2026",
  },
  {
    title: "Layered architecture walkthrough",
    code: "SE-301",
    duration: "52 min",
    date: "Oct 28, 2026",
  },
  {
    title: "Unit testing with Jest deep dive",
    code: "SE-320",
    duration: "41 min",
    date: "Oct 26, 2026",
  },
];

export const assignments = [
  {
    id: "a-1",
    title: "Cloud Deployment Assignment",
    code: "SE-312",
    course: "Cloud & DevOps",
    due: "Nov 07, 2026",
    status: "pending",
    points: 100,
    grade: null,
  },
  {
    id: "a-2",
    title: "Unit Tests & Coverage Report",
    code: "SE-320",
    course: "Software Testing",
    due: "Nov 09, 2026",
    status: "pending",
    points: 80,
    grade: null,
  },
  {
    id: "a-3",
    title: "Sprint 6 Retrospective",
    code: "SE-330",
    course: "Team Project Studio",
    due: "Nov 12, 2026",
    status: "pending",
    points: 50,
    grade: null,
  },
  {
    id: "a-4",
    title: "Design Patterns Essay",
    code: "SE-301",
    course: "Software Architecture",
    due: "Nov 01, 2026",
    status: "submitted",
    points: 60,
    grade: null,
  },
  {
    id: "a-5",
    title: "Graph Theory Problem Set",
    code: "MA-210",
    course: "Discrete Mathematics",
    due: "Oct 24, 2026",
    status: "graded",
    points: 40,
    grade: "38/40",
  },
];

export const exams = [
  {
    id: "e-1",
    title: "Midterm Exam",
    code: "SE-301",
    course: "Software Architecture",
    date: "Nov 10, 2026",
    time: "10:00 AM",
    duration: "2 hours",
    room: "Hall A",
    type: "Midterm",
  },
  {
    id: "e-2",
    title: "Practical Assessment",
    code: "SE-320",
    course: "Software Testing",
    date: "Nov 14, 2026",
    time: "01:00 PM",
    duration: "90 min",
    room: "Lab 108",
    type: "Quiz",
  },
  {
    id: "e-3",
    title: "Final Exam",
    code: "MA-210",
    course: "Discrete Mathematics",
    date: "Dec 02, 2026",
    time: "09:00 AM",
    duration: "3 hours",
    room: "Hall C",
    type: "Final",
  },
];

export const announcements = [
  {
    title: "Guest lecture: Scaling systems at a startup",
    date: "Oct 30, 2026",
    icon: "bi-megaphone",
    tone: "blue",
  },
  {
    title: "Library extended hours during exams",
    date: "Oct 28, 2026",
    icon: "bi-book",
    tone: "amber",
  },
  {
    title: "Hackathon registration now open",
    date: "Oct 25, 2026",
    icon: "bi-trophy",
    tone: "violet",
  },
];

// Weekly study hours, used for the mini bar chart on the dashboard.
export const studyHours = [
  { day: "Mon", hours: 4.5 },
  { day: "Tue", hours: 6 },
  { day: "Wed", hours: 3.5 },
  { day: "Thu", hours: 5.5 },
  { day: "Fri", hours: 7 },
  { day: "Sat", hours: 2.5 },
  { day: "Sun", hours: 1.5 },
];

export const semesterGpa = [
  { term: "Fall 2024", gpa: 3.3 },
  { term: "Spring 2025", gpa: 3.5 },
  { term: "Fall 2025", gpa: 3.6 },
  { term: "Spring 2026", gpa: 3.65 },
  { term: "Fall 2026", gpa: 3.7 },
];

export const gradeBreakdown = [
  { grade: "A", count: 9, tone: "green" },
  { grade: "A-", count: 5, tone: "blue" },
  { grade: "B+", count: 4, tone: "violet" },
  { grade: "B", count: 2, tone: "amber" },
  { grade: "C", count: 1, tone: "rose" },
];

export const transcript = [
  {
    code: "SE-210",
    title: "Data Structures & Algorithms",
    credits: 4,
    grade: "A",
    points: 4.0,
    term: "Spring 2026",
  },
  {
    code: "SE-220",
    title: "Object-Oriented Design",
    credits: 3,
    grade: "A-",
    points: 3.7,
    term: "Spring 2026",
  },
  {
    code: "SE-230",
    title: "Database Systems",
    credits: 3,
    grade: "A",
    points: 4.0,
    term: "Spring 2026",
  },
  {
    code: "SE-240",
    title: "Software Requirements",
    credits: 3,
    grade: "B+",
    points: 3.3,
    term: "Fall 2025",
  },
  {
    code: "MA-110",
    title: "Calculus & Linear Algebra",
    credits: 4,
    grade: "B",
    points: 3.0,
    term: "Fall 2025",
  },
];

export const statusMeta = {
  pending: { label: "Pending", tone: "amber", icon: "bi-hourglass-split" },
  submitted: { label: "Submitted", tone: "blue", icon: "bi-send-check" },
  graded: { label: "Graded", tone: "green", icon: "bi-patch-check" },
  overdue: { label: "Overdue", tone: "rose", icon: "bi-exclamation-triangle" },
  live: { label: "Live now", tone: "green", icon: "bi-broadcast" },
  soon: { label: "Starting soon", tone: "amber", icon: "bi-clock" },
  upcoming: { label: "Upcoming", tone: "blue", icon: "bi-calendar-event" },
};
