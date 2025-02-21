import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {
  todos: Todo[] = [];
  
  addTodo(title: string): void {
    if (!title.trim()) return;
    
    const newTodo: Todo = {
      title: title.trim(),
      completed: false
    };
    
    this.todos.push(newTodo);
  }
  
  completeTodo(index: number): void {
    this.todos[index].completed = true;
    
    // Remove completed todo after 2 seconds (2000ms)
    setTimeout(() => {
      this.deleteTodo(index);
    }, 2000);
  }
  
  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }
  
  getCompletedCount(): number {
    return this.todos.filter(todo => todo.completed).length;
  }
}