import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack не требует webpack конфигурации для SVG
  // SVG компоненты создаются вручную как React компоненты
};

export default nextConfig;
