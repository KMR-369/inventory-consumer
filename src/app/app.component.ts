import { Component } from '@angular/core';

import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Product Inventory Management System';
  imagePath='/assets/images/ims.jpg';

  constructor(public loginService:AuthenticationService) { }
}
