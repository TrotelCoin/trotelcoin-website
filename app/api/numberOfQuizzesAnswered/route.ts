import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest, res: NextResponse) {
  const { count, error } = await supabase
    .from("quizzes_answered")
    .select("*", { count: "exact", head: true });

  if (error) {
    return NextResponse.json(0, { status: 500 });
  }

  return NextResponse.json(count, {
    status: 200,
  });
}
