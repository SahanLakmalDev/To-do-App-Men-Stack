export class TaskDTO {
    id: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;

    constructor(id: string, title: string, description: string, createdAt: Date, updatedAt: Date, __v: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.__v = __v;
    }
}