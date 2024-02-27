import { createContext, useState } from 'react';

const defaultSettings = {
    displayLimit: 3,
    hideCompleted: true,
    sortField: 'difficulty',
    difficultyOrder: { Easy: 1, Medium: 2, Hard: 3 }
};;

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(defaultSettings);

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};
