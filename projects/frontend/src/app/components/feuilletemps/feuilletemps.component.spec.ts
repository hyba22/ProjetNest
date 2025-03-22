import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilletempsComponent } from './feuilletemps.component';

describe('FeuilletempsComponent', () => {
  let component: FeuilletempsComponent;
  let fixture: ComponentFixture<FeuilletempsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeuilletempsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeuilletempsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
