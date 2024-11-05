import { Pagination } from "antd";
import { useNavigate } from "react-router";

function Productcard({ data }) {
  const navigate = useNavigate();
  const { thumbnail, price, title, id } = data;
  return (
    <>
      <div onClick={() => navigate(`/products/${id}`)}>
        <img
          className="bg-emerald-50 md:h-80 lg:h-96  max-w-full cursor-pointer"
          src={thumbnail}
          alt=""
        />
        <p className="font-medium text-gray-700 dark:text-gray-400 title text-sm md:text-base">
          {title}
        </p>
        <p className="text-gray-400 text-xs md:text-base">PKR : {price}</p>
      </div>
    </>
  );
}

export default Productcard;
