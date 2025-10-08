import { Injectable, signal } from '@angular/core';
import { MessageModel } from '../models/message-model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private readonly alertesData = signal<MessageModel[]>([]);
  readonly alertes = this.alertesData.asReadonly();

  fillWithExemples() {
    this.alertesData.set([
      { id: 1, category: 'info', message: 'ceci est une info' },
      { id: 2, category: 'validation', message: 'ceci est une validation' },
      { id: 3, category: 'warning', message: 'ceci est un warning' }
    ]);
  }
  delete(id: number) {
    this.alertesData.set(this.alertesData().filter(alerte => alerte.id !== id));
  }

  getAll() {
    return this.alertes();
  }

  add(message?: string) {
    const currentAlertes = this.alertesData();
    const maxId = currentAlertes.length > 0 ? Math.max(...currentAlertes.map(a => a.id)) : 0;
    const newId = maxId + 1;
    const newMessage: MessageModel = { id: newId, category: 'info', message: message || 'Ceci est une alerte' };
    this.alertesData.set([...currentAlertes, newMessage]);
  }
}