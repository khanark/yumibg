import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faBars,
  faCircleCheck,
  faList12,
  faMapLocation,
  faMapPin,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const icons: IconDefinition[] = [
  faMapLocation,
  faCircleCheck,
  faList12,
  faMapPin,
  faPeopleCarry,
  faBars,
  faFacebook,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, FontAwesomeModule],
})
export class IconsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(...icons);
  }
}
