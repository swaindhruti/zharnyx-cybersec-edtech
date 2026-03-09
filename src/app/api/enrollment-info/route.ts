import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { user } from "@/lib/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user?.id) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const { phone, city, studentType, preferredTrack, collegeName, enrollmentMessage } = body;

    await db
      .update(user)
      .set({
        phone: phone || null,
        city: city || null,
        studentType: studentType || null,
        preferredTrack: preferredTrack || null,
        collegeName: collegeName || null,
        enrollmentMessage: enrollmentMessage || null,
      })
      .where(eq(user.id, session.user.id));

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating enrollment info:", error);
    return NextResponse.json(
      { error: "Failed to update enrollment info" },
      { status: 500 }
    );
  }
}
