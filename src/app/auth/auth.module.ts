import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    AmplifyAngularModule,
    TranslateModule,
  ],
  providers: [
    AmplifyService
  ]
})
export class AuthModule { }
