import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public questions = [
    { id : 0,
      question : 'Waarvoor?',
      answer : 'Random Access Memory',
      questionAsked : 'false'
    },
    { id : 1,
      question : 'Waarvoor staan RAM?',
      answer : 'Random Access Memory',
      questionAsked : 'false'
    },
 
	{ id : 2,
      question : 'Waarvoor staan CPU?',
      answer : 'Central Processing Unit',
      questionAsked : 'false'
    },
	{ id : 3,
      question : 'Waarvoor staan USB?',
      answer : 'Universal serial bus',
      questionAsked : 'false'
    },
	{ id : 4,
      question : 'Watter slot kom die CPU in?',
      answer : 'ZIF slot',
      questionAsked : 'false'
    },
	{ id : 5,
      question : 'Watter slot kom die RAM in?',
      answer : 'DIMM slot',
      questionAsked : 'false'
    },
	{ id : 6,
      question : 'Wat is die vinngste SSD of HDD?',
      answer : 'SSD',
      questionAsked : 'false'
    },
	{ id : 7,
      question : 'RAM geheue is stadiger as HDD geheue. Waar of vals?',
      answer : 'Vals',
      questionAsked : 'false'
    },
	{ id : 8,
      question : 'Wat verbind al die hardeware in n rekenaar?',
      answer : 'Motherbord',
      questionAsked : 'false'
    },
	{ id : 9,
      question : 'RAM is duurder per MB as SSD per MB Waar of vals?',
      answer : 'Waar',
      questionAsked : 'false'
    },
	{ id : 10,
      question : 'Gee n voorbeeld van n invoer toestel?',
      answer : 'Muis, Keybord, mikrofoon ens',
      questionAsked : 'false'
    },
  ];

  constructor() { }
}
