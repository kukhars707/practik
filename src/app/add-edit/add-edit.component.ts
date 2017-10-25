import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Product } from '../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

	currentProduct: Product;
	errorMessage: string;
	productForm: FormGroup;

  constructor(private service: CatalogService,
  	private activatedRoute: ActivatedRoute,
  	private fb: FormBuilder,
  	private router: Router) { }

  ngOnInit() {
  	this.buildForm();
  	this.getProductFormRouter();
  }

  public checkError(element: string, errorType: string) {
  	return this.productForm.get(element).hasError(errorType) &&
  			this.productForm.get(element).touched
  }

  public onSubmit(productForm: FormGroup) {
  	this.currentProduct.title = productForm.value.title;
  	this.currentProduct.price = productForm.value.price;

  	if(this.currentProduct.id){ 
  		this.service.updateProduct(this.currentProduct)
  		.subscribe(
  			() => this.goBack(),
  			error => this.errorMessage = error
  		)
  	} else {
  		this.service.addProduct(this.currentProduct)
  		.subscribe(
  			() => this.goBack(),
  			error => this.errorMessage = error
  		)
  	}
  }

  public goBack () {
  	this.router.navigate(["/admin"]);
  }

  private getProductFormRouter () {
  	this.activatedRoute.params.forEach((params: Params) => {
  		let id = params["id"];

  		if(id) {
  			this.service.getProduct(id).subscribe(
  				product => {
  					this.currentProduct = product;
  					this.productForm.patchValue(this.currentProduct);
  				},
  				error => this.errorMessage = error
  			)
  		} else {
  			this.currentProduct = new Product(null, null, null);
  			this.productForm.patchValue(this.currentProduct);
  		}
  	});
  }

  private buildForm() {
  	this.productForm = this.fb.group({
  		title: ["", Validators.required],
  		price: ["", Validators.required]
  	});
  }

}
