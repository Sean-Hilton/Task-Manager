import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import {Task} from "./Task";

export class TaskList{

    constructor(public userName: string, private taskList: Task[] = [])
    {}

    get items(): readonly Task[]{
        return this.taskList;
    }

    addItem(task: string){
        this.taskList.push(new Task(task,false));
        
    }
}