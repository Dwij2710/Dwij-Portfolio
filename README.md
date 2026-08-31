# Dwij Prajapati — AI & Backend Engineer Portfolio

A modern, high-performance portfolio engineered for an AI & Backend Systems specialist. Styled like a **systems console & telemetry readout** with real-time interactive neural mesh visuals, dual-theme support, case-study architecture modals, and functional contact transmission.

![Portfolio Banner](https://raw.githubusercontent.com/Dwij2710/Dwij-Portfolio/main/public/preview.png)

## Core Stack & Architecture
- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with semantic CSS custom properties
- **Animations & Interaction**: Framer Motion + HTML5 Interactive Neural Canvas
- **Icons**: Lucide Icons & Custom SVG components
- **Deployment Ready**: Optimized for Vercel, Netlify, or GitHub Pages

---

## Features

- **Interactive AI Neural Mesh Canvas**: Dynamic particle network with cursor gravitation and real-time node connections.
- **Dual Theme Support**: Dark Telemetry Console (`#0B0E13`) + Light Technical Blueprint (`#F6F8FA`) with `localStorage` persistence.
- **Architecture Deep-Dive Modals**: Detailed engineering breakdowns, system data flow, benchmark metrics, and source links for **FinSight AI** and **CompInsight AI**.
- **Expandable Telemetry Log**: Incident and engineering timeline for production work at InterviewGod.ai / Banao Technologies.
- **Interactive Contact Form**: Direct message composer with instant validation and mail client integration.
- **Downloadable Resume**: Built-in resume PDF integration in `public/Dwij_Prajapati_Resume.pdf`.

---

## Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dwij2710/Dwij-Portfolio.git
   cd Dwij-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5180` in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```
   Outputs production-ready static assets to `dist/`.

---

## Deployment Guide

### Option 1: Deploy on Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Select **"Import Git Repository"** and choose `Dwij2710/Dwij-Portfolio`.
3. Vercel automatically detects **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**. Your site will be live on a global CDN in ~30 seconds!

### Option 2: Deploy on Netlify
1. Go to [netlify.com](https://netlify.com) and choose **"Import from Git"**.
2. Connect your GitHub account and select `Dwij2710/Dwij-Portfolio`.
3. Set build command to `npm run build` and publish directory to `dist`.
4. Click **Deploy Site**.

---

## Content Customization
All personal details, skills, metrics, and project case studies are structured in a single file:
`src/lib/data.ts`
Modify this file to instantly update all sections of the site.
