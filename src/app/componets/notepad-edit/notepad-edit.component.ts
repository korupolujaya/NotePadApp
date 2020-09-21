import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notepad-edit',
  templateUrl: './notepad-edit.component.html',
  styleUrls: ['./notepad-edit.component.css']
})
export class NotepadEditComponent implements OnInit {
  
  title:string="title new app";
  content:string="add your content here";
  msg:string="Add your message here";

  constructor() {
    

  }

  ngOnInit(): void {

  }

}
