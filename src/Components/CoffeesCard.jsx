/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FaPen } from "react-icons/fa";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useCoffeeContex from "../Hooks/useCoffeeContex";

function CoffeeCard({ coffee }) {
  const { _id, name, chef, photo, price } = coffee;

  const { update, setUpdate } = useCoffeeContex();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Delete this Coffee !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-server-tawny.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Good Luck!",
                text: "Deleted coffee detailsAre you sure that you want to delete it?.",
                icon: "success",
              });
              setUpdate(!update);
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div className="flex items-center justify-between gap-4 p-6 rounded-lg bg-[#F9F6F1] shadow-md">
      {/* Image Section */}
      <div className="w-28 h-28">
        <img
          src={photo}
          alt="Coffee"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Coffee Details */}
      <div className="flex-1">
        <p className="text-lg font-semibold text-gray-800">
          Name: <span className="font-normal text-gray-600">{name}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Chef: <span className="font-normal text-gray-600">{chef}</span>
        </p>
        <p className="text-lg font-semibold text-gray-800">
          Price: <span className="font-normal text-gray-600">{price}</span>
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col items-center gap-3">
        <Link
          to={`/coffees/${_id}`}
          className="p-2 rounded-full z-10 bg-[#d4b18f] hover:bg-[#c49d76] text-white shadow-md"
        >
          <AiFillEye size={18} />
        </Link>
        <Link
          state={{ coffee: coffee }}
          to="/update-coffee"
          className="p-2 rounded-full z-10 bg-[#525252] hover:bg-[#424242] text-white shadow-md"
        >
          <FaPen size={18} />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="p-2 rounded-full z-10 bg-[#E63946] hover:bg-[#c52837] text-white shadow-md"
        >
          <AiFillDelete size={18} />
        </button>
      </div>
    </div>
  );
}

export default CoffeeCard;
