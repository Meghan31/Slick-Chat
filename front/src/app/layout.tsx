import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/lib/utils';
import SessionProvider from '@/providers/SessionProvider';
import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Slick-Chat',
	description: 'Slick Chat App',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<SessionProvider>
				<body
					className={cn(
						'min-h-screen bg-background font-sans antialiased',
						fontSans.variable
					)}
				>
					{children}
					<Toaster richColors duration={5000} />
				</body>
			</SessionProvider>
		</html>
	);
}
