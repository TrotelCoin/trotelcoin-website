import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest, res: NextResponse) {
  const { data, error } = await supabase
    .from("learners")
    .select("total_rewards_pending");

  if (error) {
    return NextResponse.json(0, { status: 500 });
  }

  let sum: number = 0;

  if (data.length > 0) {
    data.forEach((userRewardsPending) => {
      sum += userRewardsPending.total_rewards_pending;
    });
  }

  return NextResponse.json(sum, {
    status: 200,
  });
}
