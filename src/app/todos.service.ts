import { Injectable } from '@angular/core';

// Define the structure of a Todo item
export interface Todo {
  title: string;      // The title of the todo item
  completed: boolean; // Indicates whether the todo item is completed
}

// Injectable decorator allows this service to be injected into components
@Injectable({ providedIn: 'root' })
export class TodosService {
    // Array to hold the list of todo items
    todos: Todo[] = [];

    // Method to add a new todo item
    addItem(title: string): void {
      // Create a new todo object with the provided title and set completed to false
      const todo: Todo = {
        title,
        completed: false,
      };
      // Add the new todo object to the todos array
      this.todos.push(todo);
    }

    // Method to remove a specific todo item
    removeItem(todo: Todo): void {
      // Find the index of the todo item to be removed
      const index = this.todos.indexOf(todo);
      // Remove the todo item from the todos array using its index
      this.todos.splice(index, 1);
    }

    // Method to clear all completed todo items
    clearCompleted(): void {
      // Filter the todos array to keep only the items that are not completed
      this.todos = this.todos.filter((todo) => !todo.completed);
    }

    // Method to toggle the completion status of all todo items
    toggleAll(completed: boolean): void {
      // Map through the todos array and set the completed status for each item
      this.todos = this.todos.map((todo) => ({ ...todo, completed }));
    }

    // Method to retrieve todo items based on their completion status
    getItems(type = 'all'): Todo[] {
      // Switch statement to filter todos based on the provided type
      switch (type) {
        case 'active':
          // Return only the active (not completed) todo items
          return this.todos.filter((todo) => !todo.completed);
        case 'completed':
          // Return only the completed todo items
          return this.todos.filter((todo) => todo.completed);
      }

      // If no specific type is provided, return all todo items
      return this.todos;
    }
}
