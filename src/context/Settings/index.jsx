import React, { createContext, useState } from 'react';

const defaultSettings = {
    displayLimit: 3,
    hideCompleted: true,
    sortField: 'difficulty'
};

export const SettingsContext = createContext(defaultSettings);

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(defaultSettings);

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};
