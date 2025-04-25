import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { logo, menu, close } from "../assets";

// Update the navLinks array to include the papers section
const navLinks = [
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
    id: "papers",
    title: "Papers",
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

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Updated effect to more accurately observe sections
  useEffect(() => {
    const sectionIds = navLinks.map((nav) => nav.id);
    
    // Track which sections are currently visible and their visibility ratio
    const visibleSections = {};
    
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Reduce the effective viewport to get more accurate results
      threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9], // Multiple thresholds for better accuracy
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Update the visibility ratio for this section
        visibleSections[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });
      
      // Find the section with the highest visibility ratio
      let maxRatio = 0;
      let mostVisibleSection = "";
      
      Object.entries(visibleSections).forEach(([id, ratio]) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });
      
      // Only update if we found a visible section
      if (mostVisibleSection && maxRatio >= 0.2) { // Minimum threshold to consider a section "active"
        const activeNav = navLinks.find(nav => nav.id === mostVisibleSection);
        if (activeNav) {
          setActive(activeNav.title);
        }
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        // Initialize all sections as not visible
        visibleSections[id] = 0;
      }
    });

    return () => {
      // Cleanup
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []); // Run only once on component mount

  // Further improved section detection
  useEffect(() => {
    const sectionIds = navLinks.map((nav) => nav.id);
    
    // Track which sections are currently visible and their visibility ratio
    const visibleSections = {};
    
    const observerOptions = {
      root: null,
      // Adjusted rootMargin to better detect smaller sections
      rootMargin: "-10% 0px -10% 0px",
      threshold: [0.05, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // Update the visibility ratio for this section
        visibleSections[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        
        // Debug to see if sections are being detected
        console.log(`Section ${entry.target.id}: ${entry.isIntersecting ? 'visible' : 'hidden'}, ratio: ${entry.intersectionRatio}`);
      });
      
      // Find the section with the highest visibility ratio
      let maxRatio = 0;
      let mostVisibleSection = "";
      
      Object.entries(visibleSections).forEach(([id, ratio]) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });
      
      // Check if we're at the top of the page (hero section)
      const isAtHeroSection = window.scrollY < 100;
      
      // Only update if we found a visible section, lower threshold to 0.05 for smaller sections
      if (mostVisibleSection && maxRatio >= 0.05 && !isAtHeroSection) {
        const activeNav = navLinks.find(nav => nav.id === mostVisibleSection);
        if (activeNav) {
          setActive(activeNav.title);
          console.log(`Setting active section to: ${activeNav.title}`);
        }
      } else if (isAtHeroSection) {
        // Reset active state when at hero section
        setActive("");
        console.log("At hero section, resetting active state");
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        // Initialize all sections as not visible
        visibleSections[id] = 0;
      }
    });

    return () => {
      // Cleanup
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []); // Run only once on component mount

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-black ease-in-out duration-300" : "bg-transparent ease-in-out duration-300"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          
          <p className='text-[#F5EFE7] text-[18px] font-bold cursor-pointer flex '>
            Haider Malik&nbsp;
            <span className='sm:block hidden'> | Portfolio</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-[#EC7FA9]" : "text-[#F5EFE7]"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={(e) => {
                e.preventDefault();
                setActive(nav.title);
                
                // Get the element to scroll to
                const element = document.getElementById(nav.id);
                if (element) {
                  // Calculate position with offset to ensure proper highlighting
                  const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 20;
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-[#F5EFE7]" : "text-[#EC7FA9]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setToggle(!toggle);
                    setActive(nav.title);
                    
                    // Get the element to scroll to
                    const element = document.getElementById(nav.id);
                    if (element) {
                      // Calculate position with offset to ensure proper highlighting
                      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
