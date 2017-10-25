import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

	catalog: Product[] = [];
	errorMessage: string;
  public productsPerPage = 4;
  public selectedPage = 1;

  constructor(private service: CatalogService) { }

  ngOnInit() {
  	this.service.getCatalog().subscribe(catalog => this.catalog = catalog,error => this.errorMessage = error);
  }


  private getCatalog() {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
  	return this.catalog.slice(pageIndex, pageIndex + this.productsPerPage);
  }

  changePage (newPage: number) {
      this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  getPageNumbers(): number[] {    
      return Array(Math.ceil(this.catalog.length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }

}
