export class ContentModel {
    type!: string;
    title!: string;
    subtitle!: string;
    description!: string;
    avatar!: string;
    date!: Date;
    author!: string;
    readTime!: number;
    content!: string;
    tags!: Tag[];
    image!: string;
    imageAlt!: string;
    id!: string;
    references!: Reference[];
    categories!: string[];
}


export enum ContentType {
  Architecture = "architecture",
  Video = "video",
  Book = "book",
  Coding = "coding",
  Any = "any",
  Electronics = "electronics",
  Design = "design"
}

export class Tag {

}

export class Reference {

}

export class Category {


}