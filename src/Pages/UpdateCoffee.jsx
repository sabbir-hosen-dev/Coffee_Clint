import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function UpdateCoffee() {
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
          <form action="">
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
                />
              </div>
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
              />
            </div>

            <button className="btn w-full mt-5 bg-pin py-1 border-2 border-main text-main ">Update Coffee Detalls</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateCoffee;
