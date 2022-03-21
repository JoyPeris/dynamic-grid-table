import { Component } from '@angular/core';
import { data } from './table';

const jsondata = data;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  columnHeaders: Array<any> = Object.keys(jsondata);
  height = 0
  arr: Array<any> = [];
  cdata: Array<any> = [];
  properties: Array<any> = [];

  title = 'my-app';

  buildTable(property: string) {
    const cdataarray: Array<any> = [];
    const d = (jsondata as any)[property];
 
    Object.keys(d).forEach((key: string) => {
      let e: any = (d as any)[key];
      e.rowHeader = key;
      cdataarray.push(e);
    });
    return cdataarray;
  }

  displayedColumns: string[] = ['PROPERTIES', 'Description', 'A', 'B', 'C'];

  calculateHeight(index: number): number {
    let CardHeight = this.arr[index];
    return CardHeight;
  }
  ngOnInit(): void {
       
    this.columnHeaders.forEach((element: string) => {
      this.height = Object.keys((jsondata as any)[element]).length * 40;
      this.arr.push(this.height);

    });

    this.columnHeaders.forEach((element: string) => {
      console.log(this.arr)
      this.cdata = this.buildTable(element);
      this.properties.push(this.cdata);
    });
   
  }
}
