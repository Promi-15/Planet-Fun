import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Details = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-black">
      <div className="flex justify-between  h-[650px]">
        <div
          className="w-[1000px] object-cover p-5  relative "
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <video
            src="/videos/earth.mp4"
            autoPlay={true}
            loop
            muted
            playsInline
            className="w-full h-auto mt-12 rounded-2xl"
          ></video>
          <div className="hero-overlay inset-0 bg-black opacity-10 absolute "></div>
        </div>
        <div
          className="w-[700px] p-10  "
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <p className="pt-10 text-white text-2xl font-bold  text-center ">
            Title: Earth - The Blue Planet Hero
          </p>
          <p className="pt-4  text-white">
            <span className="font-bold ">Overview & Significance</span> :
            <h1 className="text-sm font-light leading-9">
              Earth is the third planet from the Sun and the densest in the
              Solar System. It is the only celestial body where life has been
              confirmed to exist. What sets Earth apart is its liquid water,
              dynamic atmosphere, protective magnetic field, and tectonic
              activity—all working in a delicate balance to create a habitable
              world.
            </h1>
          </p>
          <div className="flex justify-around items-center gap-10  ">
            <div className="w-1/2">
              <p className="pt-5 font-semibold text-white pb-4">
                2. Key Planetary Data
              </p>
              <ul className="font-light text-sm text-white space-y-6 list-disc ">
                <li>
                  Diameter
                  <span className="italic underline">
                    12,742 km (7,918 miles)
                  </span>
                </li>
                <li>
                  Mass <span className="italic underline">5.97 × 10^24 kg</span>
                </li>
                <li>
                  Orbital Period
                  <span className="italic underline">
                    365.25 days (hence the leap year)
                  </span>
                </li>
                <li>
                  Rotation Period
                  <span className="italic underline">
                    23 hours, 56 minutes, 4 seconds Average
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-9">
              <ul className="font-light text-sm text-white space-y-6 list-disc ">
                <li>
                  Distance from
                  <span className="italic underline">Sun 149.6 million km</span>
                </li>
                <li>
                  Surface Gravity
                  <span className="italic underline"> 9.8 m/s²</span>
                </li>
                <li>
                  Natural Satellite
                  <span className="italic underline"> 1 (The Moon)</span>
                </li>
                <li>
                  Surface Temperature Range:
                  <span className="italic underline">
                    -88°C to 58°C (-126°F to 136°F); Avg: 15°C (59°F)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between h-[650px] ">
        <div
          className="w-[700px] p-10  "
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <p className="pt-10 text-white text-2xl font-bold  text-center ">
            Jupiter - The Giant of the Solar System
          </p>
          <p className="pt-4  text-white">
            <span className="font-bold ">Overview & Significance</span> :
            <h1 className="text-sm font-light leading-7">
              Jupiter is the fifth planet from the Sun and by far the largest in
              the Solar System. It is a gas giant with a mass one-thousandth
              that of the Sun but two-and-a-half times the mass of all the other
              planets in the Solar System combined. Jupiter's most distinctive
              feature is the Great Red Spot, a giant storm larger than Earth
              that has raged for at least 400 years. What sets Jupiter apart is
              its immense size, powerful magnetic field, and complex system of
              moons—it serves as a cosmic shield, protecting inner planets from
              cometary impacts.
            </h1>
          </p>
          <div className="flex justify-around items-center gap-10  ">
            <div className="w-1/2">
              <p className="pt-5 font-semibold text-white pb-4">
                2. Key Planetary Data
              </p>
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Diameter
                  <span className="italic underline">
                    139,820 km (86,881 miles)
                  </span>
                </li>
                <li>
                  Mass{" "}
                  <span className="italic underline">1.898 × 10^27 kg</span>
                </li>
                <li>
                  Orbital Period
                  <span className="italic underline">
                    11.86 Earth years (4,333 Earth days)
                  </span>
                </li>
                <li>
                  Rotation Period
                  <span className="italic underline">
                    9 hours, 55 minutes, 30 seconds
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-9">
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Distance from
                  <span className="italic underline">
                    Sun 778.5 million km (5.2 AU)
                  </span>
                </li>
                <li>
                  Surface Gravity
                  <span className="italic underline">
                    24.79 m/s² (2.5 times Earth's)
                  </span>
                </li>
                <li>
                  Natural Satellite
                  <span className="italic underline"> 95 confirmed moons</span>
                </li>
                <li>
                  Surface Temperature Range:
                  <span className="italic underline">
                    -108°C (-162°F) at cloud tops Atmosphere 90% hydrogen, 10%
                    helium, with traces of methane, ammonia, water vapor
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="w-[800px] object-cover p-5  relative"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <video
            src="/public/videos/jupiter.mp4"
            autoPlay={true}
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl"
          ></video>
          <div className="hero-overlay inset-0 bg-black opacity-10 absolute "></div>
        </div>
      </div>
    </div>
  );
};

export default Details;
