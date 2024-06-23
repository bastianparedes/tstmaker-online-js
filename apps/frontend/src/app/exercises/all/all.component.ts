import { Component, OnInit } from '@angular/core';

import { trpcClient } from '../../../trpc';

@Component({
  selector: 'app-exercises-all',
  templateUrl: './all.component.html',
  standalone: true,
  imports: [],
})
export class ExercisesAllComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'description',
    'last_modified_date',
    'code',
  ];
  exercises:
    | Awaited<ReturnType<typeof trpcClient.getExercises.query>>
    | undefined = undefined;

  constructor() {}

  async ngOnInit() {
    const exercises = await trpcClient.getExercises.query();
    this.exercises = exercises;
  }
}
