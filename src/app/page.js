import Image from "next/image";

export default function Home() {
  return (
  <div className="w-full bg-black min-h-screen py-1">
    <h1 className="text-center text-white font-bold mt-10 text-2xl tracking-[3px]">Weather API </h1>
    <div className="w-[400px] mx-auto flex justify-center items-center mt-10 rounded-2xl min-h-[500px] bg-white"></div>
  </div>
  );
}
