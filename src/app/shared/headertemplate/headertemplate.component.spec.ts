import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertemplateComponent } from './headertemplate.component';

describe('HeadertemplateComponent', () => {
  let component: HeadertemplateComponent;
  let fixture: ComponentFixture<HeadertemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadertemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadertemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
