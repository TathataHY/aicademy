import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { TRPCReactProvider } from "@/trpc/clients/client";

const RootProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ClerkProvider>
      <TRPCReactProvider>{children}</TRPCReactProvider>
    </ClerkProvider>
  );
};

export default RootProvider;
