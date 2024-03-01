import { Select, NumberInput, Switch } from "@mantine/core";
import { SettingsContext } from "../../context/Settings";
import { useContext } from "react";

const SettingsMenu = () => {
    const { settings, setSettings } = useContext(SettingsContext);

    // handler to toggle hideCompleted on switch change
    const handleHideCompletedChange = (checked) => {
        setSettings(prevSettings => ({ ...prevSettings, hideCompleted: checked }));
    };

    // handler to update displayLimit 
    const handleDisplayLimitChange = (value) => {
        setSettings(prevSettings => ({ ...prevSettings, displayLimit: value }));
    };

    // handler to update sortField 
    const handleSortFieldChange = (value) => {
        setSettings(prevSettings => ({ ...prevSettings, sortField: value }));
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
                    checked={settings.hideCompleted}
                    onChange={(event) => handleHideCompletedChange(event.currentTarget.checked)}
                />
            </div>
            <div className="mb-4">
                <NumberInput
                    label='Items per Page'
                    placeholder="Enter a number"
                    min={1}
                    max={30}
                    value={settings.displayLimit}
                    onChange={handleDisplayLimitChange}
                />
            </div>
            <div className="mb-4">
                <Select
                    label='Sort By'
                    placeholder="Pick a value"
                    data={['Name', 'Description', 'Assignee', 'Difficulty']}
                    value={settings.sortField.charAt(0).toUpperCase() + settings.sortField.slice(1)} // Assuming you want to display the capitalized value
                    onChange={handleSortFieldChange}
                />
            </div>
        </div>
    )
}

export default SettingsMenu
