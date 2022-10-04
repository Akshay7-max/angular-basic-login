import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  title = 'project2';
  username: string = "";
  password: string = "";
  msg: string = "";

  CheckLogin(txt1:any) {
    if(this.username==="Admin" && this.password==="Admin123"){
      this.msg = "Successful Login";
    }else{
      this.msg = "Invalid Login";
      txt1.focus();
    }
  }
}
