import { Injectable } from '@angular/core';
import { trpcClient } from '../../../trpc';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  constructor() { }

  async getExercises() {
    return await trpcClient.getExercises();
  }
}
