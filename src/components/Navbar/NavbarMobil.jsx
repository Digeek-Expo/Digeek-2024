import { useState, useEffect } from "react";

const NavbarMobil = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="lg:hidden flex flex-col justify-center gap-1 px-6"
        onClick={() => setOpen((state) => !state)}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
        <div className="w-3 h-3 bg-white rounded-full" />
        <div className="w-3 h-3 bg-white rounded-full" />
      </div>
      {open && <MobilNavigationPage setOpen={setOpen} />}
    </>
  );
};

const MobilNavigationPage = ({ setOpen }) => {
  const handleCloseNavigation = (e) => {
    const cosas = document.querySelectorAll(".cosa");
    cosas.forEach((cosa) => {
      cosa.classList.remove("animate-menuAnimationIn");
      cosa.classList.add("animate-closeMenuAnimationOut"); // Replace "your-class-name" with the desired class name
    });
    setTimeout(() => {
      setOpen((state) => !state);
    }, 300);
  };

  return (
    <div className="fixed right-0 top-0 w-[100vw] flex z-10 ">
      <div
        className="cosa h-screen w-[30vw] bg-black bg-opacity-20 animate-menuAnimationIn"
        onClick={handleCloseNavigation}
      ></div>
      <div
        className={
          "cosa h-screen w-[70vw] bg-[#7678FF] flex flex-col justify-center text-white font-bold uppercase gap-4 text-2xl animate-menuAnimationIn"
        }
      >
        <MobilNavigationLabel label={"inicio"} />
        <MobilNavigationLabel label={"registro"} />
        <MobilNavigationLabel label={"webinars"} />
        <MobilNavigationLabel label={"FAQ"} />
      </div>
    </div>
  );
};

const MobilNavigationLabel = ({ label }) => {
  return (
    <a
      href={label !== "inicio" ? `/${label}` : "/"}
      className={
        "px-6 py-4 flex relative before:h-full before:w-[5px] before:hover:bg-white before:bg-transparent before:absolute before:left-0 before:top-0 " +
        (window.location.pathname != "/"
          ? window.location.pathname == `/${label}`
            ? "before:bg-white"
            : "before:bg-transparent"
          : label == "inicio"
          ? "before:bg-white"
          : "before:bg-transparent")
      }
    >
      {label}
    </a>
  );
};

export default NavbarMobil;
