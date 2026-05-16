"use client";

import { useState } from "react";

export default function LoginPage() {
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    setMessage(`Đăng nhập thành công với email: ${email}`);
  }

  return (
    <main className="container">
      <h1>Đăng nhập</h1>
      <form onSubmit={handleSubmit} className="card">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" />

        <label htmlFor="password">Mật khẩu</label>
        <input id="password" name="password" type="password" required placeholder="••••••••" />

        <button type="submit" className="btn">Đăng nhập</button>
      </form>
      {message ? <p className="success">{message}</p> : null}
    </main>
  );
}
