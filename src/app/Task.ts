

export class Task{

    constructor(taskName: string, isComplete: boolean)
    {
        this.task=taskName;
        this.complete = isComplete;
    }

    task: string;
    complete: boolean;
}