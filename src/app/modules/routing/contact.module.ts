import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';

@NgModule({
  imports: [SharedModule, ContactRoutingModule]
})

export class ContactModule { }
