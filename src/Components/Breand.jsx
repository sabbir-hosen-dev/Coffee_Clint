
import img1 from "../assets/images/icons/1.png"
import img2 from "../assets/images/icons/2.png"
import img3 from "../assets/images/icons/3.png"
import img4 from "../assets/images/icons/4.png"
function Breand() {
  const category = [
    {
      id: 1,
      title : "Awesome Aroma",
      desc: "You will definitely be a fan of the design & aroma of your coffee",
      img: img1
    },
    {
      id: 2,
      title : "High Quality",
      desc: "We served the coffee to you maintaining the best quality",
      img: img2
    },
    {
      id: 3,
      title : "Pure Grades",
      desc: "The coffee is made of the green coffee beans which you will love",
      img:img3
    },
    {
      id: 4,
      title : "Proper Roasting",
      desc: "Your coffee is brewed by first roasting the green coffee beans",
      img:img4
    }
  ]
  return (
    <div className="bg-[#ECEAE3] py-10">
      <div className="wrap grid grid-cols-1 md:grid-cols-3 gap-5 xl:grid-cols-4">
        {
          category.map(item => <div className="text-center md:text-left" key={item.id}> 
          <div className=" flex justify-center md:justify-start">
            <img className="" src={item.img} alt="" />
          </div>
             <p className="font-rancho my-2 text-2xl">{item.title}</p>
             <p>{item.desc}</p>
          </div>)
        }
      </div>
    </div>
  )
}

export default Breand
