import { Menu, Switch, Text, rem } from '@mantine/core';
import {
    IconSettings,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconTrash,
    IconArrowsLeftRight,
} from '@tabler/icons-react';

const SettingsMenu = () => {
    return (
        <>
            <Menu shadow="md" width={200}>
                <Menu.Target>
                    <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit" data-testid="submit-button">Settings</button>
                </Menu.Target>

                <Menu.Dropdown>
                    <Menu.Label>Application</Menu.Label>
                    <Menu.Item>
                        <Switch
                            label="Show Completed"
                        />
                    </Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </>
    )
}

export default SettingsMenu;