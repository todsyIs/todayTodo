import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
const Main = () => {
  return (
    <>
      <Header />
      <main className="center justify-center  max-w-7xl h-screen">
        <article className="flex   flex-col  justify-center mx-auto  ">
          <p className=" main-hello ">안녕하세요🖐</p>
          <p className=" main-hello ">오늘의 할일을 적어볼까요?</p>
          <form className=" my-2  ">
            <input
              className=" text-5xl  "
              placeholder=">오늘의 할일 입력하기"
              type="text"
            />
          </form>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default Main;
