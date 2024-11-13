import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Todo, TodosService } from '../todos.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    imports: [TodoItemComponent],
    templateUrl: './todo-list.component.html',
})
export class TodoListComponent {
  // Injecting the Location service to manage navigation
  private location = inject(Location);
  // Injecting the TodosService to manage todo items
  private todosService = inject(TodosService);

  // Getter to retrieve todos based on the current filter from the URL
  get todos(): Todo[] {
    // Extracting the filter from the URL path; defaults to 'all' if not found
    const filter = this.location.path().split('/')[1] || 'all';
    // Returning the filtered list of todos from the service
    return this.todosService.getItems(filter);
  }

  // Getter to retrieve only active todos
  get activeTodos(): Todo[] {
    // Returning the list of active todos from the service
    return this.todosService.getItems('active');
  }

  // Method to remove a specific todo item
  removeTodo(todo: Todo): void {
    // Calling the service method to remove the specified todo
    this.todosService.removeItem(todo);
  }

  // Method to toggle the completion status of all todos
  toggleAll(e: Event) {
    // Casting the event target to an HTMLInputElement to access the checked property
    const input = e.target as HTMLInputElement;
    // Calling the service method to toggle all todos based on the input's checked status
    this.todosService.toggleAll(input.checked);
  }
}
