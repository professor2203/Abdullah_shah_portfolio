import Navbar from "@/components/Navbar";
import Layout from "../components/Layout";
import Head from "next/head";
import Header  from "../components/Header";
import Footer from "../components/Footer"
import Education from "../components/Education";
import ResponsiveCard from "../components/ResponsiveCard";
import ButtonWithPopover from "../components/ButtonWithPopover"
const Home = () => {
    return (
      <>
        <Head>
          <title>MEFIC</title>
        </Head>
        <Layout>
         
         <Header/>
         
         <Education/>
         <ResponsiveCard/>
      {/* <ButtonWithPopover/> */}
        </Layout>
      </>
    );
  };
  export default Home;