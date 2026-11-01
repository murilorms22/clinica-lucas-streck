import fs from "node:fs";
import path from "node:path";

/**
 * Verifica no servidor (build/SSR) se um asset em `public/` já foi enviado pelo desenvolvedor.
 * Evita requisições 404/400 no console enquanto as fotos oficiais ainda não estão na pasta,
 * e ativa automaticamente `next/image` assim que o arquivo é adicionado em `public/images/`.
 */
export function hasPublicAsset(publicPath: string | null | undefined): boolean {
  if (!publicPath || !publicPath.startsWith("/")) {
    return false;
  }
  try {
    const cleanRelative = publicPath.replace(/^\/+/, "");
    const fullPath = path.join(process.cwd(), "public", cleanRelative);
    return fs.existsSync(fullPath);
  } catch {
    return false;
  }
}

