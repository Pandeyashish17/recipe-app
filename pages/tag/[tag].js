import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

const Tag = () => {
  const router = useRouter();
  const { tag } = router.query;
  const [data, setData] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    if (!tag) return;
    setloading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${tag}`)
      .then((res) => {
        setData(res.data.meals);
        setloading(false);
      })
      .catch((err) => {
        setData([]);
      });
  }, [tag]);

  let length = data?.length;
  return (
    <>
      {!data || loading ? (
        <div className="h-screen grid place-content-center">
          <PacmanLoader color="#00acee" />
        </div>
      ) : (
        <div className="min-h-screen grid place-content-center">
          <div className="flex flex-col gap-2">
            {data?.map((item, i) => {
              return (
                <figure class="flex leading-5 h-[30vh] w-[90vw]" key={i}>
                  <div>
                    <div class="block w-36 h-36  rounded border border-gray-200 overflow-hidden">
                      <img src={item?.strMealThumb} alt="Title" />
                    </div>
                  </div>
                  <figcaption class="ml-3">
                    <p>
                      <Link
                        href={`/meal/${item.idMeal}`}
                        class="hover:text-blue-600"
                      >
                        {item.strMeal}
                      </Link>
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Tag;
