import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#f8f5ed",
          color: "#22201c",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            fontFamily: "Arial, sans-serif",
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#6f6a61",
          }}
        >
          <span>Consultant Plastic &amp; Cosmetic Surgeon</span>
          <span>Chennai, India</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1 }}>Dr. Dinesh Kumar</div>
          <div style={{ fontSize: 40, fontStyle: "italic", color: "#6f6a61", marginTop: 16 }}>
            Refined results. Natural confidence.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
