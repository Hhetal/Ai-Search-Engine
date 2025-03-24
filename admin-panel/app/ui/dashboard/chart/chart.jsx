// "use client"

// import styles from './chart.module.css'
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   {
//     name: "Sun",
//     visit: 4000,
//     click: 2400,
//   },
//   {
//     name: "Mon",
//     visit: 3000,
//     click: 1398,
//   },
//   {
//     name: "Tue",
//     visit: 2000,
//     click: 3800,
//   },
//   {
//     name: "Wed",
//     visit: 2780,
//     click: 3908,
//   },
//   {
//     name: "Thu",
//     visit: 1890,
//     click: 4800,
//   },
//   {
//     name: "Fri",
//     visit: 2390,
//     click: 3800,
//   },
//   {
//     name: "Sat",
//     visit: 3490,
//     click: 4300,
//   },
// ];

// const Chart = () => {
//   return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>Weekly Recap</h2>
//       <ResponsiveContainer width="100%" height="90%">
//         <LineChart
//           width={500}
//           height={300}
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
//           <Legend />
//           <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
//           <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

// export default Chart

"use client"

import styles from './chart.module.css'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data representing student activity over the week
const data = [
  {
    name: "Sun",
    completedLessons: 4,
    activeStudents: 2400,
  },
  {
    name: "Mon",
    completedLessons: 3,
    activeStudents: 1398,
  },
  {
    name: "Tue",
    completedLessons: 5,
    activeStudents: 3800,
  },
  {
    name: "Wed",
    completedLessons: 4,
    activeStudents: 3908,
  },
  {
    name: "Thu",
    completedLessons: 6,
    activeStudents: 4800,
  },
  {
    name: "Fri",
    completedLessons: 3,
    activeStudents: 3800,
  },
  {
    name: "Sat",
    completedLessons: 5,
    activeStudents: 4300,
  },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Learning Activity</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="completedLessons"
            stroke="#8884d8"
            strokeDasharray="5 5"
            name="Completed Lessons"
          />
          <Line
            type="monotone"
            dataKey="activeStudents"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
            name="Active Students"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
