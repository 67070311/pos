import { ImageResponse } from "next/og";

export const alt =
  "SCAN SUNG POS ระบบ POS ร้านอาหารพร้อมระบบสั่งอาหารผ่าน QR Code";
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
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "72px",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #7437f2 0%, #5b21d8 55%, #22104f 100%)",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "820px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "34px",
              fontWeight: 700,
              letterSpacing: "5px",
              opacity: 0.88,
            }}
          >
            SCAN SUNG
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "18px",
              fontSize: "106px",
              fontWeight: 800,
              lineHeight: 0.95,
            }}
          >
            POS
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "30px",
              fontSize: "34px",
              fontWeight: 500,
              letterSpacing: "2px",
            }}
          >
            QR ORDER · WEB POS · 199 THB/MONTH
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "210px",
            height: "210px",
            borderRadius: "48px",
            background: "#ffffff",
            color: "#7437f2",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "84px",
            fontWeight: 800,
            boxShadow: "0 28px 80px rgba(0,0,0,0.24)",
          }}
        >
          QR
        </div>
      </div>
    ),
    size,
  );
}
