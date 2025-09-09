import { NgModule, provideZonelessChangeDetection } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { BrowserTestingModule, platformBrowserTesting } from '@angular/platform-browser/testing';

beforeEach(() => {
  spyOn(console, 'warn').and.callThrough();
  spyOn(console, 'error').and.callThrough();
});

afterEach(() => {
  // check if there are no console warnings or errors
  expect(console.warn).withContext('There should be no console warnings (see src/test.ts)').not.toHaveBeenCalled();
  expect(console.error).withContext('There should be no console errors (see src/test.ts)').not.toHaveBeenCalled();
});

@NgModule({
  providers: [provideZonelessChangeDetection()]
})
export class ZonelessTestModule {}

getTestBed().initTestEnvironment([BrowserTestingModule, ZonelessTestModule], platformBrowserTesting(), {
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true
});
