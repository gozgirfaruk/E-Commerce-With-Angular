import { Injectable } from '@angular/core';
import { IBreadcrumbModel } from '../pages/tsPages/breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class Common {
  readonly data:IBreadcrumbModel[] = [];

  set(title:string,url:string,icon:string){
    this.data.splice(0);
    const val : IBreadcrumbModel={
      title:title,
      url:url,
      icon:icon
    };
    this.data.push(val);
  }
}
