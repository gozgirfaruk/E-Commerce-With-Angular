import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import Blank from '../../../components/blank';
import { Common } from '../../../services/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  imports: [Blank,FormsModule],
  templateUrl: './create.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ProductCreate {
readonly #common = inject(Common);
  constructor(){
    this.#common.set("Product Create","/products/create","deployed_code");
  }

  readonly #http= inject(HttpClient);
  readonly #router = inject(Router);
  readonly #location = inject(Location);

  save(form:NgForm){
    if(!form.valid) return;
    this.#http.post("http://localhost:3000/products",form.value).subscribe(()=>{
      this.#router.navigateByUrl("/products");
      this.#location.back();
    })
  }
}
