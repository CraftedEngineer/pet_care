import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "泡泡爪宠物洗护 | 专业猫狗洗护美容",
  description: "泡泡爪为猫咪和狗狗提供低应激洗护、造型修剪、皮毛养护和到店接送服务。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
