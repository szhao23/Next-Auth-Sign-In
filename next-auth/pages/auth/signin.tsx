import { NextPage } from "next";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  return (
    <div className="sign-in-form">
      <form>
        <h1>Login</h1>
        <input type="email" placeholder="johndoe@email.com" />
        <input type="password" placeholder="***********" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
