import { TestBed } from '@angular/core/testing';
import { BostonVilliansComponent } from './boston-villians.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        BostonVilliansComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(BostonVilliansComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'boston-villians'`, () => {
    const fixture = TestBed.createComponent(BostonVilliansComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('boston-villians');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BostonVilliansComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('boston-villians app is running!');
  });
});
