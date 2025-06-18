import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tailwindtask1Component } from './tailwindtask1.component';

describe('Tailwindtask1Component', () => {
  let component: Tailwindtask1Component;
  let fixture: ComponentFixture<Tailwindtask1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tailwindtask1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tailwindtask1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
