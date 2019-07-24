import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  public dataValue: any;
  public cardValue: any;
  public messages: any;
  constructor() {
    this.cardValue = [
      {name: 'No. of Visitors', size: 'size-sm', value: [ { val1:'0', val2:'Today' }, { val1:'15', val2:'Total' } ]},
      {name: 'No. of Leads', size: 'size-sm', value: [ { val1:'0', val2:'Today' }, { val1:'2', val2:'Total' } ]},
      {name: 'No. of Tickets', size: 'size-md', value: [ { val1:'4', val2:'Open' }, { val1:'1', val2:'Unassigned' }, { val1:'4', val2:'Overdue' } ]}
    ]
    this.dataValue = [
      {name:'rob',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Such programs are often designed to convincingly simulate how a human would behave as a conversational partner, although as of 2019, they are far short of being able to pass the Turing test.',id:'1',time:'Just now',color: this.getRandomColor()},
      {name:'sansa',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Build the perfect custom bot and grow your business faster. Integrated platform.',id:'2',time:'4 minutes ago',color: this.getRandomColor()},
      {name:'arya',image:'https://semantic-ui.com/images/avatar2/large/molly.png',message:'Personalized Onboarding. Targeted Live Chat. Marketing Automation.',id:'3',time:'14 minutes ago',color: this.getRandomColor()},
      {name:'jon',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Easy Setup. Services: Website Live Chat, Customer Engagement, Customer Support, In-App Messaging, Targeted Emails.',id:'4',time:'34 minutes ago',color: this.getRandomColor()},
      {name:'bran',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'Build a chatbot for any service you need. ChatBot.com is basically your personal chatbot factory with no IT skills needed.',id:'5',time:'40 minutes ago',color: this.getRandomColor()},
      {name:'ned',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Love them or hate them, chatbots are here to stay.',id:'6',time:'42 minutes ago',color: this.getRandomColor()},
      {name:'tyrion',image:'https://semantic-ui.com/images/avatar2/large/elyse.png',message:'A chatbot is a computer program which conducts a conversation via auditory or textual methods.',id:'7',time:'45 minutes ago',color: this.getRandomColor()},
      {name:'robert',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'A chatbot is a computer program which conducts a conversation via auditory or textual methods.',id:'8',time:'50 minutes ago',color: this.getRandomColor()},
      {name:'nick',image:'https://semantic-ui.com/images/avatar2/large/matthew.png',message:'Build a chatbot for any service you need. ChatBot.com is basically your personal chatbot factory with no IT skills needed.',id:'8',time:'Today, 1:29 pm',color: this.getRandomColor()}
    ];
    this.messages = [
      {
        senderType: 'bot',
        name: 'Bot',
        message: 'Our culture is to succeed, but have fun while doing it.'
      },
      {
        senderType: 'user',
        name: 'Vicky',
        message: 'What is your company culture?'
      },
      {
        senderType: 'bot',
        name: 'Bot',
        message: 'Were in the business of making our customers happy'
      },
      {
        senderType: 'user',
        name: 'Vicky',
        message: 'What is your company about?'
      },
      {
        senderType: 'bot',
        name: 'Bot',
        message: 'Am doing good, how about you?'
      },
      {
        senderType: 'user',
        name: 'Vicky',
        message: 'How are you?'
      },
      {
        senderType: 'bot',
        name: 'Bot',
        message: 'Hey!, how may i help you!'
      },
      {
        senderType: 'user',
        name: 'Vicky',
        message: 'Heelllo'
      },
    ];
  }

  getRandomColor()
  {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  
  getIdnumValue(id:number) {
    return this.dataValue.filter(val => {
        return val.id === id;
    })[0]
  }
}
