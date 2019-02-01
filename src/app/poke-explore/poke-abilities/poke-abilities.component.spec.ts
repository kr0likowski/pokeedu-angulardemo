import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAbilitiesComponent } from './poke-abilities.component';

describe('PokeAbilitiesComponent', () => {
  let component: PokeAbilitiesComponent;
  let fixture: ComponentFixture<PokeAbilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeAbilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeAbilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
