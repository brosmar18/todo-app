import { fireEvent, render, screen } from '@testing-library/react';
import { TasksProvider } from '../../context/TaskContext';
import Form from '.';

describe('Form Component', () => {
    beforeEach(() => {
        render(
            <TasksProvider>
                <Form />
            </TasksProvider>
        );
    });

    test('renders all form elements correctly', () => {
        expect(screen.getByTestId('form-container')).toBeInTheDocument();
        expect(screen.getByTestId('form-title')).toHaveTextContent('Add Task');
        expect(screen.getByTestId('task-form')).toBeInTheDocument();
        expect(screen.getByTestId('task-input')).toBeInTheDocument();
        expect(screen.getByTestId('description-input')).toBeInTheDocument();
        expect(screen.getByTestId('assignee-input')).toBeInTheDocument();
        expect(screen.getByTestId('difficulty-select')).toBeInTheDocument();
        expect(screen.getByTestId('submit-button')).toBeInTheDocument();
    });

    test('allows user to input task name', () => {
        const taskInput = screen.getByTestId('task-input');
        fireEvent.change(taskInput, { target: { value: 'Test Task' } });
        expect(taskInput.value).toBe('Test Task');
    });

    test('allows user to input task description', () => {
        const descriptionInput = screen.getByTestId('description-input');
        fireEvent.change(descriptionInput, { target: { value: 'Test Description' } });
        expect(descriptionInput.value).toBe('Test Description');
    });

    test('allows user to input assignee name', () => {
        const assigneeInput = screen.getByTestId('assignee-input');
        fireEvent.change(assigneeInput, { target: { value: 'Test Assignee' } });
        expect(assigneeInput.value).toBe('Test Assignee');
    });

    test('allows user to select difficulty', () => {
        const difficultySelect = screen.getByTestId('difficulty-select');
        fireEvent.change(difficultySelect, { target: { value: 'Hard' } });
        expect(difficultySelect.value).toBe('Hard');
    });

});
