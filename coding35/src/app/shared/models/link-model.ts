export class LinkModel {
   constructor(title: string, url: string, icon: string, target: string) {
        this.title = title;
        this.url = url;
        this.icon = icon;
        this.target = target || '_self';
    }

    title: string;
    url: string;
    icon: string;
    target: string;
}
