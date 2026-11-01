import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

/**
 * Favicon tipográfico provisório ("LS" em texto puro, sem redesenhar o vetor do cliente).
 * Quando o cliente enviar o SVG oficial do monograma, substituir por `app/icon.svg`.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0B",
          border: "2px solid #D9A441",
          borderRadius: 6,
          color: "#F3EFE7",
          fontSize: 15,
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        LS
      </div>
    ),
    {
      ...size,
    }
  );
}

