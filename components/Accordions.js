import { motion } from "framer-motion";

const Accordions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2 }}
      exit={{ opacity: 0 }}
      className=""
    >
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          About
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light">
          <p>
            We at mudslide, pride ourselves on showcasing the best technology
            available, while also emphasizing Indian values, believing that
            technology should not only be cutting-edge, but also align with the
            values that make India great. That's why we are dedicated to
            bringing you technology that promotes efficiency, sustainability,
            and innovation, also staying true to Indian values like respect,
            hospitality, and community. At the same time, we are committed to
            supporting the Make in India initiative, which promotes local for
            vocal startups and encourages the development of India's tech
            industry. believing that by promoting locally made products, we can
            help create jobs, spur economic growth, and build a more
            self-sufficient India. Finally, we are passionate about supporting
            innovations in the technology space. We understand the importance of
            innovation, and we are always on the lookout for new, disruptive
            technologies that can change the game. Whether you're a large
            corporation or a small startup, we're here to support you and help
            you succeed.
          </p>
        </div>
      </details>
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          Project
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light">
          <p>
            At Mudslide, we are more than just a technology company - we aim to
            create meaningful connections between people and empower them to
            share their stories. Quikey, the master product of Mudslide, is a
            best-in-class social media application designed to provide more
            security and privacy to users. It offers an alternative to current
            global social media platforms by focusing on user privacy, with zero
            personal data loss. For now We are available to Indian users only,
            but our goal is to expand beyond the technology and make a place in
            people's hearts. With cutting-edge technology we are focused to
            ensure user privacy and security, with end-to-end encryption and
            advanced data protection measures. We believe that users should have
            full control over their personal data, and Quikey empowers them to
            do so. As a corporate entity, Our dedicated and skillful capable
            team committed to providing the best possible user experience, while
            also upholding our core values of integrity and accountability.
          </p>
        </div>
      </details>
      <details className="open:bg-accent open:text-black transition duration-300 ease-in-out select-none">
        <summary className="bg-inherit px-5 py-3 text-[22px] cursor-pointer font-medium text-[#2B2C7F] ">
          Education
        </summary>
        <div className="px-10 pb-4 bg-accent text-sm font-light">
          <p>
            At mudslide, we believe that education is the key to success, and we
            are committed to students achieve their goals. We believe in the
            transformative power of education and are dedicated to helping
            university and college students achieve their goals. Mudslide is
            dedicated to teach cutting-edge technology with real-world
            applications. Our mission is to provide students with the skills and
            knowledge they need to succeed in today's rapidly changing job
            market. Understanding that traditional classroom learning can only
            take you so far, which is why we offer an immersive, real-time
            environment that allows students to apply what they learn in a
            practical setting. Our experienced instructors provide hands-on
            training, and our curriculum is designed to be both engaging and
            challenging. We work closely with industry partners to ensure that
            our curriculum is relevant and up-to-date. Through partnerships with
            leading companies, we offer students internships and other
            opportunities that help them build their professional carrier and
            gain valuable experience.
          </p>
        </div>
      </details>
    </motion.div>
  );
};

export default Accordions;
