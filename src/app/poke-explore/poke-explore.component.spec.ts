import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeExploreComponent } from './poke-explore.component';

describe('PokeExploreComponent', () => {
  let component: PokeExploreComponent;
  let fixture: ComponentFixture<PokeExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
