import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";


const images = [
  {
    id: 1,
    src: "/public/images/earth.jpg",
    alt: "Earth",
    title: "Earth- The blue Planet",
    description: "The only known planet to support life",
    facts: [
      "Third planet from the Sun",
      "Only known planet to support life",
      "Approximately 4.5 billion years old",
      "Fifth largest planet in our solar system",
    ],
  },
  {
    id: 2,
    src: "/public/images/jupiter.jpg",
    alt: "Jupiter",
    title: "Jupiter - The Giant Planet",
    description: "Largest planet in our solar system",
    facts: [
      "Fifth planet from the Sun",
      "Largest planet in solar system",
      "Has 95 known moons",
      "Great Red Spot is a massive storm",
    ],
  },
  {
    id: 3,
    src: "/public/images/Mars.png",
    alt: "Mars",
    title: "Mars - The Red Planet",
    description: "Potential future home for humanity",
    facts: [
      "Fourth planet from the Sun",
      "Known as the Red Planet",
      "Has two moons: Phobos and Deimos",
      "Tallest volcano: Olympus Mons",
    ],
  },
  {
    id: 4,
    src: "/public/images/neptune.jpg",
    alt: "neptune",
    title: "Neptune - The Windy Giant",
    description: "Farthest planet from the Sun",
    facts: [
      "Eighth planet from the Sun",
      "Known for supersonic winds",
      "Has 14 known moons",
      "Deep blue color from methane",
    ],
  },
  {
    id: 5,
    src: "/public/images/saturn.jpg",
    alt: "Saturn",
    title: "Saturn - The Ringed Planet",
    description: "Famous for its spectacular rings",
    facts: [
      "Sixth planet from the Sun",
      "Second largest planet",
      "Has the most extensive ring system",
      "146 known moons (most in solar system)",
    ],
  },
];

const Hero = () => {
  const [selectedImageId, setSelectedImageId] = useState(1);
  const [startIdx, setStartIdx] = useState(0);
  const [thumbImages, setThumbImages] = useState([]);
  const [isBgChanging, setIsBgChanging] = useState(false);
  const [isTextChanging, setIsTextChanging] = useState(false);
  const [displayImage, setDisplayImage] = useState(images[0]);

  // const selectedImage = images.find(img => img.id === selectedImageId)
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

  const handleImageSelect = (id) => {
    setIsBgChanging(true);
    setSelectedImageId(id);
    const selectedImg = images.find((img) => img.id === id);
    setTimeout(() => {
      setDisplayImage(selectedImg);
      setSelectedImageId(id);
      const selectedIndex = images.findIndex((img) => img.id === id);
      setStartIdx(selectedIndex);
    }, 400);
    setTimeout(() => {
      setIsBgChanging(false);
      setIsTextChanging(false);
    }, 800);
  };
  const handleArrowClick = (direction) => {
    setIsBgChanging(true);
    setIsTextChanging(true);

    let newIndex;
    if (direction === "left") {
      newIndex = startIdx < images.length - 1 ? startIdx + 1 : 0;
    } else {
      newIndex = startIdx === 0 ? images.length - 1 : startIdx - 1;
    }

    setStartIdx(newIndex);

    setTimeout(() => {
      setDisplayImage(images[newIndex]);
      setSelectedImageId(images[newIndex].id);
    }, 400);

    setTimeout(() => {
      setIsBgChanging(false);
      setIsTextChanging(false);
    }, 800);
  };

  return (
    <div>
     
      <div
        className={`hero min-h-screen transition-all duration-1000 ease-in-out relative ${
          isBgChanging ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
        style={{
          backgroundImage: `url(${displayImage.src})`,
          transition: "all 0.8s ease-in-out",
        }}
      >
        
        <div className="hero-overlay bg-black opacity-60"></div>
         <Navbar/>
        <div className="absolute gap-10">
          <div className=" space-y-6 mx-10 w-full relative  text-center">
            <p className="text-5xl font-semibold text-white">
              Welcome To Planet
            </p>
            <div
              className={`transition-all duration-500 ${
                isTextChanging
                  ? "opacity-0 translate-y-4"
                  : "opacity-100 translate-y-0"
              }`}
            >
              <p className="text-white text-xl font-semibold">
                {displayImage.title}
              </p>
              <p className="text-white text-sm font-medium mt-2">
                {displayImage.description}
              </p>
              {/* <p className="text-white text-lg font-semibold mt-4">
                Basic Fact
              </p> */}
              {/* <ul className="list-disc list-inside text-white space-y-2 pl-5 text-sm">
                {displayImage.facts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul> */}
            </div>
            <div
              className={`flex justify-center mt-8 transition-all duration-500 ${
                isTextChanging ? "opacity-0" : "opacity-100"
              }`}
            >
              <button className="button py-3 px-8 w-48 rounded-2xl flex items-center justify-center gap-2 border-2 border-white font-bold text-lg bg-black/80 text-white hover:bg-white hover:text-black transition duration-300 group">
                See more{" "}
                <FaArrowRight className="hidden group-hover:inline-block transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-5 w-2/3 relative right-0 left-60 top-10">
            <button
              onClick={() => handleArrowClick("left")}
              className="text-white text-3xl hover:text-blue-300 transition-colors"
            >
              <FaArrowLeft />
            </button>
            {thumbImages.map((image) => (
              <div key={image.id} className="h-64 w-72 shrink-0">
                <img
                  onClick={() => handleImageSelect(image.id)}
                  src={image.src}
                  className={`h-full w-full ${
                    selectedImageId === image.id
                      ? "border-green-500 border-[3px]"
                      : "border-white border-2"
                  } rounded-2xl object-cover cursor-pointer hover:scale-105 transition-transform duration-300`}
                  alt={image.alt}
                />
              </div>
            ))}

            <button
              onClick={() => handleArrowClick("right")}
              className="text-white text-3xl hover:text-blue-300 transition-colors"
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
