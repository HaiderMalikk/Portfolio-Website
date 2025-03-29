import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla, 
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import python from "../assets/tech/python.png"
import java from "../assets/tech/java.png"
import next from "../assets/tech/next.webp"
import c from "../assets/tech/C.png"
import cpp from "../assets/tech/Cpp.png"
import pytorch from "../assets/tech/pytorch.png"
import tf from "../assets/tech/tf.png"
import sql from "../assets/tech/sql.png"
import pgsql from "../assets/tech/pgsql.png"
import aws from "../assets/tech/aws.png"
import aiicon from '../assets/ai.svg'
import webicon from '../assets/globe.svg'
import dataicon from '../assets/data.svg'
import backendicon from '../assets/backend.svg'
import book from '../assets/book.svg'
import bike from '../assets/bike.svg'
import teach from '../assets/teach.svg'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "hobbies",
    title: "Hobbies",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Developer",
    icon: aiicon,
  },
  {
    title: "Data Scientist",
    icon: dataicon,
  },
  {
    title: "Backend Developer",
    icon: backendicon,
  },
  {
    title: "Web Developer",
    icon: webicon,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "c",
    icon: c,
  },
  {
    name: "Cpp",
    icon: cpp,
  },
  {
    name: "Nextjs",
    icon: next,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "tf",
    icon: tf,
  },
  {
    name: "pyt",
    icon: pytorch,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "pg",
    icon: pgsql,
  },
  {
    name: "dkr",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#F5EFE7",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const hobbies = [
  {
    title: "Reading",
    icon: book, 
    description:
      "I enjoy reading books on technology, science and Engineering. Reading expands my knowledge and inspires me to learn new things. One of my favorite books is 'Applied Pattern Recognition in C++' by Andrew Hunt and Paulus, Dietrich W. R which has greatly influenced me in my field.",
  },
  {
    title: "Cycling",
    icon: bike, 
    description:
      "Cycling for me is not for exercise, but a way to explore new places and enjoy nature. I love riding my bike around the city and discovering new parks and trails. It's a great way to clear my mind and experience freedom.",
  },
  {
    title: "Teaching",
    icon: teach, 
    description:
    "Before I started my university journey, I spent about 1 year in the education field where i worked as a program assistant in 3 different kids camps. Now, i enjoy making educational content on my YouTube channel and sharing my knowledge with others. I believe that teaching is a great way to reinforce my own understanding of the material and help others learn.",
  },
];

export { services, technologies, experiences, testimonials, projects };
