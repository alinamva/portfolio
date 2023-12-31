import { useRef } from "react";
import { Data } from "../../../constants";
// import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
const Projects = () => {
  return (
    <div className="px-48 py-12 flex flex-col gap-12 ">
      <h2 className="bg-gradient-to-r from-[#5889db] text-center via-[#5889db] font-bold to-black text-transparent bg-clip-text">
        Projects
      </h2>
      <div className="grid grid-cols-2 gap-12">
        {Data.map((p, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref);
          return (
            <motion.div
              // initial={{ opacity: 0.5, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: isInView ? 1 : 0.5,
                scale: isInView ? 1 : 0.95,
              }}
              key={index}
              ref={ref}
              className="w-full shadow-2xl rounded-xl py-4 border "
            >
              {/* <Link to={p.link}> */}
              <div className="w-full px-8 py-4">
                <img
                  src={p.image}
                  className="cursor-pointer hover:scale-105 duration-200 shadow-xl"
                />
              </div>
              {/* </Link> */}
              <div className="px-8 py-2 gap-4 flex flex-col">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="flex gap-3">
                  {p.lgs.map((icon, index) => (
                    <img
                      key={index}
                      src={icon}
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
