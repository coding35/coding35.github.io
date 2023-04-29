import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryTitle'
})
export class CategoryTitlePipe implements TitleCasePipe {
  transform(value: string): string;
  transform(value: null | undefined): null;
  transform(value: string | null | undefined): string | null;
  transform(value: unknown): string | null {
    if(value === 'solid'){
      return value ? value.toString().toUpperCase(): null;
    }else{
      return value ? value.toString().toLowerCase().replace(/(?:^|\s|-)\S/g, function (a) { return a.toUpperCase(); }) : null;
    }

  }



}
