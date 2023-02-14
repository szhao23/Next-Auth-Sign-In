import { NextPage } from "next";
import Router from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

// Creating Protected Auth Routes for Successfully logged in Users
const Protected: NextPage = (): JSX.Element => {
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated")
    return (
      <div>
        This page is Protected for special individuals like {"\n"}
        {JSON.stringify(data.user, null, 2)}
      </div>
    );

  return <div>Loading</div>;
};

export default Protected;
