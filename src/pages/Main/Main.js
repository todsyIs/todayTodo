import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MainBtn from "../../components/Main/MainBtn/MainBtn";
import { ModalContext } from "../../Context/ModalContext/ModalContext";
import { useContext } from "react";
import ModalContainer from "../../components/ModalContainer/ModalContainer";

const Main = () => {
  const { isOpen, setIsOpen, isJoin } = useContext(ModalContext);

  const handleModal = () => {
    setIsOpen(prve => !prve);
  };

  return (
    <>
      <Header />
      <main className="center justify-center  max-w-7xl pt-80 pb-80">
        <article className="flex   flex-col  justify-center mx-auto  ">
          <p className=" main-hello ">안녕하세요🖐</p>
          <p className=" main-hello ">오늘의 할일을 적어볼까요?</p>
          <div className="flex justify-between mt-5">
            <MainBtn title="바로 입력하러가기" />
            <MainBtn title="로그인하고 시작하기" handleClick={handleModal} />
            {isOpen && (
              <ModalContainer
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isJoin={isJoin}
              />
            )}
          </div>
        </article>
      </main>
      <Footer link="/about" />
    </>
  );
};

export default Main;
