import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import { TestingComponent } from './testing.component';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /**/
  it('contains header h1 with counter initial value', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    expect(h1).toBeTruthy();
    expect(h1.textContent).toContain(0);
  });

  it('contains button with text Kliknij', () => {
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(button).toBeTruthy();
    expect(button.textContent).toContain('Kliknij');
  });

  it('should change value of counter after button click', () => {
    const h1 = fixture.debugElement.query(By.css('h1')).nativeElement;
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(h1.textContent).toContain(0);
    button.click();
    fixture.detectChanges();
    expect(h1.textContent).toContain(1);
  });

});
