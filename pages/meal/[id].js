import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import RandomFood from "../../components/RandomFood";

const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setData(res.data.meals[0]);
        setLoading(false);
      });
  }, [id]);
  return (
    <>
      {data ? (
        <div>
          <RandomFood data={data} />
        </div>
      ) : (
        <div className="h-screen grid place-content-center ">
          <PacmanLoader color="#00acee" />
        </div>
      )}
    </>
  );
};

export default Id;
