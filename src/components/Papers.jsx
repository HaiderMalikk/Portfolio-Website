import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets"; // Importing the github icon for reference
import paper1 from '../assets/paper1.png';
import paper2 from '../assets/paper2.png';
import paper3 from '../assets/paper3.png';

const papers = [
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
    image: paper2, // Using an existing image from your project
    pdfUrl: "https://drive.google.com/file/d/1C_0-LcVoGf7Xjw2HtJyq5zyKPWiYOiVX/preview",
  },
  {
    title: "Enhancing Safety Certification of AI-Driven Autonomous Systems through Explainable AI, Regression Testing, and Standardized Regulations",
    description: 
    "Artificial intelligence (AI) has transformed operational capabilities and efficiency through its quick integration into autonomous systems, which span industries like aircraft, healthcare, andtransportation. Nevertheless, this development poses serious difficulties for guaranteeing thesecurity and dependability of these AI-powered systems. For AI applications with probabilisticbehaviours and learning capabilities, traditional certification procedures—which were created fordeterministic systems—are frequently insufficient.",
    authors: "Haider Malik",
    date: "March 2025",
    tags: [
      { name: "Explainable AI", color: "blue-text-gradient" },
      { name: "AI Safety", color: "green-text-gradient" },
      { name: "AI and Ethics", color: "pink-text-gradient" },
    ],
    image: paper1, // Using an existing image from your project
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
    image: paper3, // Using an existing image from your project
    pdfUrl: "https://github.com/HaiderMalikk/CS_NOTES/tree/main/Machine_Learning/ML_Notes",
    externalLink: true, // Flag to open in new tab instead of modal
    allAINotesLink: "https://github.com/HaiderMalikk/CS_NOTES/tree/main/Machine_Learning", 
  }
];

// PDF viewer modal component
const PDFViewerModal = ({ pdfUrl, title, onClose }) => {
  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    // Disable scrolling on body when modal opens
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling when modal closes
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90" onClick={onClose}>
      <div 
        className="relative bg-cardBg rounded-lg w-full max-w-6xl max-h-[100vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button 
          onClick={onClose} 
          className="absolute top-11 right-4 text-[#F5EFE7] text-xl font-bold z-10 bg-tertiary px-3 py-1 rounded-full hover:bg-customPink transition-colors"
        >
          ✕
        </button>
        
        <div className="p-4 mt-8">
          <h2 className="text-[#F5EFE7] text-xl font-bold truncate">{title}</h2>
        </div>
        
        <div className="w-full h-[calc(90vh-70px)]">
          <iframe
            src={pdfUrl}
            className="w-full h-full"
            title={title}
          />
        </div>
      </div>
    </div>
  );
};

const PaperCard = ({ index, title, description, authors, date, tags, image, pdfUrl, externalLink, allAINotesLink }) => {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  
  // PDF icon (using a placeholder - you can replace with your own icon)
  const pdfIcon = "https://cdn-icons-png.flaticon.com/512/337/337946.png";
  
  // Handle PDF icon click - either open in new tab or modal
  const handlePDFClick = () => {
    if (externalLink) {
      window.open(pdfUrl, '_blank');
    } else {
      setIsPDFModalOpen(true);
    }
  };

  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-cardBg p-5 rounded-2xl sm:w-[360px] w-full relative z-10"
      >
        <div>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={`${title} paper thumbnail`}
              className="w-full h-[230px] rounded-2xl"
            />

            {/* Adding the buttons at the top-right corner similar to project cards */}
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              {/* PDF Viewer button */}
              <div
                onClick={handlePDFClick}
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mr-2'
              >
                <img
                  src={pdfIcon}
                  alt='view pdf'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          </div>

          {/* Reduced spacing for card content */}
          <div className="mt-4">
            <h3 className="text-[#F5EFE7] font-bold text-[24px] leading-tight">{title}</h3>
            <p className="mt-4 text-[#F5EFE7] text-[14px] whitespace-pre-line">
              {description}
              {allAINotesLink && (
                <a 
                  href={allAINotesLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-600 underline ml-1 font-bold"
                >
                  All ML Notes
                </a>
              )}
            </p>
          </div>

          {/* Tags with minimal spacing */}
          <div className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${title}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
          {/* authour and date */}
          <div className="mt-2 flex flex-wrap gap-2">
            <p className="text-[14px] text-[#F5EFE7]">
              <span className="font-semibold">Author(s):</span> {authors}
            </p>
            <p className="text-[14px] text-[#F5EFE7]">
              <span className="font-semibold">Date:</span> {date}
            </p>
          </div>
        </div>
      </Tilt>

      {/* PDF Viewer Modal */}
      {isPDFModalOpen && (
        <PDFViewerModal 
          pdfUrl={pdfUrl}
          title={title}
          onClose={() => setIsPDFModalOpen(false)}
        />
      )}
    </>
  );
};


const Papers = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>My Research</p>
          <h2 className={`${styles.sectionHeadText}`}>Papers.</h2>
        </motion.div>
  
        <div className="w-full flex">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-3 text-[#548CA8] text-[17px] max-w-3xl leading-[30px]"
          >
            The following papers represent my personal and academic research contributions. Each paper explores topics I'm passionate about, showcasing my analytical skills and technical knowledge. Although im still learning how to write good papers, I hope you find them interesting. Click on the PDF icon to read the full paper right here.
          </motion.p>
        </div>
  
        {/* Fixed animation by removing index reference */}
        <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)}>
          <div className="mt-20 flex flex-wrap gap-7 relative z-10">
            {papers && papers.length > 0 ? (
              papers.map((paper, index) => (
                <PaperCard 
                  key={`paper-${index}`} 
                  index={index} 
                  {...paper} 
                  pdfUrl={paper.pdfUrl}
                />
              ))
            ) : (
              <p className="text-[#F5EFE7]">No papers available at the moment.</p>
            )}
          </div>
        </motion.div>
      </>
    );
  };

export default SectionWrapper(Papers, "papers");
