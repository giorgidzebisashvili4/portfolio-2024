import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaEnvelope, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className="-mt-[8rem] xl:flex-row flex-col-reverse 
      flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact Information</h3>

        <div className="mt-10 flex flex-col gap-6 font-poppins text-white text-xl">
          <div className="flex items-center">
            <FaEnvelope className="text-white mr-7 text-gray-300" size={40} />
            <a
              href="mailto:giorgidzebisashvili4@gmail.com"
              className="underline font-bold text-2xl text-taupe"
            >
              giorgidzebisashvili4 @gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <FaLinkedin className="text-white mr-7 text-gray-300" size={40} />
            <a
              href="https://www.linkedin.com/in/giorgi-dzebisashvili-612bbb180/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold text-2xl text-taupe"
            >
              giorgi-dzebisashvili
            </a>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="text-white mr-7 text-gray-300" size={40} />
            <span className="font-bold text-2xl text-taupe">
              +995 598 604139
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
