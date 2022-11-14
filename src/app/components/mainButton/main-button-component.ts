import { Component, Input } from "@angular/core";

@Component({
  selector: 'main-button-component',
  templateUrl: './main-button-component.html',
  styleUrls: ['./main-button-component.css']
})

export class MainButtonComponent {
  @Input() text: string = '';
  
  handleButton() {}
}