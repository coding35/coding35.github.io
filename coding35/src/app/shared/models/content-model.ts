export class ContentModel {
    title!: string;
    subtitle!: string;
    date! : Date;
    author!: string;
    readTime!: number;
    content!: string;
    tags!: Tag[];
    image!: string;
    id!: string;
    references!: Reference[];
    categories!: Category[];
}

export class Tag{
    
}

export class Reference{
    
}

export class Category{
    
}