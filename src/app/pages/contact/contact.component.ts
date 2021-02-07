import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Submit button for when the user wants to give us feedback
  submitFeedback() {
    console.log("Submit Feedback");
  }

  // Submit button for when the user wants to contribute some info
  submitContribution() {
    console.log("Submit Contribution");
  }
}
