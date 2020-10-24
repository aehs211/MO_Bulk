import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {KeyWordsFilterComponent} from './key-words-filter/key-words-filter.component';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-key-words',
  templateUrl: './key-words.component.html',
  styleUrls: ['./key-words.component.scss']
})
export class KeyWordsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'keyword', 'status', 'bid', 'spend', 'sales', 'acos', 'roas', 'impressions', 'clicks', 'ctr', 'cpr', 'ppcOrders', 'cr'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  now = new Date();

  selection = new SelectionModel<any>(true, []);

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  filterKeyWords(): void {
    this.dialog.open(KeyWordsFilterComponent, {
      width: '920px',
      minHeight: '300px',
      disableClose: true
    });
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }


}

const ELEMENT_DATA = [
  {
    keyword: 'alaa', status: 'enabled', bid: '10$', spend: '15$', sales: '12$', acos: '220%', roas: '0.21',
    impressions: '23.5', clicks: '117', ctr: '0.22%', cpr: '1.38$', ppcOrders: '6', cr: '5.13%'
  },
  {
    keyword: 'alaa', status: 'enabled', bid: '10$', spend: '15$', sales: '12$', acos: '220%', roas: '0.21',
    impressions: '23.5', clicks: '117', ctr: '0.22%', cpr: '1.38$', ppcOrders: '6', cr: '5.13%'
  },
  {
    keyword: 'alaa', status: 'enabled', bid: '10$', spend: '15$', sales: '12$', acos: '220%', roas: '0.21',
    impressions: '23.5', clicks: '117', ctr: '0.22%', cpr: '1.38$', ppcOrders: '6', cr: '5.13%'
  },
  {
    keyword: 'alaa', status: 'enabled', bid: '10$', spend: '15$', sales: '12$', acos: '220%', roas: '0.21',
    impressions: '23.5', clicks: '117', ctr: '0.22%', cpr: '1.38$', ppcOrders: '6', cr: '5.13%'
  },
  {
    keyword: 'alaa', status: 'enabled', bid: '10$', spend: '15$', sales: '12$', acos: '220%', roas: '0.21',
    impressions: '23.5', clicks: '117', ctr: '0.22%', cpr: '1.38$', ppcOrders: '6', cr: '5.13%'
  },
  {
    keyword: 'alaa', status: 'enabled', bid: '10$', spend: '15$', sales: '12$', acos: '220%', roas: '0.21',
    impressions: '23.5', clicks: '117', ctr: '0.22%', cpr: '1.38$', ppcOrders: '6', cr: '5.13%'
  },
  {
    keyword: 'alaa', status: 'enabled', bid: '10$', spend: '15$', sales: '12$', acos: '220%', roas: '0.21',
    impressions: '23.5', clicks: '117', ctr: '0.22%', cpr: '1.38$', ppcOrders: '6', cr: '5.13%'
  },
];
