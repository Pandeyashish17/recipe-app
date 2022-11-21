import React from "react";
import Navbar from "./Navbar";

const RandomFood = ({ data }) => {
  const {
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    idMeal,
    strTags,
    strYoutube,
    strSource,
  } = data;
  let youtubeUrl = strYoutube.replace("watch?v=", "embed/");
  return (
    <>
      <Navbar />
      <center className="mb-20 text-4xl font-bold ">{strMeal}</center>
      <section className="py-10  lg:py-0 mb-10">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-stretch grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12 xl:gap-x-24">
            <div className="h-full pr-12 lg:order-2 lg:mb-40">
              <div className="relative h-full lg:h-auto">
                <div className="absolute w-full h-full -mb-12 overflow-hidden bg-gradient-to-r from-fuchsia-600 to-blue-600 top-12 left-12 xl:left-16 lg:top-0 lg:scale-y-105 lg:origin-top">
                  <img
                    className="object-cover object-right w-full h-full scale-150"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/content/2/lines.svg"
                    alt=""
                  />
                </div>
                <div className="relative lg:-top-12">
                  <img className="" src={strMealThumb} alt={strMeal} />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-start py-10 lg:order-1 sm:py-16 lg:py-24 xl:py-48">
              <div>
                <p className="text-sm font-semibold tracking-widest  uppercase">
                  Area: {strArea}
                </p>
                <p className="text-lg font-semibold tracking-widest  uppercase">
                  Tags: {strTags}
                </p>
                <h2 className="mt-8 text-3xl font-bold leading-tight  sm:text-4xl lg:text-5xl lg:leading-tight">
                  {strCategory}
                </h2>
                <p className="text-xl leading-relaxed  mt-9">
                  {strInstructions}
                </p>
                <div className="">
                  {data.strIngredient1.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient1} &nbsp;: &nbsp;{data?.strMeasure1}
                    </h4>
                  )}
                  {data.strIngredient2.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient2} &nbsp;: &nbsp;{data?.strMeasure2}
                    </h4>
                  )}
                  {data.strIngredient3.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient3} &nbsp;: &nbsp;{data?.strMeasure3}
                    </h4>
                  )}
                  {data.strIngredient4.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient4} &nbsp;: &nbsp;{data?.strMeasure4}
                    </h4>
                  )}
                  {data.strIngredient5.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient5} &nbsp;: &nbsp;{data?.strMeasure5}
                    </h4>
                  )}
                  {data.strIngredient6.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient6} &nbsp;: &nbsp;{data?.strMeasure6}
                    </h4>
                  )}
                  {data.strIngredient7.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient7} &nbsp;: &nbsp;{data?.strMeasure7}
                    </h4>
                  )}
                  {data.strIngredient8.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient8} &nbsp;: &nbsp;{data?.strMeasure8}
                    </h4>
                  )}
                  {data.strIngredient9.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient9} &nbsp;: &nbsp;{data?.strMeasure9}
                    </h4>
                  )}
                  {data.strIngredient10.length != 0 && (
                    <h4 className="text-2xl">
                      {data?.strIngredient10} &nbsp;: &nbsp;{data?.strMeasure10}
                    </h4>
                  )}
                </div>

                <a
                  href={strSource}
                  rel="noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center px-10 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
                  role="button"
                >
                  {" "}
                  Explore more{" "}
                </a>
              </div>
            </div>
          </div>
          {strYoutube && (
            <div className="hs-responsive-embed-youtube ">
              <iframe
                src={youtubeUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default RandomFood;
