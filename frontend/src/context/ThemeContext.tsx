import { createContext, useState } from "react";

const ThemeContextProvider = createContext<Object>({
    isDark: false,
    handleChangeTheme: () => {},
});

const ThemeContext = ({ children }: any) => {
    const [isDark, setIsDark] = useState<Boolean>(false);
    const handleChangeTheme = () => {
        setIsDark(!isDark);
    };
    const value = {
        isDark,
        handleChangeTheme,
    };
    return (
        <ThemeContextProvider.Provider value={value}>
            {children}
        </ThemeContextProvider.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
