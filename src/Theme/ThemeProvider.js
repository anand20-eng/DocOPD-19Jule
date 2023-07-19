import React, { useContext, useState, useEffect } from 'react';
import THEMES from "./Theme";
import { THEME_ID, getPreference, setPreference } from "../utils";

const ThemeContext = React.createContext();
export function withTheme(Component) {
    return props => { 
        const { themeID, setThemeID } = useContext(ThemeContext);

        const getTheme = themeID => THEMES.find(theme => theme.key === themeID);
        const setTheme = themeID => {
            setPreference(THEME_ID, themeID);
            setThemeID(themeID);
        };

        return <Component
            {...props}
            themeID={themeID}
            theme={getTheme(themeID)}
            setTheme={setTheme} />;
    };
}

export const ThemeContextProvider = ({ children }) => {
    const [themeID, setThemeID] = useState();
    useEffect(() => {
        (async () => {
            const storedThemeID = await getPreference(THEME_ID)
            if (storedThemeID) setThemeID(storedThemeID);
            else setThemeID(THEMES[0].key);
        })();
    }, []);

    return (
        <ThemeContext.Provider value={{ themeID, setThemeID }}>
            {!!themeID ? children : null}
        </ThemeContext.Provider>
    );
};
