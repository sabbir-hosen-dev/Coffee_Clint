import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCoffeeContex from "../Hooks/useCoffeeContex";

function UpdateCoffee() {
  const location = useLocation();
  const {update,setUpdate} = useCoffeeContex()

  const coffee = location.state.coffee;
  const navigate = useNavigate()
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const test = form.test.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const price = form.price.value;

    const data = { name, chef, supplier, test, category, details, photo,price };

    fetch(`http://localhost:5000/coffees/${coffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          Swal.fire({
            title: "Update !",
            text: " Coffee updated !",
            icon: "success",
          });
          setUpdate(!update)
          navigate("/")
          form.reset()
        }
      })
      .catch((err) => console.log(err));
  }
  
  return (
    <div className=" wrap py-10 bg-[#F4F3F]">
      <div className="">
        <Link
          to="/"
          className="text-main text-xl cursor-pointer flex  gap-3 items-center"
        >
          <BsArrowLeft className="text-main" />
          <div className="font-rancho">Back to home</div>
        </Link>
      </div>
      <div className="flex py-10 justify-center items-center">
        <div className="bg-[#F4F3F0] p-10 rounded-xl shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-rancho font-bold text-center mb-4">
          Update Existing Coffee Details
          </h1>
          <p className="text-sm text-center text-gray-600 mb-6">
          It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
          <form onSubmit={handleUpdate} action="">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered"
                  required
                  defaultValue={coffee.name}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="input input-bordered"
                  required
                  defaultValue={coffee.chef}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Supplier</span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input input-bordered"
                  required
                  defaultValue={coffee.supplier}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Test</span>
                </label>
                <input
                  type="text"
                  name="test"
                  placeholder="Enter coffee test"
                  className="input input-bordered"
                  required
                  defaultValue={coffee.test}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input input-bordered"
                  required
                  defaultValue={coffee.category}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input input-bordered"
                  required
                  defaultValue={coffee.details}
                />
              </div>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Coffee Price"
                className="input input-bordered"
                required
                defaultValue={ coffee?.price}
              />
            </div>
              <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo Url"
                className="input input-bordered"
                required
                defaultValue={coffee.photo}
              />
            </div>
            </div>

     

            <button className="btn w-full mt-5 bg-pin py-1 border-2 border-main text-main ">Update Coffee Detalls</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCoffee;
