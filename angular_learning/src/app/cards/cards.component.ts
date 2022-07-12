import { Component, OnInit } from '@angular/core';
import { cds } from '../model/model';

@Component({
  selector: 'agl-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cdsInfo:cds[] = [
    {title: 'Cazuza', subtitle: 'Burguesia', img: '/assets/imgs/78bc9d65001134780fa7a752c4f500f2.webp', description:'CD Burguesia do artista Cazuza.'},
    {title: 'Iron Maiden', subtitle: 'Brave new world', img: '/assets/imgs/D_NQ_NP_802038-MLB44425430535_122020-O.jpg', description:'CD Brave new world da banda Iron Maiden'},
    {title: 'Paralamas do Sucesso', subtitle: 'Arquivo', img: '/assets/imgs/os_paralamas_do_sucesso_arquivo_slide_pack_cd_333468325_1_20201214005157.webp', description:'CD da banda Paralamas do Sucesso.'}
  ]

}
