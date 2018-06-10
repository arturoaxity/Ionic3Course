import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bot',
  templateUrl: 'bot.html',
})
export class BotPage {

  secret: string = 'f0U4GgfLXeQ.cwA.PbA.efbJoWeP7mQyWoW-QiZuwsJVD6MDZyw9JO1BpNAa9mY'; 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotPage');
  }

}
