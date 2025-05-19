import React from 'react';
import { Helmet } from 'react-helmet';

const MobileFixScript = () => {
  return (
    <Helmet>
      <script>{`
        // Force visibility of project section elements on mobile
        document.addEventListener('DOMContentLoaded', function() {
          // Allow a short delay for React to render
          setTimeout(function() {
            if (window.innerWidth <= 768) {
              var projectSection = document.getElementById('projects');
              if (projectSection) {
                var titles = projectSection.querySelectorAll('h3');
                var paragraphs = projectSection.querySelectorAll('p');
                
                // Force visibility on all titles
                titles.forEach(function(title) {
                  title.style.color = 'white';
                  title.style.opacity = '1';
                  title.style.visibility = 'visible';
                });
                
                // Force visibility on all paragraphs
                paragraphs.forEach(function(p) {
                  p.style.color = 'white';
                  p.style.opacity = '1';
                  p.style.visibility = 'visible';
                });
              }
            }
          }, 500);
        });
      `}</script>
    </Helmet>
  );
};

export default MobileFixScript;
