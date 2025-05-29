import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NebulousNarwhalUiComponent } from './nebulous-narwhal-ui.component';

describe('NebulousNarwhalUiComponent', () => {
  let component: NebulousNarwhalUiComponent;
  let fixture: ComponentFixture<NebulousNarwhalUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NebulousNarwhalUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NebulousNarwhalUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
