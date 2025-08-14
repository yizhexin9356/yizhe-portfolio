# yizhe Xin — Portfolio (Next.js + TailwindCSS)

一个免费、可部署到 Vercel 的个人作品集网站。

## 本地运行
```bash
npm install
npm run dev
# 打开 http://localhost:3000
```

## 一键上线（推荐）
1. 把整个项目上传到 GitHub 仓库（例如 `yizhe-portfolio`）。
2. 打开 https://vercel.com 并使用 GitHub 登录。
3. 点击 **New Project** → 选择你的仓库 → 保持默认设置 → **Deploy**。
4. 部署成功后，可以在 Vercel 项目设置里绑定自定义域名。

## 自定义内容
- 修改 `app/page.tsx` 中的内容（项目、经历、技能）。
- 替换 `public/images/*.png` 为你的真实截图。
- 修改 `app/layout.tsx` 导航与页脚。
- 调整样式：`app/globals.css`、`tailwind.config.js`。

## 技术栈
- Next.js 14（App Router）
- TailwindCSS
