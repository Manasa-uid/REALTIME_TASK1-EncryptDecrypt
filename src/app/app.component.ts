import { Component, OnInit } from '@angular/core';
import { Posts } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public id:number;
  public userId:number;
  public title:string;
  public body:string;
  constructor(){}

   public postInfo:any[] = [];
  ngOnInit(){}

       create(){
         let postData:Posts = {
              id:this.id,
              userId:this.userId,
              title:this.title,
              body:this.body
         }

             this.api.postInfo(postData).subscribe((data)=>{
               this.postInfo.push(data);
             })
       }
   
}
