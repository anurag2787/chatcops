import { segmentWords } from '../storage/memory-vectors.js';

const CJK_SCRIPTS = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}]/u;

export function tokenize(query: string): string[] {
  return segmentWords(query).filter((w) => w.length > 2 || CJK_SCRIPTS.test(w));
}
