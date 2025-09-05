import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #c0c0c0, #a9a9a9)", // silver gradient
        color: "#222",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Bebas Neue', Arial, sans-serif", // bold, sports-style font
        textAlign: "center",
      }}
    >
      <Head>
        <title>Breakaway Rush</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Logo */}
      <Image src="/logo.png" alt="Breakaway Rush" width={320} height={130} />

      {/* Header */}
      <h1
        style={{
          fontSize: "3rem",
          color: "#1a1a1a",
          marginTop: "1rem",
          letterSpacing: "2px",
          textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
        }}
      >
        BREAKAWAY RUSH – FIRST EDITION SEASON 0
      </h1>

      {/* Mint Counter (LED style scoreboard) */}
      <p
        style={{
          marginTop: "1rem",
          fontSize: "2.2rem",
          fontFamily: "'Orbitron', monospace", // digital scoreboard look
          fontWeight: "700",
          color: "#1e90ff", // blue LED text
          background: "#001f3f", // dark navy background
          padding: "0.75rem 1.5rem",
          borderRadius: "10px",
          display: "inline-block",
          boxShadow: "0px 0px 20px rgba(30, 144, 255, 0.9)", // neon blue glow
          border: "2px solid #1e90ff",
        }}
      >
        14 of 700 minted
      </p>

      {/* Break Button (buzzer style) */}
      <button
        style={{
          marginTop: "2rem",
          padding: "1rem 2.5rem",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#d62828",
          border: "3px solid #111",
          borderRadius: "12px",
          cursor: "pointer",
          textTransform: "uppercase",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.6), 0px 0px 20px rgba(214,40,40,0.9)",
          transition: "all 0.3s ease-in-out",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = "#ff0000";
          e.currentTarget.style.boxShadow =
            "0px 0px 30px rgba(255,0,0,1), 0px 0px 60px rgba(255,0,0,0.8)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = "#d62828";
          e.currentTarget.style.boxShadow =
            "0px 4px 10px rgba(0,0,0,0.6), 0px 0px 20px rgba(214,40,40,0.9)";
        }}
        onClick={() => alert("Break function will trigger minting here.")}
      >
        BREAK
      </button>
    </div>
  );
}
