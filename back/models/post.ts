import { ObjectId } from "mongodb";

export default class Post {
    constructor(
        public monthVisited: string,
        public yearVisited: number,
        public classification: string,
        public cuisine: string[],
        public title: string,
        public id: ObjectId
    ) {}
}

