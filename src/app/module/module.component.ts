import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { Module } from '../models/module.model';
import { ModuleService } from '../services/module.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent {

  

  @Input() module:Module;
  @Input() maxModulesReached:boolean = false;

  
  constructor() {
   
  }

  


}
