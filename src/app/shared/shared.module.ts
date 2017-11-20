import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CdkTableModule} from '@angular/cdk/table';

import { MatTabsModule, MatTableModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableTabsComponent } from './table-tabs/table-tabs.component';

@NgModule({
  imports: [
    CommonModule,
    CdkTableModule,
    MatTabsModule,
    MatTableModule
  ],
  declarations: [HeaderComponent, FooterComponent, TableTabsComponent],
  exports: [HeaderComponent, FooterComponent, TableTabsComponent, CdkTableModule,  MatTabsModule, MatTableModule]
})
export class SharedModule { }
