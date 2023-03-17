import { Component } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  items =[
    {
      title: 'Hotel',
      icon: 'icon-home'
    },
    {
      title: 'Flight',
      icon: 'icon-aircraft-take-off'
    },
    {
      title: 'Car rental',
      icon: 'icon-key'
    },
    {
      title: 'Tours',
      icon: 'icon-map'
    },

  ]
}
