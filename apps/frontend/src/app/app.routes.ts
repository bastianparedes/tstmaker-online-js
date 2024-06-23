import type { Routes } from '@angular/router';
import { ExercisesAllComponent } from './exercises/all/all.component';
import { ExerciseEditComponent } from './exercises/edit/edit.component';
import { ExerciseNewComponent } from './exercises/new/new.component';

export const routes: Routes = [
  { path: 'exercises', component: ExercisesAllComponent },
  { path: 'exercises/edit/:id', component: ExerciseEditComponent },
  { path: 'exercises/new', component: ExerciseNewComponent },
  { path: '', redirectTo: 'exercises', pathMatch: 'full' },
];
