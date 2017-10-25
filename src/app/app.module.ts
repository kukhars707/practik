//Модули приложния
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Главный компонент
import { AppComponent } from './app.component';
//Сервисы
import { CatalogService } from './catalog.service';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { CartService } from './cart.service';
//Пользовательские компоненты
import { CatalogComponent } from './catalog/catalog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CatalogAdminComponent } from './catalog-admin/catalog-admin.component';
import { ProductDeleteComponentComponent } from './product-delete-component/product-delete-component.component';
import { AddEditComponent } from './add-edit/add-edit.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    NavigationComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    CatalogAdminComponent,
    ProductDeleteComponentComponent,
    AddEditComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'catalog', component: CatalogComponent},
      {path: 'admin/delete/:id', component: ProductDeleteComponentComponent},
      {path: 'admin/edit/:id', component: AddEditComponent},
      {path: 'admin/create', component: AddEditComponent},
      {path: 'admin', 
        component: AdminComponent, 
        canActivate: [AuthGuardService]},
      {path: 'login', component: LoginComponent},
      {path: '', component: CatalogComponent}
    ])
  ],
  providers: [
    CatalogService,
    AuthGuardService,
    AuthService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
