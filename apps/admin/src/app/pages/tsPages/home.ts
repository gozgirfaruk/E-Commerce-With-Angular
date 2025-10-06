import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  imports: [],
  templateUrl: '../htmlPages/home.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class Home {

}
