import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg: any): unknown {
    const resultPosts = [];

    for (const post of value) {
      if (post.name.indexOf(arg) > -1) {
        console.log('simon')
      }
    }
    return resultPosts;
  }

}
