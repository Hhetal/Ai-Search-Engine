// import Image from "next/image";
// import styles from "./transactions.module.css";

// const Transactions = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Latest Users</h2>
//       <table className={styles.table}>
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Status</td>
//             <td>Date</td>
//             <td>Amount</td>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>
//               <div className={styles.user}>
//                 <Image
//                   src="/noavatar.png"
//                   alt=""
//                   width={40}
//                   height={40}
//                   className={styles.userImage}
//                 />
//                 Hetal Sathaliya
//               </div>
//             </td>
//             <td>
//               <span className={`${styles.status} ${styles.pending}`}>
//                 Pending
//               </span>
//             </td>
//             <td>14.02.2024</td>
//             <td>₹3.200</td>
//           </tr>
//           <tr>
//             <td>
//               <div className={styles.user}>
//                 <Image
//                   src="/noavatar.png"
//                   alt=""
//                   width={40}
//                   height={40}
//                   className={styles.userImage}
//                 />
//                 Urmi Vaishnav
//               </div>
//             </td>
//             <td>
//               <span className={`${styles.status} ${styles.done}`}>Done</span>
//             </td>
//             <td>14.02.2024</td>
//             <td>$3.200</td>
//           </tr>
//           <tr>
//             <td>
//               <div className={styles.user}>
//                 <Image
//                   src="/noavatar.png"
//                   alt=""
//                   width={40}
//                   height={40}
//                   className={styles.userImage}
//                 />
//                Tejash Prajapati
//               </div>
//             </td>
//             <td>
//               <span className={`${styles.status} ${styles.cancelled}`}>
//                 Cancelled
//               </span>
//             </td>
//             <td>14.02.2024</td>
//             <td>$3.200</td>
//           </tr>
//           <tr>
//             <td>
//               <div className={styles.user}>
//                 <Image
//                   src="/noavatar.png"
//                   alt=""
//                   width={40}
//                   height={40}
//                   className={styles.userImage}
//                 />
//                  Heena Purihot
//               </div>
//             </td>
//             <td>
//               <span className={`${styles.status} ${styles.pending}`}>
//                 Pending
//               </span>
//             </td>
//             <td>14.02.2024</td>
//             <td>$3.200</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Transactions;



import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
return (
  <div className={styles.container}>
    <h2 className={styles.title}>Latest User Activity</h2>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Student Name</td>
          <td>Course</td>
          <td>Status</td>
          <td>Date</td>
          <td>Amount</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt="Avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              Hetal Sathaliya
            </div>
          </td>
          <td>JavaScript for Beginners</td>
          <td>
            <span className={`${styles.status} ${styles.pending}`}>
              Pending 
            </span>
          </td>
          <td>14.02.2024</td>
          <td>₹3,200</td>
        </tr>
        <tr>
          <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt="Avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              Urmi Vaishnav
            </div>
          </td>
          <td>Python for Data Science</td>
          <td>
            <span className={`${styles.status} ${styles.completed}`}>
              Completed
            </span>
          </td>
          <td>14.02.2024</td>
          <td>₹3,200</td>
        </tr>
        <tr>
          <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt="Avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              Tejash Prajapati
            </div>
          </td>
          <td>Machine Learning Basics</td>
          <td>
            <span className={`${styles.status} ${styles.cancelled}`}>
              Cancelled 
            </span>
          </td>
          <td>14.02.2024</td>
          <td>₹3,200</td>
        </tr>
        <tr>
          <td>
            <div className={styles.user}>
              <Image
                src="/noavatar.png"
                alt="Avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              Heena Purihot
            </div>
          </td>
          <td>Advanced React</td>
          <td>
            <span className={`${styles.status} ${styles.pending}`}>
              Pending 
            </span>
          </td>
          <td>14.02.2024</td>
          <td>₹3,200</td>
        </tr>
      </tbody>
    </table>
  </div>
);
};

export default Transactions;
