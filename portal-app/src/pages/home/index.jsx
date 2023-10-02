import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

import Card from "../../components/Card";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getAllProduct = () => {
    axios
      .get('products')
      .then((response) => {
        if (response?.data && Array.isArray(response.data.articles)) {
          setData(response.data.articles); // Assuming "articles" is the array you want to use
        } else {
          // Handle the case where the response does not contain the expected array
          console.error("API response does not contain the expected array:", response?.data);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Gagal mengambil data',
          text: `Pesan kesalahan : ${error}`,
          confirmButtonText: "OK"
        });
      });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <section className="w-screen h-screen">
      <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-5">
        {Array.isArray(data) &&
          data.map((item, index) => (
            <Card
              key={index}
              id={item?.id}
              title={item?.title}
              author={item?.author}
              image={item?.image}
              onClick={() =>
                navigate(`/detail/${item?.id}`, {
                  state: {
                    itemId: item?.id,
                  },
                })
              }
            />
          ))}
      </div>
    </section>
  );
};
export default Home;