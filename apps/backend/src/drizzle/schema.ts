import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const Exercise = sqliteTable('Exercise', {
  id: integer('id', { mode: 'number' })
    .notNull()
    .primaryKey({ autoIncrement: true }),
  lastModifiedDate: integer('lastModifiedDate', {
    mode: 'timestamp',
  })
    .notNull()
    .default(sql`CURRENT_TIMESTAMP`),
  name: text('name', { length: 100 }).notNull().default(''),
  description: text('description', { length: 100 }).notNull().default(''),
  code: text('code').notNull().default(''),
});
