import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*<body>{children}</body> jma se cambia para usar letra tipo inter */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}


