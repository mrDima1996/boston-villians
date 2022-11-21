import {Component, ViewContainerRef, ViewChild, ElementRef} from '@angular/core';
import {DataService} from "../../services/data";
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";
import {Data} from "../../interfaces/data.interface";
import { loadRemoteModule, loadRemoteEntry } from '@angular-architects/module-federation';

@Component({
  selector: 'boston-vilians',
  templateUrl: './boston-villians.component.html',
  styleUrls: ['./boston-villians.component.scss']
})
export class BostonVilliansComponent {
  public tableData$: Observable<Data[]>;
  public displayedColumns: string[] = ['position', 'name', 'cape_name', 'environment'];
  public isLoaded = false;


  @ViewChild('bostonVillains', { read: ViewContainerRef, static: true })// @ts-ignore:
  public bostonVillains: ViewContainerRef;

  constructor(private dataService: DataService) {
    this.tableData$ = this.dataService.getData().pipe(
      filter(data => !!data)
    );
  }
}
