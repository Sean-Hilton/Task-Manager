import { Component } from '@angular/core';
import {Task} from "./Task"
import {TaskList} from "./TaskList"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-manager';
  placeholder: string = "Enter Task";
  showComplete: boolean = false;
  private list = new TaskList("Sean", [
     new Task("Pour Coffee", false),
     
  ]);



get userName(): string{

  return this.list.userName;

}

get itemCount(): number {

  return this.items.length;
  
}

get items(): readonly Task[]{
  return this.list.items.filter(item=>this.showComplete||!item.complete);
}

addItem(newItem:string)
{
  if(newItem!="")
  {
    this.list.addItem(newItem);
    this.placeholder = "";
   
  }
}


}
