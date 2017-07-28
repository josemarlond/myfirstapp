import { Component } from '@angular/core';
import {PostService} from './posts.service';
declare var JQuery:any;
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PostService]
})


export class AppComponent {
  title = 'app';
  name : string ;
  email : string ;
  website : string ;
  hobbies : string[];
  showHobbies : boolean;
  showTitle : boolean;
  posts : Ipost[];

  constructor(private postService:PostService){
    console.log('Constructor creado por Marlon iniciado');

    this.name = 'Dimitri' ;
    this.email = 'jrmarlondrp@gmail.com';
    this.website = 'http://wwww.facebook.com' ;
    this.hobbies = [ 'run' , 'read', 'write'];
    this.showHobbies = false;
    //this.postService.getPost().subscribe( posts=> console.log(posts) );
    this.postService.getPost().subscribe( posts=> { this.posts = posts ; } );
  }

  toggleTitle(){
    console.log('Has dado clic al boton');
    $('.title').slideToggle();
  }

  toggleHobbies(){

    this.showHobbies = !this.showHobbies;
  }

  newHobby(hobby){
    this.hobbies.push(hobby.value);
    hobby.value = "";
    return false;

  }
}


interface Ipost{
id: string;
title:string;
body:string;

}