'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const res = await fetch("../api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    if (res.ok) {
      setMessage("Form submitted successfully!");
      setName("");
      setEmail("");
      router.push("/users");

    } else {
      //setMessage("Failed to submit the form.");
    }
  }
    catch (error) {
      // Catch any network or response-related errors
      console.error("Error during form submission:", error.message);
      setMessage(error.message);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h1>Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
