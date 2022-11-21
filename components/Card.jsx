import Link from "next/link";
import React, { useState } from "react";
import { AiFillYoutube } from "react-icons/ai";

const Card = ({ item }) => {
  const {
    strMealThumb,
    strMeal,
    strCategory,
    strArea,
    strInstructions,

    strTags,
    strYoutube,
    strSource,
    idMeal,
  } = item;
  let tagsArray = strTags?.split(",");
  return (
    <>
      <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg p-8"
            src={strMealThumb}
            alt="product image"
          />{" "}
        </a>

        <div class="px-5 pb-5">
          <a href="#">
            <h3 class="text-gray-200 font-semibold  tracking-tight dark:text-gray-400">
              {strArea}
            </h3>
          </a>
          <a href="#">
            <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
              {strMeal}
            </h3>
          </a>
          <div class="flex items-center mt-2.5 mb-5 line-clamp-2 text-gray-500">
            {strInstructions}
          </div>
          <div class="flex items-center justify-between">
            <span class="text-xl bg-indigo-500 px-2 py-1 rounded-xl font-bold text-gray-900 dark:text-white">
              {strCategory}
            </span>
            <a href={strYoutube} target="_blank" rel="noreferrer">
              <AiFillYoutube color="#FF0000" size={36} />
            </a>{" "}
            <Link
              href={`/meal/${idMeal}`}
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              See More Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
