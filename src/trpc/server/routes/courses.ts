import { formSchemaCreateCourse, formSchemaID } from "@/forms/schemas";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "..";

export const coursesRoutes = createTRPCRouter({
  courses: publicProcedure.query(({ ctx }) =>
    ctx.db.course.findMany({
      include: {
        chapters: { select: { id: true }, orderBy: { createdAt: "asc" } },
      },
    })
  ),
  course: publicProcedure.input(formSchemaID).query(async ({ input, ctx }) => {
    return ctx.db.course.findUnique({
      where: { id: input.id },
      include: { chapters: { select: { title: true, id: true } } },
    });
  }),
  create: protectedProcedure("admin")
    .input(formSchemaCreateCourse)
    .mutation(async ({ input, ctx }) => {
      const { chapters, ...courseInput } = input;

      return ctx.db.course.create({
        data: {
          ...courseInput,
          admin: { connect: { id: ctx.userId } },
          chapters: {
            create: chapters.map((chapter) => ({
              title: chapter.title,
              content: chapter.content,
              questions: {
                create: chapter.questions.map((question) => ({
                  question: question.question,
                  answer: {
                    create: {
                      answer: question.answer,
                      explanation: question.explanation,
                    },
                  },
                })),
              },
            })),
          },
        },
      });
    }),
});
