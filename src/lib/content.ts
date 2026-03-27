import { readFile } from "fs/promises";
import { join } from "path";

const contentDir = join(process.cwd(), "content");

export async function loadContent<T = Record<string, unknown>>(
  filename: string
): Promise<T> {
  const raw = await readFile(join(contentDir, `${filename}.json`), "utf-8");
  return JSON.parse(raw) as T;
}
