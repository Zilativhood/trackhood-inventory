import { useState } from "react";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (
      username === "admin" &&
      password === "Vitaliz@trackhood"
    ) {
      setLoggedIn(true);
    } else {
      alert("Invalid login credentials");
    }
  };

  if (!loggedIn) {
    return (
      <div
        style={{
          fontFamily: "Arial",
          background: "#f4f7fb",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "350px",
            background: "white",
            padding: "30px",
            borderRadius: "12px",
            boxShadow: "0 0 15px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "#00bcd4",
            }}
          >
            Track Hood Inventory
          </h1>

          <p style={{ textAlign: "center" }}>
            Track Hood Limited
          </p>

          <form onSubmit={handleLogin}>
            <input
              name="username"
              placeholder="Username"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
              }}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "15px",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "20px",
                background: "#ff9800",
                color: "white",
                border: "none",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "Arial",
        minHeight: "100vh",
        background: "#eef2f7",
      }}
    >
      <div
        style={{
          background: "#00bcd4",
          padding: "20px",
          color: "white",
        }}
      >
        <h1>Track Hood Inventory Dashboard</h1>
      </div>

      <div
        style={{
          padding: "30px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Total Inventory</h2>
          <p>0 Devices</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Total Sales</h2>
          <p>0 Sales</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>Available Stock</h2>
          <p>0 Available</p>
        </div>
      </div>

      <div style={{ padding: "30px" }}>
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h2>System Features</h2>

          <ul>
            <li>Inventory Management</li>
            <li>Sales Recording</li>
            <li>IMEI Tracking</li>
            <li>QR & Barcode Scanning</li>
            <li>Excel Reports</li>
            <li>Email Notifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
