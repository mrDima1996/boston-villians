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

  it('should create the boston-vilians', () => {
    const fixture = TestBed.createComponent(BostonVilliansComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dummy-micro-front-end'`, () => {
    const fixture = TestBed.createComponent(BostonVilliansComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dummy-micro-front-end');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(BostonVilliansComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('dummy-micro-front-end boston-vilians is running!');
  });
});
