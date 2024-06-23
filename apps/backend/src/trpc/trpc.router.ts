import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {}

  appRouter = this.trpc.router({
    getApps: this.trpc.procedure.query(async () => {
      return null;
    }),
    updateToggle: this.trpc.procedure
      .input(
        z.object({
          appName: z.string(),
          toggleName: z.string(),
          value: z.boolean(),
        }),
      )
      .query(async ({ input }) => {
        console.log(input)
        return null;
      }),
  });

  async applyMiddleware(app: INestApplication) {
    app.use(
      `/trpc`,
      trpcExpress.createExpressMiddleware({ router: this.appRouter }),
    );
  }
}

export type AppRouter = TrpcRouter['appRouter'];
