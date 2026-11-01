import { ImageResponse } from "next/og";
import { siteContent } from "@/content/site";

export const alt = siteContent.meta.title;
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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(47, 143, 70, 0.25), transparent 55%), radial-gradient(circle at 15% 85%, rgba(217, 164, 65, 0.16), transparent 50%)",
          color: "#F3EFE7",
          padding: "64px 72px",
          border: "1px solid rgba(243, 239, 231, 0.12)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: 28,
                fontWeight: 800,
                letterSpacing: "0.18em",
                color: "#F3EFE7",
              }}
            >
              LUCAS STRECK
            </span>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.32em",
                color: "#D9A441",
                marginTop: 6,
              }}
            >
              FISIOTERAPIA
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgba(47, 143, 70, 0.6)",
              backgroundColor: "rgba(47, 143, 70, 0.16)",
              borderRadius: 999,
              padding: "10px 22px",
              fontSize: 18,
              color: "#F3EFE7",
            }}
          >
            Pelotas/RS · Fisioterapia Traumato-Esportiva
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "18px",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#F3EFE7",
            }}
          >
            <span>Da reabilitação à</span>
            <span
              style={{
                color: "#D9A441",
                fontStyle: "italic",
                textTransform: "none",
              }}
            >
              performance.
            </span>
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              color: "#A09C94",
              lineHeight: 1.4,
            }}
          >
            Do joelho à coluna, retorno seguro ao esporte e à vida · R. Padre Anchieta, 4708
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(243, 239, 231, 0.14)",
            paddingTop: 24,
            fontSize: 20,
            color: "#A09C94",
          }}
        >
          <span>@clinicalucasstreck</span>
          <span style={{ color: "#D9A441", fontWeight: 700 }}>
            Avaliação & Curso Presencial de Joelho
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

