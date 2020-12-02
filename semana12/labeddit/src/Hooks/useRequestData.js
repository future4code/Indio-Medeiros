import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(baseUrl) {
  const [data, setData] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get(baseUrl, {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        console.log("metodo post", response);
        setData(response.data)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [baseUrl]);

  return data;
}
