import { Component, OnInit , Input} from '@angular/core';


@Component({
  selector: 'app-pic',
  templateUrl: './pic.component.html',
  styleUrls: ['./pic.component.css']
})
export class PicComponent implements OnInit {

@Input() picUrl='';
@Input() altName='';

  public picContent = {

    picUrl: '',
    altName:'',

    }


  constructor() {

  }

  ngOnInit(): void {
    this.picContent.picUrl=this.picUrl;
    this.picContent.altName=this.altName;
  }

}
