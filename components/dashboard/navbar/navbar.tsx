"use client";
import React from "react";

import { BurguerButton } from "./burguer-button";
import { UserDropdown } from "./user-dropdown";
import { SearchIcon } from "@/icons/searchicon";
import { FeedbackIcon } from "@/icons/navbar/feedback-icon";
import { SupportIcon } from "@/icons/navbar/support-icon";
import { GithubIcon } from "@/icons/navbar/github-icon";
import { NotificationIcon } from "@/icons/navbar/notificationicon";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = () => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden shadow-sm">
      <div className="w-full flex items-center p-5">
        <div className="md:hidden">
          <BurguerButton />
        </div>
        <div className="w-full max-md:hidden">
          <Input placeholder="Search" className="outline-none" />
        </div>
        <div className="w-full flex items-center  justify-end gap-3">
          <div className="flex items-center gap-2 max-md:hidden">
            <FeedbackIcon />
            <span>Feedback?</span>
          </div>

          <div className="max-md:hidden">
            <SupportIcon />
          </div>

          <div>
            <GithubIcon />
          </div>
          <div>
            <UserDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};
