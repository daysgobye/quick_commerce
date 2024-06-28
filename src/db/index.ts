import { runtime } from "std-env";
import { db as bunDb } from "./bun";
import { db as d1Db } from "./d1";
export default runtime === "bun" ? bunDb : d1Db