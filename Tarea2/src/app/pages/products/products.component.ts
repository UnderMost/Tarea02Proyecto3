import { Component, OnInit, inject } from '@angular/core';
import { ProductListComponent } from '../../components/product/product-list/product-list.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { IProduct } from '../../interfaces';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../components/modal/modal.component';
import { ProductFormComponent } from '../../components/product/product-form/product-form.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    ProductListComponent,
    LoaderComponent,
    CommonModule,
    ModalComponent,
    ProductFormComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  public productService: ProductService = inject(ProductService);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public areActionsAvailable: boolean = false;
  public authService: AuthService =  inject(AuthService);
  public routeAuthorities: string[] =  [];

  ngOnInit(): void {
    this.productService.getAll();
    this.route.data.subscribe( data => {
      this.routeAuthorities = data['authorities'] ? data['authorities'] : [];
      this.areActionsAvailable = this.authService.areActionsAvailable(this.routeAuthorities);
    });
  }

  handleFormAction(item: IProduct) {
    this.productService.save(item);
  }

}