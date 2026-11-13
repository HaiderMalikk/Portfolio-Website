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
import next from "../assets/tech/next.webp"
import c from "../assets/tech/C.png"
import js from "../assets/tech/js.png"
import pytorch from "../assets/tech/pytorch.png"
import tf from "../assets/tech/tf.png"
import sql from "../assets/tech/sql.webp"
import xgboost from "../assets/tech/xgb.png"
import aws from "../assets/tech/aws.png"
import react from "../assets/tech/reactjs.png"
import scikit from "../assets/tech/scikit.png"
import keras from "../assets/tech/keras.png"
import gcp from "../assets/tech/gcp.png"
import fast from "../assets/tech/fast.svg"
import aiicon from '../assets/ai.svg'
import webicon from '../assets/globe.svg'
import dataicon from '../assets/data.svg'
import backendicon from '../assets/backend.svg'
import book from '../assets/book.svg'
import bike from '../assets/bike.svg'
import teach from '../assets/teach.svg'
import work2 from "../assets/company/work2.png"; // Make sure this path is correct
import work3 from "../assets/company/work3.jpeg";

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
    title: "AI/ML",
    icon: aiicon,
  },
  {
    title: "Data Science",
    icon: dataicon,
  },
  {
    title: "Backend Deveplopment",
    icon: backendicon,
  },
  {
    title: "Web Development",
    icon: webicon,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
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
    name: "react",
    icon: react,
  },
  {
    name: "fast",
    icon: fast,
  },
  {
    name: "tf",
    icon: tf,
  },
  {
    name: "keras",
    icon: keras,
  },
  {
    name: "pyt",
    icon: pytorch,
  },
  {
    name: "scikit",
    icon: scikit,
  },
  {
    name: "xg",
    icon: xgboost,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "gcp",
    icon: gcp,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "dkr",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer Co-op",
    company_name: "D2L · Co-op",
    icon: work3,
    iconBg: "#548CA8",
    date: "September 2026 - Present",
    points: [
      "Joining the Custom Development Services team working on custom applications and integrations for the Brightspace learning platform.",
      "Building custom applications that extend or integrate with the core Brightspace learning platform based on client needs.",
    ],
  },
  {
    title: "Software Developer Co-op",
    company_name: "Royal Bank of Canada",
    icon: work2, 
    iconBg: "#548CA8",
    date: "September 2025 - April 2026",
    points: [
      "Working in the Technology and Operations RIG Team. RIG is short for RBC Interface Guidlines and it's RBC core design system used internaly by many teams across RBC.", 
      "At RBC i will be working with React, Angular and Typescript to build and maintain reusable components, RIG's AI Agent/ MCP server and other tools to help developers and designers.",
    ],
  },
  {
    title: "AI/ML Engineer Intern",
    company_name: "CAPRiser Advisory",
    iconBg: "#548CA8",
    date: "April 2025 - June 2025",
    points: [
      "Built an AI-powered financial analysis system to evaluate market trends and investment opportunities.",
      "Integrated real-time financial data APIs (e.g., Yahoo Finance) for key indicators like RSI, moving averages, and volatility.",
      "Designed ML models in Python for stock prediction, ensuring accuracy via real-world validation.",
      "Led AWS deployment, optimizing scalability and real-time data processing.",
      "Created technical documentation for seamless project handover",
      "Collaborated in a fast-paced, research-driven environment with the CEO and developers.",
    ],
  },
];


const projects = [
  {
     name: "Reddish Trends",
  description: "Reddish Trends is a Reddit powered stock market analyzer. This is a unique website that uses reddit to uncover stock data and anaylize sentiment data using algorithms, add financial data using yahoo finance and provide feedback using AI. ",
  tags: [
    { name: "Next.js", color: "blue-text-gradient" },
    { name: "Fast", color: "blue-text-gradient" },
    { name: "TypeScript", color: "green-text-gradient" },
    { name: "Python", color: "green-text-gradient" },
    { name: "tailwind", color: "pink-text-gradient" },
    { name: "OpenAI", color: "pink-text-gradient" },
    { name: "Firebase", color: "pink-text-gradient" },
  ],
  // image: pg1,
  source_code_link: "https://github.com/HaiderMalikk/Reddish-Trends",
  live_site_link: "https://www.reddishtrends.com", // This project has a website link
  featured: true // Add this property to identify featured projects
  },
  {
    name: "Reddit Jams",
    description: "RedditJams is an intelligent music recommendation system that analyzes your Spotify playlist, searches Reddit's music community for similar tastes, and uses GPT-4 to generate personalized song recommendations.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "FastAPI", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
    ],
    // image: pg5,
    source_code_link: "https://github.com/HaiderMalikk/RedditJams",
    live_site_link: "https://redditjams.com", // This project has a website link
  },
  {
    name: "Mood Atlas",
    description: "Mood Atlas is an app that recommends destinations based on user moods or feelings. It uses Google Places API for location data and Google Maps API to display the recommended places. It uses OpenAI API to analyze the mood of the user and recommend places based on that.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Fast", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    // image: pg2,
    source_code_link: "https://github.com/HaiderMalikk/Mood-Atlas",
    live_site_link: "https://mood-atlas.vercel.app", // This project has a website link
  },
  // The rest of the projects have only GitHub links (no live_site_link property)
  {
    name: "ADA",
    description: 
    "ADA (Advanced Digital Agent) is aimed to be a JARVIS like AI that can answer question like siri but with the context of the world around you, and you as the admin controling every move of this Agent.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Artificial Intelligence", color: "green-text-gradient" },
      { name: "Machine Learning", color: "green-text-gradient" },
      { name: "Computer Vision", color: "pink-text-gradient" },
      { name: "AI Agents", color: "pink-text-gradient" },
      { name: "Intelligent Systems", color: "pink-text-gradient" },
  ],
  // image: fp1, // Use an appropriate image from your imports
  source_code_link: "https://github.com/Proximum-AI",
  },
  // Add the new projects
  {
    name: "Supa Charge",
    description:
    "Supa Charge is a app that allows users to find electric vehicle charging stations. it uses Google Places API for location data and Google Maps API to display the recommended places.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Xcode", color: "blue-text-gradient" },
      { name: "JavaScript", color: "green-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    // image: pg4,
    source_code_link: "https://github.com/HaiderMalikk/Supa-Charger-App",
  },
  {
    name: "Chess Engine and Smart Bot",
    description:
      "My Chess Game Made with Pygame. The game includes a chess game engine, chess bot and its smart move finder. The game can be played with another person or a Chess bot powered by powerful algorithms and data. ELO: 1200",
    tags: [
      { name: "Pygame", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "Chess", color: "pink-text-gradient" },
      { name: "Algorithms", color: "pink-text-gradient" },
    ],
    // image: pg6,
    source_code_link: "https://github.com/HaiderMalikk/Chess",
  }
];

// Make sure this papers array is properly defined 
export const papers = [
  {
    title: "AI-Driven Document Summarization Solutions for Docsumo",
    description: "This study investigates how Docsumo's intelligent document processing technology can incorporate AI-driven document summarization. The study looks into the summarization tools that are already available,notes how much time users spend manually interpreting data that has been collected, and suggests an AI-based solution that works with Docsumo's technology stack. It is advised to use a hybrid strategy thatcombines extractive and abstractive summarization, utilizing pretrained transformer models that havebeen refined on both structured and unstructured business documents. The ultimate objective is toestablish Docsumo as a pioneer in intelligent document summarizing by automating insights production,improving user experience, and stimulating product innovation.",
    authors: "Haider Malik",
    date: "April 2025",
    tags: [
      { name: "Document Summarization", color: "blue-text-gradient" },
      { name: "OCR", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
    ],
    image: "/src/assets/paper2.png", // Using an existing image from your project
    pdfUrl: "https://drive.google.com/file/d/1Rfe7JC4U6kIsE9kh_Iu-_34pu57CLOfH/preview",
  },
  {
    title: "Enhancing Safety Certification of AI-Driven Autonomous Systemsthrough Explainable AI, Regression Testing, and StandardizedRegulations",
    description: 
    "Artificial intelligence (AI) has transformed operational capabilities and efficiency through itsquick integration into autonomous systems, which span industries like aircraft, healthcare, andtransportation. Nevertheless, this development poses serious difficulties for guaranteeing thesecurity and dependability of these AI-powered systems. For AI applications with probabilisticbehaviours and learning capabilities, traditional certification procedures—which were created fordeterministic systems—are frequently insufficient.",
    authors: "Haider Malik",
    date: "March 2025",
    tags: [
      { name: "Explainable AI", color: "blue-text-gradient" },
      { name: "AI Safety", color: "green-text-gradient" },
      { name: "AI and Ethics", color: "pink-text-gradient" },
    ],
    image: "/src/assets/paper1.png", // Using an existing image from your project
    pdfUrl: "https://drive.google.com/file/d/1wLUPWPMxPZWVOqfXA9AEQhP8St7H26-q/preview",
  },
  {
    title: "My ML Notes (Paper Form)",
    description: 
    "⚠️ Disclaimer: This is not a research paper, but rather my comprehensive ML notes which include research I did for many, many topics all in one place! These notes represent my learning through many many months, almost everything I know in the field of Machine Learning. I truly love them because they capture how much I've grown and learned. Whenever I forget something or need a refresher, these notes are where I go back to. They reflect my journey, my curiosity, and my understanding of ML written, refined, and revisited countless times. Take a look at them, there might be a topic you like!\n\n📘 How to use: Click on the PDF icon to open the github repo then open the index pages to browse topics. Each topic links to a corresponding page, and every page has a matching PDF with the same number in its name for easy reference and reading. Some topics have code examples, If you want to see code examples for that topic see if it exists under ",
    authors: "Haider Malik",
    date: "2025",
    tags: [
      { name: "ML", color: "green-text-gradient" },
      { name: "Notes", color: "blue-text-gradient" },
      { name: "Code Examples", color: "pink-text-gradient" },
    ],
    // image: paper3, // Using an existing image from your project
    pdfUrl: "https://github.com/HaiderMalikk/CS_NOTES/tree/main/Machine_Learning/ML_Notes",
    externalLink: true, // Flag to open in new tab instead of modal
    allAINotesLink: "https://github.com/HaiderMalikk/CS_NOTES/tree/main/Machine_Learning", 
  }
];

export const hobbies = [
  {
    title: "Reading",
    icon: book, 
    description:
      "I enjoy reading books on technology, science and Engineering. Reading expands my knowledge and inspires me to learn new things.",
  },
  {
    title: "Cycling",
    icon: bike, 
    description:
      "Im somewhat of a professional cyclist...",
  },
  {
    title: "Teaching",
    icon: teach, 
    description:
    "Before I started my university journey, I spent about 1 year in the education field where i worked as a program assistant in 3 different kids camps, you can learn more about that on my LinkedIn. Now, i enjoy making educational content on my YouTube channel and sharing my knowledge with others. I believe that teaching is a great way to reinforce my own understanding of the material and help others learn.",
  },
];

export { services, technologies, experiences, projects };
