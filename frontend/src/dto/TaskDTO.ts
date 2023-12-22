export class TaskDTO {
    _id: string;
    title: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    __v: number;

    constructor(_id: string, title: string, description: string, createdAt: string, updatedAt: string, __v: number) {
        this._id = _id;
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.__v = __v;
    }
}