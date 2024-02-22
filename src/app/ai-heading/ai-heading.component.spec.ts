import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiHeadingComponent } from './ai-heading.component';

describe('AiHeadingComponent', () => {
  let component: AiHeadingComponent;
  let fixture: ComponentFixture<AiHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AiHeadingComponent]
    });
    fixture = TestBed.createComponent(AiHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
