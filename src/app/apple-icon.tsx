import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f4f1eb",
          color: "#171b13",
          fontSize: 96,
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
        }}
      >
        D
      </div>
    ),
    { ...size },
  );
}
