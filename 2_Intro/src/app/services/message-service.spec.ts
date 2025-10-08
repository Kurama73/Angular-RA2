import { TestBed } from '@angular/core/testing';

import { MessageService } from './message-service';

describe('MessagesService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fill with 3 messages', () => {
    service.fillWithExemples();
    expect(service.alertes().length).withContext('fillWithExemples should fill array with the 3 provided examples').toEqual(3);
  });

  it('should delete a message', () => {
    service.fillWithExemples();
    service.delete(2);
    expect(service.alertes().length).withContext('delete should filter messages with ids different from the parameter').toEqual(2);
  });

  it('should add a message', () => {
    service.fillWithExemples();
    service.add('test');
    expect(service.alertes().length).withContext('add() should add a message').toEqual(4);
    expect(service.alertes()[3].id).withContext('add() should add a message with an id').toEqual(4);
    expect(service.alertes()[3].category)
      .withContext('add() should add a message with the default category "info" when not precised')
      .toEqual('info');
    service.delete(2);
    service.add('test2');
    expect(service.alertes()[3].id).withContext('add() should increment the ID for each new message, starting at 1').toEqual(5);
  });

});
