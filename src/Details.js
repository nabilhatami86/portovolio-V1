// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/Profile.png";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import python from "./assets/techstack/python.png";
import node from "./assets/techstack/node.png";
import js from "./assets/techstack/js.png";
import ts from "./assets/techstack/ts.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import sass from "./assets/techstack/sass.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import cloud from "./assets/techstack/cloud.png";
import cisco from "./assets/techstack/cisco.png";
import winbox from "./assets/techstack/mikrotik.jpg";
import mongodb from "./assets/techstack/mongodb.png";
import mysql from "./assets/techstack/mysql.png";
import firebase from "./assets/techstack/firebase.png";
import docker from "./assets/techstack/docker.png";
import fastapi from "./assets/techstack/fastapi.png";
import postgresql from "./assets/techstack/postgresql.png";
import nextjs from "./assets/techstack/nextjs.svg";

// Porject Images
import projectImage1 from "./assets/projects/SNKI.png";
import projectImage2 from "./assets/projects/foodie.png";
import projectImage3 from "./assets/projects/fashion.png";
import projectImage4 from "./assets/projects/admin.png";
import projectImage5 from "./assets/projects/kominfo.jpg";
import projectImage6 from "./assets/projects/banner_new.png";
import projectImage7 from "./assets/projects/project1.jpg";
import projectImage8 from "./assets/projects/project2.jpg";

//Certificate Images
import VSGA from "./assets/projects/kominfo.jpg";
import BNSP from "./assets/projects/BNSP.png";
import GCloud from "./assets/projects/gcloud.jpg";
import Bangkit from "./assets/projects/Bangkit.jpg";
import Eduwork from "./assets/projects/Eduwork.jpg";
import Dicoding from "./assets/projects/dicoding.png";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Muhammad Nabil Hatami",
  tagline: "Building technology, creating the future.🚀✨",
  img: profile,
  about: `I am Muhammad Nabil Hatami, a graduate of Nahdlatul Ulama University Indonesia with a degree in Informatics Engineering, where I was honored as the Best Graduate in the Faculty of Engineering and Computer Science. Currently, I work as an IT Developer at Daya Otomasi Asia and as a Freelance Software Engineer at Badja Studio. With a strong foundation in web development and information technology, I am passionate about building innovative solutions and continuously expanding my expertise in this ever-evolving field.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/nabilhatami/",
  github: "https://github.com/nabilhatami86",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/nabil.hatami/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "IT Developer",
    Company: `Daya Otomasi Asia`,
    Location: "Indonesia",
    Type: "Full Time",
    Duration: "2025 - Present",
  },
  {
    Position: "Software Engineer",
    Company: `Badja Studio`,
    Location: "Remote",
    Type: "Freelance",
    Duration: "2025 - Present",
  },
  {
    Position: "Internship",
    Company: `Kementrian Koordinasi Bidang Perekonomian`,
    Location: "Jakarta",
    Type: "Full Time",
    Duration: "Apr 2024 - Jul 2024",
  },
  {
    Position: "Cloud Engineer",
    Company: `Difa APP`,
    Location: "Online",
    Type: "Capstone Project",
    Duration: "Nov 2023 - Feb 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Bachelor in Informatics Engineering",
    Company: `Universitas Nahdlatul Ulama Indonesia`,
    Location: "Jakarta",
    Type: "Best Graduate - Faculty of Engineering & Computer Science",
    Duration: "Sep 2021 - 2025",
  },
  {
    Position: "Fullstack Developer",
    Company: "Eduwork",
    Location: "Online",
    Type: "Bootcamp",
    Duration: "Sep 2024 - Jan 2025",
  },
  {
    Position: "Cloud Engineer",
    Company: "Bangkit Academy",
    Location: "Online",
    Type: "MSIB",
    Duration: "Aug 2023 - Feb 2024",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  node: node,
  js: js,
  ts: ts,
  python: python,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  sass: sass,
  vscode: vscode,
  postman: postman,
  npm: npm,
  cloud: cloud,
  git: git,
  github: github,
  figma: figma,
  mysql: mysql,
  mongodb: mongodb,
  firebase: firebase,
  winbox: winbox,
  cisco: cisco,
  docker: docker,
  fastapi: fastapi,
  postgresql: postgresql,
  nextjs: nextjs,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Upload Dokumen SNKI",
    image: projectImage1,
    description: `Streamline Your Document Uploads and Organize Files for Simple Access and Efficient Processing with SNKI Platform`,
    techstack: "ReactJs, Bootstrap, Express Js",
    previewLink: "https://google.com",
    githubLink: "https://github.com/nabilhatami86/Frontend-UploudDocument",
    role: "Frontend Developer",
    impact: "Reduced document processing time by 60% for government staff",
    features: ["Drag & drop file upload", "Document status tracking", "Multi-format support", "Admin review dashboard"],
  },
  {
    title: "Restaurant Ordering System",
    image: projectImage2,
    description: `Manage Your Restaurant with Ease. Oversee menu items, track orders, and streamline customer service from one central dashboard`,
    techstack: "ReactJs, Vite, Bootstrap, Tailwind, Express Js, Firebase",
    previewLink: "https://vercel.com/nabilhatami86s-projects/foodi",
    githubLink: "https://github.com/nabilhatami86/foodi",
    role: "Fullstack Developer",
    impact: "Handles 200+ daily users with real-time order management",
    features: ["Menu management", "Real-time order tracking", "Firebase authentication", "Admin dashboard", "Responsive UI"],
  },
  {
    title: "E-Commerce Fashion",
    image: projectImage3,
    description: `Explore the Fashion Store Admin Dashboard. Easily manage products, track orders, and monitor customer interactions for a smooth shopping experience.`,
    techstack: "ReactJs, Bootstrap, Express Js, MongoDB, Redux, CASL",
    previewLink: "https://google.com",
    githubLink: "https://github.com/nabilhatami86/final-project",
    role: "Fullstack Developer",
    impact: "Full e-commerce solution with role-based access control",
    features: ["Product catalog & search", "Shopping cart & checkout", "Role-based permissions (CASL)", "Order management", "Redux state management"],
  },
  {
    title: "Dashboard Admin",
    image: projectImage4,
    description: `Welcome to the Admin Dashboard. Here you can manage and oversee all system activities, with tools for monitoring, analyzing, and controlling various processes`,
    techstack: "ReactJs, Bootstrap, Express Js",
    previewLink: "https://google.com",
    githubLink: "https://github.com/nabilhatami86/dashboard_admin",
    role: "Frontend Developer",
    impact: "Centralized control panel for system-wide monitoring",
    features: ["Activity monitoring", "Data analytics charts", "User management", "Process control panel"],
  },
  {
    title: "Pelatihan VSGA JWD Kominfo",
    image: projectImage5,
    description: `A VSGA training platform backend providing certification through BNSP and KOMINFO. Supports creation of a car rental website with smooth operation for users and administrators.`,
    techstack: "HTML/CSS, PHP, Bootstrap, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/nabilhatami86/Pelatihan-VSGA-jwd-kominfo",
    role: "Backend Developer",
    impact: "Official government-certified training platform",
    features: ["Car rental management", "BNSP certification integration", "Admin panel", "User registration system"],
  },
  {
    title: "Diffa App – Disability Friendly App",
    image: projectImage6,
    description: `Backend for a disability-friendly application providing accessible features and services. Top 50 Capstone Project out of 639 at Bangkit Academy 2023.`,
    techstack: "Express, MySQL, Google Cloud",
    previewLink: "https://google.com",
    githubLink: "https://github.com/DifaApp/CC-Difa-App",
    role: "Cloud Engineer & Backend Developer",
    impact: "Top 50 out of 639 Bangkit Academy Capstone Projects",
    features: ["Accessibility-first design", "RESTful API", "Google Cloud deployment", "MySQL database", "User authentication"],
  },
  {
    title: "Asesmen Baca Al-Quran Guru Madrasah",
    image: projectImage7,
    description: `A comprehensive web-based assessment platform for evaluating Quran reading skills of Madrasah teachers across Indonesia. Features assessment management, scoring system, and detailed reporting.`,
    techstack: "React, Vite, Tailwind CSS",
    previewLink: "https://google.com",
    githubLink: "https://github.com/nabilhatami86",
    role: "Frontend Developer",
    impact: "Nationwide teacher evaluation platform for Indonesian Madrasah",
    features: ["Assessment management", "Scoring system", "Detailed reporting", "Nationwide data coverage"],
  },
  {
    title: "TaniPintar – Smart Farming App",
    image: projectImage8,
    description: `A mobile application designed to help farmers with smart agricultural solutions. Features include crop monitoring, weather forecasting, market prices, and expert consultation.`,
    techstack: "React Native, Tailwind CSS, Expo",
    previewLink: "https://google.com",
    githubLink: "https://github.com/nabilhatami86",
    role: "Mobile Developer",
    impact: "Empowering Indonesian farmers with smart tech solutions",
    features: ["Crop monitoring", "Weather forecasting", "Market price tracker", "Expert consultation", "Offline support"],
  },
];

export const certificateDetails = [
  {
    title:
      "Graduate Bangkit Academy is considered to be the Best 50 Product-based Capstone Projects out of 639 Projects this semester",
    image: Bangkit,
    description: `This certificate recognizes exceptional performance in the Bangkit Academy's Product-based Capstone Project, where the project was selected as one of the top 50 out of 639 entries.`,
    techstack: "Google Cloud, Express, Mysql",
    CertificateLink:
      "https://drive.google.com/drive/u/0/folders/1F7hG13AyZ18oEePdRuNN2bVPhA5WCjLR",
  },
  {
    title: "Certificate Bangkit Academy",
    image: Bangkit,
    description: `This certificate verifies completion of the Bangkit Academy program, which provided hands-on experience with Google Cloud, Javascript, HapiJs, Firebase, and Mysql for building web applications.`,
    techstack: "Google Cloud, Javascript, Hapi Js, Firebase, Mysql",
    CertificateLink:
      "https://drive.google.com/drive/u/0/folders/1F7hG13AyZ18oEePdRuNN2bVPhA5WCjLR",
  },
  {
    title:
      "Certificate English for Business Communication TBI(The British Institute)",
    image: Bangkit,
    description: `This certificate is awarded after completing the English for Business Communication program, equipping participants with skills for effective communication in business contexts.`,
    techstack: "English",
    CertificateLink:
      "https://drive.google.com/drive/u/0/folders/1F7hG13AyZ18oEePdRuNN2bVPhA5WCjLR",
  },
  {
    title: "Certificate Google Cloud Computing Foundations Student Mentor",
    image: GCloud,
    description: `This certificate recognizes the completion of Google Cloud's Computing Foundations program, where I served as a student mentor, helping others gain fundamental cloud computing skills.`,
    techstack: "Google Cloud",
    CertificateLink:
      "https://drive.google.com/drive/u/0/folders/1F7hG13AyZ18oEePdRuNN2bVPhA5WCjLR",
  },
  {
    title: "Certificate Google Cloud Computing Foundations",
    image: GCloud,
    description: `This certificate verifies my knowledge in Google Cloud Computing Foundations, providing a deep understanding of cloud technologies and their application.`,
    techstack: "Google Cloud",
    CertificateLink:
      "https://drive.google.com/file/d/18JCptiAFUoXRA78uFsnXIX_Vcv-87YKc/view?usp=sharing",
  },
  {
    title: "Certificate Junior Web Developer",
    image: VSGA,
    description: `This certificate acknowledges the completion of the Junior Web Developer program, including backend development for a car rental website using HTML/CSS, PHP, Bootstrap, and JavaScript.`,
    techstack: "HTML/CSS, PHP, Bootstrap JavaScript",
    CertificateLink:
      "https://drive.google.com/file/d/1kSoRn9MP8o0oWRuPcQ3MP2ABURhA3-4h/view",
  },
  {
    title: "Certificate BNSP",
    image: BNSP,
    description: `This certificate is awarded for successfully completing the backend development training for a platform providing certification through BNSP and KOMINFO.`,
    techstack: "HTML/CSS,PHP, Bootstrap JavaScript",
    CertificateLink:
      "https://drive.google.com/drive/u/0/folders/1F7hG13AyZ18oEePdRuNN2bVPhA5WCjLR",
  },
  {
    title: "Programmer Fullstack MERN",
    image: Eduwork,
    description: `This certificate validates the completion of a full-stack MERN program, creating a disability-friendly application with React, Redux, Express, NodeJs, and MongoDB.`,
    techstack:
      "HTML/CSS, React, Redux, Express, Javascript, NodeJs, Mongodb, Git, Mysql",
    CertificateLink:
      "https://eduwork.id/student/eduwork.id/sertifikat/default/116027/2316?type=view",
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    image: Dicoding,
    description: `This certificate confirms completion of the Programming Logic 101 course, covering essential programming concepts and logic structures.`,
    techstack: "Javascript",
    CertificateLink: "https://www.dicoding.com/certificates/NVP7OLM2WPR0",
  },
  {
    title: "Belajar Dasar Git dengan GitHub",
    image: Dicoding,
    description: `This certificate acknowledges the completion of the introductory course on Git and GitHub, focusing on version control and collaborative development.`,
    techstack: "Github",
    CertificateLink: "https://www.dicoding.com/certificates/EYX46L3ROPDL",
  },
  {
    title: "Belajar Dasar Structured Query Language (SQL)",
    image: Dicoding,
    description: `This certificate validates knowledge of SQL, covering the basics of database querying and management.`,
    techstack: "Github",
    CertificateLink: "https://www.dicoding.com/certificates/QLZ97E3R9P5D",
  },
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    image: Dicoding,
    description: `This certificate is awarded for learning the basics of JavaScript programming, which are essential for web development.`,
    techstack: "Javascript",
    CertificateLink: "https://www.dicoding.com/certificates/4EXGN0LRQZRL",
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula",
    image: Dicoding,
    description: `This certificate acknowledges completion of an introductory course on backend development, teaching foundational skills in JavaScript and NodeJs.`,
    techstack: "Javascript, NodeJs",
    CertificateLink: "https://www.dicoding.com/certificates/07Z6WNM9MZQR",
  },
  {
    title: "Belajar Membuat Aplikasi Back-End untuk Pemula dengan Google Cloud",
    image: Dicoding,
    description: `This certificate is awarded for creating a backend application using JavaScript, NodeJs, and Google Cloud, focusing on cloud-based backend technologies.`,
    techstack: "Javascript, NodeJs, HapiJs, Google Cloud",
    CertificateLink: "https://www.dicoding.com/certificates/GRX523L9RX0M",
  },
  {
    title: "Belajar Dasar AI",
    image: Dicoding,
    description: `This certificate confirms completion of the introductory Artificial Intelligence course, covering the basics of AI concepts and their practical applications.`,
    techstack: "Python",
    CertificateLink: "https://www.dicoding.com/certificates/1OP8WEW3LXQK",
  },
  {
    title: "Belajar Dasar Data Science",
    image: Dicoding,
    description: `This certificate verifies knowledge of Data Science basics, focusing on data analysis, visualization, and using Python for data-related tasks.`,
    techstack: "Python",
    CertificateLink: "https://www.dicoding.com/certificates/GRX5OE482P0M",
  },
  {
    title: "Belajar Dasar Manajemen Proyek",
    image: Dicoding,
    description: `This certificate validates knowledge of project management principles, focusing on planning, execution, and monitoring of projects.`,
    techstack: "",
    CertificateLink: "https://www.dicoding.com/certificates/KEXL1J1D4XG2",
  },
  {
    title: "Belajar Strategi Pengembangan Diri",
    image: Dicoding,
    description: `This certificate acknowledges the completion of a self-development strategy course, emphasizing personal growth and goal-setting techniques.`,
    techstack: "",
    CertificateLink: "https://www.dicoding.com/certificates/GRX5OEYMVP0M",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "muhammadnabilhatami@gmail.com",
  phone: "+62 8124 7662 703",
};
