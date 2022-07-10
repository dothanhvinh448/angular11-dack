import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor( private authsevice:AuthService) { }

  ngOnInit(): void {
  }

  Logout()
  {
      this.authsevice.logoutAdmin()
      location.reload()
  }
}
