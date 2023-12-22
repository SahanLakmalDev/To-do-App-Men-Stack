export class TaskDTO {
    id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;

    constructor(id: string, title: string, description: string, createdAt: string, updatedAt: string, __v: number) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.__v = __v;
    }
}