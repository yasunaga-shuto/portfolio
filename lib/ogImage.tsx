import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_ALT = "Shuto Yasunaga — Freelance Full-Stack Engineer in Tokyo";

// next/og の既定フォントは日本語グリフを持たないので、画像内の文言は英語だけにしている
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 88px",
          background: "#0b1a36",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 32, color: "#a2b6da" }}>
          <span style={{ color: "#7db3ff" }}>$</span>
          <span style={{ marginLeft: 16 }}>whoami</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 96, fontWeight: 700, letterSpacing: "-0.02em" }}>Shuto Yasunaga</div>
          <div style={{ fontSize: 44, color: "#7db3ff" }}>Freelance Full-Stack Engineer · Tokyo</div>
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#c3d3ee" }}>
          Ruby on Rails / TypeScript / Next.js / AWS
        </div>
      </div>
    ),
    OG_IMAGE_SIZE,
  );
}
