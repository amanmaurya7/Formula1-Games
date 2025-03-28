"use client";
import React from "react";
import Header from "../../components/Header";
import dynamic from "next/dynamic";
import BottomNav from "@/components/BottomNav";
const Map = dynamic(() => import("../../components/Map"), {
  ssr: false,
});
import EventCalendar from "../../components/EventCalendar";
const MapPage = () => {
  return (
    <div className="bg-white w-full h-full">
      <Header />
      <Map />
      <EventCalendar />
      <BottomNav />
    </div>
  );
};

export default MapPage;
