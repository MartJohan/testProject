import { Component, OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {


  public usersfromDb: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  

  public submit() {
    let fname = document.getElementById('firstname') as HTMLInputElement;
    let lname = document.getElementById('lastname') as HTMLInputElement;
    this.postData(fname.value,lname.value)
  }

  private async postData(firstname: string, lastname: string) {
    try{
      return await fetch('http://127.0.0.1:3000/post/data',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname
        })
      }).then(res => {
        console.log('request valid')
      })
    } catch(err) {
      console.log(err)
    }
  }

  public async getUsers() {
    try {
      return await fetch('http://127.0.0.1:3000/data').then(res => {
        console.log(res);
      })
    } catch(err) {
      console.log(err);
    }
  }
}
