import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import { Header } from "../components/site/Header";
import { Footer } from "../components/site/Footer";
import { CookieBanner } from "../components/site/CookieBanner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-8xl font-display font-bold gradient-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-brand to-brand-strong text-white px-5 py-2.5 text-sm font-medium"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error("[BFash] Route error:", error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Try refreshing or head back home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-md bg-gradient-to-r from-brand to-brand-strong text-white px-4 py-2 text-sm font-medium"
          >
            Try again
          </button>

          <a
            href="/"
            className="rounded-md border border-border bg-background px-4 py-2 text-sm font-medium"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Affordable SEO Agency – BFash Solution | Expert SEO Services" },
      {
        name: "description",
        content:
          "Looking for an affordable SEO agency? BFash Solution delivers expert SEO services, affordable SEO packages & local SEO to grow your business.",
      },
      { name: "author", content: "BFash Solution" },
      { property: "og:title", content: "Affordable SEO Agency – BFash Solution" },
      {
        property: "og:description",
        content:
          "Looking for an affordable SEO agency? BFash Solution delivers expert SEO services, affordable SEO packages & local SEO to grow your business.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://bfash.us/" },
      {
        name: "robots",
        content: "index, follow, max-snippet:-1, max-image-preview:large",
      },
      { name: "X-Robots-Tag", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Affordable SEO Agency – BFash Solution",
      },
      {
        name: "twitter:description",
        content:
          "Looking for an affordable SEO agency? BFash Solution delivers expert SEO services, affordable SEO packages & local SEO to grow your business.",
      },
      {
        property: "og:image",
        content: "https://bfash.us/logo.webp", // ✅ Changed to WebP
      },
      {
        name: "twitter:image",
        content: "https://bfash.us/logo.webp", // ✅ Changed to WebP
      },
    ],
    links: [
      { rel: "canonical", href: "https://bfash.us/" },
      // ✅ FIXED: Only ONE preconnect set (removed duplicates)
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      // ✅ FIXED: Optimized font - only 3 weights (400, 600, 700)
      {
        rel: "preload",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
        as: "style",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />

        {/* ✅ OPTIMIZED: Deferred GTM with idle callback */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadGTM() {
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.defer=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','G-P9KF8CGYBL');
              }
              if ('requestIdleCallback' in window) {
                requestIdleCallback(loadGTM);
              } else {
                setTimeout(loadGTM, 2000);
              }
            `,
          }}
        />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </QueryClientProvider>
  );
}