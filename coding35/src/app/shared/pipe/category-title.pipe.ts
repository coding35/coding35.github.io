import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryTitle',
})
export class CategoryTitlePipe implements TitleCasePipe {
  transform(value: string): string;
  transform(value: null | undefined): null;
  transform(value: string | null | undefined): string | null;
  transform(value: unknown): string | null {
    switch (value) {
      case 'solid':
        return 'SOLID';
      case 'design':
        return 'Design Patterns';
      case 'operating-systems':
        return 'Operating Systems';
      default:
        return value
          ? value
              .toString()
              .toLowerCase()
              .replace(/(?:^|\s|-)\S/g, function (a) {
                return a.toUpperCase();
              })
          : null;
    }
  }
}
