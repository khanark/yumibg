import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import {
  IconDefinition,
  faAt,
  faBars,
  faChevronDown,
  faChevronLeft,
  faChevronUp,
  faCircleCheck,
  faCircleExclamation,
  faClockRotateLeft,
  faEraser,
  faEye,
  faEyeSlash,
  faFilter,
  faHeart,
  faHome,
  faList12,
  faListUl,
  faLock,
  faMailForward,
  faMapLocation,
  faMapPin,
  faMobile,
  faPenToSquare,
  faPeopleCarry,
  faPlus,
  faSearch,
  faSignIn,
  faTrash,
  faUser,
  faUserPlus,
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
  faUser,
  faLock,
  faAt,
  faSearch,
  faPlus,
  faCircleExclamation,
  faChevronDown,
  faChevronUp,
  faChevronLeft,
  faSignIn,
  faUserPlus,
  faEye,
  faEyeSlash,
  faHome,
  faListUl,
  faClockRotateLeft,
  faFilter,
  faHeart,
  faEraser,
  faPenToSquare,
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
