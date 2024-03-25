import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import {
  Container,
  Title,
  Table,
  Group,
  Avatar,
  Text,
  Badge,
  ActionIcon,
  Anchor,
  rem,
  Loader,
  ScrollArea,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { IconPencil, IconTrash } from "@tabler/icons-react";

const roleColors = {
  "Software Developer": "blue",
  "Graphic Designer": "pink",
  "Team Lead": "violet",
  Administrator: "red",
};

const Team = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useContext(AuthContext);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://todo-app-server-vxwh.onrender.com/api/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
      setLoading(false);
    };

    fetchUsers();
  }, [token]);

  const rows = users.map((user) => (
    <Table.Tr key={user._id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar
            src={null}
            alt={`${user.firstName} ${user.lastName}`}
            radius={30}
            size={30}
          >
            {user.firstName.charAt(0)}
            {user.lastName.charAt(0)}
          </Avatar>
          <Text fz="sm" fw={500}>
            {user.firstName} {user.lastName}
          </Text>
        </Group>
      </Table.Td>
      <Table.Td>
        <Badge color={roleColors[user.role]} variant="light">
          {user.role}
        </Badge>
      </Table.Td>
      <Table.Td>
        <Anchor component="button" size="sm">
          {user.email}
        </Anchor>
      </Table.Td>
      <Table.Td>
        <Text fz="sm">{new Date(user.createdAt).toLocaleDateString()}</Text>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon variant="subtle" color="gray">
            <IconPencil
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash
              style={{ width: rem(16), height: rem(16) }}
              stroke={1.5}
            />
          </ActionIcon>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg" my="xl">
      <Title align="center" mb="xl">
        Team Members
      </Title>
      {loading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <ScrollArea
          style={{
            width: "100%",
            overflowX: "auto",

            margin: isMobile ? "0 16px" : "0",
          }}
        >
          <Table
            verticalSpacing="sm"
            style={{
              minWidth: isMobile ? "600px" : "800px",
              width: "100%",
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Employee</Table.Th>
                <Table.Th>Job title</Table.Th>
                <Table.Th>Email</Table.Th>
                <Table.Th>Joined</Table.Th>
                <Table.Th />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </ScrollArea>
      )}
    </Container>
  );
};

export default Team;
