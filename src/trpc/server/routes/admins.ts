import { schemaCreateUser } from "@/forms/createUser";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, protectedProcedure } from "..";

export const adminRoutes = createTRPCRouter({
  dashboard: protectedProcedure("admin").query(async ({ ctx }) => {
    const courseCount = await ctx.db.course.count();
    const studentCount = await ctx.db.student.count();
    const adminCount = await ctx.db.admin.count();

    return { courseCount, studentCount, adminCount };
  }),
  adminMe: protectedProcedure().query(({ ctx }) => {
    return ctx.db.admin.findUnique({
      where: { id: ctx.userId },
      include: { user: true },
    });
  }),
  admins: protectedProcedure("admin").query(async ({ ctx }) => {
    return ctx.db.admin.findMany({ include: { user: true } });
  }),
  create: protectedProcedure("admin")
    .input(schemaCreateUser)
    .mutation(async ({ ctx, input }) => {
      const admin = await ctx.db.admin.findUnique({ where: { id: input.id } });
      if (admin) {
        return new TRPCError({
          code: "BAD_REQUEST",
          message: "The user is already an admin.",
        });
      }
      return ctx.db.admin.create({ data: input });
    }),
});
