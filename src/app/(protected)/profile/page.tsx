"use client";

import { CustomAvatar } from "@/components";
import useProfilePageController from "./page-controller";

const ProfilePage = () => {
  const { profile } = useProfilePageController();

  return (
    <div className="container">
      <div className="flex w-full flex-col items-center">
        <div className="relative h-[180px] w-fit rounded-full">
          <CustomAvatar />
        </div>
        <span>Name: {profile?.name}</span>
        <span>Email: {profile?.email}</span>
      </div>
    </div>
  );
};

export default ProfilePage;
