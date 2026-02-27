import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  headers: async () => [
    {
      // すべてのページに適用
      source: "/(.*)",
      headers: [
        {
          // 他のサイトがあなたのサイトをiframeで埋め込むのを防ぐ
          // → クリックジャッキング攻撃の防止
          key: "X-Frame-Options",
          value: "DENY",
        },
        {
          // ブラウザがファイルの種類を勝手に推測するのを防ぐ
          // → MIMEタイプスニッフィング攻撃の防止
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          // リンク先にあなたのサイトのURL情報が漏れるのを最小限にする
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
        {
          // ブラウザの危険な機能（カメラ・マイク・位置情報等）を無効化
          // → 学習サイトには不要な機能なのでブロック
          key: "Permissions-Policy",
          value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
        },
        {
          // XSS攻撃の追加防御層
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          // HTTPS接続を強制（一度HTTPSでアクセスしたら以降はHTTPS固定）
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
      ],
    },
  ],
};

export default nextConfig;
