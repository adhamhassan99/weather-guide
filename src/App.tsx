import "./App.css";
import {
  CountryImgPill,
  LoginModal,
  MainSectionHeader,
  SearchBar,
  StatsCard,
  WeatherAnimation,
  WeatherBrief,
  WeatherCard,
  WeatherDetails,
} from "./components";
import React, { useEffect } from "react";
import { supabase } from "./supabaseClient";
import { useCurrentUser } from "./hooks/useCurrentUser";
import { useShowModal } from "./hooks/useShowModal";

function App() {
  const { setUserData, userData } = useCurrentUser();
  useEffect(() => {
    supabase.auth.onAuthStateChange(async (state) => {
      await supabase.auth
        .getSession()
        .then(({ data: { session } }) => setUserData(session));
    });
  }, [setUserData]);

  const { toggleModal, modalVisible } = useShowModal((state) => state);
  console.log({ userData });

  return (
    <>
      {modalVisible ? <LoginModal /> : null}
      <div className="h-full flex flex-col md:flex-row  flex-1 ">
        <div className=" md:flex-1.5 flex flex-col px-8 py-8 relative">
          <SearchBar />
          <WeatherAnimation />
          <div className="flex items-center gap-5 md:gap-0 md:flex-col md:items-start md:justify-normal justify-center flex-wrap">
            <WeatherBrief />
            <hr className="my-7 hidden md:flex w-10/12" />
            <div className=" flex space-y-2 md:space-x-0 space-x-5  items-center md:items-start md:flex-col  gap-5 flex-wrap justify-center md:justify-start">
              <div className="space-y-4">
                <WeatherDetails />
                <WeatherDetails />
              </div>
              <CountryImgPill />
            </div>
          </div>
        </div>
        <div className="md:flex-[2.8] bg-lightGrey  flex flex-col py-8 px-8">
          <MainSectionHeader />
          <div className="flex gap-1 justify-between mt-10">
            <WeatherCard day="sunday" condition="a" max={40} min={20} />
            <WeatherCard day="sunday" condition="a" max={40} min={20} />
            <WeatherCard day="sunday" condition="a" max={40} min={20} />
            <WeatherCard day="sunday" condition="a" max={40} min={20} />
            <WeatherCard day="sunday" condition="a" max={40} min={20} />
            <WeatherCard day="sunday" condition="a" max={40} min={20} />
            <WeatherCard day="sunday" condition="a" max={40} min={20} />
          </div>
          <div className="mt-8 p-2  flex flex-col flex-1">
            <h1 className="font-semibold text-2xl mb-4">Today's Highlights</h1>
            <div className="flex flex-col   space-y-3 flex-1">
              <div className="flex flex-row space-x-3 flex-1">
                <StatsCard />
                <StatsCard />
                <StatsCard />
              </div>
              <div className="flex flex-row space-x-3 flex-1">
                <StatsCard />
                <StatsCard />
                <StatsCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
