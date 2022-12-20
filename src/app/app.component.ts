import { Component, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  constructor(private storage: Storage, public us: UserService) { }

  username = "John"
  judul = "Ionic-Angular Week 9"
  user_id = "";

  login_user = "";
  login_passwd = "";
  login_error = "";

  login() {
    this.us.login(
      this.login_user,
      this.login_passwd
    ).subscribe(
      (data) => {
        if (data['result'] == "success") {
          this.user_id = this.login_user;
          this.storage.set('user_id', this.user_id);
        } else {
          this.login_error = data['pesan'];
          alert(this.login_error);
        }
      });
  }

  logout() {
    this.login_user = "";
    this.login_passwd = "";
    this.user_id = "";
    this.storage.remove("user_id");
  }


  async ngOnInit() {
    await this.storage.create();
    this.user_id = await this.storage.get("user_id");
  }
}
