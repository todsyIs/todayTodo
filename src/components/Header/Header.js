const Header = () => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date();
  const today = `${date.toLocaleDateString() + " " + day[date.getDay()]}`;

  return (
    <header className="  py-6 px-2 border-b border-b-[#F3F2F2]">
      <div className="  flex items-center justify-between mx-4 ">
        <h2 className=" text-neutral font-semibold text-3xl">{today}</h2>
        <button>다크모드</button>
      </div>
    </header>
  );
};

export default Header;
