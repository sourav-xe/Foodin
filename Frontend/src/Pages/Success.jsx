import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  // Reservation data (you can replace with props/context/state)
  const reservation = {
    firstName: "sourav",
    lastName: "kumar",
    email: "simpleusenf@gmail.com",
    phone: "9856586585",
    date: "2025-08-29",
    time: "14:55",
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          navigate("/");
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #ffecd2, #fcb69f)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <img
          src="/sandwich.png"
          alt="success"
          style={{ width: "120px", marginBottom: "20px" }}
        />
        <h1
          style={{
            fontSize: "28px",
            marginBottom: "10px",
            color: "#ff6600",
          }}
        >
          🎉 Reservation Confirmed!
        </h1>
        <h2 style={{ marginBottom: "20px", color: "#333" }}>Foodin Restaurant</h2>

        <p style={{ fontSize: "16px", marginBottom: "20px", color: "#555" }}>
          Thank you <strong>{reservation.firstName} {reservation.lastName}</strong>,  
          your table reservation has been successfully received.
        </p>

        <div
          style={{
            textAlign: "left",
            margin: "0 auto 20px",
            background: "#f9f9f9",
            padding: "15px",
            borderRadius: "10px",
            fontSize: "15px",
            color: "#444",
            lineHeight: "1.6",
          }}
        >
          <p><strong>Email:</strong> {reservation.email}</p>
          <p><strong>Phone:</strong> {reservation.phone}</p>
          <p><strong>Date:</strong> {reservation.date}</p>
          <p><strong>Time:</strong> {reservation.time}</p>
        </div>

        <p style={{ marginBottom: "10px", fontSize: "16px", color: "#666" }}>
          Redirecting to Home in <strong>{countdown}</strong> seconds...
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 24px",
            border: "none",
            borderRadius: "8px",
            background: "#ff6600",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Success;
