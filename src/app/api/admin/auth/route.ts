import { NextRequest, NextResponse } from "next/server";

// Simple JWT-like token using base64 + timestamp signing.
// In production use a proper JWT library (e.g. jose) and store ADMIN_PASSWORD in env.
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "admin123";
const TOKEN_SECRET = process.env.TOKEN_SECRET ?? "portfolio-secret-change-this";

function createToken(payload: object): string {
  const data = JSON.stringify({ ...payload, iat: Date.now(), exp: Date.now() + 24 * 60 * 60 * 1000 });
  const encoded = Buffer.from(data).toString("base64url");
  const sig = Buffer.from(`${encoded}.${TOKEN_SECRET}`).toString("base64url").slice(0, 16);
  return `${encoded}.${sig}`;
}

export function verifyToken(token: string): { valid: boolean; payload?: Record<string, unknown> } {
  try {
    const [encoded, sig] = token.split(".");
    const expectedSig = Buffer.from(`${encoded}.${TOKEN_SECRET}`).toString("base64url").slice(0, 16);
    if (sig !== expectedSig) return { valid: false };
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString()) as Record<string, unknown>;
    if (typeof payload.exp === "number" && payload.exp < Date.now()) return { valid: false };
    return { valid: true, payload };
  } catch {
    return { valid: false };
  }
}

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();
    if (password !== ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Invalid password." }, { status: 401 });
    }
    const token = createToken({ role: "admin" });
    const res = NextResponse.json({ success: true });
    res.cookies.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return res;
  } catch {
    return NextResponse.json({ error: "Server error." }, { status: 500 });
  }
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete("admin_token");
  return res;
}
