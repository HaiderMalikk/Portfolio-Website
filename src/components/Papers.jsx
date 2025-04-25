import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { github } from "../assets"; // Importing the github icon for reference

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

const PaperCard = ({ index, title, description, authors, date, tags, image, pdfUrl, externalLink }) => {
  const [isPDFModalOpen, setIsPDFModalOpen] = useState(false);
  
  // PDF icon (using a placeholder - you can replace with your own icon)
  const pdfIcon = "https://cdn-icons-png.flaticon.com/512/337/337946.png";
  

  return (
    <>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // Increased width from sm:w-[360px] to sm:w-[500px] to make cards wider
        className="bg-cardBg p-5 rounded-2xl sm:w-[500px] w-full relative z-10"
      >
        <div>
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={`${title} paper thumbnail`}
              className="w-full h-full object-cover rounded-2xl"
            />

            {/* Adding the buttons at the top-right corner similar to project cards */}
            <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
              {/* PDF Viewer button */}
              <div
                onClick={() => setIsPDFModalOpen(true)}
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
            <p className="mt-4 text-[#F5EFE7] text-[14px]">{description}</p>
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
            className="mt-3 text-[#EC7FA9] text-[17px] max-w-3xl leading-[30px]"
          >
            The following papers represent my personal and academic research contributions. Each paper explores topics I'm passionate about, showcasing my analytical skills and technical knowledge. Although im still learning how to write good papers, I hope you find them interesting. Click on the PDF icon to read the full paper right here.
          </motion.p>
        </div>
  
        {/* Fixed animation by removing index reference */}
        <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)}>
          <div className="mt-20 flex flex-wrap gap-16 justify-center relative z-10 px-4">
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
