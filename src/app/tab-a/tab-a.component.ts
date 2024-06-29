// src/app/tab-a/tab-a.component.ts
import { Component, OnInit } from '@angular/core';
import { TabA } from '../models/tab-a.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tab-a',
  templateUrl: './tab-a.component.html',
  //styleUrls: ['./tab-a.component.css']
})
export class TabAComponent implements OnInit {
  records: TabA[] = [];
  filteredRecords: TabA[] = [];
  filter: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadTabAData();
  }

  loadTabAData() {
    this.dataService.getTabAData().subscribe(data => {
      this.records = data;
      this.filteredRecords = data; // Initialize filtered records.
    }, error => {
      console.error('Error fetching TabA data:', error);
    });
  }

  applyFilter() {
    if (!this.filter) {
      this.filteredRecords = this.records;
    } else {
      this.filteredRecords = this.records.filter(record =>
        record.campoA1.toLowerCase().includes(this.filter.toLowerCase())
      );
    }
  }
}
