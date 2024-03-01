import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { TasksProvider } from "../../../context/TaskContext";
import { MantineProvider } from "@mantine/core";
import AddTask from ".";

describe('AddTask', () => {
    beforeEach(() => {
        render(
            <Router>
                <MantineProvider>
                    <TasksProvider>
                        <AddTask />
                    </TasksProvider>
                </MantineProvider>
            </Router>
        );
    });
    test('submits the form and displays success modal', async () => {
        // Setup: fill in the form
        fireEvent.change(screen.getByTestId('task-name-input'), { target: { value: 'Test Task' } });
        fireEvent.change(screen.getByTestId('task-description-input'), { target: { value: 'This is a test description.' } });
        fireEvent.change(screen.getByTestId('assignee-input'), { target: { value: 'Test Assignee' } });
        fireEvent.change(screen.getByTestId('difficulty-select'), { target: { value: 'Hard' } });

        // submit the form
        fireEvent.submit(screen.getByTestId('add-task-form'));


        expect(await screen.findByTestId('success-modal')).toBeInTheDocument();


        expect(screen.getByTestId('success-icon')).toBeInTheDocument();


        expect(screen.getByTestId('see-all-tasks-link')).toHaveAttribute('href', '/tasks');
    });

    test('renders the AddTask form', () => {
        expect(screen.getByTestId('add-task-container')).toBeInTheDocument();
        expect(screen.getByTestId('add-task-title')).toHaveTextContent('Add Task');
        expect(screen.getByTestId('add-task-form')).toBeInTheDocument();
    });

    test('allows input for task name, description, and assignee', () => {
        fireEvent.change(screen.getByTestId('task-name-input'), { target: { value: 'Test Task' } });
        fireEvent.change(screen.getByTestId('task-description-input'), { target: { value: 'This is a test description.' } });
        fireEvent.change(screen.getByTestId('assignee-input'), { target: { value: 'Test Assignee' } });
        expect(screen.getByTestId('task-name-input')).toHaveValue('Test Task');
        expect(screen.getByTestId('task-description-input')).toHaveValue('This is a test description.');
        expect(screen.getByTestId('assignee-input')).toHaveValue('Test Assignee');
    });

    test('allows selection of difficulty level', () => {
        fireEvent.change(screen.getByTestId('difficulty-select'), { target: { value: 'Hard' } });
        expect(screen.getByTestId('difficulty-select')).toHaveValue('Hard');
    });


});