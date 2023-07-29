"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Ast from "/assets";

export default function Home() {
  const router = useRouter();
  const OnclickNav = () => {
    router.push("/loginas");
  };
  const OnclickNavS = () => {
    router.push("/signupas");
  };
  return (
    <section className="zoom-out">
      <div className="page-container75">
        {/* <Image src='../public/homecare.png' alt='icon' width={680} height={680}/>  */}

        <Image className="huge-logo" src={Ast.logo} alt="Logo" />
        <h1 className="heading-main"> HomeCare </h1>
        <p className="center1">Meenadam Palliative Care</p>
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
      </div>
    </section>
  );
}
