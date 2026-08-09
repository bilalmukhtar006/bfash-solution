import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    // Check if it's a known HTTP error with statusCode
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    
    // Log full error details
    console.error("🚨 Middleware caught error:", error);
    
    // Return friendly error page
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));