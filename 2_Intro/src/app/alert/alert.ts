import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { TitleCasePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'iut-alert',
  imports: [TitleCasePipe, DecimalPipe],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Alert {
  public category: 'info' | 'validation' | 'warning' = 'info';

  readonly alertes = input<{ id: number; category: string; message: string }[]>([]);
  readonly alerteRemoved = output<number>();
  readonly addAlerte = output<void>();

  onAddAlerte(): void {
    console.log('Alert.ts addAlerte');
    this.addAlerte.emit();
  }

  removeAlerte(id: number): void {
    this.alerteRemoved.emit(id);
  }
}
