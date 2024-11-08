import { AIService } from "@/ai/ai.service";
import prisma from "@/db";
import { Role } from "@/utils/types";
import { auth } from "@clerk/nextjs/server";
import { initTRPC, TRPCError } from "@trpc/server";
import { authorizeUser } from "./utils";

export const createTRPCContext = async (opts: { headers: Headers }) => {
  const session = await auth();
  const ai = new AIService();
  return {
    db: prisma,
    session,
    ai,
    ...opts,
  };
};

const { router, procedure } = initTRPC
  .context<typeof createTRPCContext>()
  .create();

export const createTRPCRouter = router;
export const publicProcedure = procedure;
export const protectedProcedure = (...roles: Role[]) =>
  publicProcedure.use(async ({ ctx, next }) => {
    if (!ctx.session?.userId) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "Sign in to access this data.",
      });
    }

    await authorizeUser(ctx.session.userId, roles);

    return next({ ctx: { ...ctx, userId: ctx.session.userId } });
  });
