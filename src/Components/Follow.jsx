function Follow() {
  const items = [
    { id: 1, image: "https://i.ibb.co.com/MZ3TM7x/Rectangle-11.png" },
    { id: 2, image: "https://i.ibb.co.com/qrr08xm/Rectangle-12.png" },
    { id: 3, image: "https://i.ibb.co.com/xhLdDZw/Rectangle-13.png" },
    { id: 4, image: "https://i.ibb.co.com/SB0pPf4/Rectangle-14.png" },
    { id: 5, image: "https://i.ibb.co.com/TmXyK8J/Rectangle-15.png" },
    { id: 6, image: "https://i.ibb.co.com/dBq5G0n/Rectangle-16.png" },
    { id: 7, image: "https://i.ibb.co.com/0GTbnW2/Rectangle-9.png" },
    { id: 8, image: "https://i.ibb.co.com/nQtDhtn/Rectangle-10.png" },
  ];

  return (
    <div className="my-24">
          <div className="wrap">
      <div className="text-center mt-10">
        <h4>Follow Us Now</h4>
        <h2 className="font-rancho text-4xl font-bold mt-2 mb-5">Follow on Instagram</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((item) => (
          <div key={item.id} className="rounded-md w-full">
            {" "}
            <img className="w-full" src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Follow;
