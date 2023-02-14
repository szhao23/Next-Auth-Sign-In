import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// This is the component which displays the Login Form
const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        // This is where the form is originall designed through Next Auth
        email: {
          label: "Email",
          type: "email",
          placeholder: "me@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // perform login logic
        // find out user from DataBase
        if (email !== "johndoe@gmail.com" || password !== "1234") {
          throw new Error("Your username or password is incorrect.");
        }

        // if everything is fine email & password checks out
        return { id: "1234", name: "John Doe", email: "johndoe@gmail.com" };
        throw new Error("Sucessful");
      },
    }),
  ],
  // Created Pages option to route to signIn Login Form we created in /auth/signin/
  pages: {
    signIn: "/auth/signin",
    // error: "/auth/error",
    // signOut: "/auth/signout",
  },
};

export default NextAuth(authOptions);
