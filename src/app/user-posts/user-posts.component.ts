import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { Post } from '../Post';
@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  
  user_list=[
    {name:'Marko', username:'markomarko', age:24},
    {name:'Ana', username:'anaa', age:18},
    {name:'Igor', username:'iGoR', age:35}
  ];
  Post=[
    {title:'Objava', content:'Ovo je objava br. 1', owner: this.user_list[0]},
    {title:'Objava', content:'Ovo je objava br. 2', owner: this.user_list[1]},
    {title:'Objava', content:'Ovo je objava br. 3', owner: this.user_list[2]},
  ];
  imeKorisnika="";
  korisnickoIme="";
  constructor() { }

  DodajKorisnika(){
    let newUser = {name: this.imeKorisnika, username:this.imeKorisnika, age:0};
    this.user_list.push(newUser);
  }
  metoda(){
    alert("KLIKNUTO");
  }
  ngOnInit(): void {
  }

}
