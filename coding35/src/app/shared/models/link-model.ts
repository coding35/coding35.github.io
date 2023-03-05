export class LinkModel {
   constructor(title: string) {
        this.title = title;
        this.url = title.toLowerCase();
    }

    title: string;
    url: string = ''
    icon: string = '';
    target: string = '_self';
}
