import { frontend, backend, cpp, python, enprac, attendance, music } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "github",
    title: "",
  },
];

export const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "C++ Developer",
    icon: cpp,
  },
  {
    title: "Python Developer",
    icon: python,
  },
];

export const projects = [
  {
    name: "EnPrac Web Application",
    description:
      "This project was designed using Python and Django. It was an English Practice web application that had questions related to different topics of English grammar. It also had an English dictionary attached to it.",
    tags: [
      {
        name: "python",
        color: "blue",
      },
      {
        name: "django",
        color: "green",
      },
      {
        name: "bootstrap",
        color: "violet",
      },
    ],
    image: enprac,
    source_code_link: "https://github.com/Aakash265/EnPrac-Web-App",
  },
  {
    name: "Attendance Management System",
    description:
      "This is used to store the attendance of the students. The user, as a faculty, could login to his/her account to mark the attendance.",
    tags: [
      {
        name: "php",
        color: "yellow",
      },
      {
        name: "mysql",
        color: "green",
      },
      {
        name: "bootstrap",
        color: "violet",
      },
    ],
    image: attendance,
    source_code_link: "https://github.com/Aakash265/PHP-project",
  },
  {
    name: "Music Player",
    description:
      "This music player website was based on the concepts of HTML, CSS and JavaScript where the user could listen to the music for free with a variety of songs in English, Hindi and Punjabi languages.",
    tags: [
      {
        name: "HTML",
        color: "orange",
      },
      {
        name: "CSS",
        color: "blue",
      },
      {
        name: "JavaScript",
        color: "yellow",
      },
    ],
    image: music,
    source_code_link: "https://github.com/Aakash265/Music-Player",
  },
];
