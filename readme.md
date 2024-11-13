# EaziTodo

## Description

EaziTodo is a simple yet powerful task management application built with [Angular](https://angular.dev) version 17.0.5. This application allows users to create, read, update, and delete tasks efficiently, providing a clean and user-friendly interface for managing daily activities.

## Features

- **Add Tasks**: Easily add new tasks to your todo list.
- **Edit Tasks**: Modify existing tasks to update their details.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Toggle Completion**: Mark tasks as complete or incomplete.
- **Filter Tasks**: View all tasks, only active tasks, or completed tasks.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.

## Technologies Used

- **Frontend**: Angular 17.0.5
- **Styling**: CSS, with styles sourced from [todomvc-app.css](https://www.npmjs.com/package/todomvc-app-css) and [todomvc-common](https://www.npmjs.com/package/todomvc-common).
- **Routing**: Hash routing for consistent navigation.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/eazitodo.git
   cd eazitodo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   ng serve
   ```

4. **Open your browser** and navigate to `http://localhost:4200/`.

## Usage

Once the application is running, you can:

- **Add a new task** by typing in the input field and pressing Enter.
- **Edit a task** by clicking on it and modifying the text.
- **Delete a task** by clicking the delete button next to it.
- **Toggle the completion status** by clicking the checkbox next to the task.
- **Filter tasks** using the provided options to view all, active, or completed tasks.

## Code Structure

The application is organized into components, services, and models, following Angular best practices:

- **Components**: Each component has its own folder containing the HTML, CSS, and TypeScript files.
  - `todo-list`: Displays the list of todos.
  - `todo-item`: Represents a single todo item.
  - `header`: Contains the application header.
  - `footer`: Contains the application footer.

- **Services**: The `todos.service.ts` handles all CRUD operations for the todo data.

- **Models**: The `todo.model.ts` defines the structure of a todo item.

## Running Tests

To ensure the application works as expected, you can run unit tests and end-to-end tests:

- **Unit Tests**:
  ```bash
  ng test
  ```

- **End-to-End Tests**:
  ```bash
  ng e2e
  ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Further Help

For more help with the Angular CLI, use:
