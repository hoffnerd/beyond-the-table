import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
// import DiscordProvider from "next-auth/providers/discord";
// import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from '@/lib/db';

export const authOptions = {
    secret: process.env.NEXT_PUBLIC_SECRET,
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // DiscordProvider({
        //     clientId: process.env.DISCORD_CLIENT_ID,
        //     clientSecret: process.env.DISCORD_CLIENT_SECRET
        // })
        // EmailProvider({
        //     server: {
        //         host: process.env.NEXT_PUBLIC_EMAIL_SERVER_HOST,
        //         port: process.env.NEXT_PUBLIC_EMAIL_SERVER_PORT,
        //         auth: {
        //             user: process.env.NEXT_PUBLIC_EMAIL_SERVER_USER,
        //             pass: process.env.NEXT_PUBLIC_EMAIL_SERVER_PASSWORD
        //         }
        //     },
        //     from: process.env.NEXT_PUBLIC_EMAIL_FROM
        // })
    ],
    // session:{
    //     maxAge: 2 * 60,
    //     updateAge: 2 * 60,
    // },
    callbacks: {
        async session({ session, token, user }) {
            // console.log("==================================")
            // console.log({ session, token, user })
            // console.log("==================================")
            session.user.email = user.email
            session.user.emailVerified = user.emailVerified
            session.user.image = user.image
            session.user.name = user.name
            session.user.role = user.role
            return session
        }
    }
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };