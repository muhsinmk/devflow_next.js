import React from "react";
import { redirect } from "next/navigation";
import Question from "@/components/forms/Question";
import { getUserById } from "@/lib/actions/user.action";

const Page = async () => {
  // const { userId } = auth();

  const userId = "123456789";
  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  console.log("mongoUser", mongoUser);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default Page;
