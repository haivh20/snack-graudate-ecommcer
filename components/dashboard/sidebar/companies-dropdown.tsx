"use client";

import { AcmeIcon } from "@/icons/acme-icon";
import Image from "next/image";
import React, { useState } from "react";

interface Company {
  name: string;
  location: string;
  logo: string;
}

export const CompaniesDropdown = () => {
  const company = {
    name: "T Shop",
    location: "Hà Nội",
    logo: "/images/logo.jpg",
  };
  return (
    <div className="w-full min-w-[260px]">
      <div className="cursor-pointer">
        <div className="flex items-center gap-2">
          <Image width={80} height={80} src={company.logo} alt="logo" />
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
              {company.name}
            </h3>
            <span className="text-xs font-medium text-default-500">
              {company.location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
