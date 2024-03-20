import { useState, useContext } from "react";
import { logo } from "../../assets";
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
} from "@mantine/core";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { logout } = useContext(AuthContext);

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
                <Button
                  variant="default"
                  size="sm"
                  className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                >
                  Joe
                  <svg
                    className="-mr-1 h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
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
