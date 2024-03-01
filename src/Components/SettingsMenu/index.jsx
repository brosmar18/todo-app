import { Select, NumberInput, Switch, Button } from "@mantine/core";
import { SettingsContext } from "../../context/Settings";
import { useContext, useState } from "react";

const SettingsMenu = () => {
    const { settings, setSettings } = useContext(SettingsContext);
    // Create a local state to hold temporary settings
    const [tempSettings, setTempSettings] = useState(settings);

    // Update local state instead of global state
    const handleHideCompletedChange = (checked) => {
        setTempSettings(prevTempSettings => ({ ...prevTempSettings, hideCompleted: checked }));
    };

    const handleDisplayLimitChange = (value) => {
        setTempSettings(prevTempSettings => ({ ...prevTempSettings, displayLimit: value }));
    };

    const handleSortFieldChange = (value) => {
        setTempSettings(prevTempSettings => ({ ...prevTempSettings, sortField: value }));
    };

    // Only update the global settings when the Save button is clicked
    const handleSaveSettings = () => {
        setSettings(tempSettings);
        console.log('Settings saved:', tempSettings);
        alert('Settings have been saved successfully!');
    };

    return (
        <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 flex flex-col w-full md:w-1/3 lg:w-1/4 mx-auto">
            <div className="mb-6">
                <h2 className="text-gray-800 text-2xl font-semibold mb-2 text-center">Update Settings</h2>
            </div>
            <div className="mb-4">
                <p className="block text-gray-700 text-sm font-bold mb-2">
                    Show Completed
                </p>
                <Switch
                    checked={tempSettings.hideCompleted}
                    onChange={(event) => handleHideCompletedChange(event.currentTarget.checked)}
                />
            </div>
            <div className="mb-4">
                <NumberInput
                    label='Items per Page'
                    placeholder="Enter a number"
                    min={1}
                    max={30}
                    value={tempSettings.displayLimit}
                    onChange={value => handleDisplayLimitChange(value)}
                />
            </div>
            <div className="mb-4">
                <Select
                    label='Sort By'
                    placeholder="Pick a value"
                    data={['Name', 'Description', 'Assignee', 'Difficulty']}
                    value={tempSettings.sortField.charAt(0).toUpperCase() + tempSettings.sortField.slice(1)} 
                />
            </div>
            <Button variant="outline" onClick={handleSaveSettings} className="mt-4">Save Settings</Button>
        </div>
    );
};

export default SettingsMenu;
