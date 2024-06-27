// lucia.ts
import { lucia } from "lucia";
import { hono } from "lucia/middleware";
import { github } from "@lucia-auth/oauth/providers";
import { BunSQLiteAdapter } from "@lucia-auth/adapter-sqlite";
import { db } from "../db/bun";

export const auth = lucia({
    adapter: BunSQLiteAdapter(db, {
        user: "user",
        session: "session"
    }),
    env: process.env.NODE_ENV === "development" ? "DEV" : "PROD",
    middleware: hono(),

    getUserAttributes: (data) => {
        return {
            githubUsername: data.username
        };
    }
});
export const githubAuth = github(auth, {
    clientId: Bun.env.GITHUB_ID ?? "",
    clientSecret: Bun.env.GITHUB_SECRET ?? ""
});


export type Auth = typeof auth;