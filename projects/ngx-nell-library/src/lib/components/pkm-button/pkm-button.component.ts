import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-pkm-button',
  templateUrl: './pkm-button.component.html',
  styleUrls: ['./pkm-button.component.css']
})
export class PkmButtonComponent implements OnInit {

  @Input() pkmType: 'primary'| 'default';
  @Input() title: string;


  constructor() { }

  ngOnInit(): void {
  }

  get pkmTypeButton(): string {
    const nameClase = 'pkm__button'

    switch (this.pkmType) {
      case 'primary':
        return `${nameClase}`;
      default:
      case 'default':
        return `${nameClase}--default`;
    }
  }

}
