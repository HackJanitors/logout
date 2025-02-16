"use client";
import React from "react";
import { Skeleton } from "./ui/skeleton";

const Namecard = ({ name, isLoading }) => {
  return isLoading ? (
    <Skeleton className="w-[500px] h-[50px] rounded-md" />
  ) : (
    <div className="text-5xl font-bold">{name}'s Progress</div>
  );
};

export default Namecard;
