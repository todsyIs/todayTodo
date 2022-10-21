import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
const About = () => {
  return (
    <>
      <Header />
      <main className="center justify-center  max-w-7xl   pt-20 pb-20">
        <article className="flex   flex-col  items-start  mx-auto  ">
          <p className=" text-4xl font-semibold">오늘은 이런 페이지에요</p>
          <section className=" flex items-center justify-center ">
            <Card />
            <Card />
            <Card />
          </section>
        </article>
      </main>
      <Footer link="/" />
    </>
  );
};

export default About;
