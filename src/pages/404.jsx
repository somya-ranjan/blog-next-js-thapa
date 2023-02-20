// import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  const handleInput = () => {
    router.push("/");
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 3000);
  // }, []);

  return (
    <>
      <NavBar />
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>We are sorry, Page not found!</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>

          <button onClick={handleInput}>Back To Homepage</button>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
