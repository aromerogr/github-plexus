import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterModule, HttpClientModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'mi-aplicacion-angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('mi-aplicacion-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Hello, mi-aplicacion-angular'
    );
  });
});

it('should have a defined selector', () => {
  const metadata = (AppComponent as any).ɵcmp;
  expect(metadata.selectors[0][0]).toEqual('app-root');
});

it('should include RouterModule in imports', () => {
  const metadata = (AppComponent as any).ɵcmp;
  expect(metadata.imports).toContain(RouterModule);
});

it('should have a templateUrl defined', () => {
  const metadata = (AppComponent as any).ɵcmp;
  expect(metadata.templateUrl).toEqual('./app.component.html');
});

it('should have a styleUrls array defined', () => {
  const metadata = (AppComponent as any).ɵcmp;
  expect(metadata.styleUrls).toContain('./app.component.css');
});

it('should have a title property', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.title).toBeDefined();
});

it('should have the correct title value', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.title).toBe('mi-aplicacion-angular');
});
