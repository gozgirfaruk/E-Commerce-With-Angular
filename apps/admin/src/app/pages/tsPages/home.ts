import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core';
import Blank from '../../components/blank';
import { Common } from '../../services/common';

@Component({
  imports: [Blank],
  templateUrl: '../htmlPages/home.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Home {
  readonly #common = inject(Common);
  constructor(){
    this.#common.set("Home","/","home");
  }
}
