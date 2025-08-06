import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",
  // 🟢 ADD the 'dialect' property
  dialect: "postgresql",
  // 🟢 The 'driver' should be 'pg' for PostgreSQL
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});

// import { config } from "dotenv";
// import { defineConfig } from "drizzle-kit";


// config({ path: ".env.local" });

// export default defineConfig({
// 	schema: "./db/schema.ts",
// 	driver: "pg",
// 	dbCredentials: {
// 		connectionString: process.env.DATABASEURL!,
// 	},
// 	verbose: true,
// 	strict: true,
// });