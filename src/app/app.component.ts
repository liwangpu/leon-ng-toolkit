import { ChangeDetectionStrategy, Component } from '@angular/core';

interface INavBar {
  title: string;
  link: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  public readonly navBars: Array<INavBar>;
  public constructor() {
    // this.navBars = [];
    // for (let i = 0; i < 10; i++) {
    //   let nav: INavBar = {
    //     title: `${i}`,
    //     link: 'aaa'
    //   };
    //   this.navBars.push(nav);
    // }

    this.navBars = [
      // {
      //   title: 'Home',
      //   link: '/home'
      // },
      {
        title: 'Grid布局',
        link: '/grid-layout/home'
      },
    ];
  }
}
