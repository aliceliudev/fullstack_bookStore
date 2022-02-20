import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pirUrl='assets/images/b1.png';
  altName='bookstore';

  textContent = 'dard dummy text ever since the 1500s,when an unknown printer to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingdard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.';
  btnFlag = false;
  btnText = 'Explore More';
  textContent2 = 'dard dummy text ever since the 1500s,when an unknown printer to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettingdard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.';
  btnFlag2 = true;
  btnText2 = 'Explore More';
  constructor() { }

  ngOnInit(): void {
  }

}
