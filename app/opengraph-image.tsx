import { ImageResponse } from "next/og";

export const alt = "Mario Montano, senior full-stack engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#111018",
          color: "#f2eff3",
          padding: "72px 84px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 18,
              height: 18,
              display: "flex",
              background: "#f26f61",
            }}
          />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            Mario Montano
          </div>
        </div>

        <div
          style={{
            display: "flex",
            maxWidth: 980,
            fontSize: 76,
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
            fontWeight: 700,
          }}
        >
          Full-stack engineering for high-stakes systems.
        </div>

        <div
          style={{
            display: "flex",
            gap: 28,
            color: "#aaa5af",
            fontSize: 24,
          }}
        >
          <span>Healthcare platforms</span>
          <span>Workflow automation</span>
          <span>Technical leadership</span>
        </div>
      </div>
    ),
    size,
  );
}
