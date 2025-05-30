"use client";

import { createCookie } from "@/app/actions";
import { useTransition } from "react";

export default function useCookie(name: string) {
  const [isPending, startTransition] = useTransition();
  const handleSetCookie = (
    value: string,
    options: {
      maxAge?: number;
      expires?: Date;
      httpOnly?: boolean;
      path?: string;
    } = {}
  ) => {
    startTransition(async () => {
      await createCookie(name, value, options);
    });
  };
  return {
    isPending,
    handleSetCookie,
  };
}
