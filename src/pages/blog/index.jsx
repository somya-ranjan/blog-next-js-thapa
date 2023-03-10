import NavBar from "@/components/NavBar";
import Head from "next/head";
import styles from "@/styles/blog.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return {
    props: {
      data: data.slice(0, 20),
    },
  };
};
function Blog({ data }) {
  return (
    <>
      <Head>
        <title>Blog Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <NavBar />
        <h1 className="main_heading">My blog</h1>
        {data?.map((post) => {
          return (
            <div key={post?.id} className={styles.blog_main_container}>
              <h3>{post?.id}</h3>
              <h2>
                <Link href={`blog/${post?.id}`}>{post?.title}</Link>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blog;
