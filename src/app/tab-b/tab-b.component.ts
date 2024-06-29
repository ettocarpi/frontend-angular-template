// src/app/tab-b/tab-b.component.ts
import { Component, OnInit } from '@angular/core';
import { TabB } from '../models/tab-b.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab-b',
  templateUrl: './tab-b.component.html',
  //styleUrls: ['./tab-b.component.css']
})
export class TabBComponent implements OnInit {
  records: TabB[] = [];
  filteredRecords: TabB[] = [];
  filter: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadTabBData();
  }

  loadTabBData() {
    this.dataService.getTabBData().subscribe(data => {
      this.records = data;
      this.filteredRecords = data;
    });
  }

  applyFilter() {
    this.filteredRecords = this.filter ? this.records.filter(r => r.campoB1.toLowerCase().includes(this.filter.toLowerCase())) : this.records;
  }
}
