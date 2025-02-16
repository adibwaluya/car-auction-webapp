import NextAuth, { Profile } from "next-auth"
import { OIDCConfig } from "next-auth/providers"
import DuendeIDS6Provider from "next-auth/providers/duende-identity-server6"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
    session: {
        strategy: 'jwt'
    },
  providers: [
    DuendeIDS6Provider({
        id: 'id-server',
        clientId: "nextApp",
        clientSecret: "secret",
        issuer: "http://localhost:5001",
        authorization: {params: {scope: 'openid profile auctionApp'}},
        idToken: true
      } as OIDCConfig<Omit<Profile, 'username'>>),
  ],
  callbacks: {
    // based on whether or not the auth object is populated
    // if not, we get redirected to the login page
    async authorized({auth}) {
      return !!auth
    },
    async jwt({token, profile}) {
      if (profile) {
        token.username = profile.username
      }
      return token;
    },
    async session({session, token}) {
      if (token) {
        session.user.username = token.username
      }
      return session;
    }
  }
})