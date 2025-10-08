// src/app/app.ts
import { Component, inject, signal, OnInit } from '@angular/core';
import '@angular/common/locales/global/fr';
import { Alert } from './alert/alert';
import { Exercices } from './exercices/exercices';
import { MessageService } from './services/message-service';
import { ExerciceService } from './services/exercice-service';

@Component({
  selector: 'iut-root',
  imports: [Alert, Exercices],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('mon premier projet');
  private readonly messageService = inject(MessageService);
  private readonly exerciceService = inject(ExerciceService);

  alertesData = this.messageService.alertes;
  exercicesData = this.exerciceService.exercices;

  ngOnInit(): void {
    this.messageService.fillWithExemples();
    this.exerciceService.fillWithExemples();
  }

  constructor() {
    this.messageService.fillWithExemples();
    // setTimeout(() => { 
    //   this.title.set('Bonjour les gens');
    // }, 3000);
  }

  onAlerteRemoved(id: number): void {
    this.messageService.delete(id);
  }

  onAddAlerte(): void {
    console.log('App.ts onAddAlerte');
    this.messageService.add();
  }

  onToggle(id: number): void {
    this.exerciceService.toggle(id);
  }
}
