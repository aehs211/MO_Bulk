import {AfterViewInit, Component, Inject, OnInit, QueryList, ViewChildren} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-key-words-filter',
  templateUrl: './key-words-filter.component.html',
  styleUrls: ['./key-words-filter.component.scss']
})
export class KeyWordsFilterComponent implements OnInit, AfterViewInit {
  filterDataSource = [
    {title: 'Impressions'},
    {title: 'Clicks'},
    {title: 'Conv Rate'},
    {title: 'CTR'},
    {title: 'Spend'},
    {title: 'CPC'},
    {title: 'Orders'},
    {title: 'Unites'},
    {title: 'Sales'},
    {title: 'ACoS'}
  ];
  filterDisplayedColumns = ['title', 'min', 'icon', 'max'];

  @ViewChildren(MatPaginator) paginator = new QueryList<MatPaginator>();
  @ViewChildren(MatSort) sort = new QueryList<MatSort>();


  CampaignDataSource = new MatTableDataSource([
    {name: 'alaa', status: 'en', targeting: 'xxxx'},
    {name: 'alaa sssss', status: 'enaa', targeting: 'yyyyy'},
  ]);
  CampaignSelection = new SelectionModel<any>(true, []);
  CampaignDisplayedColumns = ['select', 'name', 'status', 'targeting'];
  // @ViewChild(MatPaginator, {static: true}) CampaignPaginator: MatPaginator;

  AddGroupDataSource = new MatTableDataSource([
    {name: 'Add group 1 ', status: 'en'},
    {name: 'Add group 2 ', status: 'enaa'},
  ]);
  AddGroupSelection = new SelectionModel<any>(true, []);
  AddGroupDisplayedColumns = ['select', 'name', 'status'];
  // @ViewChild(MatPaginator, {static: true}) AddGroupPaginator: MatPaginator;

  SKUDataSource = new MatTableDataSource([
    {
      product: 'JQP Sports Running Vest and 4 LED Safety Light Sets',
      sku: 'CB-4654', status: 'en', asin: 'B0121', img: 'assets/images/prod2.jpg'
    },
    {product: 'JQP Sports Running Vest', sku: 'CB-4699', asin: 'B0221', status: 'enaa', img: 'assets/images/prod.jpg'},
  ]);
  SKUSelection = new SelectionModel<any>(true, []);
  SKUDisplayedColumns = ['select', 'product', 'sku', 'asin', 'status'];


  constructor(
    public dialogRef: MatDialogRef<KeyWordsFilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.paginator.toArray());
    this.CampaignDataSource.paginator = this.paginator.toArray()[0];
    this.CampaignDataSource.sort = this.sort.toArray()[0];
    this.AddGroupDataSource.paginator = this.paginator.toArray()[1];
    this.AddGroupDataSource.sort = this.sort.toArray()[1];
    this.SKUDataSource.paginator = this.paginator.toArray()[2];
    this.SKUDataSource.sort = this.sort.toArray()[2];
  }

  close(): void {
    this.dialogRef.close();
  }


  isAllSelected(selection, dataSource: MatTableDataSource<any>): boolean {
    const numSelected = selection.selected.length;
    const numRows = dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(selection, dataSource: MatTableDataSource<any>): void {
    this.isAllSelected(selection, dataSource) ?
      selection.clear() :
      dataSource.data.forEach(row => selection.select(row));
  }

}
