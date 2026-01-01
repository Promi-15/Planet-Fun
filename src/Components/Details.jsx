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
      <div className="flex justify-between  py-10">
        <div
          className="w-[900px]  object-cover p-5 mt-10  relative "
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
            <div className="w-[520px]">
              <p className="pt-5 font-semibold text-white pb-4">
                2. Key Planetary Data
              </p>
              <ul className="font-light text-sm text-white space-y-6 list-disc ">
                <li>
                  Diameter
                  <span className="italic ">12,742 km (7,918 miles)</span>
                </li>
                <li>
                  Mass <span className="italic ">5.97 × 10^24 kg</span>
                </li>
                <li>
                  Orbital Period
                  <span className="italic ">
                    365.25 days (hence the leap year)
                  </span>
                </li>
                <li>
                  Rotation Period
                  <span className="italic ">
                    23 hours, 56 minutes, 4 seconds Average
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-9 w-[500px]">
              <ul className="font-light text-sm text-white space-y-6 list-disc ">
                <li>
                  Distance from
                  <span className="italic ">Sun 149.6 million km</span>
                </li>
                <li>
                  Surface Gravity
                  <span className="italic "> 9.8 m/s²</span>
                </li>
                <li>
                  Natural Satellite
                  <span className="italic "> 1 (The Moon)</span>
                </li>
                <li>
                  Surface Temperature Range:
                  <span className="italic ">
                    -88°C to 58°C (-126°F to 136°F); Avg: 15°C (59°F)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between h-[650px] py-10">
        <div
          className="w-[800px] p-10  "
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <p className="pt-10 text-white text-2xl font-bold  text-center ">
            Mars - The Red Planet
          </p>
          <p className="pt-4  text-white">
            <span className="font-bold ">Overview & Significance</span> :
            <h1 className="text-sm font-light leading-7">
              Mars is the fourth planet from the Sun and the second-smallest
              planet in the Solar System. Often called the "Red Planet" due to
              its reddish appearance caused by iron oxide (rust) on its surface,
              Mars has captivated human imagination for centuries. What sets
              Mars apart is its striking similarity to Earth in the
              past—evidence suggests it once had flowing water, rivers, lakes,
              and possibly oceans. Today, it stands as humanity's next frontier
              for exploration and potential colonization.
            </h1>
          </p>
          <div className="flex justify-around items-center gap-10  ">
            <div className="w-[560px]">
              <p className="pt-5 font-semibold text-white pb-4">
                2. Key Planetary Data
              </p>
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Diameter
                  <span className="italic ">
                    6,779 km (4,212 miles) - about half of Earth's
                  </span>
                </li>
                <li>
                  Mass{" "}
                  <span className="italic ">
                    6.39 × 10^23 kg (0.107 Earth masses)
                  </span>
                </li>
                <li>
                  Orbital Period
                  <span className="italic ">
                    687 Earth days (1.88 Earth years)
                  </span>
                </li>
                <li>
                  Rotation Period
                  <span className="italic ">
                    24 hours, 37 minutes, 22 seconds
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-9 w-[500px]">
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Distance from
                  <span className="italic ">
                    Sun 227.9 million km (1.52 AU)
                  </span>
                </li>
                <li>
                  Surface Gravity
                  <span className="italic ">3.71 m/s² (38% of Earth's)</span>
                </li>
                <li>
                  Natural Satellite
                  <span className="italic "> 2 moons (Phobos and Deimos)</span>
                </li>
                <li>
                  Surface Temperature Range:
                  <span className="italic ">
                    -153°C to 20°C (-243°F to 70°F); Avg: -63°C (-81°F)
                    Atmosphere 95% carbon dioxide, 2.6% nitrogen, 1.9% argon,
                    trace oxygen
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
            src="/public/videos/mars.mp4"
            autoPlay={true}
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl"
          ></video>
          <div className="hero-overlay inset-0 bg-black opacity-10 absolute "></div>
        </div>
      </div>
      <div className="flex justify-between h-[650px] py-10">
        <div
          className="w-[800px] p-10  "
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
            <div className="w-[560px]">
              <p className="pt-5 font-semibold text-white pb-4">
                2. Key Planetary Data
              </p>
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Diameter
                  <span className="italic ">139,820 km (86,881 miles)</span>
                </li>
                <li>
                  Mass <span className="italic ">1.898 × 10^27 kg</span>
                </li>
                <li>
                  Orbital Period
                  <span className="italic ">
                    11.86 Earth years (4,333 Earth days)
                  </span>
                </li>
                <li>
                  Rotation Period
                  <span className="italic ">
                    9 hours, 55 minutes, 30 seconds
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-9">
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Distance from
                  <span className="italic ">Sun 778.5 million km (5.2 AU)</span>
                </li>
                <li>
                  Surface Gravity
                  <span className="italic ">
                    24.79 m/s² (2.5 times Earth's)
                  </span>
                </li>
                <li>
                  Natural Satellite
                  <span className="italic "> 95 confirmed moons</span>
                </li>
                <li>
                  Surface Temperature Range:
                  <span className="italic ">
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
      <div className="flex justify-between h-[650px] py-10">
        <div
          className="w-[900px] object-cover p-5 mt-28 relative"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <video
            src="/public/videos/saturn.mp4"
            autoPlay={true}
            loop
            muted
            playsInline
            className="w-full h-auto rounded-2xl "
          ></video>
          <div className="hero-overlay inset-0 bg-black opacity-10 absolute "></div>
        </div>
        <div
          className="w-[700px] p-10  "
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <p className="pt-10 text-white text-2xl font-bold  text-center ">
            Saturn - The Ringed Jewel
          </p>
          <p className="pt-4  text-white">
            <span className="font-bold ">Overview & Significance</span> :
            <h1 className="text-sm font-light leading-7">
              Saturn is the sixth planet from the Sun and the second-largest in
              our Solar System. It is famous for its spectacular ring system,
              visible even from small telescopes on Earth. Saturn is a gas giant
              composed primarily of hydrogen and helium. Its density is so low
              (0.687 g/cm³) that it would actually float in water if you could
              find a large enough ocean!
            </h1>
          </p>
          <div className="flex justify-around items-center gap-10  ">
            <div className="w-[520px]">
              <p className="pt-5 font-semibold text-white pb-4">
                2. Key Planetary Data
              </p>
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Diameter
                  <span className="italic ">
                    116,460 km (72,367 miles) - 9.1 times Earth's
                  </span>
                </li>
                <li>
                  Mass{" "}
                  <span className="italic ">
                    5.68 × 10^26 kg (95 Earth masses)
                  </span>
                </li>
                <li>
                  Orbital Period
                  <span className="italic ">29.5 Earth years</span>
                </li>
                <li>
                  Rotation Period
                  <span className="italic ">
                    10 hours, 33 minutes, 38 seconds
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-9 w-[500px]">
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Distance from
                  <span className="italic ">Sun 1.43 billion km (9.58 AU)</span>
                </li>
                <li>
                  Surface Gravity
                  <span className="italic ">
                    10.44 m/s² (1.06 times Earth's)
                  </span>
                </li>
                <li>
                  Natural Satellite
                  <span className="italic ">
                    146 confirmed moons (most in Solar System)
                  </span>
                </li>
                <li>
                  Surface Temperature Range:
                  <span className="italic ">-139°C (-218°F) at cloud tops</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* urenas
       */}
      <div className="flex justify-between h-[650px] py-10">
        <div
          className="w-[800px] p-10  "
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <p className="pt-10 text-white text-2xl font-bold  text-center ">
            Neptune - The Windy Ice Giant
          </p>
          <p className="pt-4  text-white">
            <span className="font-bold ">Overview & Significance</span> :
            <h1 className="text-sm font-light leading-7">
              Neptune is the eighth and farthest known planet from the Sun in
              our Solar System. Named after the Roman god of the sea, it's the
              fourth-largest planet by diameter and third-largest by mass. What
              sets Neptune apart is its intense blue color (from methane in its
              atmosphere), supersonic winds (the fastest in the Solar System),
              and its status as an ice giant—a class of planet different from
              gas giants like Jupiter. It's so distant that it was the first
              planet discovered through mathematical predictions rather than
              direct observation.
            </h1>
          </p>
          <div className="flex justify-around items-center gap-10  ">
            <div className="w-[550px]">
              <p className="pt-5 font-semibold text-white pb-4">
                2. Key Planetary Data
              </p>
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Diameter{" "}
                  <span className="italic ">
                    49,244 km (30,598 miles) - about 4 times Earth's
                  </span>
                </li>
                <li>
                  Mass{" "}
                  <span className="italic ">
                    1.024 × 10^26 kg (17 Earth masses)
                  </span>
                </li>
                <li>
                  Orbital Period
                  <span className="italic ">
                    164.8 Earth years (60,190 Earth days)
                  </span>
                </li>
                <li>
                  Rotation Period
                  <span className="italic ">
                    16 hours, 6 minutes, 36 seconds
                  </span>
                </li>
              </ul>
            </div>
            <div className="pt-9 w-[500px]">
              <ul className="font-light text-sm text-white space-y-4 list-disc ">
                <li>
                  Distance from
                  <span className="italic ">Sun 4.5 billion km (30.1 AU)</span>
                </li>
                <li>
                  Surface Gravity
                  <span className="italic ">
                    11.15 m/s² (1.14 times Earth's)
                  </span>
                </li>
                <li>
                  Natural Satellite
                  <span className="italic ">14 confirmed moons</span>
                </li>
                <li>
                  Surface Temperature Range:
                  <span className="italic ">
                    -201°C (-330°F) Atmosphere 80% hydrogen, 19% helium, 1.5%
                    methane, traces of ethane, ammonia, water ice Ring System 5
                    faint rings primarily of ice particles
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="w-[700px] object-cover p-5 mt-20  relative"
          data-aos="zoom-in-down"
          data-aos-duration="2000"
        >
          <video
            src="/public/videos/n.mp4"
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
