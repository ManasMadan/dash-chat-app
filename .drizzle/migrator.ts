import { migrate } from "drizzle-orm/planetscale-serverless/migrator";
import { connect } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

const doMigrate = async () => {
  try {
    const connection = connect({
      url: process.env.DATABASE_URL,
    });

    const db = drizzle(connection);

    migrate(db, { migrationsFolder: "./migrations" });
    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(0);
  }
};

doMigrate();
