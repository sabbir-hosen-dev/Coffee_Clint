import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

function Coffee() {
  const params = useParams();

  const id = params.id;

  const [coffee, setCoffee] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/coffees/${id}`)
      .then((res) => res.json())
      .then((data) => setCoffee(data))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div className="wrap py-10">
      <Link
        to="/"
        className="text-main text-xl cursor-pointer flex  gap-3 items-center"
      >
        <BsArrowLeft className="text-main" />
        <div className="font-rancho">Back to home</div>
      </Link>

      <div className="flex justify-center my-10 items-center">
        <div className="bg-[#F4F3F0] py-16 px-20 rounded-lg shadow-sm">
          <div className="flex gap-5 flex-col md:flex-row items-center">
            <div className="">
              <img className="w-64" src={coffee?.photo} alt="" />
            </div>
            <div className="flex-1">

              <h4 className="font-rancho text-3xl font-bold mb-2">Nicetless</h4>

              <p className="text-lg font-semibold text-gray-800">
                Name: <span className="font-normal text-gray-600">{coffee?.name}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Chef: <span className="font-normal text-gray-600">{coffee?.chef}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Supplier: <span className="font-normal text-gray-600">{coffee?.supplier}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Test: <span className="font-normal text-gray-600">{coffee?.test}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Category: <span className="font-normal text-gray-600">{coffee?.category}</span>
              </p>
              <p className="text-lg font-semibold text-gray-800">
                Details:{" "}
                <span className="font-normal text-gray-600">{coffee?.details}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Coffee;
