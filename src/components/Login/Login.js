import React, { useContext } from "react";
import { ModalContext } from "../../Context/ModalContext/ModalContext";

const Login = () => {
  const { isJoin, setIsJoin } = useContext(ModalContext);
  return (
    <>
      <div className="flex flex-col items-center justify-center   w-144  ">
        <div className="p-9 flex items-center justify-center">
          <span className=" text-2xl font-bold">로그인</span>
        </div>
        <form className=" flex flex-col items-center  justify-center">
          <input
            placeholder="이메일"
            type="email"
            className=" bg-secondary bg-opacity-40  p-4 w-96 my-2 rounded-md focus:outline-primary"
          />
          <input
            placeholder="비밀번호"
            type="password"
            className=" bg-secondary bg-opacity-40  p-4 w-96 my-2 rounded-md  focus:outline-primary"
          />
        </form>
      </div>
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