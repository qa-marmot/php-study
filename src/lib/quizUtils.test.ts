import { describe, it, expect, vi, afterEach } from 'vitest';
import { shuffle, shuffleOptions, type Question } from './quizUtils';

// Fisher-Yates の呼び出し順に Math.random をモックして特定の並びを再現する
// 配列長4の場合、i=3,2,1 の順に3回呼ばれる
function mockShuffle4(r3: number, r2: number, r1: number) {
  vi.spyOn(Math, 'random')
    .mockReturnValueOnce(r3) // i=3: j=floor(r3*4)
    .mockReturnValueOnce(r2) // i=2: j=floor(r2*3)
    .mockReturnValueOnce(r1); // i=1: j=floor(r1*2)
}

const BASE_QUESTION: Question = {
  id: 'q001',
  chapterSlug: 'chapter-01',
  text: 'テスト問題',
  options: [
    { id: 'a', text: '選択肢A' },
    { id: 'b', text: '選択肢B' },
    { id: 'c', text: '選択肢C' },
    { id: 'd', text: '選択肢D' },
  ],
  correctId: 'b',
  explanation: '- B（正解）: Bが正解。 A（誤）: Aは誤り。 C・D（誤）: 誤り。',
};

afterEach(() => {
  vi.restoreAllMocks();
});

// ---------------------------------------------------------------------------
// shuffle
// ---------------------------------------------------------------------------
describe('shuffle', () => {
  it('元の配列を変更しない（イミュータブル）', () => {
    const original = ['a', 'b', 'c', 'd'];
    const snapshot = [...original];
    shuffle(original);
    expect(original).toEqual(snapshot);
  });

  it('全要素が保持される', () => {
    const arr = ['a', 'b', 'c', 'd'];
    const result = shuffle(arr);
    expect(result).toHaveLength(arr.length);
    expect([...result].sort()).toEqual([...arr].sort());
  });

  it('Math.random に従い正しく入れ替える（[a,b,c,d] → [b,a,c,d]）', () => {
    // i=3: j=3 keep, i=2: j=2 keep, i=1: j=0 swap(0,1)
    mockShuffle4(0.9, 0.9, 0.1);
    expect(shuffle(['a', 'b', 'c', 'd'])).toEqual(['b', 'a', 'c', 'd']);
  });

  it('要素が1つの配列はそのまま返す', () => {
    expect(shuffle(['only'])).toEqual(['only']);
  });
});

// ---------------------------------------------------------------------------
// shuffleOptions — 不変条件
// ---------------------------------------------------------------------------
describe('shuffleOptions — 不変条件', () => {
  it('選択肢IDは常に a,b,c,d の連番になる', () => {
    const result = shuffleOptions(BASE_QUESTION);
    expect(result.options.map((o) => o.id)).toEqual(['a', 'b', 'c', 'd']);
  });

  it('全選択肢テキストが保持される（欠損・重複なし）', () => {
    const result = shuffleOptions(BASE_QUESTION);
    const original = BASE_QUESTION.options.map((o) => o.text).sort();
    const got = result.options.map((o) => o.text).sort();
    expect(got).toEqual(original);
  });

  it('元の Question オブジェクトを変更しない（イミュータブル）', () => {
    const snapshot = JSON.parse(JSON.stringify(BASE_QUESTION));
    shuffleOptions(BASE_QUESTION);
    expect(BASE_QUESTION).toEqual(snapshot);
  });

  it('id・chapterSlug・text は変更されない', () => {
    const result = shuffleOptions(BASE_QUESTION);
    expect(result.id).toBe(BASE_QUESTION.id);
    expect(result.chapterSlug).toBe(BASE_QUESTION.chapterSlug);
    expect(result.text).toBe(BASE_QUESTION.text);
  });
});

// ---------------------------------------------------------------------------
// shuffleOptions — 正誤判定の正確性
// ---------------------------------------------------------------------------
describe('shuffleOptions — 正誤判定', () => {
  it('correctId は元の正解テキストを持つ選択肢のIDを指す（シャッフル後）', () => {
    // どんな並びになっても「選択肢B」が correctId のオプション
    const result = shuffleOptions(BASE_QUESTION);
    const correctOption = result.options.find((o) => o.id === result.correctId);
    expect(correctOption?.text).toBe('選択肢B');
  });

  it('B→A位置に移動したとき correctId が a になる', () => {
    // [a,b,c,d] → [b,a,c,d]: b が index0(A)、a が index1(B)
    mockShuffle4(0.9, 0.9, 0.1);
    const result = shuffleOptions(BASE_QUESTION); // correctId='b'
    expect(result.correctId).toBe('a');
  });

  it('シャッフルなし（同順）のとき correctId は変わらない', () => {
    // i=3: j=3, i=2: j=2, i=1: j=1 → 順番変化なし
    mockShuffle4(0.99, 0.99, 0.99);
    const result = shuffleOptions(BASE_QUESTION);
    expect(result.correctId).toBe('b');
  });
});

// ---------------------------------------------------------------------------
// shuffleOptions — 解説ラベルの更新
// ---------------------------------------------------------------------------
describe('shuffleOptions — 解説ラベル', () => {
  it('B→A位置に移動したとき解説の B（正解）が A（正解）に更新される', () => {
    // [a,b,c,d] → [b,a,c,d]
    mockShuffle4(0.9, 0.9, 0.1);
    const result = shuffleOptions(BASE_QUESTION);
    expect(result.explanation).toContain('A（正解）');
    expect(result.explanation).not.toContain('B（正解）');
  });

  it('A↔C の循環置換で二重置換が起きない', () => {
    // [a,b,c,d] → [c,b,a,d]: i=3 keep, i=2 swap(0,2), i=1 keep
    // labelMap: {c:'a', b:'b', a:'c', d:'d'}
    mockShuffle4(0.9, 0.1, 0.9);
    const q: Question = {
      ...BASE_QUESTION,
      correctId: 'a',
      explanation: '- A（正解）: 正解。 C（誤）: 誤り。',
    };
    const result = shuffleOptions(q);
    // A→C位置(c), C→A位置(a)
    expect(result.explanation).toBe('- C（正解）: 正解。 A（誤）: 誤り。');
    expect(result.correctId).toBe('c');
  });

  it('A・C（誤）のような複数ラベル参照が両方更新される', () => {
    // [a,b,c,d] → [c,b,a,d]: A→C, C→A
    mockShuffle4(0.9, 0.1, 0.9);
    const q: Question = {
      ...BASE_QUESTION,
      correctId: 'b',
      explanation: '- B（正解）: 正解。 A・C（誤）: 誤り。',
    };
    const result = shuffleOptions(q);
    expect(result.explanation).toContain('B（正解）');
    expect(result.explanation).toContain('C・A（誤）');
  });

  it('解説にラベル参照がない場合はそのまま', () => {
    const q: Question = {
      ...BASE_QUESTION,
      explanation: 'この問題はPHPの基本を問うものです。',
    };
    const result = shuffleOptions(q);
    expect(result.explanation).toBe('この問題はPHPの基本を問うものです。');
  });
});

// ---------------------------------------------------------------------------
// shuffleOptions — 選択肢数の違い
// ---------------------------------------------------------------------------
describe('shuffleOptions — 選択肢数の違い', () => {
  it('3択問題でもIDが a,b,c の連番になる', () => {
    const q: Question = {
      id: 'q999',
      chapterSlug: 'chapter-01',
      text: '3択問題',
      options: [
        { id: 'a', text: '選択肢A' },
        { id: 'b', text: '選択肢B' },
        { id: 'c', text: '選択肢C' },
      ],
      correctId: 'c',
      explanation: '- C（正解）: 正解。 A・B（誤）: 誤り。',
    };
    const result = shuffleOptions(q);
    expect(result.options.map((o) => o.id)).toEqual(['a', 'b', 'c']);
    expect(result.options).toHaveLength(3);
    expect(result.options.find((o) => o.id === result.correctId)?.text).toBe('選択肢C');
  });

  it('3択問題の解説にD（誤）があっても文字そのまま保持される（labelMapにない文字）', () => {
    // 3択なので labelMap は {a,b,c} のみ。解説に D（誤）があっても d は undefined → 元の D を返す
    const q: Question = {
      id: 'q998',
      chapterSlug: 'chapter-01',
      text: '3択問題',
      options: [
        { id: 'a', text: '選択肢A' },
        { id: 'b', text: '選択肢B' },
        { id: 'c', text: '選択肢C' },
      ],
      correctId: 'a',
      explanation: '- A（正解）: 正解。 B・C（誤）: 誤り。 D（誤）: 存在しない選択肢。',
    };
    const result = shuffleOptions(q);
    expect(result.explanation).toContain('D（誤）');
  });
});
