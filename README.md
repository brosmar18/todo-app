# LAB - Class 31

## Project: ToDo App

### Author: Bryan O. Garduno Gonzalez

### Problem Domain

In this phase of the ToDo App, significant enhancements were made to improve user customization and application efficiency. By integrating the Context API, the app now allows users to modify default settings, including the number of tasks displayed per page, whether to hide or display completed tasks, and a sort by option. These settings adjustments are facilitated through a new component, which can be accessed directly from the main navigation, ensuring ease of use and improved navigation. Crucially, users' updated preferences are saved to Local Storage, enabling the application to retrieve and apply these settings upon startup. This development ensures a more personalized and seamless user experience, catering to individual preferences and enhancing overall task management.

### Links and Resources

- Main Branch [Deployment](https://todo-app-brosmar18.vercel.app/)

### Collaborators

- **ChatGPT by OpenAI**: Used as a programming partner for brainstorming ideas, debugging code, formulating tests, and drafting documentation.

### Setup

#### `.env` requirements (where applicable)

A .env file is included in local repository. A .env-sample file is uploaed to the remote repo so collaborators understand what environmental variables are being used.

#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

## Features

### Context-Driven Configuration

The latest enhancements in the ToDo App introduce a refined approach to managing global settings and task operations through the Context API, focusing on user customization and efficient task management. The app utilizes two main contexts, `SettingsContext` and `TasksContext`, to centralize configuration and streamline task management processes.

`SettingsContext` has been upgraded to dynamically manage and persist user preferences for the application's display settings. It allows users to customize how many tasks are shown per page, whether completed tasks are displayed, and the criteria for sorting tasks, such as by task name. These preferences are stored in Local Storage, ensuring that users' customization choices are retained and automatically applied upon each app startup, fostering a personalized user experience.

`TasksContext` offers an organized framework for task operations, including adding, deleting, completing, and permanently removing tasks. This context now also supports sorting tasks based on the user-defined settings in `SettingsContext`, ensuring a consistent and intuitive task management experience. Tasks are saved to Local Storage, allowing for persistence and retrieval of user data, enhancing the app's usability and reliability.

### Modern UI with Mantine

The app incorporates the Mantine library to provide a modern and cohesive user interface. The `MantineProvider` wraps the entire application, ensuring that Mantine's styles and components are available throughout the app, promoting a uniform look and feel.

### Dynamic Routing with React Router

Utilizing `react-router-dom`, the app defines a structured layout and navigation system. The `App` component sets up a layout that includes a `Navbar`, a main content area (`Outlet`), and a `Footer`. This structure is complemented by dynamic routing, allowing for seamless navigation between different pages like Home, Tasks, Calendar, and Account without reloading the page.

### Task Management and UI Interaction

The application's task management functionalities have been enhanced to provide a more comprehensive and user-friendly experience. Users are now equipped with advanced capabilities for managing their tasks, reflecting a significant improvement in the application's usability:

- **Adding Tasks**: Users can now add tasks with detailed properties including "Name", "Description", "Assignee", and a "Difficulty" level, with the options being 'Easy', 'Medium', and 'Hard'. This allows for a more organized and specific categorization of tasks, improving the task management process.
- **Rendering Tasks**: The added tasks are displayed in a structured manner using the `<List />` component, which organizes the tasks within a table format. This enhances the visual presentation and accessibility of tasks, making it easier for users to navigate and manage their to-do list.
- **Completing Tasks**: Users have the ability to mark tasks as completed, further streamlining the task management experience. All completed tasks are aggregated and displayed by the `<CompletedTasks />` component, providing a clear overview of accomplishments.

### Trash Bin Feature

A key addition to the application's task management capabilities is the Trash Bin feature, designed to offer users greater control and flexibility over their task deletions. This feature addresses the need for a safety net when tasks are removed, either intentionally or by mistake, enhancing the user experience with a layer of protection against accidental deletions.

- **Deleting Tasks**: Users have the ability to delete tasks from their current list. Instead of permanent deletion, tasks are moved to a dedicated "Deleted Tasks" area. This approach mimics the functionality of a trash bin, allowing users to reconsider their decision before finalizing the deletion of any task.
- **Trash Bin Management**: The tasks marked for deletion are collected and displayed in the "Deleted Tasks" window, rendered by the `<DeletedTasks />` component. Within this window, users are presented with two options: they can either restore the deleted task back to their active list if the deletion was unintended or permanently remove the task from the trash bin. This dual-option functionality provides a fail-safe, ensuring that tasks are only permanently deleted when the user is certain of their decision.

The introduction of the Trash Bin feature significantly augments the application's task management system, offering users a forgiving mechanism to manage task deletions and recover from accidental losses, thereby enhancing overall user satisfaction and the usability of the application.

### Responsive Navbar with Framer Motion

The ToDo App introduces a responsive `Navbar` component, enhanced with animations using `framer-motion`. This feature enables a smooth transition for the mobile menu, creating an engaging user experience. The navbar dynamically adjusts to screen size, displaying a full menu for desktop views and a collapsible menu for mobile views, triggered by the `IconMenu2` icon. The collapsible state is managed by a `useState` hook, and the transition effect is applied as the menu slides in from the side, providing a modern and interactive navigation system.

### Custom Form Hook for Task Management

A custom `useForm` hook streamlines form handling within the app, encapsulating functionality for managing form state, handling changes, and submitting form data. This abstraction simplifies form implementation across the app, ensuring consistency and reducing boilerplate code. The hook is utilized in the `Form` component, where users can add new tasks, specifying details such as the task description, assignee, and difficulty level. The form leverages the `useTasks` context for adding tasks to the global state, demonstrating a seamless integration of custom hooks and context for state management.

### Task Addition with Dynamic Form

The `Form` component, empowered by the `useForm` hook, offers a user-friendly interface for adding tasks. It includes input fields for task details, assignee, and a difficulty level slider, providing an intuitive way for users to define their tasks. Upon submission, tasks are assigned a unique ID using `uuid`, marked as incomplete by default, and added to the task list through the `addTask` function from `TasksContext`. This feature not only enhances the app's interactivity but also showcases the effective use of custom hooks, context API, and external libraries to manage and expand the app's functionality.

### User Authentication and Authorization

The ToDo App now includes user authentication and authorization, ensuring secure access based on user roles and permissions.

#### Login/Auth React Context

- **User Authentication**: The `AuthContext` manages the user's login state and user object. It provides functions for logging in and out, as well as checking user capabilities.
- **Capability-based Authorization**: The `can` function in the `AuthContext` checks if the user has a specific capability, allowing for fine-grained access control.
- **Persistent Login**: The user's login state and token are stored in the browser's local storage, allowing them to remain logged in even after refreshing the page.

#### Protected Routes and Conditional Rendering

- **Protected Routes**: The `App` component uses React Router to define protected routes that require authentication. If the user is not logged in, they are redirected to the login page.
- **Conditional Rendering**: The `App` component conditionally renders components and pages based on the user's login state. Authenticated users have access to the main application layout and its routes, while unauthenticated users are limited to the login page.

#### Capability-based Access Control in Components

- **Task List Component**: The `TaskList` component uses the `can` function from the `AuthContext` to conditionally render task management features. Users with the "update" capability can mark tasks as completed, and users with the "delete" capability can delete tasks.
- **Task Form Component**: The `TaskForm` component also uses the `can` function to control access to task creation. If the user has the "create" capability, they can access the form to add new tasks. Otherwise, a message is displayed indicating that they don't have permission to create tasks.

By leveraging the `AuthContext` and the `can` function, the ToDo App provides a secure and personalized experience based on user roles and permissions. The app ensures that users can only access and perform actions they are authorized to, enhancing the overall security and integrity of the application.

## Tests

### Testing Setup and Implementation

- **Testing Framework**: Utilization of Vitest for effective React component and application logic testing.

- **Test Environment Configuration**: Adjustments in `vite.config.js` and `.eslintrc.cjs` to align with the React Testing Library.

- **Testing Scripts**: The `package.json` includes a test script for executing tests with coverage reporting.

- **React Testing Integration**: Empowers user-centric testing for React components.

- **Global Test Setup**: Implemented in `tests/setup.js`, standardizing testing behaviors, including cleanup after each test.

### Component Testing

The ToDo App emphasizes thorough testing for each of its components to ensure functionality and user satisfaction. Here's an overview of the testing approaches for key components:

#### Form Component (`Form/Form.test.jsx`)

The tests for the Form component focus on its rendering and interaction capabilities. It includes checks to ensure all form elements are correctly displayed, such as input fields for task details, assignee, and difficulty level, as well as the submit button. Additionally, it tests user interactions with the form, verifying that input values are accurately captured and handled within the component.

#### Navbar Component (`Navbar/Navbar.test.jsx`)

The Navbar component tests ensure that the navbar is properly rendered, including the display of the logo and navigation links for different sections of the app like Home, Tasks, Calendar, and Account. Tests also cover the responsive aspects of the Navbar, particularly the functionality of the mobile menu icon and the display of navigation links in a mobile view.

#### Footer Component (`Footer/Footer.test.jsx`)

Testing for the Footer component verifies its presence and the correct rendering of social media icons, such as Instagram, Twitter, and YouTube. The tests confirm that the footer is displayed with all social icons, ensuring the app's footer maintains consistent branding and provides user access to social channels.

#### AddTask Component (`AddTask.test.jsx`)

Testing of the AddTask component ensures it effectively facilitates the task addition process. The tests verify that the component not only renders the form accurately but also captures user inputs for task details, including name, description, assignee, and difficulty. A key aspect of testing includes confirming the successful display of a confirmation modal upon task submission, offering immediate feedback to the user. This component's tests underscore its role in enhancing the app's task management capabilities, ensuring a user-friendly experience from task creation to submission.

These tests collectively ensure the components of the ToDo App are reliable and function as intended, providing a solid user experience.

### Running the Tests

To run the tests, execute the `npm test` command.

### Incomplete or Skipped Tests

At this stage, all essential component tests have been implemented. Any future tests or enhancements will be noted in subsequent updates or phases.

#### UML

![Diagram](./src/assets/UML/toDoDiagram.png);
