import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

export default function LoginModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Getting Start</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl">Welcome to Slick-Chat</DialogTitle>
					<DialogDescription>
						Sign in to start chatting with your friends and family
					</DialogDescription>
				</DialogHeader>
				<Button variant={'outline'}>
					<Image
						className="mr-4"
						src="/images/google.png"
						alt="Google Logo"
						width={24}
						height={24}
					/>
					Sign in with Google
				</Button>
			</DialogContent>
		</Dialog>
	);
}
