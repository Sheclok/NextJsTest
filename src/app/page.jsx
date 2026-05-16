import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Trang chính</h1>
      <p>Đây là trang chính. Bạn có thể vào trang đăng nhập bên dưới.</p>
      <Link href="/login" className="btn">Đi đến trang Login</Link>
    </main>
  );
}
