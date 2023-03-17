import { Component } from '@angular/core';

@Component({
  selector: 'hotel-view',
  templateUrl: './hotel-view.component.html',
  styleUrls: ['./hotel-view.component.scss']
})
export class HotelViewComponent {
  
  hotelView = {
    name: 'Hotel Las Palmas',
    city: 'Albufeira',
    country: 'Portugal',
    votesNum: 234,
    averageRate: 8.6,


    hotelsImgs:[
      'assets/img/hotel-1.jpg', 'assets/img/hotel-2.jpg', 'assets/img/hotel-3.jpg'
    ],

    reviewersImgs: [
      'assets/img/user-3.jpg', 'assets/img/user-4.jpg', 'assets/img/user-5.jpg', 'assets/img/user-6.jpg',
    ],
    rating: 5,
    reviews : [
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.',
        img : 'assets/img/user-1.jpg',
        name: 'Nick Smith',
        date: 'Feb 23rd, 2017',
        rating: '7.8'
      },
      {
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.',
        img : 'assets/img/user-2.jpg',
        name: 'Mary Thomas',
        date: 'Sept 13th, 2017',
        rating: '9.3'
      }
    ],
    listItems : [
      'Close to the beach', 
      'Breakfast included', 
      'Free airport shuttle', 
      'Free wifi in all rooms',
      'Air conditioning and heating',
      'Pets allowed',
      'We speak all languages',
      'Perfect for families'
    ],
    description : [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.',
      ' Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.'
    ]

  }

  stars =  new Array(this.hotelView.rating)

}
