import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          I'm a fresh graduate who graduated from the British University in 
          Egypt with First Class Honours. I am an ambitous and hard working 
          individual who strives to become better at coding by getting first 
          hand experience. I also have great communication skills and a good 
          sense of humor. I love learning new things and I'm 
          trying to stay up to date with new technologies that may benefit 
          both me or the company i work for.
        </p>

        <br />

        <p className="text-xl">
          I've been studying web development for a over a year now and I feel 
          like I have a decent amount of experience. I mainly focus on React, 
          but I'm sure that my curiosity will lead me to learning other frameworks. 
          In the near future, I'm also planning to dive a little bit into back-end 
          web development just so I can get a good understanding of both sides. 
          I also have a good understanding of things outside of web development like 
          object-oriented programming and different programming languages such as 
          C++, Java and Python. I even try to discipline myself in answering some 
          problem-solving questions everyday just so i can stay sharp.
        </p>
      </div>
    </div>
  );
};

export default About;
