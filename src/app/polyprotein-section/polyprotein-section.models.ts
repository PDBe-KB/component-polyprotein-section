export class ProcessedProtein {
  id: string; // PRO identifier of the processed protein
  name: string; // Name of the processed protein
  unp_length: number; // Length of the polyprotein
  unp_start: number;  // Start index of the processed protein (UniProt numbering)
  unp_end: number;  // End index of the processed proteins (UniProt numbering)
  summary_counts: SummaryCounts;
  representative_pdb?: RepresentativePdb;
}

export class SummaryCounts {
  pdbs: number; // Number of PDB entries for the processed proteins
  ligands: number;  // Number of ligands seen to interact with the processed proteins
  interactions: number; // Number of macromolecular partners of the processed protein
}

export class RepresentativePdb {
  pdb_id: string; // PDB identifier of the best representative structure
  best_chain: string; // Chain identifier of the best representative structure
  entity_id: number;  // Entity identifier of the best representative structure
  unp_start: number;  // Start index of the best representative structure (UniProt numbering)
  unp_end: number;  // End index of the best representative structure (UniProt numbering)
}

