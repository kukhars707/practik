import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';
import { ActivatedRoute, Router, Params } from '@angular/router';
  
@Component({
  selector: 'app-product-delete-component',
  templateUrl: './product-delete-component.component.html',
  styleUrls: ['./product-delete-component.component.css']
})
export class ProductDeleteComponentComponent implements OnInit {

	currentProduct: Product;
	errorMessage: string;

  constructor(private activateRoute: ActivatedRoute,
   	private router: Router, 
   	private service: CatalogService) { }

  ngOnInit() {
  	let id = this.activateRoute.snapshot.params["id"];
  	if(id){
  		this.service.getProduct(id)
  		.subscribe(
  			product => this.currentProduct = product,
  			error => this.errorMessage = error
  		);
  	}
  }

  deleteProduct () {
  	this.service.deleteProduct(this.currentProduct)
  	.subscribe(
  		() => this.goBack(),
  		error => this.errorMessage = error
  	)
  }

  goBack(){
  	this.router.navigate(["/admin"]);
  }

}