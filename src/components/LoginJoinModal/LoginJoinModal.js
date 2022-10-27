import React from "react";

const LoginJoinModal = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen && (
        <section className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-secondary bg-opacity-50">
          <div className="relative w-144 my-6 pb-20 mx-auto max-w-3xl bg-base-100 rounded-lg">
            <div className="flex items-center justify-end p-4">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setIsOpen(false)}
              >
                닫기
              </button>
            </div>
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
              <button className=" bg-secondary p-4 m-1  w-48 rounded-md ">
                회원가입
              </button>
              <button className=" bg-secondary p-4 m-1 w-48 rounded-md ">
                로그인
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default LoginJoinModal;
