import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ChartComponent } from './chart.component';
import { Observable, of } from 'rxjs';

describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;

  const breakpointObserverStub = {
    observe: () => of({ matches: false })
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ChartComponent],
        providers: [{ provide: BreakpointObserver, useValue: breakpointObserverStub }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should create the chart after view init', () => {
    const createChartSpy = spyOn(component, 'createChart');
    component.ngAfterViewInit();
    expect(createChartSpy).toHaveBeenCalled();
  });

  it('should have cards observable with initial values', () => {
    component.cards.subscribe((cards) => {
      expect(cards).toEqual([
        { title: 'Card 1', cols: 2, rows: 1 },
        
      ]);
    });
  });

  it('should render cards in the template', () => {
    const cardElements = fixture.debugElement.queryAll(By.css('.dashboard-card'));
    expect(cardElements.length).toEqual(4);
  });

  

});
