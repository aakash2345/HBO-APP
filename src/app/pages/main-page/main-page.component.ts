import { Component, OnInit } from '@angular/core';
import { GridDataResult, PageChangeEvent, DataStateChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy, process, State, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { Router } from '@angular/router';
import { customers, sampleCustomers } from './customers';
declare var $: any;

const flatten = filter => {
  const filters = filter.filters;
  if (filters) {
    return filters.reduce((acc, curr) => acc.concat(curr.filters ? flatten(curr) : [curr]), []);
  }
  return [];
};
@Component({
  selector: 'main-page',
  templateUrl: './main-page.html',
  styleUrls: ['./main-page.scss'],
})

export class MainPageComponent implements OnInit {
  public navbarCollapsed = true;
  public loading = false;
  public filter: CompositeFilterDescriptor;
  public opened: boolean = false;
  userName: string;
  public data: any[] = customers;
  public fields: string[] = Object.keys(this.data[0]);
  private items: any[] = customers;
  private skip: number = 0;
  multiple: boolean = false;
  allowUnsort: boolean = true;
  private sort: SortDescriptor[] = [];
  public buttonCount = 5;
  public info = true;
  public type: 'numeric' | 'input' = 'numeric';
  public pageSizes = true;
  public previousNext = true;

  public pageSize: number = 20;

  constructor(private router: Router) {
    this.loading = true;
    this.userName = sessionStorage.getItem('userName');
  }

  ngOnInit(): Promise<any> {
    this.loading = true;
    this.loadProducts();
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.loading = false), 5000);
    });
  }

  public state: State = {
    skip: 0,
    take: 20,
    filter: {
      logic: 'and',
      filters: [
        { field: 'ContactName', operator: 'contains', value: '' },
        { field: 'ContactTitle', operator: 'contains', value: '' },
        { field: 'Id', operator: 'contains', value: '' },
        { field: 'CompanyName', operator: 'contains', value: '' },
        { field: 'City', operator: 'contains', value: '' }]
    }
  };

  public gridData: GridDataResult = process(sampleCustomers, this.state);

  private loadProducts(): void {
    this.gridData = {
      data: orderBy(this.items.slice(this.skip, this.skip + this.pageSize), this.sort),
      total: this.items.length
    };
  }

  public dataStateChange(state: DataStateChangeEvent): void {
    this.state = state;
    this.gridData = process(sampleCustomers, this.state);
  }
  public filterChange(filter: CompositeFilterDescriptor): void {
    this.filter = filter;
    this.gridData = process(sampleCustomers, this.state);
  }

  protected pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.loadProducts();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  public open() {
    this.opened = true;
  }

  public close(status) {
    console.log(`Dialog result: ${status}`);
    this.opened = false;
  }

  public closeView() {
    this.opened = false;
    this.router.navigateByUrl('/login');
  }
}

