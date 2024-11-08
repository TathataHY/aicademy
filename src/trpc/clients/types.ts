import { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "../server/routes";

export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
