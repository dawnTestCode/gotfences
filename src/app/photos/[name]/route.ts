import { crew_wire_jpg } from "@/lib/imgdata/crew-wire";
import { wire_fasten_jpg } from "@/lib/imgdata/wire-fasten";
import { fence_roll_jpg } from "@/lib/imgdata/fence-roll";

// Job photos are stored as base64 text modules (the GitHub connector push is
// UTF-8-only) and served from here as real .jpg responses.
const PHOTOS: Record<string, string> = {
  "crew-wire.jpg": crew_wire_jpg,
  "wire-fasten.jpg": wire_fasten_jpg,
  "fence-roll.jpg": fence_roll_jpg,
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params;
  const b64 = PHOTOS[name];
  if (!b64) {
    return new Response("Not found", { status: 404 });
  }
  const bytes = Buffer.from(b64, "base64");
  return new Response(bytes, {
    headers: {
      "Content-Type": "image/jpeg",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
