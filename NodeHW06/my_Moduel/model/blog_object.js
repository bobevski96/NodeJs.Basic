import { v4 as randomId } from "uuid";

export class Blog {
  constructor(id, title, body, author, date, tags) {
    this.id = id.randomId();
    this.title = title,
      this.body = body,
      this.author = author,
      this.date = date,
      this.tags = tags;
  }
}
