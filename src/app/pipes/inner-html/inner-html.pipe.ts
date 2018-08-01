import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'innerHtml'
})
export class InnerHtmlPipe implements PipeTransform {
  constructor(
    private dom: DomSanitizer
  ) {}
  transform(value: any, args?: any): any {
    if (!value) {
      value = `<h1>Sorry, blog not found...<h1>`;
    }
    return this.dom.bypassSecurityTrustHtml(value);
  }

}
