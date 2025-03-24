import { connectToDB } from "../../../lib/utils";
import { AiContent } from "@/app/lib/models";
import { NextResponse } from "next/server";
import { handleCors, corsHeaders } from "../../../lib/cors"


//✅ Handle CORS preflight
export const OPTIONS = async (req) => handleCors(req);

// ✅ GET blog by ID
export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const content = await AiContent.findById(params.id);

    if (!content) {
      return NextResponse.json({ error: "Content not found" }, {
        status: 404,
        headers: corsHeaders(),
      });
    }

    return NextResponse.json(content, {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Server error" }, {
      status: 500,
      headers: corsHeaders(),
    });
  }
};

// ✅ DELETE blog
export const DELETE = async (req, { params }) => {
  try {
    await connectToDB();
    await AiContent.findByIdAndDelete(params.id);
    return NextResponse.json({ message: "Deleted successfully" }, {
      status: 200,
      headers: corsHeaders(),
    });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, {
      status: 500,
      headers: corsHeaders(),
    });
  }
};