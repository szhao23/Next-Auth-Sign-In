import { NextPage } from "next";
import { useSession } from "next-auth/react";

// Creating Protected Auth Routes for Successfully logged in Users
const Protected: NextPage = (): JSX.Element => {
  const session = useSession();

  console.log(session);

  return (
    <div>
      You have been successfully logged in, this page is Protected for logged in
      users.
    </div>
  );
};

export default Protected;
