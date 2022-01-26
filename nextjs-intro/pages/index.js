import Head from "next/head";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo title="home" />
      <h1 className="active">Hello World!</h1>
    </div>
  );
}
