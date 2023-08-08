import { Component, OnInit } from '@angular/core';
import patternsList from './data/patterns-list.json'
import { Pattern } from './model/patterns.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PatternsFilter } from './model/patterns-filter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Red Hat Patterns';
  // @ts-ignore
  editCategoryForm: FormGroup;

  patterns: Pattern[] = [];
  searchTerm:string="";

  patternType:any;
  patternsFilter:PatternsFilter =  new PatternsFilter( "", "", [], [], [],[]);
  patternTags:Array<String> =[];

  constructor(private http: HttpClient, private fb: FormBuilder) {

  }


  ngOnInit() {
    this.patterns = patternsList;
    console.log("this.patterns", this.patterns)
    this.patternType = {
      "solution-pattern" : "Solution Pattern",
      "portfolio-architecture" : "Portfolio Architecture ",
      "validated-pattern" : "Validated Pattern",

    }

    const mergeTags = [...new Set(this.patterns.map(item => item.tags))]; // [ 'A', 'B']
    this.patternTags = [...new Set(mergeTags.flat(1))]
    console.log("uniqueTags", this.patternTags)


  }

  patternTypeOnChange(index: number, data:{_id:string,name:string}, isChecked: boolean) {
    if (isChecked) {
      //this.editCategoryForm.controls.categoryArray.value[index].measurements.push(data);
    } else {
      //this.editCategoryForm.controls.categoryArray.value[index].measurements.splice(this.editCategoryForm.controls.categoryArray.value[index].measurements.indexOf(data),1);
    }
}


}
