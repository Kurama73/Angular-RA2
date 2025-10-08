import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { Alert } from './alert';
import { MessageModel } from '../models/message-model';
import { inputBinding, outputBinding, signal } from '@angular/core';

describe('Alert', () => {
  const messageModel = signal<MessageModel>({
    id: 1,
    message: 'Congratulations! Your app is running. 🎉',
    category: 'validation'
  });

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }]
    });
  });

  it('should display a paragraph', async () => {
    const fixture = TestBed.createComponent(Alert, {
      bindings: [inputBinding('alertes', signal([messageModel()]))]
    });
    await fixture.whenStable();

    // then we should have a paragraph
    const element = fixture.nativeElement as HTMLElement;
    const p = element.querySelector('p')!;
    expect(p).withContext('You should have a paragraph').not.toBeNull();
    expect(p.textContent)
      .withContext('The paragraph element should display the text of the message')
      .toContain('Congratulations! Your App Is Running');
  });

  it('should emit an event on click', async () => {
    const isClosed = signal(false);
    const fixture = TestBed.createComponent(Alert, {
      bindings: [inputBinding('alertes', signal([messageModel()])), outputBinding('alerteRemoved', () => isClosed.set(true))]
    });
    await fixture.whenStable();

    // when we click on the element
    const element = fixture.nativeElement as HTMLElement;
    const button = element.querySelector('p button') as HTMLButtonElement;
    expect(button).withContext('You should have a `button` element for the pony').not.toBeNull();
    button.click();
    fixture.detectChanges();

    expect(isClosed()).withContext('You may have forgot the click handler on the `button` element').toBeTruthy();
  });
});
