import React, { useMemo, useState } from "react";
import { useShowModal } from "../hooks/useShowModal";

import { AiFillGithub } from "react-icons/ai";
import { EmailLogin, ProviderLoginBtn } from ".";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { supabase } from "../supabaseClient";
import { useCurrentUser } from "../hooks/useCurrentUser";

const LoginModal = () => {
  const { toggleModal } = useShowModal();
  const [showLoginFields, setShowLoginFields] = useState(false);

  const loginProviders = useMemo(
    () => [
      {
        provider: "github",
        icon: () => <AiFillGithub />,
        onPress: () => supabase.auth.signInWithOAuth({ provider: "github" }),
      },
      {
        provider: "google",
        icon: () => <FcGoogle />,
        onPress: () =>
          supabase.auth.signInWithOAuth({
            provider: "google",
          }),
      },
      {
        provider: "email",
        icon: () => <MdEmail />,
        onPress: () => setShowLoginFields(true),
      },
    ],
    []
  );

  return (
    <>
      <div
        onClick={toggleModal}
        className="absolute flex items-center justify-center bg-zinc-500 w-full h-full opacity-30 z-40 "
      ></div>
      <div
        className={`overflow-hidden  absolute bg-white flex  py-3 opacity-100 z-50 left-0 right-0 mr-auto ml-auto max-w-lg w-1/2 top-0 bottom-0 ${
          showLoginFields ? "h-56" : "h-44"
        }  my-auto rounded-lg`}
      >
        <div className=" w-full transition-transform">
          <div
            className={`${
              !showLoginFields ? "-translate-x-full" : "translate-x-0"
            } transition-transform  w-full duration-500   absolute px-3`}
          >
            <div
              onClick={() => setShowLoginFields(false)}
              className="hover:cursor-pointer"
            >
              <IoIosArrowBack />
            </div>
            <EmailLogin />
          </div>
          <div
            className={`${
              showLoginFields ? "translate-x-full" : "translate-x-0"
            } transition-transform  w-full duration-500 absolute`}
          >
            {loginProviders.map((item) => (
              <ProviderLoginBtn key={item.provider} {...item} />
            ))}
          </div>
        </div>
        {/* <div
          className={`${
            !showLoginFields ? "-translate-x-full" : "translate-x-0"
          } transition-transform  w-full duration-500 px-5 flex-1 flex flex-col`}
        >
          <div
            onClick={() => setShowLoginFields(false)}
            className="hover:cursor-pointer"
          >
            back
          </div>
          <EmailLogin />
        </div>
        <div
          className={`${
            showLoginFields ? "translate-x-full" : "translate-x-0"
          } transition-transform    duration-500 px-3 flex-1 max-w-lg w-1/2 `}
        >
          {loginProviders.map((item) => (
            <ProviderLoginBtn {...item} />
          ))}
        </div> */}
      </div>
    </>
  );
};

export default LoginModal;
