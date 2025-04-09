import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPojectionComponent } from './content-pojection.component';

describe('ContentPojectionComponent', () => {
  let component: ContentPojectionComponent;
  let fixture: ComponentFixture<ContentPojectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentPojectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPojectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
