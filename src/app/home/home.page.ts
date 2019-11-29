import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AracService } from '../arac.service';
import { Arac } from '../arac-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor(public router: Router, public aracService: AracService) 
  {
    
  }

  detayGoster(Id: string)
  {
    this.router.navigate(["/arac-detay", {secim: Id}]);
  }

}
