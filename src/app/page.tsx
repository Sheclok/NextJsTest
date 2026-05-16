import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">
      <h1>Trang chính</h1>
      <p>Bạn đã tạo thành công dự án Next.js mới nhất (theo version latest trong package.json).</p>
      <Link href="/login" className="btn">Đi đến trang Login</Link>
    </main>
  );
}
