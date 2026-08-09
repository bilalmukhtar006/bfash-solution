// Captures the original Error out-of-band so server.ts can recover the stack
// when h3 has already swallowed the throw into a generic 500 Response.

let lastCapturedError: { error: unknown; at: number } | undefined;
const TTL_MS = 10_000; // Increased to 10 seconds

function record(error: unknown) {
  console.log("📝 Captured error:", error);
  lastCapturedError = { error, at: Date.now() };
}

if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => {
    const err = (event as ErrorEvent).error ?? event;
    record(err);
  });
  
  globalThis.addEventListener("unhandledrejection", (event) => {
    record((event as PromiseRejectionEvent).reason);
  });
}

export function consumeLastCapturedError(): unknown {
  if (!lastCapturedError) return undefined;
  
  // Check if error is still fresh
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    console.log("⏰ Error expired, clearing");
    lastCapturedError = undefined;
    return undefined;
  }
  
  const { error } = lastCapturedError;
  lastCapturedError = undefined;
  return error;
}