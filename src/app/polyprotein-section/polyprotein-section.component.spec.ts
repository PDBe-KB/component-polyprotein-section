import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PolyproteinSectionComponent} from './polyprotein-section.component';
import {MatDialog} from '@angular/material/dialog';
import {MolstarDialogComponent} from '../molstar-dialog/molstar-dialog.component';


describe('PolyproteinSectionComponent', () => {
  let component: PolyproteinSectionComponent;
  let fixture: ComponentFixture<PolyproteinSectionComponent>;
  const mockData = [{
    id: 'PRO_01234',
    name: 'Foo-bar-1',
    unp_length: 100,
    unp_start: 5,
    unp_end: 40,
    summary_counts: {
      pdbs: 5,
      ligands: 1,
      interactions: 3
    },
    representative_pdb: {
      pdb_id: '1abc',
      best_chain: 'A',
      entity_id: 1,
      unp_start: 1,
      unp_end: 42
    }
  },
    {
      id: 'PRO_01234',
      name: 'Foo-bar-1',
      unp_length: 100,
      unp_start: 5,
      unp_end: 40,
      summary_counts: {
        pdbs: 5,
        ligands: 1,
        interactions: 3
      },
      representative_pdb: {
        pdb_id: '1abc',
        best_chain: 'A',
        entity_id: 1,
        unp_start: 1,
        unp_end: 42
      }
    },
    {
      id: 'PRO_01234',
      name: 'Foo-bar-1',
      unp_length: 100,
      unp_start: 5,
      unp_end: 40,
      summary_counts: {
        pdbs: 5,
        ligands: 1,
        interactions: 3
      },
      representative_pdb: {
        pdb_id: '1abc',
        best_chain: 'A',
        entity_id: 1,
        unp_start: 1,
        unp_end: 42
      }
    },
    {
      id: 'PRO_01234',
      name: 'Foo-bar-1',
      unp_length: 100,
      unp_start: 5,
      unp_end: 40,
      summary_counts: {
        pdbs: 5,
        ligands: 1,
        interactions: 3
      },
      representative_pdb: {
        pdb_id: '1abc',
        best_chain: 'A',
        entity_id: 1,
        unp_start: 1,
        unp_end: 42
      }
    },
    {
      id: 'PRO_01234',
      name: 'Foo-bar-1',
      unp_length: 100,
      unp_start: 5,
      unp_end: 40,
      summary_counts: {
        pdbs: 5,
        ligands: 1,
        interactions: 3
      },
      representative_pdb: {
        pdb_id: '1abc',
        best_chain: 'A',
        entity_id: 1,
        unp_start: 1,
        unp_end: 42
      }
    }];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolyproteinSectionComponent, MolstarDialogComponent],
      providers: [
        {provide: MatDialog, useValue: {}}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolyproteinSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set limit to 1 for x < 0 values', () => {
    component.processedProteins = mockData;
    component.setShowLimit(0);
    expect(component.showLimit).toEqual(1);
    component.setShowLimit(-10);
    expect(component.showLimit).toEqual(1);
  });

  it('should set limit to default', () => {
    component.processedProteins = mockData;
    component.showLess();
    expect(component.showLimit).toEqual(component.defaultShowLimit);
  });

  it('should set limit to max', () => {
    component.processedProteins = mockData;
    component.showMore();
    expect(component.showLimit).toEqual(5);
  });

  it('checkItem() should work', () => {
    component.parentProtein = 'P12345';
    expect(component.checkItem({unp_end: 50, unp_start: 1, unp_length: 100})).toBeTruthy();
    expect(component.checkItem({unp_end: 50, unp_start: 1, unp_length: 10})).toBeFalsy();
    expect(component.checkItem({unp_end: 10, unp_start: 1, unp_length: 10})).toBeFalsy();
    component.parentProtein = 'Foo-bar-1';
    expect(component.checkItem({unp_end: 50, unp_start: 1, unp_length: 100, name: 'Foo-bar-1'})).toBeFalsy();
  });

  it('should return count', () => {
    // Get the number of processed proteins
    component.processedProteins = mockData;
    expect(component.getCount()).toEqual(mockData.length);
  });

  it('should get section style', () => {
    // Get the style for a segment
    const expected = {'background-color': '#74b360', 'width': '84%', 'left': '2%'};
    const result = component.getSectionStyle({unp_start: 1, unp_end: 42, unp_length: 50, representative_pdb: [1, 2, 3]});
    expect(result).toEqual(expected);
    const expectedNoPdb = {'background-color': '#c3c0c0', 'width': '84%', 'left': '2%', 'cursor': 'default'};
    const resultNoPdb = component.getSectionStyle({unp_start: 1, unp_end: 42, unp_length: 50});
    expect(resultNoPdb).toEqual(expectedNoPdb);
  });

  it('should get icon style', () => {
    let expected = {};

    // Get the style when the count is higher than 0
    expected = {'border-bottom': 'none'};
    let result = component.getIconStyle(1);
    expect(result).toEqual(expected);

    // Get the style when the count is 0
    expected = {'border-bottom': 'none', 'color': '#808080'};
    result = component.getIconStyle(0);
    expect(result).toEqual(expected);
  });

  it('should set the Mol* parameters', () => {
    // Set parameters for opening a Mol* dialog

    const expected = {
      entryList: [
        {
          pdbId: '1foo',
          chainId: 'A',
          chainColor: [50, 130, 255]
        }
      ],
      current: 0
    };
    component.dialog.open = function () {
      return null;
    };
    expect(component.openMolstarDialog({pdb_id: '1foo', best_chain: 'A'})).toEqual(expected);

    expect(component.openMolstarDialog(null)).toBeFalsy();

  });

});
