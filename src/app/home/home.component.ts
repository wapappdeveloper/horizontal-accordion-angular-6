import { Component, OnInit, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('changeState', [
      state('state1', style({
        height: '0%',
        display: 'none'
      })),
      state('state2', style({
        height: '100%',
        display: 'block'
      })),
      transition('state1 => state2', animate('1s')),
      transition('state2 => state1', animate('1s'))
    ]),

    trigger('changeState1', [
      state('state1', style({
        height: '0%',
        display: 'none'
      })),
      state('state2', style({
        height: '100%',
        display: 'block'
      })),
      transition('state1 => state2', animate('1s')),
      transition('state2 => state1', animate('1s'))
    ]),
  ]

})
export class HomeComponent implements OnInit {
  @ViewChild('mainDiv') mainDiv1: ElementRef;
  states: string = 'state1';
  states1: string = 'state1';
  currentTab: any;
  public tabData = [
    { flag: false, tabName: 'Mark 41', detail: '41 Lorem ipsum doiam, quis nostrud exercitation ullamco laboris ni' },
    { flag: false, tabName: 'Mark 42', detail: '42 Lorem ipsum doiam, quis nostrud exercitation ullamco laboris ni' },
    { flag: false, tabName: 'Mark 43', detail: '43 Lorem ipsum doiam, quis nostrud exercitation ullamco laboris ni' },
    { flag: false, tabName: 'Mark 44', detail: '44 Lorem ipsum doiam, quis nostrud exercitation ullamco laboris ni' },
  ]

  constructor() { }

  ngOnInit() {
  }

  togglePanel() {
    if (this.states === 'state1') {
      this.states = 'state2';
    } else if (this.states === 'state2') {
      this.states = 'state1';
    }
  }

  toggleTab(name) {
    this.currentTab = name;
    if (this.states1 === 'state1') {
      this.states1 = 'state2';
    } else if (this.states1 === 'state2') {
      this.states1 = 'state1';
    }
  }

}


