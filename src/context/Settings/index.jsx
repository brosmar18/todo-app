import React, { createContext, useState } from 'react';

export const SetingsContext = createContext({
    displayLimit: 3,
    hideCompleted: true,
    sortField: 'difficulty'
});

const Settings = ({ children }) => {
    return (
        <SetingsContext.Provider value={settings}>
            {children}
        </SetingsContext.Provider>
    );
};

export default Settings;