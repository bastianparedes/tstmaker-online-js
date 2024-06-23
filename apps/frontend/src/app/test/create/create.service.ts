import { Injectable } from '@angular/core';
import { trpcClient } from '../../../trpc';

@Injectable({
  providedIn: 'root'
})
export class CreateService {
  constructor() { }

  async getExerciseAll() {
    return await trpcClient.getExercises.query();
  }
}
