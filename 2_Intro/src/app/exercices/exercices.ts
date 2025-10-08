import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExerciseModel } from '../models/exercise-model';
import { ReverseSwapFunPipe } from '../pipes/reverse-swap-fun-pipe';

@Component({
  selector: 'iut-exercices',
  imports: [CommonModule, ReverseSwapFunPipe],
  templateUrl: './exercices.html',
  styleUrl: './exercices.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Exercices {
  readonly exercices = input<{ id: number; title: string; dueDate: Date; submitted: boolean }[]>([]);
  readonly submit = output<{ id: number }>();

  toggle(id: number): void {
    this.submit.emit({ id });
  }
}
