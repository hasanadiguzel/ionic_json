import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AracService } from '../arac.service';
import { Arac } from '../arac-model';

@Component({
  selector: 'app-arac-detay',
  templateUrl: './arac-detay.page.html',
  styleUrls: ['./arac-detay.page.scss'],
})
export class AracDetayPage implements OnInit {

  seciliArac: Arac;

  constructor(public router: ActivatedRoute, public aracService: AracService) { }

  ngOnInit() {
    this.seciliArac = this.aracGetir(this.router.snapshot.paramMap.get('secim'));
  }

  aracGetir(ID) : Arac
  {
    return this.aracService.araclar.find(x => x.id === ID);
  }

}
