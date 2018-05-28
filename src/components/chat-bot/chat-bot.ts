import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { App } from "botframework-webchat";
//import { SpeechRecognizer, SpeechSynthesizer } from "botframework-webchat/CognitiveServices";

@Component({
  selector: 'chat-bot',
  templateUrl: 'chat-bot.html'
})
export class ChatBotComponent implements OnInit{

  @ViewChild("botWindow") botWindowElement: ElementRef;
  text: string;

  constructor() {
    console.log('Hello ChatBotComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    /*const speechOptions = {
      speechRecognizer: new SpeechRecognizer({ locale: 'es-MX', subscriptionKey: '10f9295026404043a17267bac3cfe22a'}),
      speechSynthesizer: new SpeechSynthesizer({
          subscriptionKey: '10f9295026404043a17267bac3cfe22a',
          voiceName: 'Microsoft Server Speech Text to Speech Voice (es-MX, HildaRUS)',
      })
    };*/

    App({
      adaptiveCardsHostConfig: {
        fontFamily: '"Myriad Pro", sans-serif'
      },
      directLine: {
        secret: 'f0U4GgfLXeQ.cwA.PbA.efbJoWeP7mQyWoW-QiZuwsJVD6MDZyw9JO1BpNAa9mY', 
        webSocket: true 
      },
      user: {id: 'userid', name: 'username'},
      bot: {id: 'botid', name: 'botname'},
    }, this.botWindowElement.nativeElement);
  }

}
