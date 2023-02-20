import NavBar from "@/components/NavBar";
import Head from "next/head";

function about() {
  return (
    <>
      <Head>
        <title>About Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <h1>This is about page</h1>
      </div>
    </>
  );
}

export default about;
