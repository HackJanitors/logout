"use client";
import React from "react";
import { Skeleton } from "./ui/skeleton";

const Namecard = ({ name, isLoading }) => {
  return isLoading ? (
    <Skeleton className="w-[500px] h-[50px] rounded-md" />
  ) : (
    <div className="text-6xl font-bold">Welcome, {name}</div>
  );
};

export default Namecard;
