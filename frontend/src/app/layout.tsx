    // src/app/layout.tsx
    import type { Metadata } from "next";
    import { Inter } from "next/font/google";
    import "./globals.css";
    import ThemeRegistry from "@/theme/ThemeRegistry"; // 방금 만든 ThemeRegistry를 가져옵니다.

    const inter = Inter({ subsets: ["latin"] });

    export const metadata: Metadata = {
      title: "Project Synapse", // 프로젝트 이름으로 변경
      description: "A new journey with my brother", // 멋진 설명 추가
    };

    export default function RootLayout({
      children,
    }: Readonly<{
      children: React.ReactNode;
    }>) {
      return (
        <html lang="en">
          <body className={inter.className}>
            {/* ThemeRegistry로 children을 감싸줍니다. */}
            <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
          </body>
        </html>
      );
    }
    