import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
  {
    id: 1,
    src: "/public/images/earth.jpg",
    alt: "Earth",
  },
  {
    id: 2,
    src: "/public/images/jupiter.jpg",
    alt: "Jupiter",
  },
  {
    id: 3,
    src: "/public/images/Mars.png",
    alt: "Mars",
  },
  {
    id: 4,
    src: "/public/images/neptune.jpg",
    alt: "neptune",
  },
  {
    id: 5,
    src: "/public/images/saturn.jpg",
    alt: "Saturn",
  },
];

const Hero = () => {
  const [selectedImageId, setSelectedImageId] = useState(1);
  const [startIdx, setStartIdx] = useState(0);
  const [thumbImages, setThumbImages] = useState([]);

  useEffect(() => {
    const length = images.length;
    const updatedImages = [];
    let ptr = startIdx;
    while (updatedImages.length < 3) {
      if (ptr === length) {
        ptr = 0;
      } else {
        updatedImages.push(images[ptr]);
        ptr++;
      }
    }
    console.log("Startidx: ", startIdx);
    setSelectedImageId(images[startIdx].id);
    setThumbImages(updatedImages);
  }, [startIdx]);

  // const arr = [1, 2, 3, 4];
  // const result = arr.filter((a) => a > 3);
  // //result = 4;
  // result = [4];

  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${
            images.filter((img) => img.id === selectedImageId)[0].src
          })`,
        }}
      >
        <div className="hero-overlay bg-black opacity-60"></div>
        <div className="absolute gap-10">
          <div className=" space-y-6 mx-10 relative top-20">
            <p className="text-5xl font-semibold text-white">
              Welcome To Planet
            </p>
            <p className="text-white text-2xl font-semibold ">
              Earth - The Blue Planet
            </p>
            <p className="text-white text-lg font-semibold">Basic Fact</p>
            <ul className="list-disc list-inside text-white space-y-2 pl-5 text-sm">
              <li> Third planet from the Sun</li>
              <li> Only known planet to support life</li>
              <li> Approximately 4.5 billion years old</li>
              <li>Fifth largest planet in our solar system</li>
            </ul>
            <button className="button  py-2 px-5 w-40 rounded-2xl flex items-center justify-center gap-2 font-bold text-lg bg-black text-white hover:bg-white hover:text-black transition duration-300 group">
              See more{" "}
              <span>
                <FaArrowRight className="hidden group-hover:inline-block transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
          <div className="flex justify-between gap-5 w-2/3 relative right-0 left-52 top-28">
            <button
              onClick={() =>
                setStartIdx((prevState) => {
                  if (prevState < images.length - 1) {
                    return prevState + 1;
                  } else return 0;
                })
              }
              className="text-white text-3xl"
            >
              <FaArrowLeft />
            </button>
            {thumbImages.map((image) => (
              <div key={image.id} className="h-64 w-80 shrink-0">
                <img
                  onClick={() => setSelectedImageId(image.id)}
                  src={image.src}
                  className={`h-full w-full ${
                    selectedImageId === image.id
                      ? "border-green-500 border-[3px]"
                      : "border-white border-2"
                  } rounded-2xl object-cover`}
                  alt={image.alt}
                />
              </div>
            ))}
            {/* <div className="h-64 w-80 shrink-0">
              <img
                src="/public/images/jupiter.jpg"
                className="h-full w-full border-2 border-white rounded-2xl object-cover"
                alt="Earth"
              />
            </div>
            <div className="h-64 w-80 shrink-0">
              <img
                src="/public/images/Mars.png"
                className="h-full w-full border-2 border-white rounded-2xl object-cover"
                alt="Earth"
              />
            </div> */}
            {/* <div className="h-64 w-80 shrink-0">
              <img
                src="/public/images/earth.jpg"
                className="h-full w-full border-2 border-white rounded-2xl object-cover"
                alt="Earth"
              />
            </div> */}

            <button
              onClick={() =>
                setStartIdx((prevState) => {
                  if (prevState === 0) {
                    return images.length - 1;
                  } else return prevState - 1;
                })
              }
              className="text-white text-3xl"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
