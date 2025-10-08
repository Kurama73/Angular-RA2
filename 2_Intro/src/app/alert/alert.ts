import { ChangeDetectionStrategy, Component, input, OnInit, OnDestroy, output } from '@angular/core';
import { TitleCasePipe, DecimalPipe } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'iut-alert',
  imports: [TitleCasePipe, DecimalPipe],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Alert implements OnInit {
  subscriptions: Subscription[] = [];

  public category: 'info' | 'validation' | 'warning' = 'info';
    
  readonly alertes = input<{ id: number; category: string; message: string }[]>([]);
  readonly alerteRemoved = output<number>();
  readonly addAlerte = output<void>();

  ngOnInit(): void {
    const subscription = interval(1000) .subscribe((x) => console.log(x)); 
    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) { 
      subscription.unsubscribe(); 
    }  
  }
  
  onAddAlerte(): void {
    console.log('Alert.ts addAlerte');
    this.addAlerte.emit();
  }

  removeAlerte(id: number): void {
    this.alerteRemoved.emit(id);
  }
}
