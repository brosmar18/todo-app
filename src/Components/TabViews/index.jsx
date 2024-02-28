import React from 'react';
import { Tabs } from '@mantine/core';
import List from '../List';
import CompletedTasks from '../CompletedTasks';

const TabViews = () => {
    return (
        <div className="flex flex-col items-center w-full h-full py-10 px-10">
            <Tabs defaultValue="allTasks">
                <Tabs.List>
                    <Tabs.Tab value="allTasks">All Tasks</Tabs.Tab>
                    <Tabs.Tab value="completedTasks">Completed Tasks</Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="allTasks" pt="xs">
                    <List />
                </Tabs.Panel>
                <Tabs.Panel value="completedTasks" pt="xs">
                    <CompletedTasks />
                </Tabs.Panel>
            </Tabs>
        </div>
    );
};

export default TabViews;
