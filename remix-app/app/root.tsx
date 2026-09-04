import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import "./styles/global.css";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: `try{var ct=localStorage.getItem('ct-theme')||(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.setAttribute('data-theme',ct);}catch(e){document.documentElement.setAttribute('data-theme','light');}` }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError() as any;
  console.error(error);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>App Error</h1>
        <pre>{error?.stack || error?.message || String(error)}</pre>
        <Scripts />
      </body>
    </html>
  );
}
