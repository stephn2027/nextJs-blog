import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First</title>
      </Head>
       
  
      <h1>First Post</h1>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </>
  );
}
