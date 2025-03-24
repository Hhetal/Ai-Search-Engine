// import Image from "next/image";
// import styles from "./rightbar.module.css";
// import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

// const Rightbar = () => {
//   return (
//     <div className={styles.container}>
//       <div className={styles.item}>
//         <div className={styles.bgContainer}>
//           <Image className={styles.bg} src="/astronaut.png" alt="" fill />
//         </div>
//         <div className={styles.text}>
//           <span className={styles.notification}>🔥 Available Now</span>
//           <h3 className={styles.title}>
//             How to use the new version of the admin dashboard?
//           </h3>
//           <span className={styles.subtitle}>Takes 4 minutes to learn</span>
//           <p className={styles.desc}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Reprehenderit eius libero perspiciatis recusandae possimus.
//           </p>
//           <button className={styles.button}>
//             <MdPlayCircleFilled />
//             Watch
//           </button>
//         </div>
//       </div>
//       <div className={styles.item}>
//         <div className={styles.text}>
//           <span className={styles.notification}>🚀 Coming Soon</span>
//           <h3 className={styles.title}>
//             New server actions are available, partial pre-rendering is coming
//             up!
//           </h3>
//           <span className={styles.subtitle}>Boost your productivity</span>
//           <p className={styles.desc}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit.
//             Reprehenderit eius libero perspiciatis recusandae possimus.
//           </p>
//           <button className={styles.button}>
//             <MdReadMore />
//             Learn
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rightbar;

import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src="/image.png" alt="" fill />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.title}>
            Master Python for Data Science: New Course Released!
          </h3>
          <span className={styles.subtitle}>Takes 6 hours to complete</span>
          <p className={styles.desc}>
            Join our new Python course designed for beginners and learn how to
            work with data, perform analysis, and build models.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch Now
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New Interactive Coding Challenges for JavaScript Developers!
          </h3>
          <span className={styles.subtitle}>Boost your skills</span>
          <p className={styles.desc}>
            Soon, we’ll launch hands-on coding challenges to help you master
            JavaScript. Get ready to level up!
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;

