import { auth } from "@/auth";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="h1-bold">Welcome to peso peso yes sir peso peso</h1>

      {/* <form
        className="px-10 pt-[100px]"
        action={async () => {
          "use server";
          console.log("signing out");
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Log out</Button>
      </form> */}
    </>
  );
};

export default Home;
