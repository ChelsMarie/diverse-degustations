import { ObjectId } from "mongodb";

export default class Movie {
    constructor(
        public title: string,
        public plot: string, 
        public genres: string[], 
        public runtime: number, 
        public rated: string,
        public cast: string[],
        public fullplot: string,
        public languages: string[],
        public num_flix_comments: string,
        public poster: string,
        public lastUpdated: Date,
        public released: Date,
        public directors: string[],
        public awards: Award[],
        public year: number,
        public imdb: Imdb[],
        public tomatoes: Tomato[],
        public type: string,
        public id?: ObjectId
    ) {}
}

export interface Award {
    wins: number;
    nominations: number;
    text: string;
}


export interface Imdb {
    rating: number;
    votes: number;
    id: number;
}

export interface Tomato {
    viewer: TomatoViewer[];
    dvd: Date;
    lastUpdated: Date;
}

export interface TomatoViewer {
    rating: number;
    numReviews: number;
    meter: number;
}