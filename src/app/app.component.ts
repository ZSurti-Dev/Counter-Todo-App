import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './todos/todos.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodosComponent],
  template: `
    <div class="app-container">
      
      <app-todos></app-todos>
    </div>
  `,
  styles: [`
    .app-container {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
      h1 {
      color: #4CAF50;
      text-align: center;
      margin-bottom: 2rem;
    }
    `],
})
export class AppComponent {
  title = 'Todo-App';
}
