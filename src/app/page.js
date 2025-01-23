import Image from "next/image";
import Navbar from "./(components)/Navbar";
import Footer from "./(components)/Footer";
import Banner from "./(components)/Banner";
import About from "./(components)/About";
import Service from "./(components)/Service";
import Calling from "./(components)/Calling";

export default function Home() {
  return (


   <div className=" max-w-[1260px] m-auto">






<div className="m-10">

<Banner></Banner>

<About></About>


  <Service></Service>

  <Calling></Calling>


</div>





   </div>


  );
}
