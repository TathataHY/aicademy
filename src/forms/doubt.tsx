"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaDoubt } from "./schemas";

export const schemaDoubtOnly = schemaDoubt.omit({ chapterId: true });

export type FormTypeDoubtOnly = z.infer<typeof schemaDoubtOnly>;

export const useFormDoubt = () =>
  useForm<FormTypeDoubtOnly>({
    resolver: zodResolver(schemaDoubtOnly),
  });
