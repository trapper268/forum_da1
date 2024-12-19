import { NextResponse } from "next/server";

import User from "@/database/user.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import { UserSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const validateData = UserSchema.partial().safeParse({ email });

    if (!validateData.success)
      throw new ValidationError(validateData.error.flatten().fieldErrors);

    const user = await User.findOne({ email });
    if (!user) throw new NotFoundError("User");

    return NextResponse.json({ success: true, data: user }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}