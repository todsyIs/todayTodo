import React, { useContext } from "react";
import MainForm from "../Main/MainForm/MainForm";
import MainInput from "../Main/MainInput/MainInput";
import { ModalContext } from "../../Context/ModalContext/ModalContext";

const Login = () => {
  const { isJoin, setIsJoin } = useContext(ModalContext);
  return (
    <>
      <MainForm>
        <MainInput placeholder="이메일" type="email" />
        <MainInput placeholder="비밀번호" type="password" />
      </MainForm>
      <div className=" flex  items-center justify-center ">
        <button
          className=" bg-secondary p-4 m-1  w-48 rounded-md "
          onClick={() => {
            setIsJoin(prve => !prve);
          }}
        >
          회원가입
        </button>
        <button className=" bg-secondary p-4 m-1 w-48 rounded-md ">
          로그인
        </button>
      </div>
    </>
  );
};

export default Login;
