import Head from "next/head";
import { Container } from "../styles/style";
import Products from "./components/Products/Products";



export default function Home() {
  return (
    <Container>
      <Head>
        <title>MKS Sistemas</title>
        <meta name="description" content="best pizza shop in town" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <Products />
    </Container>
  );
}
