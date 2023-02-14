import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  // TypeScript needs to include (e) as event for EventHandler
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate userInfo
    e.preventDefault();

    // import from next-auth/react
    // can define things you want to pass through auth such as email and password
    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      //   add redirect so the page doesn't change
      redirect: false,
    });

    // Log response in Console
    console.log(res);
    // pass in the provider name which is 'credentials' because we have the type inside our CredentialProvider set as 'credentials'
  };

  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          type="email"
          placeholder="johndoe@gmail.com"
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
        />
        <input
          value={userInfo.password}
          type="password"
          placeholder="***********"
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default SignIn;
