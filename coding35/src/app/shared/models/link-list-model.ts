import { LinkModel } from "./link-model";

export class LinkListModel{
[x: string]: any;
    constructor(title : string, linkList: LinkModel[]) {
        this.title = title;
        linkList.forEach(link => {
            this.linkList.push(link);
        });
    }

    title: string = '';
    linkList: LinkModel[] = [];
}