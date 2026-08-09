import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { getServerConfig } from "../config.server";

// Use this as a template for server functions
// Example: const result = await getServerInfo({ data: {} })

export const getServerInfo = createServerFn({ method: "POST" })
  .inputValidator(z.object({}))
  .handler(async () => {
    const config = getServerConfig();
    return {
      status: "healthy",
      mode: config.nodeEnv ?? "unknown",
      timestamp: new Date().toISOString(),
    };
  });

// Keep your existing greeting function
export const getGreeting = createServerFn({ method: "POST" })
  .inputValidator(z.object({ name: z.string().min(1) }))
  .handler(async ({ data }) => {
    const config = getServerConfig();
    return {
      greeting: `Hello, ${data.name}!`,
      mode: config.nodeEnv ?? "unknown",
    };
  });