import { createContext, useState, useContext, useEffect } from 'react';
import { useTasks } from '../TaskContext';

const defaultSettings = {
    displayLimit: 3,
    hideCompleted: true,
    sortField: 'difficulty',
};

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(defaultSettings);
    const { tasks, setSortedTasks } = useTasks();

    useEffect(() => {

        const sortTasks = () => {
            const sortOrder = {
                'Easy': 1,
                'Medium': 2,
                'Hard': 3
            };

            setSortedTasks([...tasks].sort((a, b) => {
                if (settings.sortField === 'difficulty') {
                    return sortOrder[a.difficulty] - sortOrder[b.difficulty];
                }
                if (settings.sortField === 'name' || settings.sortField === 'description' || settings.sortField === 'assignee') {
                    return a[settings.sortField].localeCompare(b[settings.sortField]);
                }
                return 0;
            }));
        };

        sortTasks();
    }, [tasks, settings.sortField, setSortedTasks]);

    return (
        <SettingsContext.Provider value={settings}>
            {children}
        </SettingsContext.Provider>
    );
};
