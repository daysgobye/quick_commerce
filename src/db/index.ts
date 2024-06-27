import { runtime } from "std-env";
import { db } from "./bun";
export default runtime === "bun" ? db : undefined