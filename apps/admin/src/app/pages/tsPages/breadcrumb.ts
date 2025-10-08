import { ChangeDetectionStrategy, Component, computed, inject, signal, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Common } from '../../services/common';

export interface IBreadcrumbModel{
  title:string;
  url:string;
  icon:string;
}

@Component({
  selector:'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: '../htmlPages/breadcrumb.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Breadcrumb {
 //readonly data = signal<IBreadcrumbModel[]>([]);
  readonly data = computed(()=>this.#common.data);
  readonly #common = inject(Common);
}
