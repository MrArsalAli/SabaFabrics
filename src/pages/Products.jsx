import React, { useEffect, useState } from "react";
import Productcard from "../components/Productcard";
import { Pagination } from "antd";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <>
      <div className="mx-auto mt-16">
        <div className="grid grid-cols-5 gap-2 px-2 mt-1">
          {products.map((data) => (
            <Productcard data={data} key={data.id} />
          ))}
        </div>
        <div className="flex justify-center my-8">
        <Pagination
        defaultCurrent={1}
        // total={50}
        // pageSize={limit}
        // onChange={(num) => setSkip((num - 1) * limit)}
        // onShowSizeChange={(pageSize) => setLimit(pageSize)}
        />
      </div>
      </div>
    </>
  );
}

export default Products;
