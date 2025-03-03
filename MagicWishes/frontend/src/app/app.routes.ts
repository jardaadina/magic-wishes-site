import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { SignUpComponent } from './register/sign-up/sign-up.component';
import { LogInComponent } from './register/log-in/log-in.component';
import { ProfileComponent } from './profile/profile.component';
import { PrincipalMenuComponent } from './main-menu/principal-menu/principal-menu.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PastWishesComponent } from './main-menu/principal-menu/past-wishes/past-wishes.component';
import { NewWishComponent } from './main-menu/principal-menu/new-wish/new-wish.component';
import { ThanksComponent } from './feedback/thanks/thanks.component';
import { SecretSantaComponent } from './main-menu/secret-santa/secret-santa.component';
import { SecretSantaGroupComponent } from './main-menu/secret-santa/groups/secret-santa-group/secret-santa-group.component';
import { CreateSecretSantaComponent } from './main-menu/secret-santa/groups/secret-santa-group/create-secret-santa/create-secret-santa.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    title: 'Home',
  },
  {
    path: 'signin',
    component: SignUpComponent,
  },
  {
    path: 'login',
    component: LogInComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'thanks',
    component: ThanksComponent,
  },
  {
    path: 'secret-santa',
    component: SecretSantaComponent,
  },
  {
    path: 'secret-santa-group/:id',
    component: SecretSantaGroupComponent,
  },
  {
    path: 'create-secret-santa',
    component: CreateSecretSantaComponent,
  },
  {
    path: 'wish',
    component: PrincipalMenuComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
  },
  {
    path: 'past-wishes',
    component: PastWishesComponent,
  },
  {
    path: 'new-wish',
    component: NewWishComponent,
  },
  {
    path: '**',
    component: HeroComponent,
    title: 'Home',
  },
];
