export interface IContentModel {
  type: string;
  title: string;
  subtitle: string;
  description: string;
  avatar: string;
  date: Date;
  author: string;
  readTime: number;
  content: string;
  tags: string[];
  callback : Callback;
  image: string;
  imageAlt: string;
  id: string;
  references: Reference[];
  categories: string[];

}

export class ContentModel implements IContentModel {
    type: string = '';
    title: string = '';
    subtitle: string = '';
    description: string = '';
    avatar: string = '';
    date: Date = new Date();
    author: string = '';
    readTime: number = 0;
    content: string = '';
    tags: string[] = [];
    callback : Callback = new Callback();
    image: string = '';
    imageAlt: string = '';
    id: string = '';
    references: Reference[] = [];
    categories: string[] = [];

    constructor(data: IContentModel) {
      Object.assign(this, data);
    }
}

export class Callback{
  styles!: string[];
  dependencies!: string[];
  name!: string;
  params!: {};
  delay!: number;
}

export enum ContentType {
  Architecture = "architecture",
  Video = "video",
  Book = "book",
  Coding = "coding",
  Any = "any",
  Electronics = "electronics",
  Design = "design",
  Search = "search",
  Database = "database"
}



export class Reference {

}
