import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { CategoriesComponent } from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesComponent],
  imports: [SharedModule, CategoriesRoutingModule]
})
export class CategoriesModule { }
