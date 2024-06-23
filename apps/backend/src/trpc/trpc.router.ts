import { INestApplication, Injectable } from '@nestjs/common';
import { TrpcService } from './trpc.service';
import { z } from 'zod';
import * as trpcExpress from '@trpc/server/adapters/express';
import { eq } from 'drizzle-orm';
import db from '../drizzle';
import * as schema from '../drizzle/schema';

@Injectable()
export class TrpcRouter {
  constructor(private readonly trpc: TrpcService) {}

  appRouter = this.trpc.router({
    createExercise: this.trpc.procedure
    .input(
      z.object({
        name: z.string(),
        description: z.string(),
        code: z.string(),
      }),
    )
    .query(async () => {
      return await db.query.Exercise.findMany({
        columns: {
          id: true,
          name: true,
          code: true,
          lastModifiedDate: true,
        },
      });
    }),
    getExercises: this.trpc.procedure.query(async () => {
      return await db.query.Exercise.findMany({
        columns: {
          id: true,
          name: true,
          code: true,
          lastModifiedDate: true,
        },
      });
    }),
    updateExercise: this.trpc.procedure
      .input(
        z.object({
          id: z.number(),
          code: z.string(),
        }),
      )
      .query(async ({ input }) => {
        return await db
          .update(schema.Exercise)
          .set({
            code: input.code,
          })
          .where(eq(schema.Exercise.id, input.id))
          .returning();
      }),
    createTest: this.trpc.procedure
      .input(
        z.object({
          exercices: z.array(z.object({
            id: z.number(),
            quantity: z.number().positive().int()
          }))
        }),
      )
      .query(async () => {
        return await db.query.Exercise.findMany({
          columns: {
            id: true,
            name: true,
            code: true,
            lastModifiedDate: true,
          },
        });
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
