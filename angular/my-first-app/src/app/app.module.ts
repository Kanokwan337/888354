import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UsersService}from './services/users.service';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ProductComponent } from './components/product/product.component';
import { HttpModule} from '@angular/http';
const appRoutes: Routes = [
      { path: "",component: ProductComponent},
      {path: "products",component: ProductComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)  
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
