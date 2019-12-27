import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == 'asc'){
      return _.orderBy(value,null,'asc');
    }
    else if(args == 'desc'){
      return _.orderBy(value,null,'desc');
    }
  }

}
