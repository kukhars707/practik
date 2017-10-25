import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Product } from './product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class CatalogService {

	private url = "http://localhost:2403/product";

  constructor(private http: Http) { }

  public getCatalog(): Observable<Product[]> {
  	let catalog = this.http.get(this.url)
  		.map(this.extractCatalog)
  		.catch(this.handleError);
  	return catalog;
  }

  public getProduct(id: string): Observable<Product> {
    let product = this.http.get(this.url + "/" + id)
      .map(this.extractProduct)
      .catch(this.handleError);
    return product;
  }

  public updateProduct(product: Product) {
    return this.http.put(this.url + "/" + product.id, product)
      .catch(this.handleError);
  }

  public addProduct(product: Product) {
      return this.http.post(this.url, product)
        .catch(this.handleError);
  }

  public deleteProduct(product: Product) {
    return this.http.delete(this.url + "/" + product.id)
      .catch(this.handleError);
  }

  private extractCatalog(response: Response) {
  	let res = response.json();
  	let catalog: Product[] = [];
  	for (let i = 0; i < res.length; i++) {
  		catalog.push(new Product(res[i].id, res[i].title, res[i].price));
  	}
  	return catalog;
  }

  private extractProduct(response: Response) {
    let res = response.json();
    let product = new Product(res.id, res.title, res.price);
    return product;
  }

  private handleError(error: any, cought: Observable<any>): any {
  	let message = "";
  	if(error instanceof Response) {
  		let errorData = error.json().error || JSON.stringify(error.json());
  		message = `${error.status} - ${error.statusText || ''} ${errorData}`
  	} else {
  		message = error.message ? error.message : error.toString();
  	}
  	return Observable.throw(message);
  }

}
