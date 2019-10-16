import { Component } from '@angular/core';

interface TODO { 
  label: string, 
  done: boolean
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';
  todo: TODO [] = [
    {
    label: "Walk the dog.", 
    done: false
  },
  {
    label: "Go to the store.", 
    done: true
  },
  {
    label: "Get gas.", 
    done: false
  },
  {
    label: "Wash the car.", 
    done: false
  },
  ];
  addTodo(newdoLabel){
    var newTodo = {
      label: newdoLabel,
      done: false
    };
    this.todo.push(newTodo);
  }
  deleteTodo(todo){
    this.todo = this.todo.filter ( t => t.label !== todo.label );
  }
}
