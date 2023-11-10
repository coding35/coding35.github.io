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
  fetchpriority: string;
  rel: string;
  loading: string;
  display: boolean;

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
    fetchpriority: string = 'low';
    rel: string = 'auto';
    loading: string = 'lazy';  
    display: boolean = true;

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
  Code = "code",
  Any = "any",
  Electronics = "electronics",
  Design = "design",
  Search = "search",
  Database = "database",
  DesignPrinciples = "design-principles",
  Reference = "reference"
}



export class Reference {

}
