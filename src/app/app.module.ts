import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { AiHeadingComponent } from './ai-heading/ai-heading.component';
import { SoftwareComponent } from './software/software.component';
import { UserComponent } from './user/user.component';
import { NgxSplideModule } from 'ngx-splide';
import { PricingComponent } from './pricing/pricing.component';
import { PlansComponent } from './plans/plans.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    AiHeadingComponent,
    SoftwareComponent,
    UserComponent,
        PricingComponent,
        PlansComponent,
        FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSplideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
