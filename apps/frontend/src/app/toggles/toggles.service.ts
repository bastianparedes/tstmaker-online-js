import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trpcClient } from '../../trpc';

@Injectable({
  providedIn: 'root'
})
export class TogglesService {
  constructor() { }

  async getToggles() {
    return await trpcClient.getApps.query();
  }
}
