import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import RandomFood from "../../components/RandomFood";

const Id = () => {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  useEffect(() => {
    if (!id) return;
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        setData(res.data.meals[0]);
      });
  }, [id]);
  return (
    <>
      {data && (
        <div>
          <RandomFood data={data} />
        </div>
      )}
    </>
  );
};

export default Id;
