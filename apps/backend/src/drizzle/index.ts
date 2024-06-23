import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from './schema';

const client = createClient({
  authToken:
    'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTkxNzEwOTQsImlkIjoiNjViNTk5ODMtNjE5Zi00ZjEzLWEyNWItNjM3ZjkxZTljYTk0In0.HQSFyIFi3HDkk3DMnApn89yHmRhrpKZurXTcpOwsaB80GjX4R-J-0hvq2YzJBH6tbHqIca8ynw9WRIwfaeP1Bw',
  url: 'libsql://tst-maker-bastianparedes.turso.io',
});

export default drizzle(client, { schema });
