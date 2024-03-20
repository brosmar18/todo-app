import { useState, useContext } from "react";
import { logo, avatar } from "../../assets";
import { AuthContext } from "../../context/AuthContext";
import {
  Box,
  Button,
  Menu,
  Burger,
  Drawer,
  ScrollArea,
  UnstyledButton,
  Text,
  Avatar,
  Group,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <Box height={64} className="bg-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Logo" width={50} height={50} />
            <h2 className="ml-2 text-xl font-bold text-gray-800 sm:text-2xl md:text-3xl">
              Task Manager
            </h2>
          </div>
          <div className="hidden items-center md:flex">
            <Menu
              trigger="hover"
              openDelay={100}
              closeDelay={400}
              transitionProps={{ transition: "pop-top-right" }}
            >
              <Menu.Target>
                <UnstyledButton className="flex items-center space-x-2 rounded-md px-3 py-2 hover:bg-gray-100">
                  <Avatar src={avatar} radius="xl" />
                  <div className="flex flex-col">
                    <Text size="sm" fw={500}>
                      {user.firstName} {user.lastName}
                    </Text>
                    <Text c="dimmed" size="xs">
                      {user.email}
                    </Text>
                  </div>
                  <IconChevronRight size={14} stroke={1.5} />
                </UnstyledButton>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item component="a" href="#">
                  Account Info
                </Menu.Item>
                <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <div className="flex items-center md:hidden">
            <Burger opened={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>
        </div>
      </div>
      <Drawer
        opened={isMobileMenuOpen}
        onClose={toggleMobileMenu}
        padding="xl"
        size="md"
        position="right"
        className="md:hidden"
      >
        <ScrollArea style={{ height: "calc(100vh - 60px)" }} type="always">
          <Group mb="md">
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius="xl"
            />
            <div>
              <Text size="sm" fw={500}>
                {user.firstName} {user.lastName}
              </Text>
              <Text c="dimmed" size="xs">
                {user.email}
              </Text>
            </div>
          </Group>
          <UnstyledButton className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800">
            <Text>Account Info</Text>
          </UnstyledButton>
          <UnstyledButton
            className="block w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-800"
            onClick={handleLogout}
          >
            <Text>Logout</Text>
          </UnstyledButton>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Navbar;
