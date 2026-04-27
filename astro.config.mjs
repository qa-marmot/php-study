// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// icu.dat (29.4 MiB) は Cloudflare Pages の 25 MiB 制限を超えるため、
// @php-wasm/web の動的 import("./shared/icu.dat") を CDN URL 文字列に差し替える。
// withIntl: false (デフォルト) の場合この URL は実際にはフェッチされない。
const phpWasmIcuCdnPlugin = {
  name: 'php-wasm-icu-cdn',
  transform(code, id) {
    if (!code.includes('icu.dat')) return;
    if (!id.includes('@php-wasm')) return;
    const transformed = code.replace(
      /\(await import\(["'][^"']*icu\.dat["']\)\)\.default/g,
      `'https://cdn.jsdelivr.net/npm/@php-wasm/web@3.1.20/shared/icu.dat'`,
    );
    if (transformed === code) return;
    return transformed;
  },
};

// 8.2 以外の PHP バージョン動的 import を即時リジェクトに差し替えて WASM ファイルを削減
const phpWasmVersionFilterPlugin = {
  name: 'php-wasm-version-filter',
  transform(code, id) {
    if (!id.includes('@php-wasm') || id.includes('web-8-2')) return;
    if (!code.includes('@php-wasm/web-')) return;
    let transformed = code;
    for (const ver of ['web-7-4', 'web-8-0', 'web-8-1', 'web-8-3', 'web-8-4', 'web-8-5']) {
      transformed = transformed.replace(
        new RegExp(`import\\(["']@php-wasm/${ver}["']\\)`, 'g'),
        `Promise.reject(new Error('Only PHP 8.2 is supported'))`,
      );
    }
    return transformed !== code ? transformed : undefined;
  },
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss(), phpWasmIcuCdnPlugin, phpWasmVersionFilterPlugin],
    optimizeDeps: {
      exclude: ['@php-wasm/web'],
    },
    assetsInclude: ['**/*.wasm'],
  },
});
