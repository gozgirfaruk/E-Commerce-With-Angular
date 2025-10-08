import { ChangeDetectionStrategy, Component, inject, signal, ViewEncapsulation } from '@angular/core';
import Blank from '../../components/blank';
import { Common } from '../../services/common';
import { FlexiGridModule } from 'flexi-grid';


export interface productModule{
  id?:string;
  photo:string;
  name:string;
  price:number;
  stock:number;
}

@Component({
  imports: [Blank,FlexiGridModule],
  templateUrl: './products.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Products {
  readonly #common = inject(Common);
  constructor(){
    this.#common.set("Products","/products","deployed_code");
  }


  readonly myRule =signal<productModule[]>([
    {
      photo:'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name:'iPhone 11',
      price:689,
      stock:10
    }
  ]);
}
