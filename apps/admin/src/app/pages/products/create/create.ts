import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import Blank from '../../../components/blank';
import { Common } from '../../../services/common';

@Component({
  imports: [Blank],
  templateUrl: './create.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductCreate {
readonly #common = inject(Common);
  constructor(){
    this.#common.set("Product Create","/products/create","deployed_code");
  }
}
