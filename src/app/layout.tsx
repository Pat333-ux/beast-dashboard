import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import React from 'react';
import './globals.css';

// Load primary UI and monospaced data fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'BEAST Dashboard',
    template: '%s | BEAST Dashboard',
  },
  description:
    'Root application shell for BEAST Dashboard. Configures HTML document structure, metadata, responsive rendering, and global CSS. Serves as the top-level container for all authenticated dashboard pages, analytics modules, administrative tools, monitoring views, and audit interfaces.',
  keywords: [
    'BEAST',
    'Dashboard',
    'Analytics',
    'Monitoring',
    'Audit',
    'Admin Console',
    'Enterprise Metrics',
  ],
  authors: [{ name: 'BEAST Operations Team' }],
  robots: {
    index: false,
    follow: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect or extra head elements if required */}
      </head>
      <body className="flex min-h-full flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white dark:bg-slate-950 dark:text-slate-100">
        <div id="beast-root-shell" className="relative flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
