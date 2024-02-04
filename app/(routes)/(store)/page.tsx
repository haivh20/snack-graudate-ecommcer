"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import toast from "react-hot-toast";

const HomePage = () => {
  const handleClick = () => {
    toast.success("HomePage");
  };
  return (
    <div>
      HomePageStore
      <Button onClick={() => handleClick()}> OnClick</Button>
    </div>
  );
};

export default HomePage;
