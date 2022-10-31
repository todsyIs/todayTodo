import React from "react";
import Login from "../Login/Login";
import Join from "../Join/Join";

const ModalContainer = ({ setIsOpen, isJoin, setIsJoin }) => {
  return (
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
        {isJoin ? <Join /> : <Login />}
      </div>
    </section>
  );
};

export default ModalContainer;
