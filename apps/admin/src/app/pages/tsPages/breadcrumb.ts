import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector:'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: '../htmlPages/breadcrumb.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Breadcrumb {

}
