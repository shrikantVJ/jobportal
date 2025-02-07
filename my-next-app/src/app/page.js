// /pages/index.jsx (or /pages/home.jsx, depending on your file structure)
import Image from "next/image";
import HomePage from "../app/home/page"; // Updated import path

export default function Home() {
  return (
    <div>
   
      {/* Rendering the AdminPage component */}
      <HomePage />
    </div>
  );
}
