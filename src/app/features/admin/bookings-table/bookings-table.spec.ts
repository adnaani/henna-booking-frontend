import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingsTable } from './bookings-table';

describe('BookingsTable', () => {
  let component: BookingsTable;
  let fixture: ComponentFixture<BookingsTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingsTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingsTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
