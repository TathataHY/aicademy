import { createTRPCRouter } from "..";
import { adminRoutes } from "./admins";
import { aiModelRoutes } from "./aiModel";
import { chapterRoutes } from "./chapters";
import { coursesRoutes } from "./courses";
import { creditBalanceRoutes } from "./creditBalance";
import { stripeRoutes } from "./stripe";
import { studentRoutes } from "./students";
import { testRoutes } from "./tests";

export const appRouter = createTRPCRouter({
  admins: adminRoutes,
  courses: coursesRoutes,
  chapters: chapterRoutes,
  aiModel: aiModelRoutes,
  stripe: stripeRoutes,
  creditBalance: creditBalanceRoutes,
  students: studentRoutes,
  tests: testRoutes,
});

export type AppRouter = typeof appRouter;
