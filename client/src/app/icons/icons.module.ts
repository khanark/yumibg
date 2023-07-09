import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faBars,
  faCircleCheck,
  faList12,
  faMailForward,
  faMapLocation,
  faMapPin,
  faMobile,
  faPeopleCarry,
} from '@fortawesome/free-solid-svg-icons';
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

const icons: IconDefinition[] = [
  faMapLocation,
  faCircleCheck,
  faList12,
  faMapPin,
  faPeopleCarry,
  faBars,
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
  faMobile,
  faMailForward,
  faDiscord,
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
