import { User, AiContent } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};


export const fetchAiContents = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEMS_PER_PAGE = 2;

  try {
    await connectToDB();

    const count = await AiContent.countDocuments({ title: { $regex: regex } });

    const pageNum = Number(page) || 1;
    const aiContents = await AiContent.find({ title: { $regex: regex } })
      .limit(ITEMS_PER_PAGE)
      .skip(ITEMS_PER_PAGE * (pageNum - 1));

    return { count, aiContents };
  } catch (err) {
    console.error("Database error:", err.message);
    throw new Error("Failed to fetch AI content!");
  }
};


// Fetch a Single AI Content by ID
export const fetchAiContent = async (id) => {
  console.log(id);  // Optional for debugging
  try {
    connectToDB();
    const aiContent = await AiContent.findById(id);
    return aiContent;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch AI content!");
  }
};

// DUMMY DATA

export const cards = [
//   {
//     id: 1,
//     title: "Total Users",
//     number: 10.928,
//     change: 12,
//   },
//   {
//     id: 2,
//     title: "Stock",
//     number: 8.236,
//     change: -2,
//   },
//   {
//     id: 3,
//     title: "Revenue",
//     number: 6.642,
//     change: 18,
//   },
// ];
{
  title: "Active Students",
  number: 1500,
  change: 5, // 5% increase
},
{
  title: "New Enrollments",
  number: 250,
  change: -3, // 3% decrease
},
{
  title: "Courses Completed",
  number: 120,
  change: 10, // 10% increase
},
];