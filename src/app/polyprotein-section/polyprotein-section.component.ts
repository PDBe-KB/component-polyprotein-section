import {Component, Input} from '@angular/core';
import {ProcessedProtein} from './polyprotein-section.models';
import {MolstarDialogComponent} from '../molstar-dialog/molstar-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-polyprotein-section',
  templateUrl: './polyprotein-section.component.html',
  styleUrls: ['./polyprotein-section.component.css']
})
export class PolyproteinSectionComponent {

  @Input() processedProteins: ProcessedProtein[];
  @Input() parentProtein: string;
  defaultShowLimit: number;
  showLimit: number;

  constructor(public dialog: MatDialog) {
    this.defaultShowLimit = 4;
    this.showLimit = 4;
  }

  setShowLimit(limit: number) {
    /*
     * Set the showLimit
     *
     * @param limit - Number which should be the new limit, needs to be greater than 0
     */
    if (limit > 0) {
      if (limit < this.processedProteins.length) {
        this.showLimit = limit;
      } else {
        this.showLimit = this.processedProteins.length;
      }
    } else {
      this.showLimit = 1;
    }
  }

  showMore() {
    this.setShowLimit(this.processedProteins.length);
  }

  showLess() {
    this.setShowLimit(this.defaultShowLimit);
  }

  checkItem(item: any) {
    /*
     * Check if the length of a segment is smaller than the whole UniProt length
     */
    const lengthFilter = (item.unp_end - item.unp_start) + 1 < item.unp_length;
    const nameFilter = item.name !== this.parentProtein;
    return lengthFilter && nameFilter;
  }

  getCount() {
    /*
     * Get the number of processed proteins
     *
     * @returns the number of proteins
     */
    let count = 0;
    for (let i = 0; i < this.processedProteins.length; i++) {
      if (this.checkItem(this.processedProteins[i])) {
        count++;
      }
    }
    return count;
  }

  getSectionStyle(item: any) {
    /*
     * Return a style object to be used for formatting boxes that represent PDB.
     * This is used to create boxes for PDBs that cover a certain segment of
     * a UniProt accession
     *
     * @param pdb - An object that has information on the start and end indices of residues
     * @param uniprotLength - A number that gives the length of the related UniProt accession sequence
     * @param transparent - A boolean to decide if a segment should be transparent
     * @return A style object
     */
    const style = {};
    if (item.representative_pdb) {
      style['background-color'] = '#74b360';
    } else {
      style['background-color'] = '#c3c0c0';
      style['cursor'] = 'default';
    }
    style['width'] = Math.ceil((item.unp_end - item.unp_start + 1) / item.unp_length * 100) + '%';
    style['left'] = Math.floor(item.unp_start / item.unp_length * 100) + '%';
    return style;
  }

  getIconStyle(value: number) {
    /*
     * Return a style object to be used for formatting icons.
     * This is used for the summary icons, i.e. the number of ligands or
     * interaction partners a UniProt accession has. The icons look the same,
     * except when the count is 0
     *
     * @param value - A count of data items, e.g. number of ligands
     * @return A style object
     */
    const style = {};
    style['border-bottom'] = 'none';
    if (value === 0) {
      style['color'] = '#808080';
    }
    return style;
  }

  openMolstarDialog(pdb: any) {
    /*
     * Opens a Mol* dialog window
     *
     * @param pdb - An object with information on a PDB identifier and PDB chain
     */
    if (!pdb) {
      return;
    }

    const entries = [];
    entries.push(
      {
        pdbId: pdb.pdb_id,
        chainId: pdb.best_chain,
        chainColor: [50, 130, 255]
      }
    );

    const entryData = {
      entryList: entries,
      current: 0
    };

    this.dialog.open(MolstarDialogComponent,
      {
        disableClose: false,
        panelClass: 'molstarDialog',
        data: entryData
      }
    );

    return entryData;
  }

}
