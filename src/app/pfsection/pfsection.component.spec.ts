import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfsectionComponent } from './pfsection.component';

describe('PfsectionComponent', () => {
  let component: PfsectionComponent;
  let fixture: ComponentFixture<PfsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PfsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
