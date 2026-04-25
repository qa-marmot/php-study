export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  chapterSlug: string;
  text: string;
  options: Option[];
  correctId: string;
  explanation: string;
}

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function shuffleOptions(q: Question): Question {
  const shuffled = shuffle(q.options);
  const labels = q.options.map((_, i) => String.fromCharCode(97 + i));
  const labelMap: Record<string, string> = {};
  shuffled.forEach((opt, i) => { labelMap[opt.id] = labels[i]; });

  const explanation = q.explanation
    .replace(/([A-D])(?=[（・])/g, (_, c: string) => {
      const mapped = labelMap[c.toLowerCase()];
      return mapped ? `【${mapped.toUpperCase()}】` : c;
    })
    .replace(/【([A-D])】/g, '$1');

  return {
    ...q,
    options: shuffled.map((opt, i) => ({ id: labels[i], text: opt.text })),
    correctId: labelMap[q.correctId],
    explanation,
  };
}
