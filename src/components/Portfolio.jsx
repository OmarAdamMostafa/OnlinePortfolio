import React from "react";
import furnitureApp from "../assets/portfolio/e-commerce-furniture-app.png";
import githubUsersApp from "../assets/portfolio/github-users-app.png";
import myCocktail from "../assets/portfolio/myCocktail.png";
import hooBank from "../assets/portfolio/hoobank-business-app.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: furnitureApp,
      name: "ComfySloth",
      demo: "https://e-commerce-furniture-app-omar-adam.netlify.app/",
      code: "https://github.com/OmarAdamMostafa/E-CommerceFurnitureApp",
    },
    {
      id: 2,
      src: githubUsersApp,
      name: "GitHubUsers",
      demo: "https://github-users-app-omar-adam.netlify.app/",
      code: "https://github.com/OmarAdamMostafa/GitHubUsersApp",
    },
    {
      id: 3,
      src: myCocktail,
      name: "MyCocktail",
      demo: "https://my-cocktail-omar-adam-react.netlify.app/",
      code: "https://github.com/OmarAdamMostafa/MyCocktail",
    },
    {
      id: 4,
      src: hooBank,
      name: "HooBank",
      demo: "https://hoobank-business-app-omar-adam.netlify.app/",
      code: "https://github.com/OmarAdamMostafa/HooBankBusinessApp",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(( portfolio ) => (
            <div key={portfolio.id}>
              <div className="flex items-center justify-center py-5 text-xl font-bold">
                {portfolio.name}
              </div>
              <div  className="shadow-md shadow-gray-600 rounded-lg ">
                <img
                  src={portfolio.src}
                  alt="portfolio"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a
                      href={portfolio.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a
                      href={portfolio.code}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
