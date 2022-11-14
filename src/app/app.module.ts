import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavContact } from './nav/navContact/nav-contact.component';
import { NavMenu } from './nav/navMenu/nav-menu.component';

import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import sessionReducer from './store/session.reducer';
import { UserService } from 'src/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { MainButtonComponent } from './components/mainButton/main-button-component';
import { Home } from './home/home';

import { MatSliderModule } from '@angular/material/slider';
import { CardComponent } from './components/card/card.component';
import { CloudinaryModule } from '@cloudinary/ng';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { Stock } from './home/stock/stock';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { FormNewProduct } from './home/stock/newProduct/form';
import { MatNativeDateModule } from '@angular/material/core';
import { UploadService } from 'src/services/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    NavContact,
    NavMenu,
    MainButtonComponent,
    Home,
    CardComponent,
    Stock,
    FormNewProduct
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      session: sessionReducer
    }, {}),
    MatSliderModule,
    CloudinaryModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [
    UserService,
    UploadService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
