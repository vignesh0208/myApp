import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public dataValue: any;
  constructor() {
    this.dataValue = [
      {name:'rob',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'UN rejects Saeed\'s plea for removal fro..',id:'1', icons:'call_received',iconColor:'red', time:'Just now'},
      {name:'sansa',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Seeking ban on Pak despite ICC snub..',id:'2',icons:'call_received',iconColor:'green', time:'4 minutes ago'},
      {name:'arya',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Hizbul behind Jammu grenade attack: ..',id:'3',icons:'call_received',iconColor:'red', time:'14 minutes ago'},
      {name:'jon',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Celebrate Women\'s Day',id:'4',icons:'call_received',iconColor:'red', time:'34 minutes ago'},
      {name:'bran',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'Apple CEO \'Tim Apple\'',id:'5',icons:'call_made',iconColor:'green', time:'40 minutes ago'},
      {name:'ned',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'UN rejects  plea for removal fro..',id:'6',icons:'call_made',iconColor:'green', time:'42 minutes ago'},
      {name:'tyrion',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'Hizbul behind Jammu attack: ..',id:'7',icons:'call_received',iconColor:'red', time:'45 minutes ago'},
      {name:'robert',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Seeking ban on despite ICC snub..',id:'8',icons:'call_made',iconColor:'green', time:'50 minutes ago'},
      {name:'nick',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Seeking ban on despite BCC snub..',id:'8',icons:'call_made',iconColor:'green', time:'Today, 1:29 pm'}
    ];
  }
}
