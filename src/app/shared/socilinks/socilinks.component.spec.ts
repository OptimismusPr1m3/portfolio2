import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocilinksComponent } from './socilinks.component';

describe('SocilinksComponent', () => {
  let component: SocilinksComponent;
  let fixture: ComponentFixture<SocilinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocilinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocilinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
