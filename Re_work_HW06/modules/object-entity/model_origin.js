import {v4 as randomId} from "uuid"

export class ObjectOrigin{
    constructor(title,body,author,tags){
        this.id = randomId(),
        this.title = title,
        this.body = body,
        this.author = author,
        this.date = new Date().toDateString(),
        this.tags = tags
    }
}
