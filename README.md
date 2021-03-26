PDBe-KB Summary Icons Component
=

[![Build Status](https://www.travis-ci.com/PDBe-KB/component-download.svg?branch=main)](https://www.travis-ci.com/PDBe-KB/component-download)
[![codecov](https://codecov.io/gh/PDBe-KB/component-polyprotein-section/branch/main/graph/badge.svg?token=2PM8M83ZHN)](https://codecov.io/gh/PDBe-KB/component-polyprotein-section)
[![Maintainability](https://api.codeclimate.com/v1/badges/5c699aa188766841b5c8/maintainability)](https://codeclimate.com/github/PDBe-KB/component-polyprotein-section/maintainability)

This is the repository of a lightweight Angular 7 web component that displays all the processed proteins for a UniProt accession.

This web component is used on the PDBe-KB Aggregated Views of Proteins.

Note: This component uses the molstar-dialog web component available at [https://github.com/PDBe-KB/component-molstar-dialog](https://github.com/PDBe-KB/component-molstar-dialog)

### Example:

<img src="https://raw.githubusercontent.com/PDBe-KB/component-polyprotein-section/main/pdbe-kb-polyprotein-section.png">

## Quick Start

Get the code and install dependencies
```
git clone https://github.com/PDBe-KB/component-polyprotein-section.git
cd component-polyprotein-section
npm i
```

Running the app
```
ng serve
```

Running tests
```
ng test
```

## Dependencies

The main template should also have the following CSS import:
```angular2html
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/ebi-global.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Icon-fonts/v1.3/fonts.css" type="text/css" media="all"/>
<link rel="stylesheet" href="https://ebi.emblstatic.net/web_guidelines/EBI-Framework/v1.3/css/theme-pdbe-green.css" type="text/css" media="all"/>
```

## Basic usage

The component can be added to any Angular7+ apps.

Import the component (e.g. in app.module.ts):
```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PolyproteinSectionComponent } from './polyprotein-section/polyprotein-section.component';
import { MolstarDialogComponent } from './molstar-dialog/molstar-dialog.component';
import {MatDialogModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PolyproteinSectionComponent,
    MolstarDialogComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Adding the component to a template:
```angular2html
<app-polyprotein-section [processedProteins]="processedProteins" [parentProtein]="proteinName"></app-polyprotein-section>
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/PDBe-KB/component-polyprotein-section/tags).

## Authors

* **Mihaly Varadi** - *Initial implementation* - [mvaradi](https://github.com/mvaradi)

See also the list of [contributors](https://github.com/PDBe-KB/component-polyprotein-section/contributors) who participated in this project.

## License

This project is licensed under the EMBL-EBI License - see the [LICENSE](LICENSE) file for details

## Acknowledgements

We would like to thank the [PDBe team](https://www.pdbe.org) and the [PDBe-KB partner resources](https://github.com/PDBe-KB/pdbe-kb-manual/wiki/PDBe-KB-Annotations) for their feedback and contributions.
