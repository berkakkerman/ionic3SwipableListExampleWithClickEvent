import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Http} from '@angular/http';
import {PeopleServiceProvider} from '../../providers/people-service/people-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PeopleServiceProvider]
})
export class HomePage {

  public people:any;
  constructor(
    public navCtrl: NavController,
    public http:Http,
    public peopleService:PeopleServiceProvider,
    public alertCtrl:AlertController
    ) 
    {
      this.load();
    }
  load(){
    this.peopleService.load()
    .then(data=>{
        this.people=data;
        console.log('home load() => '+ this.people);
        
    });    
  }
  share(username){
      let alert = this.alertCtrl.create({
        title: 'Share Button Clicked',
        subTitle: username,
        buttons: ['Dismiss']
      });
      alert.present();
    }
}
