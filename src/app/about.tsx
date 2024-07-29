import React from 'react';
import Image from 'next/image';
import Headshot from '../../public/Headshot.jpg'; 
import ProjectSLULogo from '../../public/ProjectSLULogo.png'; 

const About: React.FC = () => {
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
      <main className="py-10">
        <div className="flex flex-col items-center">
          <Image src={Headshot} alt="Headshot" width={200} height={200} className="rounded-full" />
          <h1 className="text-4xl font-bold my-6">About Me</h1>
          <p className="text-lg max-w-prose text-center px-4">
            I was only six when I moved from the Caribbean island of St Lucia to the United States. I had believed that I was leaving everything behind. However, I knew I would still be connected to my culture through my past experiences. We resettled to our new home in Richmond, Virginia where my parents enrolled me in Elementary School. I stayed open-minded and persistent, allowing me to form positive relationships with my teachers and peers.
          </p>
          <p className="text-lg max-w-prose text-center px-4">
            As I made friends, they supported me in my journey to discover the area and get involved in the community. As much as I wanted to learn about the area in Richmond my friends were also eager to learn about my Caribbean culture. This moment of exchanging our cultures built my confidence and has continued to impact me to this day.
          </p>
          <p className="text-lg max-w-prose text-center px-4">
            This experience has played an integral part in my passion for furthering DEI. From witnessing the disparities in opportunities due to a lack of resources and access to technology, I aspire to help improve social, economic, and cultural equity in my communities.
          </p>
          <p className="text-lg max-w-prose text-center px-4">
            In 2022, I created Project SLU to gather household necessities to donate and sell at affordable prices throughout my hometown of Vieux-Fort, St Lucia. At the start of the project, I integrated couponing (utilizing cash back, coupons, and store loyalty programs to reduce total purchase costs) which increased the number of goods I could obtain.
          </p>
          <p className="text-lg max-w-prose text-center px-4">
            Over a year, with the help of couponing, I was able to acquire over 2000 goods for under $100. Once the goods were collected, I created care packages (with everyday-use items and school supplies) which were then shipped to St. Lucia via Tropical Shipping. Once everything arrived in St. Lucia, I worked with friends and family to disperse the care packages to families throughout the town of Vieux Fort.
          </p>
          <p className="text-lg max-w-prose text-center px-4">
            The entity of Project SLU, connecting with my communities, and seeing the smiles on people’s faces was a heartwarming and great learning experience that has motivated me to continue improving DEI efforts in my communities.
          </p>
        </div>
      </main>
    </div>
  );
}

export default About;
