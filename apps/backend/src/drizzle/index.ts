import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from './schema';

const client = createClient({
  authToken:
    'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3MTkxMTk0NDUsImlkIjoiMDRjY2MxN2QtMWJjYS00ZTM0LWEwOTMtNmExZTI3NWYwNWQ5In0.XW-B2MOpci5DnlsULxjSG6FE-O9eSlUM88gK4OQGmq62qq2SbWdAWtDO4ShMIAJZOpu1iYr_j5jgKkN4m4L3BA',
  url: 'libsql://ba-tester-bastianparedes.turso.io',
});

export default drizzle(client, { schema });
