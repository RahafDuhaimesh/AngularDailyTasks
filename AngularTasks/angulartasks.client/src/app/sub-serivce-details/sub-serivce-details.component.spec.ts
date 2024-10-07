import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubSerivceDetailsComponent } from './sub-serivce-details.component';

describe('SubSerivceDetailsComponent', () => {
  let component: SubSerivceDetailsComponent;
  let fixture: ComponentFixture<SubSerivceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubSerivceDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubSerivceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
