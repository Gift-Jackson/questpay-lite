import { createContext} from "react";
import PropTypes from "prop-types";
import useTheme from "../Hooks/useTheme";
export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    const {toggleTheme, darkMode, setDarkMode} = useTheme()
    
    return (
        <ThemeContext.Provider value={{toggleTheme,darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
  )
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeContextProvider;
