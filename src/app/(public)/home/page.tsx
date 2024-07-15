"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const HomePage = () => {
  const onClick = () => {
    signOut();
  };

  return (
    <div>
      <Button onClick={onClick}>Sign out</Button>
    </div>
  );
};

export default HomePage;
