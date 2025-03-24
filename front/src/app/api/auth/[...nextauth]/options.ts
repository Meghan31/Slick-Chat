import { AuthOptions, ISODateString } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import GoogleProvider from 'next-auth/providers/google';

import { pages } from 'next/dist/build/templates/app-page';

export interface CustomUser {
	id?: string | null;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	token?: string | null;
	provider?: string | null;
}

export interface CustomSession {
	user?: CustomUser;
	expires: ISODateString;
}

export const authOptions: AuthOptions = {
	pages: {
		signIn: '/',
		// signOut: '/auth/signout',
		// error: '/auth/error',
		// verifyRequest: '/auth/verify-request',
		// newUser: null
	},
	callbacks: {
		async signIn({ user, account, profile }) {
			const isAllowedToSignIn = true;
			if (isAllowedToSignIn) {
				console.log('the user data is: ', user);
				return true;
			} else {
				console.log('the account is: ', user);
				return false;
			}
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		},

		async jwt({ token, user }) {
			if (user) {
				token.user = user;
			}
			return token;
		},
		async session({
			session,
			user,
			token,
		}: {
			session: CustomSession;
			user: CustomUser;
			token: JWT;
		}) {
			session.user = token.user as CustomUser;
			return session;
		},
	},
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
	],
};
