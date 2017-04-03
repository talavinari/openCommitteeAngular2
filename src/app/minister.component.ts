import { Component } from '@angular/core';

import { Minister } from './Minister';
import { MinisterService } from './minister.service';

@Component({
  moduleId: module.id + '',
  selector: 'my-dashboard',
  templateUrl: 'minister.component.html'
})

export class MinisterComponent {
   ministers: Minister[] = [];

   constructor(private ministerService: MinisterService) { }

   ngOnInit(): void {
     this.ministerService.getMinisters()
       .then(ministers => this.ministers = ministers);
  }
 }