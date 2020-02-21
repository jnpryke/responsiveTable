import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ResponsiveTableItem {
  name: string;
  id: number;
  phone: string;
  zip: string;
  email: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ResponsiveTableItem[] = [
  { id: 1, name: 'Hydrogen', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 2, name: 'Helium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 3, name: 'Lithium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 4, name: 'Beryllium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 5, name: 'Boron', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 6, name: 'Carbon', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 7, name: 'Nitrogen', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 8, name: 'Oxygen', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 9, name: 'Fluorine', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 10, name: 'Neon', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 11, name: 'Sodium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 12, name: 'Magnesium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 13, name: 'Aluminum', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 14, name: 'Silicon', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 15, name: 'Phosphorus', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 16, name: 'Sulfur', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 17, name: 'Chlorine', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 18, name: 'Argon', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 19, name: 'Potassium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 20, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 21, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 22, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 23, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 24, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 25, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 26, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 27, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 28, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 29, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 30, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 31, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 32, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 33, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 34, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 35, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 36, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 37, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 38, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 39, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 40, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 41, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 42, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 43, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 44, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 45, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 46, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 47, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 48, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 49, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 50, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 51, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 52, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 53, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 54, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 55, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 56, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 57, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 58, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
  { id: 59, name: 'Calcium', phone: '1234567890', zip: '46580', email: 'email@mail.com' },
];

/**
 * Data source for the ResponsiveTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ResponsiveTableDataSource extends DataSource<ResponsiveTableItem> {
  data: ResponsiveTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ResponsiveTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ResponsiveTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ResponsiveTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
