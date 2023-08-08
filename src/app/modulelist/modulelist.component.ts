import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModuleList, Module } from '../models/module.model';
import { ModuleService } from '../services/module.service';
import patternsList from '../data/patterns-list.json'

@Component({
  selector: 'app-modulelist',
  templateUrl: './modulelist.component.html',
  styleUrls: ['./modulelist.component.css']
})

export class ModuleListComponent implements OnInit {

  testBrowser: boolean;
  modulelist = new ModuleList();
  router: Router
  showFilterCard:boolean = true;

  //warning messages
  alertMessages = {
    "MAX_MODULES_DEPLOYED" : {"type":"warning", "text": "You have reached the maximum number of deployable modules. Please undeploy any of the already deployed modules to deploy additional modules."}
  }
  currentAlert = null;
  filterDeployedModules:boolean = false;
  uniqueModuleTags;
  patterns;

  constructor(router: Router, @Inject(PLATFORM_ID) platformId:string, private moduleService:ModuleService) {

    this.testBrowser = isPlatformBrowser(platformId);
    this.router = router;
  }

  ngOnInit(): void {
    let patterJSON  = patternsList
    patterJSON.forEach(module => {        
      this.modulelist.modules.push(module);       
    });
    this.getModuleTagFilters();
    console.log("this.modulelist", this.modulelist.modules)
  }


  fetchModuleList() {
    this.moduleService.fetchModuleList().subscribe(modulelist => {
      this.modulelist = modulelist;
      
    });
  }

  
  getFilteredModules() {    
    //if there are filter tags, then filter based on selections
    if(this.filterTagsCount() > 0) {
      return this.modulelist.modules.filter((module) => {
        console.log("module.tags", module.tags)
        return this.uniqueModuleTags.some((tag) => {
          return  module.tags.indexOf(tag.name) > -1 && tag.status === true;
        });
      });
    }
    //return modules list - this maybe filtered if there are any selected filter tags
    return  this.modulelist.modules;

  }

  resetFilterTags() {
    this.uniqueModuleTags.forEach((tag) => {tag.status = false;})
  }

  filterTagsCount() {
    return (this.uniqueModuleTags) ? (this.uniqueModuleTags.filter(n => n.status).length) : 0;
  }

  //this runs just once  - when the page loads we get the list of all tags and dont need to do this repeatedly for every module status refresh
  getModuleTagFilters() {
      var uniqueTags = [...new Set(this.modulelist.modules.map(item => item.tags))].flat()
                      .filter((value, index, array) => array.indexOf(value) === index);
      
      console.log("uniqueTags", uniqueTags)
      this.uniqueModuleTags = uniqueTags.reduce(function(acc:any, cur, i) {
        acc[i] = {"name":cur, "status":false};
        return acc;
      }, []);
    
  }

  
  toggleTag(tag) {
    tag.status = !tag.status;
    if(tag.status) {
      this.filterDeployedModules = false;
    }
  }
}
