import { Component, Input } from "@angular/core";

@Component({
  selector: 'input-session-component',
  templateUrl: './input-session-component.html',
  styleUrls: ['./input-session-component.css']
})

export class InputSessionComponent {
  @Input() title: string = '';
  @Input() value: any;
  @Input() type: string = '';
}