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
        <h1 className="text-8xl font-display font-bold gradient-text">
          404
        </h1>

        <h2 className="mt-4 text-xl font-semibold">
          Page not found
        </h2>

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
        <h1 className="text-xl font-semibold">
          This page didn't load
        </h1>

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

export const Route =
  createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
      meta: [
        {
          charSet: "utf-8",
        },

        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },

        {
          title:
            "Best Digital Marketing Agency for Business Growth | BFASH",
        },

        {
          name: "description",
          content:
            "BFASH is a digital marketing agency helping businesses get more reach, leads, and sales through SEO, GEO, social media, advertising, email marketing, CRM, virtual assistance, and business growth services.",
        },

        {
          name: "author",
          content: "BFASH",
        },

        {
          name: "robots",
          content:
            "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
        },

        {
          property: "og:title",
          content:
            "Best Digital Marketing Agency for Business Growth | BFASH",
        },

        {
          property: "og:description",
          content:
            "BFASH helps businesses grow through digital marketing, SEO, GEO, social media, advertising, email marketing, CRM support, virtual assistance, and sales-focused strategies.",
        },

        {
          property: "og:type",
          content: "website",
        },

        {
          property: "og:url",
          content: "https://bfash.us/",
        },

        {
          property: "og:image",
          content: "https://bfash.us/logo.webp",
        },

        {
          name: "twitter:card",
          content: "summary_large_image",
        },

        {
          name: "twitter:title",
          content:
            "Best Digital Marketing Agency for Business Growth | BFASH",
        },

        {
          name: "twitter:description",
          content:
            "Grow your business with BFASH through SEO, GEO, social media, advertising, email marketing, CRM, and business growth services.",
        },

        {
          name: "twitter:image",
          content: "https://bfash.us/logo.webp",
        },
      ],

      links: [
        {
          rel: "canonical",
          href: "https://bfash.us/",
        },

        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },

        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },

        {
          rel: "preload",
          href:
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
          as: "style",
        },
      ],
    }),

    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  });

function RootShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <HeadContent />

        {/* ✅ GOOGLE TAG MANAGER (GTM) - Loaded in head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({
                  'gtm.start': new Date().getTime(),
                  event:'gtm.js'
                });
                var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),
                    dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MK7WRDB');
            `,
          }}
        />

        {/* ✅ GOOGLE ANALYTICS 4 - Added as fallback */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P9KF8CGYBL"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P9KF8CGYBL');
            `,
          }}
        />
      </head>

      <body>
        {/* ✅ GOOGLE TAG MANAGER (noscript) - Immediately after body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MK7WRDB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

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