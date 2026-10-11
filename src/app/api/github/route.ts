import { NextRequest, NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers: Record<string, string> = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (GITHUB_TOKEN) {
  headers["Authorization"] = `Bearer ${GITHUB_TOKEN}`;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type");
  const username = searchParams.get("username") ?? "bensingh";

  try {
    if (type === "user") {
      const res = await fetch(`https://api.github.com/users/${username}`, {
        headers,
        next: { revalidate: 3600 }, // cache 1 hour
      });

      if (!res.ok) {
        return NextResponse.json(
          { error: `GitHub API error: ${res.status}` },
          { status: res.status }
        );
      }

      const data = await res.json();
      return NextResponse.json(data);
    }

    if (type === "repos") {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=public`,
        {
          headers,
          next: { revalidate: 3600 },
        }
      );

      if (!res.ok) {
        return NextResponse.json(
          { error: `GitHub API error: ${res.status}` },
          { status: res.status }
        );
      }

      const data = await res.json();
      return NextResponse.json(data);
    }

    return NextResponse.json({ error: "Invalid type parameter." }, { status: 400 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch GitHub data." },
      { status: 500 }
    );
  }
}
