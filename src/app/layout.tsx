import './globals.scss';
import { Inter, Source_Code_Pro } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Workspace App',
  description: 'Interactive workspace with Bitcoin tracker',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} ${sourceCodePro.className}`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
