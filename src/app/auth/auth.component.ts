import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { I18n } from 'aws-amplify';
import { UsernameAttributes } from 'aws-amplify-angular/dist/src/components/authenticator/types';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  usernameAttributes: string;
  /** サインアップ設定 */
  signUpConfig: any;

  constructor(private authService: AuthService) { }

  ngOnInit() {

    this.usernameAttributes = UsernameAttributes.EMAIL;

    this.signUpConfig = {
      // header: I18n.get('新しいアカウントを登録'),
      defaultCountryCode: 81,
      usernameAttributes: this.usernameAttributes,
      hiddenDefaults: [
        'username'
      ],
      signUpFields: [
        {
          label: I18n.get('Email'),
          key: 'email',
          required: true,
          displayOrder: 1,
          type: 'string',
        },
        {
          label: I18n.get('パスワード'),
          key: 'password',
          required: true,
          displayOrder: 2,
          type: 'password',
        },
        {
          label: I18n.get('電話番号'),
          key: 'phone_number',
          required: true,
          displayOrder: 3,
          type: 'string',
        },
      ]
    }
  }

}
