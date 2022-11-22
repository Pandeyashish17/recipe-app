import Link from "next/link";
import React from "react";

const HeroSection = ({ categories, data }) => {
  return (
    <>
      <section className="pt-5">
        <div className="container max-w-screen-xl mx-auto px-4">
          <article className="p-4 bg-white border border-gray-200 shadow-sm rounded-md">
            <div className="flex flex-col md:flex-row">
              <aside className="md:w-1/4 flex-auto mb-4 pr-4 md:mb-0">
                <ul>
                  {categories.slice(0, 10).map((category, i) => {
                    return (
                      <li key={i}>
                        <Link
                          href={`/tag/${category.strCategory}`}
                          className="block px-3 py-2 hover:bg-blue-50 rounded-md hover:text-blue-600"
                        >
                          {category.strCategory}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </aside>
              <main className="md:w-3/4 flex-auto">
                {/* <!-- banner-main --> */}
                <article
                  className=" p-6 lg:p-16 rounded w-full h-full"
                  style={{
                    backgroundImage: `url(${data.strMealThumb})`,
                    // backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                  }}
                >
                  <h1 className="text-3xl md:text-4xl text-black font-semibold">
                    {data.strMeal}
                  </h1>
                  <p className="text-lg text-white font-normal mt-4 mb-6">
                    Tags : {data.strTags ? data.strTags : "No Tags"}
                  </p>
                  <p className="text-lg text-slate-300 font-normal mt-4 mb-6 line-clamp-3">
                    {data.strInstructions ? data.strInstructions : ""}
                  </p>
                  <div>
                    <Link
                      className="px-4 py-2 inline-block font-semibold bg-yellow-500 text-white border border-transparent rounded-md hover:bg-yellow-600"
                      href={`/meal/${data.idMeal}`}
                    >
                      See more
                    </Link>
                  </div>
                </article>
                {/* <!-- banner-main end// --> */}
              </main>
            </div>
            {/* <!-- grid.// --> */}
          </article>
        </div>
        {/* <!-- container //end --> */}
      </section>
    </>
  );
};

export default HeroSection;
