import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, ThemeIcon, UnstyledButton, Box } from "@mantine/core";
import {
  IconHome,
  IconChecks,
  IconCalendar,
  IconUsers,
} from "@tabler/icons-react";

const Sidebar = () => {
  return (
    <Box className="hidden md:block h-screen bg-white shadow-lg">
      <Flex direction="column" justify="space-between" p="md" h="100%">
        <Flex direction="column" gap="sm">
          <UnstyledButton
            component={Link}
            to="/"
            className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            <ThemeIcon variant="light" size="md" className="mr-2">
              <IconHome />
            </ThemeIcon>
            <Text>Dashboard</Text>
          </UnstyledButton>

          <UnstyledButton
            component={Link}
            to="/tasks"
            className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            <ThemeIcon variant="light" size="md" className="mr-2">
              <IconChecks />
            </ThemeIcon>
            <Text>Tasks</Text>
          </UnstyledButton>

          <UnstyledButton
            component={Link}
            to="/calendar"
            className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            <ThemeIcon variant="light" size="md" className="mr-2">
              <IconCalendar />
            </ThemeIcon>
            <Text>Calendar</Text>
          </UnstyledButton>

          <UnstyledButton
            component={Link}
            to="/team"
            className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100"
          >
            <ThemeIcon variant="light" size="md" className="mr-2">
              <IconUsers />
            </ThemeIcon>
            <Text>Team</Text>
          </UnstyledButton>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
