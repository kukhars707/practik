import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router, Params } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';

@Component({
  selector: 'app-catalog-admin',
  templateUrl: './catalog-admin.component.html',
  styleUrls: ['./catalog-admin.component.css']
})
export class CatalogAdminComponent implements OnInit {

	catalog: Product[] = [];
	errorMessage: string;

  constructor(private service: CatalogService, private router: Router) { }

  ngOnInit() {
  	this.getCatalog();
  }

  createProduct() {
    this.router.navigate(["admin", "create"]);
  }

  public editProduct(product: Product) {
    this.router.navigate(["admin", "edit", product.id]);
  }

  public deleteProduct(product: Product) {
    this.router.navigate(["admin", "delete", product.id]);
  }

  private getCatalog() {
  	this.service.getCatalog().subscribe(
  		catalog => this.catalog = catalog,
  		error => this.errorMessage = error
  	);
  }

}
