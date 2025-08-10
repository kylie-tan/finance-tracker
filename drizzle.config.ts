import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  dialect: "postgresql",
  schema: "./db/schema.ts",

  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
});

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./src/schema.ts",
  out: "./drizzle",
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