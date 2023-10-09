import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.page.html',
  styleUrls: ['./type.page.scss'],
})
export class TypePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToLogin(){
    this.router.navigate(['/home'])
  }

}
