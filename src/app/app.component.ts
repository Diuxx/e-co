import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  // variables
  title = 'e-co-angular';

  // ceo: meta
  private meta: Meta;

  constructor()
  {}

  ngOnInit() {
    this.meta.addTag({
      name: 'angular.ganatan',
      content: 'danny ganatan'
    });
    this.meta.updateTag({
      name: 'description',
      content: 'Cette application a été développée avec Angular version 9.1.7 et bootstrap 4.5.0' +
        ' Elle applique le Routing, le Lazy loading, le Server side rendering et les Progressive Web App (PWA)'
    });
  }
}
