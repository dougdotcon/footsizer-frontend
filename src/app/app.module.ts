import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ShippingCalculatorComponent } from './components/shipping-calculator/shipping-calculator.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductReviewsComponent } from './components/product-reviews/product-reviews.component';
import { RelatedProductsCarouselComponent } from './components/related-products-carousel/related-products-carousel.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    ProductInfoComponent,
    ShippingCalculatorComponent,
    ProductDescriptionComponent,
    ProductReviewsComponent,
    RelatedProductsCarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
