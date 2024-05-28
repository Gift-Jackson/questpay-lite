import { useEffect, useState } from "react"


const useTheme = () => {
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
      );
    
      useEffect(() => {
        if (darkMode) {
          document.body.classList.add("dark");
          document.querySelector('meta[name="theme-color"]').setAttribute("content", "#20212d");
        } else {
          document.body.classList.remove("dark");
          document.querySelector('meta[name="theme-color"]').setAttribute("content", "#fefefe");
        }
      }, [darkMode]);
    
      const toggleTheme = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem("darkMode", newDarkMode);
      };
    return {
      toggleTheme, darkMode, setDarkMode
  }
}

export default useTheme