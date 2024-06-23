import { Component, OnInit } from '@angular/core';
import { AllService } from './all.service';

type Exercise = {
  id: number;
  name: string;
  description: string;
  last_modified_date: string;
};

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
  exercises: Exercise[] | undefined = undefined;

  constructor(private service: AllService) {
    this.service = service;
  }

  async ngOnInit() {
    const exercises = await this.service.getExercises();
    this.exercises = exercises;
  }
}
