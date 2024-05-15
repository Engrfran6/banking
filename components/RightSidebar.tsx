'use client'

import Image from "next/image";
import Link from "next/link";
import BankCard from "./BankCard";
import { RightSidebarProps } from "@/types";
import { useState } from "react";

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  const [frontCardIndex, setFrontCardIndex] = useState(0);

  const switchCards = () => {
    setFrontCardIndex((frontCardIndex + 1) % banks.length);
  };

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner" />
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">
              {user.firstName[0]}
            </span>
          </div>
          <div className="profile-details">
            <h1 className="profile-name">
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/sign-in" className="flex gap-2">
            <Image src="icons/plus.svg" width={20} height={20} alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div
            onClick={() => switchCards()}
            className="relative flex flex-1 flex-col items-center justify-center gap-5"
          >
            <div
              className={`${
                frontCardIndex === 0 ? 'z-10 translate-x-0 transform transition-transform duration-300' : 'z-0 absolute right-0 top-8 transform transition-transform duration-300'
              }`}
              style={{ transform: frontCardIndex === 0 ? 'translateX(0)' : 'translateX(10%)' }}
            >
              <BankCard
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div
                className={`${
                  frontCardIndex === 1 ? 'z-10 translate-x-0 transform transition-transform duration-300' : 'z-0 absolute right-0 top-8 transform transition-transform duration-300'
                }`}
                style={{ transform: frontCardIndex === 1 ? 'translateX(0)' : 'translateX(10%)' }}
              >
                <BankCard
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSidebar;
