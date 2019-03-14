import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {FormsModule} from '@angular/forms';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListComponent } from './cvTech/list/list.component';
import { ItemComponent } from './cvTech/item/item.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { TestComponent } from './test/test.component';
import { LampeComponent } from './directives/lampe/lampe.component';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './default-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    CvComponent,
    ListComponent,
    ItemComponent,
    DetailComponent,
    TestComponent,
    LampeComponent,
    RainbowDirective,
    DefaultImagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
