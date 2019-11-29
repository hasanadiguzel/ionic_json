import { Injectable } from '@angular/core';
import { Arac } from './arac-model';

@Injectable({
  providedIn: 'root'
})
export class AracService {
  araclar: Arac[] = [
    {
      id: "a1",
      ad: "BMW X3",
      resim: "assets\\resimler\\bmx_x3.jpg",
      ozellik: ["Beyaz", "Benzinli", "Düz Vites"]
    },
    {
      id: "a2",
      ad: "Mercedes G Series",
      resim: "assets\\resimler\\mercedes_g.jpg",
      ozellik: ["Gri", "Benzinli", "Tiptonic Vites"]
    },
    {
      id: "a3",
      ad: "Audi Q7",
      resim: "assets\\resimler\\audi_q7.jpg",
      ozellik: ["Siyah", "Dizel", "Otomatik Vites"]
    }
  ]; 

  constructor() { }
}
