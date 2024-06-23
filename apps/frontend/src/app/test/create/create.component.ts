import { Component, OnInit } from '@angular/core';

type Exercise = {
  id: number;
  name: string;
};

type ExerciseWithQuantity = Exercise & {
  quantity: number;
};

@Component({
  selector: 'app-test-create',
  templateUrl: './create.component.html',
  standalone: true,
  imports: [],
})
export class TestCreateComponent implements OnInit {
  exercises: ExerciseWithQuantity[] | undefined = undefined;
  exercisesSelected: ExerciseWithQuantity[] = [
    {
      id: 0,
      name: 'Primero ejercicio',
      quantity: 5,
    },
  ];

  async ngOnInit() {
    this.httpClient
      .get('/api/exercises?columns=id&columns=name')
      .subscribe((data) => {
        this.exercises = (data as Exercise[]).map((exercise) => {
          return {
            ...exercise,
            quantity: 0,
          };
        });
      });
  }

  createTest() {
    console.log(this.exercisesSelected);
  }
}
