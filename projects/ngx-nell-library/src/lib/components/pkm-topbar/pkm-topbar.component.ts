import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pkm-topbar',
  templateUrl: './pkm-topbar.component.html',
  styleUrls: ['./pkm-topbar.component.css']
})
export class PkmTopbarComponent implements OnInit {

  @Input() logo: string;
  @Input() favorito: string;
  @Input() icon: string;
  @Input() badgeCounter: number;
  @Input() showBadge: boolean;




  constructor() { }

  ngOnInit(): void {
  }

}
