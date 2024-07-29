import React from 'react';
import Image from 'next/image';
import ProjectSLULogo from '../../public/ProjectSLULogo.png';
import PicOfPitons from '../../public/PicOfPitons.JPG';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <nav className="flex justify-between items-center py-6 border-b border-gray-300">
        <div className="text-3xl font-bold">
          <Image src={ProjectSLULogo} alt="Project SLU Logo" width={60} height={60} />
        </div>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-xl hover:text-gray-700">Home</a></li>
          <li><a href="/about" className="text-xl hover:text-gray-700">About</a></li>
        </ul>
      </nav>
      <main>
        <div className="flex flex-col items-center py-10">
          <Image src={PicOfPitons} alt="Pic of Pitons" width={800} height={600} />
          <h1 className="text-4xl font-bold my-6">Welcome to Project SLU</h1>
          <p className="text-lg text-center px-4">
            Project SLU, established in 2022 in Vieux-Fort, St. Lucia, aims to bridge the gap in educational resources and access to technology. Our mission is to enhance the educational experiences of children through the provision of essential school supplies.
          </p>
          <p className="text-lg text-center px-4 mt-4">
            Over the coming summer, we plan to equip 150 - 300 students with backpacks (each with a calculator, pencils, folders, notebooks, etc). In addition, we are creating a website to raise awareness about Diversity, Equity, and Inclusion (DEI) and document the entire process of Project SLU.
          </p>
        </div>
      </main>
    </div>
  );
}

export default Home;
