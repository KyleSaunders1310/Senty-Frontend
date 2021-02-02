import { Component, OnInit } from '@angular/core';
import { DataService } from "../../data.service";
import { Subscription } from 'rxjs';
import { WebService } from 'src/app/web.service';

@Component({
  selector: 'app-stagearea',
  templateUrl: './stagearea.component.html',
  styleUrls: ['./stagearea.component.scss']
})
export class StageareaComponent implements OnInit {
  message: string = "";
  subscription: Subscription;
  sentence: String;

  title = "List";
  courses = ["course1", "course2", "course3"];

  constructor(private data: DataService, private web: WebService ) {
    this.sentence = "";
    this.subscription = this.data.currentMessage.subscribe(message => this.message = message);
  }

  clearSentence() {

    console.log(this.message);
    this.data.changeMessage('')
  }

  addSentence() {
    this.web.addSentence({"sentence": this.message}).subscribe((data)=>{
      console.log(data);
    })
    this.clearSentence();
  }

  ngOnInit(): void {

  }
}
