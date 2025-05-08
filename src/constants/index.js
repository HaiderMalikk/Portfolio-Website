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
import opencv from "../assets/tech/opencv.svg"
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
    name: "cv",
    icon: opencv,
  },
  {
    name: "sql",
    icon: sql,
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
    title: "AI/ML Engineer Intern",
    company_name: "CAPRiser Advisory",
    iconBg: "#EC7FA9",
    date: "March 2025 - May 2025",
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
    name: "Proximum AI",
    description: "Proximum AI is an innovative project focused on developing advanced AI agents for real-world applications. Our mission is to create intelligent systems that can understand and interact with the world in meaningful ways, pushing the boundaries of what's possible with artificial intelligence. The latest addition to this project is the ADA model. ADA is designed to be a JARVIS-like AI assistant that can answer questions like Siri but with enhanced contextual awareness of the world around you. As an admin, you have complete control over every action and capability of this agent.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Sqlite", color: "green-text-gradient" },
      { name: "AI/ML", color: "green-text-gradient" },
      { name: "Computer Vision", color: "pink-text-gradient" },
      { name: "AI Agents", color: "pink-text-gradient" },
      { name: "OpenAI API", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/Proximum-AI",
  },
  {
    name: "Reddish Trends",
    description: "Reddish Trends is a Reddit powered stock market analyzer. This is a unique website that uses reddit to uncover stock data and anaylize sentiment data using algorithms, add financial data using yahoo finance and provide feedback using AI. ",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Flask", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/HaiderMalikk/Reddish-Trends",
    live_site_link: "https://www.reddishtrends.com", // This project has a website link
  },
  {
    name: "Mood Atlas",
    description: "Mood Finder is an app that recommends destinations based on user moods or feelings. It uses Google Places API for location data and Google Maps API to display the recommended places. It uses OpenAI API to analyze the mood of the user and recommend places based on that.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Flask", color: "blue-text-gradient" },
      { name: "SpringBoot", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/HaiderMalikk/Mood-Atlas",
    live_site_link: "https://mood-atlas.vercel.app", // This project has a website link
  },
  // The rest of the projects have only GitHub links (no live_site_link property)
  {
    name: "Neural Network Circuit Optimizer",
    description: "The Neural Network Circuit Optimizer, built on my custom digital circuit simulator, uses AI and machine learning to optimize simple digital circuits.",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "C++", color: "green-text-gradient" },
      { name: "Tensorflow", color: "blue-text-gradient" },
      { name: "PyTorch", color: "blue-text-gradient" },
      { name: "Pandas", color: "blue-text-gradient" },
      { name: "Neural Networks", color: "pink-text-gradient" },
      { name: "Machine Learning", color: "pink-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "SQL", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/HaiderMalikk/Neural-Network-Circuit-Optimizer",
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
    source_code_link: "https://github.com/HaiderMalikk/Supa-Charger-App",
  },
  {
    name: "Smart Paper Summarizer",
    description:
      "Smart Paper Summarizer is an AI tool that summarizes educational papers. It uses PyPDF to extract text, OpenAI’s Ada for text embeddings, and Chroma to store and query these embeddings. The context is then passed to GPT-4 mini, which generates concise and accurate summaries.",
    tags: [
      { name: "Streamlit", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "Chroma", color: "pink-text-gradient" },
      { name: "Pandas", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/HaiderMalikk/Smart-Paper-Summarizer",
  },
  {
    name: "Chess Engine and Smart Bot",
    description:
      "My Chess Game Made with Pygame. The game includes a chess game engine, chess bot and its smart move finder. The game can be played with another person or a Chess bot powered by powerful algorithms and data. ELO: 1200",
    tags: [
      { name: "Python", color: "green-text-gradient" },
      { name: "Pygame", color: "blue-text-gradient" },
      { name: "AI", color: "pink-text-gradient" },
      { name: "Chess", color: "pink-text-gradient" },
      { name: "Algorithms", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/HaiderMalikk/Chess",
  },
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
  }
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
      "Im somewhat of a professional cyclist...",
  },
  {
    title: "Teaching",
    icon: teach, 
    description:
    "Before I started my university journey, I spent about 1 year in the education field where i worked as a program assistant in 3 different kids camps. Now, i enjoy making educational content on my YouTube channel and sharing my knowledge with others. I believe that teaching is a great way to reinforce my own understanding of the material and help others learn.",
  },
];

export { services, technologies, experiences, projects };
