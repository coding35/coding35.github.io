export class ContentModel {
    type!: string;
    title!: string;
    subtitle!: string;
    description!: string;
    avatar! : string;
    date! : Date;
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

export enum ContentType{
    Research = "research",
    Video = "video",
    Book = "book",
    Any = "any"
}

export class Tag{
    
}

export class Reference{
    
}

export class Category{

    
}