import { ChangeDetectionStrategy, Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import Blank from '../../components/blank';
import { Common } from '../../services/common';
import { FlexiGridFilterDataModel, FlexiGridModule } from 'flexi-grid';
import { httpResource } from '@angular/common/http';
import { Router, RouterLink, RouterModule } from '@angular/router';


export interface productModule{
  id?:string;
  photo:string;
  name:string;
  price:number;
  stock:number;
}

@Component({
  imports: [Blank,FlexiGridModule,RouterModule],
  templateUrl: './products.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Products {
  readonly  result = httpResource<productModule[]>(()=> "http://localhost:3000/products");
  readonly  data = computed(()=>this.result.value() ?? []);
  readonly  loading = computed(()=>this.result.isLoading());

  readonly #common = inject(Common);
  constructor(private myRoute:Router){
    this.#common.set("Products","/products","deployed_code");
  }

    readonly categoryFilter = signal<FlexiGridFilterDataModel[]>([
    {
      name:'Phone',
      value:'Phone'
    },
    {
      name:'Laptop',
      value:'Laptop'
    }
  ]);

}
