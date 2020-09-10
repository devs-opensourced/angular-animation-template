import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-generator-form',
  templateUrl: './template-generator-form.component.html',
  styleUrls: ['./template-generator-form.component.scss']
})
export class TemplateGeneratorFormComponent implements OnInit {
  templates: Array<any>;
  hovered: number;
  setTemplate: boolean;

  constructor() { }

  selectTemplate(index) {
    this.setTemplate = true;
  }

  generateTemplate() {
    this.setTemplate = false;
  }

  ngOnInit(): void {
    this.setTemplate = false;
    this.templates = [
      {
        title: "Java",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        title: "Kotlin",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
      },
      {
        title: "Angular",
        desc: "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
    ]

  }


  credentials() {
    let client: any = {};
    client.ID = 'eda19ff4c3e0ae0a2b8d';
    client.Secret = '24b21d9f6d3dfda67f4d09ef939bbfe019a611d9';
  }
}
