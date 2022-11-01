import { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext/ModalContext";
import MainForm from "../Main/MainForm/MainForm";
import MainInput from "../Main/MainInput/MainInput";
const Join = () => {
  const { setIsJoin } = useContext(ModalContext);
  return (
    <>
      <MainForm>
        <MainInput placeholder="닉네임" type="text" />
        <MainInput placeholder="이메일" type="email" />
        <MainInput placeholder="비밀번호" type="password" />
      </MainForm>
      <div className=" flex  items-center justify-center ">
        <button
          className=" bg-secondary p-4 m-1  w-48 rounded-md "
          onClick={() => {
            setIsJoin(false);
          }}
        >
          회원가입하기
        </button>
      </div>
    </>
  );
};

export default Join;
