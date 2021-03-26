import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  proteinName = 'P12345';
  processedProteins = [
    {
      'id': 'PRO_0000449619',
      'name': 'Host translation inhibitor nsp1',
      'unp_length': 7096,
      'unp_start': 1,
      'unp_start_code': 'MET',
      'unp_end': 180,
      'unp_end_code': 'GLY',
      'summary_counts': {
        'pdbs': 16,
        'ligands': 5,
        'interactions': 3
      },
      'representative_pdb': {
        'pdb_id': '7k7p',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 10,
        'unp_end': 127
      }
    },
    {
      'id': 'PRO_0000449620',
      'name': 'Non-structural protein 2',
      'unp_length': 7096,
      'unp_start': 181,
      'unp_start_code': 'ALA',
      'unp_end': 818,
      'unp_end_code': 'GLY',
      'summary_counts': {
        'pdbs': 0,
        'ligands': 0,
        'interactions': 0
      },
      'representative_pdb': null
    },
    {
      'id': 'PRO_0000449621',
      'name': 'Non-structural protein 3',
      'unp_length': 7096,
      'unp_start': 819,
      'unp_start_code': 'ALA',
      'unp_end': 2763,
      'unp_end_code': 'GLY',
      'summary_counts': {
        'pdbs': 297,
        'ligands': 275,
        'interactions': 4
      },
      'representative_pdb': {
        'pdb_id': '6wx4',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 1562,
        'unp_end': 1879
      }
    },
    {
      'id': 'PRO_0000449622',
      'name': 'Non-structural protein 4',
      'unp_length': 7096,
      'unp_start': 2764,
      'unp_start_code': 'LYS',
      'unp_end': 3263,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 1,
        'ligands': 0,
        'interactions': 0
      },
      'representative_pdb': {
        'pdb_id': '7kvg',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 3259,
        'unp_end': 3263
      }
    },
    {
      'id': 'PRO_0000449623',
      'name': '3C-like proteinase',
      'unp_length': 7096,
      'unp_start': 3264,
      'unp_start_code': 'SER',
      'unp_end': 3569,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 280,
        'ligands': 235,
        'interactions': 0
      },
      'representative_pdb': {
        'pdb_id': '7alh',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 3264,
        'unp_end': 3569
      }
    },
    {
      'id': 'PRO_0000449624',
      'name': 'Non-structural protein 6',
      'unp_length': 7096,
      'unp_start': 3570,
      'unp_start_code': 'SER',
      'unp_end': 3859,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 0,
        'ligands': 0,
        'interactions': 0
      },
      'representative_pdb': null
    },
    {
      'id': 'PRO_0000449625',
      'name': 'Non-structural protein 7',
      'unp_length': 7096,
      'unp_start': 3860,
      'unp_start_code': 'SER',
      'unp_end': 3942,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 29,
        'ligands': 11,
        'interactions': 2
      },
      'representative_pdb': {
        'pdb_id': '6xip',
        'best_chain': 'C',
        'entity_id': 1,
        'unp_start': 3860,
        'unp_end': 3942
      }
    },
    {
      'id': 'PRO_0000449626',
      'name': 'Non-structural protein 8',
      'unp_length': 7096,
      'unp_start': 3943,
      'unp_start_code': 'ALA',
      'unp_end': 4140,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 28,
        'ligands': 9,
        'interactions': 3
      },
      'representative_pdb': {
        'pdb_id': '6yhu',
        'best_chain': 'B',
        'entity_id': 2,
        'unp_start': 4018,
        'unp_end': 4134
      }
    },
    {
      'id': 'PRO_0000449627',
      'name': 'Non-structural protein 9',
      'unp_length': 7096,
      'unp_start': 4141,
      'unp_start_code': 'ASN',
      'unp_end': 4253,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 5,
        'ligands': 5,
        'interactions': 1
      },
      'representative_pdb': {
        'pdb_id': '6w9q',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 4141,
        'unp_end': 4253
      }
    },
    {
      'id': 'PRO_0000449628',
      'name': 'Non-structural protein 10',
      'unp_length': 7096,
      'unp_start': 4254,
      'unp_start_code': 'ALA',
      'unp_end': 4392,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 24,
        'ligands': 23,
        'interactions': 1
      },
      'representative_pdb': {
        'pdb_id': '6zpe',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 4263,
        'unp_end': 4384
      }
    },
    {
      'id': 'PRO_0000449629',
      'name': 'RNA-directed RNA polymerase',
      'unp_length': 7096,
      'unp_start': 4393,
      'unp_start_code': 'SER',
      'unp_end': 5324,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 20,
        'ligands': 8,
        'interactions': 2
      },
      'representative_pdb': {
        'pdb_id': '7aap',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 4393,
        'unp_end': 5324
      }
    },
    {
      'id': 'PRO_0000449630',
      'name': 'Helicase',
      'unp_length': 7096,
      'unp_start': 5325,
      'unp_start_code': 'ALA',
      'unp_end': 5925,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 59,
        'ligands': 58,
        'interactions': 3
      },
      'representative_pdb': {
        'pdb_id': '5rob',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 5325,
        'unp_end': 5925
      }
    },
    {
      'id': 'PRO_0000449631',
      'name': 'Proofreading exoribonuclease',
      'unp_length': 7096,
      'unp_start': 5926,
      'unp_start_code': 'ALA',
      'unp_end': 6452,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 0,
        'ligands': 0,
        'interactions': 0
      },
      'representative_pdb': null
    },
    {
      'id': 'PRO_0000449632',
      'name': 'Uridylate-specific endoribonuclease',
      'unp_length': 7096,
      'unp_start': 6453,
      'unp_start_code': 'SER',
      'unp_end': 6798,
      'unp_end_code': 'GLN',
      'summary_counts': {
        'pdbs': 21,
        'ligands': 25,
        'interactions': 2
      },
      'representative_pdb': {
        'pdb_id': '6x4i',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 6453,
        'unp_end': 6798
      }
    },
    {
      'id': 'PRO_0000449633',
      'name': '2-O-methyltransferase',
      'unp_length': 7096,
      'unp_start': 6799,
      'unp_start_code': 'SER',
      'unp_end': 7096,
      'unp_end_code': 'ASN',
      'summary_counts': {
        'pdbs': 21,
        'ligands': 21,
        'interactions': 2
      },
      'representative_pdb': {
        'pdb_id': '6xkm',
        'best_chain': 'A',
        'entity_id': 1,
        'unp_start': 6799,
        'unp_end': 7096
      }
    }
  ];
}
