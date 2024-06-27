import { runtime } from "std-env";
import { auth } from "./bun";
export default runtime === "bun" ? auth : undefined