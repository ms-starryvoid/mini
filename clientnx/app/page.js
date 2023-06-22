"use client";
import { Button } from "antd";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const OnclickNav = () => {
    router.push("/adminlogin");
  };
  const OnclickNavS = () => {
    router.push("/signup");
  };
  return (
    <section>
      <div className="circle"> </div>
      <h1 className="heading2"> HomeCare </h1>
      <p className="center">Meenadam Palliative Care</p>
      <div className="container">
        <div className="rounded-rectangle-button">
          <Button onClick={OnclickNavS} className="inside-button1">
            Sign Up
          </Button>
        </div>

        <div className="rounded-rectangle-button">
          <Button onClick={OnclickNav} className="inside-button1">
            Login
          </Button>
        </div>
      </div>
    </section>
  );
}
