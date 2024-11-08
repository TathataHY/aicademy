"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schemaSubmitTest } from "./schemas";

export type FormTypeTest = z.infer<typeof schemaSubmitTest>;

export const useFormTest = ({
  defaultValues = { answers: [] },
}: {
  defaultValues?: Partial<FormTypeTest>;
}) =>
  useForm<FormTypeTest>({
    resolver: zodResolver(schemaSubmitTest),
    defaultValues,
  });
