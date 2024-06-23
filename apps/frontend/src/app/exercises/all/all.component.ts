import { Component, OnInit } from '@angular/core';

import { trpcClient } from '../../../trpc';

@Component({
  selector: 'app-exercises-all',
  templateUrl: './all.component.html',
  standalone: true,
  imports: [],
})
export class ExercisesAllComponent implements OnInit {
  exercises:
    | Awaited<ReturnType<typeof trpcClient.getExercises.query>>
    | undefined = undefined;

  constructor() {}

  async ngOnInit() {
    this.exercises = [
      {
        id: 1,
        name: 'Primero',
        lastModifiedDate: 'Sun Jun 23 2024',
      },
      {
        id: 2,
        name: 'Segundo',
        lastModifiedDate: 'Sun Jun 23 2024',
      },
    ];
    /* const exercises = await trpcClient.getExercises.query();
    this.exercises = exercises; */
  }
}
