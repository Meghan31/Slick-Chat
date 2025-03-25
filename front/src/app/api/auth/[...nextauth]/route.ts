import NextAuth from 'next-auth';
import { authOptions } from './options';

const nextAuth = NextAuth(authOptions);

export {
	nextAuth as Delete,
	nextAuth as Get, // GET /api/auth
	nextAuth as Post, // POST /api/auth
	nextAuth as Put,
};
