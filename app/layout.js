import "./globals.css";

export const metadata = {
  title: "鳄鱼骑自行车",
  description: "鳄鱼骑自行车的 SVG 动画，搭配红色发光太阳。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
