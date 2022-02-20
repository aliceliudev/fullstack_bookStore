import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-sidetext',
  templateUrl: './sidetext.component.html',
  styleUrls: ['./sidetext.component.css']
})
export class SidetextComponent implements OnInit {
@Input() textContent='';
@Input() btnFlag= false;
@Input() btnText='';
  public sideTextContent = {

    textContent: '',
    btnFlag:false,
    btnText:'Button',
    }


  constructor() { }

  ngOnInit(): void {
    this.sideTextContent.textContent=this.textContent;
    this.sideTextContent.btnFlag = this.btnFlag;
    this.sideTextContent.btnText = this.btnText;
  }

}
