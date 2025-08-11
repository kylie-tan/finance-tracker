import { Hono } from "hono";
import { eq } from "drizzle-orm";

import { HTTPException } from "hono/http-exception";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

import { db } from "@/db/drizzle";
import { accounts } from "@/db/schema";
import { auth } from "@clerk/nextjs/server";

const app = new Hono()
	.get(
		"/",
		clerkMiddleware(),
		async (c) => {
			const auth = getAuth(c);

			if (!auth?.userId) {
				throw new HTTPException(401, {
					res: c.json({ error: "Unathorized" }, 401),
				});
			}

			const data = await db
			.select({
				id: accounts.id,
				name: accounts.name,
			})
			.from(accounts)
			.where(eq(accounts.userId, auth.userId));

			return c.json({ data });
	});


export default app;