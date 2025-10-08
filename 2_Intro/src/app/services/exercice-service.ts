import { Injectable, signal } from '@angular/core';
import { ExerciseModel } from '../models/exercise-model';
@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
  private readonly exercicesData = signal<ExerciseModel[]>([]);
  readonly exercices = this.exercicesData.asReadonly();

  fillWithExemples() {
    this.exercicesData.set([
      { id: 1, title: 'intro Typescript', dueDate: new Date(2025, 9, 27), submitted: true },
      { id: 2, title: 'Angular Components', dueDate: new Date(2025, 10, 5), submitted: false },
      { id: 3, title: 'Services and Dependency Injection', dueDate: new Date(2025, 10, 12), submitted: false }
    ]);
  }

  toggle(id: number) {
    const exercice = this.exercicesData().find(ex => ex.id === id);
    if (exercice) {
      exercice.submitted = !exercice.submitted;
      this.exercicesData.set([...this.exercicesData()]);
      console.log('État après toggle:', this.exercicesData());
    }
  }

  getAll() {
    return this.exercices();
  }
}
