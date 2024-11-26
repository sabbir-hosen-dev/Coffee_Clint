import banner from "../assets/images/more/3.png";

function Banner() {
  return (
    <div className="banner justify-center items-center flex"
    style={{ background: `url(${banner})` }}
    >
      <div
        className="wrap  grid grid-cols-5"
       
      >
        <div className="md:col-span-2"></div>

        <div className=" col-span-4 md:col-span-3">
          <h2 className="font-bold text-2xl mb-3 text-white ">
            Would you like a Cup of Delicious Coffee?
          </h2>
          <p className="text-white">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <div className="">
            <button className="main-btn">Larn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
