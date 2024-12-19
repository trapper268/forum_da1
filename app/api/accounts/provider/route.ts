import { NextResponse } from "next/server";

import Account from "@/database/account.model";
import handleError from "@/lib/handlers/error";
import { NotFoundError, ValidationError } from "@/lib/http-errors";
import { AccountSchema } from "@/lib/validation";

export async function POST(request: Request) {
  const { providerAccountId } = await request.json();

  try {
    const validateData = AccountSchema.partial().safeParse({
      providerAccountId,
    });

    if (!validateData.success)
      throw new ValidationError(validateData.error.flatten().fieldErrors);

    const account = await Account.findOne({ providerAccountId });
    if (!account) throw new NotFoundError("Account");

    return NextResponse.json({ success: true, data: account }, { status: 200 });
  } catch (error) {
    return handleError(error, "api") as APIErrorResponse;
  }
}
