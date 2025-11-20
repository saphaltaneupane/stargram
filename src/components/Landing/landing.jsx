import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        navigate("/login");
      } catch (error) {
        console.error("Navigation error:", error);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black">
      <div>
        <img
          src="/circle.png"
          alt="Stargram Logo"
          className="mb-4 w-48 h-auto mx-auto"
        />
      </div>
    </div>
  );
};
