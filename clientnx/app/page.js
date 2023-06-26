"use client";
import { Button } from "antd";
//import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import homeicon from '../public/homecare.png'
export default function Home() {
  const router = useRouter();
  const OnclickNav = () => {
    router.push("/loginas");
  };
  const OnclickNavS = () => {
    router.push("/signupas");
  };
  return (
    <section>
      <div className="circle">
           </div>
        {/* <Image src='../public/homecare.png' alt='icon' width={680} height={680}/>  */}
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
