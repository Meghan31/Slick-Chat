import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { DialogDescription } from '@radix-ui/react-dialog';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';

const handleGoogleLogin = async () => {
	signIn('google', {
		redirect: true,
		callbackUrl: '/dashboard',
	});
};

export default function LoginModal() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Getting start</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-2xl">Welcome to Slick-Chat</DialogTitle>
					<DialogDescription>
						Slick-Chat makes it effortless to create secure chat links and start
						conversations in seconds.
					</DialogDescription>
				</DialogHeader>
				<Button variant="outline" onClick={handleGoogleLogin}>
					<Image
						src="/images/google.png"
						className=" mr-4"
						width={25}
						height={25}
						alt="google-logo"
					/>
					Continue with Google
				</Button>
			</DialogContent>
		</Dialog>
	);
}
