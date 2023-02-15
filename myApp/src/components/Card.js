import React, {useState} from "react";
// import largeImg from "../asserts/blueT.png";
import { CardData } from "../data/CardData";

const Card = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleClick = (name) =>{
      setSelectedImage(name)
    }
  return (
    <React.Fragment>
      <main>
        <div className="centered flex-col bg-white">
          {
            selectedImage &&
            <div className="flex space-x-3 h-28 centered  text-4xl font-bold md:text-5xl" >
            <p className="text-red-500 capitalize font-bold ">{selectedImage}</p>
            <p> was selected</p>
          </div>
          }
         
         

          {/* data */}
          <div className="grid grid-cols-3 mt-2 ">
            {CardData.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="">
                    <img src={item.img} alt="cardImage"
                     className="h-72 md:h-96"
                     onClick={() =>handleClick(item.name)}
                      />
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </main>
    </React.Fragment>
  );
};

export default Card;
