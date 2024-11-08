"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const schemaCreateUser = z.object({
  id: z.string().min(1),
});

export type FormTypeCreateUser = z.infer<typeof schemaCreateUser>;

export const useFormCreateUser = () =>
  useForm<FormTypeCreateUser>({
    resolver: zodResolver(schemaCreateUser),
  });
