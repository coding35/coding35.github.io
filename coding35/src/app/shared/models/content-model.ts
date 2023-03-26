export class ContentModel {
    type!: string;
    title!: string;
    subtitle!: string;
    description!: string;
    avatar!: string;
    date: Date = new Date();
    author!: string;
    readTime!: number;
    content!: string;
    tags!: string[];
    callback! : Callback;
    image!: string;
    imageAlt!: string;
    id!: string;
    references!: Reference[];
    categories!: string[];
}

export class Callback{
  name!: string;
  params!: {};
}

export enum ContentType {
  Architecture = "architecture",
  Video = "video",
  Book = "book",
  Coding = "coding",
  Any = "any",
  Electronics = "electronics",
  Design = "design",
  Search = "search"
}



export class Reference {

}
