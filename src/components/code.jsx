import React, { useState, useEffect } from 'react';

const Code = () => {
  const [displayState, setDisplayState] = useState({
    initialDelay: true,
    showTerminalPrompt: false,
    pythonText: "",
    showPythonPrompt: false,
    printCommandText: "",
    showOutput: false,
    showFinalPrompt: false
  });
  const [cursorVisible, setCursorVisible] = useState(true);
  
  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  useEffect(() => {
    // Initial 500ms delay before showing terminal prompt
    if (displayState.initialDelay && !displayState.showTerminalPrompt) {
      const timer = setTimeout(() => {
        setDisplayState(prev => ({
          ...prev,
          initialDelay: false,
          showTerminalPrompt: true
        }));
      }, 500);
      return () => clearTimeout(timer);
    }
    
    // 300ms delay before starting to type "python3"
    if (displayState.showTerminalPrompt && displayState.pythonText.length === 0) {
      const timer = setTimeout(() => {
        setDisplayState(prev => ({
          ...prev,
          pythonText: "p"
        }));
      }, 300);
      return () => clearTimeout(timer);
    }
    
    // Type out "python3"
    if (displayState.showTerminalPrompt && displayState.pythonText.length > 0 && 
        displayState.pythonText.length < "python3".length) {
      const timer = setTimeout(() => {
        setDisplayState(prev => ({
          ...prev,
          pythonText: "python3".substring(0, prev.pythonText.length + 1)
        }));
      }, 100);
      return () => clearTimeout(timer);
    }
    
    // Show Python prompt after typing "python3"
    if (displayState.pythonText === "python3" && !displayState.showPythonPrompt) {
      const timer = setTimeout(() => {
        setDisplayState(prev => ({
          ...prev,
          showPythonPrompt: true
        }));
      }, 300);
      return () => clearTimeout(timer);
    }
    
    // Type out print command
    if (displayState.showPythonPrompt && displayState.printCommandText.length < "print(\"Hi There!\")".length) {
      const timer = setTimeout(() => {
        setDisplayState(prev => ({
          ...prev,
          printCommandText: "print(\"Hi There!\")".substring(0, prev.printCommandText.length + 1)
        }));
      }, 100);
      return () => clearTimeout(timer);
    }
    
    // Show output after typing print command
    if (displayState.printCommandText === "print(\"Hi There!\")" && !displayState.showOutput) {
      const timer = setTimeout(() => {
        setDisplayState(prev => ({
          ...prev,
          showOutput: true
        }));
      }, 300);
      return () => clearTimeout(timer);
    }
    
    // Show final prompt
    if (displayState.showOutput && !displayState.showFinalPrompt) {
      const timer = setTimeout(() => {
        setDisplayState(prev => ({
          ...prev,
          showFinalPrompt: true
        }));
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [displayState]);
  
  return (
    <aside className="bg-black text-[#F5EFE7] p-6 rounded-lg w-full max-w-lg font-mono">
      <div className="flex justify-between items-center">
        <div className="flex space-x-2 text-red-500">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <p className="text-sm">python</p>
      </div>
      <div className="mt-4">
        {displayState.showTerminalPrompt && (
          <p className="text-[#EC7FA9]">
            <span className="text-[#F5EFE7]">haidermalik@Haiders-MBP ~ %</span> {displayState.pythonText}
            {!displayState.showPythonPrompt && cursorVisible && <span className="animate-pulse">_</span>}
          </p>
        )}
        
        {displayState.showPythonPrompt && (
          <p className="text-[#EC7FA9]">
            <span className="text-[#F5EFE7]">&gt;&gt;&gt;</span> {displayState.printCommandText}
            {!displayState.showOutput && cursorVisible && <span className="animate-pulse">_</span>}
          </p>
        )}
        
        {displayState.showOutput && (
          <p className="text-[#F5EFE7]">Hi There!</p>
        )}
        
        {displayState.showFinalPrompt && (
          <p className="text-[#EC7FA9]">
            <span className="text-[#F5EFE7]">&gt;&gt;&gt;</span> {cursorVisible && <span className="animate-pulse">_</span>}
          </p>
        )}
      </div>
    </aside>
  );
};

export default Code;
