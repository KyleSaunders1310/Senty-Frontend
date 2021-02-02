import { Component, OnDestroy, OnInit } from '@angular/core';
import {WebService} from '../../web.service';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dictionaryarea',
  templateUrl: './dictionaryarea.component.html',
  styleUrls: ['./dictionaryarea.component.scss']
})
export class DictionaryareaComponent implements OnInit {

  wordTypes: any;
  words: any;
  selectedWordType = "";
  word = "";
  sentences: any;

  message:string = "";
  subscription: Subscription;

  constructor(private web: WebService, private data: DataService) {
    //this.wordTypes = service.get('getTypes');
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  ngOnInit(): void {
    this.web.getTypes().subscribe((data)=>{
      this.wordTypes = data;
    })

    this.web.getSentences().subscribe((data)=>{
      this.sentences = data;
    })

    this.subscription = this.data.currentMessage.subscribe(message => this.message = message)
  }

  getWordsByType(wordType: String) {
    this.web.getWordsByType(wordType).subscribe((data)=>{
      console.log(data);
      this.words = data;
      this.selectedWordType = '-->' + wordType + 's';
    })
  }

  newMessage(word: String) {
    console.log(this.message);
    this.data.changeMessage(this.message + ' ' + word)
  }
}
