export type Section = {
  id: string;
  title: string;
  subsections?: { id: string; title: string }[];
};

export type Chapter = {
  chapter: number;
  phase: string;
  title: string;
  slug: string;
  sections: Section[];
};

export const curriculum: Chapter[] = [
  {
    chapter: 1,
    phase: '第1フェーズ',
    title: 'イントロダクション',
    slug: 'chapter-01',
    sections: [
      {
        id: '1-1',
        title: 'PHPとWebアプリ',
        subsections: [
          { id: '1-1-1', title: 'クライアント／サーバー間の通信' },
          { id: '1-1-2', title: '静的なページと動的なページ' },
          { id: '1-1-3', title: 'クライアントサイド技術とサーバーサイド技術' },
        ],
      },
      { id: '1-2', title: 'サーバーサイド技術におけるPHPの位置付け' },
      {
        id: '1-3',
        title: 'PHP環境を設定するための手順',
        subsections: [
          { id: '1-3-1', title: 'PHPプログラミングに必要なソフトウェア' },
          { id: '1-3-2', title: 'XAMPPのインストール' },
          { id: '1-3-3', title: 'Visual Studio Codeのインストール' },
          { id: '1-3-4', title: 'サンプル実行のための準備' },
        ],
      },
      {
        id: '1-4',
        title: 'PHPの基本構文',
        subsections: [
          { id: '1-4-1', title: '基本的なアプリの作成' },
          { id: '1-4-2', title: '拡張子は「.php」が基本' },
          { id: '1-4-3', title: '文字コードの設定' },
          { id: '1-4-4', title: '改行コードの設定' },
          { id: '1-4-5', title: 'PHPはインタプリター型の言語' },
          { id: '1-4-6', title: 'PHPはHTML埋め込み型言語' },
          { id: '1-4-7', title: '文を区切るのはセミコロン（;）' },
          { id: '1-4-8', title: '大文字／小文字は区別しない' },
          { id: '1-4-9', title: 'コメントは開発者のための備忘録' },
        ],
      },
    ],
  },
  {
    chapter: 2,
    phase: '第1フェーズ',
    title: 'PHPの基本',
    slug: 'chapter-02',
    sections: [
      {
        id: '2-1',
        title: '変数',
        subsections: [
          { id: '2-1-1', title: '変数の宣言' },
          { id: '2-1-2', title: '変数の命名規則' },
          { id: '2-1-3', title: 'より良い識別子のためのルール' },
          { id: '2-1-4', title: '補足 可変変数' },
        ],
      },
      {
        id: '2-2',
        title: '定数',
        subsections: [
          { id: '2-2-1', title: '定数の基本' },
          { id: '2-2-2', title: '定数のルール' },
          { id: '2-2-3', title: '補足 define関数' },
          { id: '2-2-4', title: '定義済みの定数' },
        ],
      },
      {
        id: '2-3',
        title: 'データ型',
        subsections: [
          { id: '2-3-1', title: '論理リテラル（bool）' },
          { id: '2-3-2', title: '整数リテラル（int）' },
          { id: '2-3-3', title: '浮動小数点数リテラル（float）' },
          { id: '2-3-4', title: '文字列リテラル' },
          { id: '2-3-5', title: 'シングルクォートとダブルクォートの違い' },
          { id: '2-3-6', title: 'ヒアドキュメント' },
          { id: '2-3-7', title: 'ヌル（null）' },
        ],
      },
      {
        id: '2-4',
        title: '配列',
        subsections: [
          { id: '2-4-1', title: '配列の基本' },
          { id: '2-4-2', title: '補足 配列の内容を確認する' },
          { id: '2-4-3', title: '連想配列の基本' },
          { id: '2-4-4', title: '多次元配列' },
          { id: '2-4-5', title: '補足 通常配列と連想配列の関係' },
        ],
      },
      {
        id: '2-5',
        title: '型の相互変換',
        subsections: [
          { id: '2-5-1', title: '暗黙的な変換' },
          { id: '2-5-2', title: '明示的な変換（キャスト）' },
          { id: '2-5-3', title: '補足 文字列→数値の型キャスト' },
        ],
      },
    ],
  },
  {
    chapter: 3,
    phase: '第2フェーズ',
    title: '演算子',
    slug: 'chapter-03',
    sections: [
      {
        id: '3-1',
        title: '代数演算子',
        subsections: [
          { id: '3-1-1', title: '文字列混在の演算' },
          { id: '3-1-2', title: '加算子（++）／減算子（--）' },
          { id: '3-1-3', title: 'マジカルインクリメント' },
          { id: '3-1-4', title: '浮動小数点数の演算に注意' },
          { id: '3-1-5', title: '配列の結合' },
        ],
      },
      {
        id: '3-2',
        title: '代入演算子',
        subsections: [
          { id: '3-2-1', title: '値による代入と参照による代入' },
          { id: '3-2-2', title: '分割代入' },
        ],
      },
      {
        id: '3-3',
        title: '比較演算子',
        subsections: [
          { id: '3-3-1', title: '文字列混在の比較' },
          { id: '3-3-2', title: '厳密な等価演算子（===）' },
          { id: '3-3-3', title: '浮動小数点数の比較' },
          { id: '3-3-4', title: '配列の比較' },
          { id: '3-3-5', title: '条件演算子（?:）' },
        ],
      },
      {
        id: '3-4',
        title: '論理演算子',
        subsections: [{ id: '3-4-1', title: 'ショートカット演算（短絡演算）' }],
      },
      {
        id: '3-5',
        title: 'ビット演算子',
        subsections: [
          { id: '3-5-1', title: 'ビット論理演算子' },
          { id: '3-5-2', title: 'ビットシフト演算子' },
          { id: '3-5-3', title: '応用 ビットフィールドによるフラグ管理' },
        ],
      },
      {
        id: '3-6',
        title: 'その他の演算子',
        subsections: [
          { id: '3-6-1', title: '文字列演算子' },
          { id: '3-6-2', title: '実行演算子' },
          { id: '3-6-3', title: 'エラー制御演算子' },
        ],
      },
      {
        id: '3-7',
        title: '演算子の優先順位と結合則',
        subsections: [
          { id: '3-7-1', title: '優先順位' },
          { id: '3-7-2', title: '結合則' },
        ],
      },
    ],
  },
  {
    chapter: 4,
    phase: '第2フェーズ',
    title: '制御構文',
    slug: 'chapter-04',
    sections: [
      {
        id: '4-1',
        title: '条件分岐',
        subsections: [
          { id: '4-1-1', title: 'if命令 —— 単純分岐' },
          { id: '4-1-2', title: 'if命令 —— 多岐分岐' },
          { id: '4-1-3', title: 'if命令 —— 入れ子構造' },
          { id: '4-1-4', title: '補足 中カッコは省略可能' },
          { id: '4-1-5', title: '条件式を指定する場合の注意点' },
          { id: '4-1-6', title: '補足 if命令によるコメントアウト' },
          { id: '4-1-7', title: 'switch命令 —— 多岐分岐' },
          { id: '4-1-8', title: '補足 switch命令の判定方法' },
          { id: '4-1-9', title: '値を返す新しい「switch」—— match式 8.0' },
        ],
      },
      {
        id: '4-2',
        title: '繰り返し処理',
        subsections: [
          { id: '4-2-1', title: 'while／do〜while命令' },
          { id: '4-2-2', title: '補足 無限ループ' },
          { id: '4-2-3', title: 'for命令' },
          { id: '4-2-4', title: '補足 カンマ演算子' },
          { id: '4-2-5', title: 'foreach命令' },
          { id: '4-2-6', title: '値変数の参照渡し' },
          { id: '4-2-7', title: 'foreach命令での分割代入' },
        ],
      },
      {
        id: '4-3',
        title: 'ループの制御',
        subsections: [
          { id: '4-3-1', title: 'break命令' },
          { id: '4-3-2', title: 'continue命令' },
          { id: '4-3-3', title: '入れ子のループを中断／スキップする' },
          { id: '4-3-4', title: '補足 switchブロック配下のcontinue命令' },
        ],
      },
      {
        id: '4-4',
        title: '制御命令のその他の話題',
        subsections: [
          { id: '4-4-1', title: 'goto命令' },
          { id: '4-4-2', title: 'スクリプトブロックと固定テンプレート' },
          { id: '4-4-3', title: '補足 制御命令の別構文' },
        ],
      },
    ],
  },
  {
    chapter: 5,
    phase: '第3フェーズ',
    title: '組み込み関数',
    slug: 'chapter-05',
    sections: [
      {
        id: '5-1',
        title: '関数の基本',
        subsections: [
          { id: '5-1-1', title: '関数の呼び出し' },
          { id: '5-1-2', title: '組み込み関数' },
        ],
      },
      {
        id: '5-2',
        title: '文字列関数',
        subsections: [
          { id: '5-2-1', title: 'mb_strlen関数' },
          { id: '5-2-2', title: 'mb_convert_case関数' },
          { id: '5-2-3', title: 'mb_substr関数' },
          { id: '5-2-4', title: 'mb_strstr関数' },
          { id: '5-2-5', title: 'str_replace関数' },
          { id: '5-2-6', title: 'explode関数' },
          { id: '5-2-7', title: 'mb_strpos／mb_strrpos関数' },
          { id: '5-2-8', title: 'mb_substr_count関数' },
          { id: '5-2-9', title: 'str_contains / str_starts_with / str_ends_with関数 8.0' },
          { id: '5-2-10', title: 'trim / ltrim / rtrim関数' },
          { id: '5-2-11', title: 'printf関数' },
          { id: '5-2-12', title: 'mb_convert_kana関数' },
          { id: '5-2-13', title: 'mb_convert_encoding関数' },
          { id: '5-2-14', title: 'mb_send_mail関数' },
        ],
      },
      {
        id: '5-3',
        title: '配列関数',
        subsections: [
          { id: '5-3-1', title: 'count関数' },
          { id: '5-3-2', title: 'array_merge関数' },
          { id: '5-3-3', title: 'implode関数' },
          { id: '5-3-4', title: 'array_push / array_pop / array_shift / array_unshift関数' },
          { id: '5-3-5', title: '補足 スタックとキュー' },
          { id: '5-3-6', title: 'array_splice関数' },
          { id: '5-3-7', title: 'array_slice関数' },
          { id: '5-3-8', title: 'array_search関数' },
          { id: '5-3-9', title: 'in_array関数' },
          { id: '5-3-10', title: 'sort関数' },
          { id: '5-3-11', title: 'usort関数' },
          { id: '5-3-12', title: 'array_walk関数' },
          { id: '5-3-13', title: 'array_map関数' },
          { id: '5-3-14', title: 'array_filter関数' },
          { id: '5-3-15', title: 'array_reduce関数' },
        ],
      },
      {
        id: '5-4',
        title: '正規表現（PCRE）関数',
        subsections: [
          { id: '5-4-1', title: '正規表現の基本' },
          { id: '5-4-2', title: '正規表現パターンを記述する際の注意点' },
          { id: '5-4-3', title: 'preg_match関数' },
          { id: '5-4-4', title: 'preg_match_all関数' },
          { id: '5-4-5', title: 'preg_replace関数' },
          { id: '5-4-6', title: 'preg_replace_callback関数' },
          { id: '5-4-7', title: 'preg_split関数' },
          { id: '5-4-8', title: '正規表現パターンの修飾子' },
          { id: '5-4-9', title: '例 正規表現による検索' },
        ],
      },
      {
        id: '5-5',
        title: 'ファイルシステム関数',
        subsections: [
          { id: '5-5-1', title: '例 テキストファイルへの書き込み' },
          { id: '5-5-2', title: 'fopen / fclose関数' },
          { id: '5-5-3', title: 'エラー制御演算子' },
          { id: '5-5-4', title: 'fwrite関数' },
          { id: '5-5-5', title: 'flock関数' },
          { id: '5-5-6', title: '例 fgetcsv関数' },
          { id: '5-5-7', title: '例 fgets / file関数' },
          { id: '5-5-8', title: 'ファイルシステム関数の設定パラメーター' },
        ],
      },
      {
        id: '5-6',
        title: 'その他の関数',
        subsections: [
          { id: '5-6-1', title: '数学関数' },
          { id: '5-6-2', title: 'unset関数' },
          { id: '5-6-3', title: 'is_xxxxx関数' },
        ],
      },
    ],
  },
  {
    chapter: 6,
    phase: '第3フェーズ',
    title: 'ユーザー定義関数',
    slug: 'chapter-06',
    sections: [
      {
        id: '6-1',
        title: 'ユーザー定義関数とは？',
        subsections: [
          { id: '6-1-1', title: 'ユーザー定義関数の基本' },
          { id: '6-1-2', title: '関数名' },
          { id: '6-1-3', title: '仮引数と実引数' },
          { id: '6-1-4', title: '戻り値' },
          { id: '6-1-5', title: '引数／戻り値の型宣言' },
          { id: '6-1-6', title: '複合的な型宣言' },
          { id: '6-1-7', title: 'スクリプトの外部化' },
          { id: '6-1-8', title: '補足 関数を定義する位置' },
        ],
      },
      {
        id: '6-2',
        title: '変数の有効範囲（スコープ）',
        subsections: [
          { id: '6-2-1', title: 'グローバル変数とローカル変数' },
          { id: '6-2-2', title: 'global命令' },
          { id: '6-2-3', title: 'static命令' },
          { id: '6-2-4', title: 'インクルードファイルのスコープ' },
          { id: '6-2-5', title: '補足 unset関数の挙動' },
        ],
      },
      {
        id: '6-3',
        title: '引数のさまざまな記法',
        subsections: [
          { id: '6-3-1', title: '引数の既定値' },
          { id: '6-3-2', title: '引数の参照渡し' },
          { id: '6-3-3', title: '名前付き引数 8.0' },
          { id: '6-3-4', title: '可変長引数の関数' },
          { id: '6-3-5', title: '例 可変長引数と通常の引数の混在' },
          { id: '6-3-6', title: '例 可変長引数で「1個以上の引数を渡す方法」' },
          { id: '6-3-7', title: '「...」演算子による引数のアンパック' },
        ],
      },
      {
        id: '6-4',
        title: '関数呼び出しと戻り値',
        subsections: [
          { id: '6-4-1', title: '複数の戻り値' },
          { id: '6-4-2', title: '再帰関数' },
          { id: '6-4-3', title: '可変関数' },
          { id: '6-4-4', title: '無名関数（クロージャー）' },
          { id: '6-4-5', title: 'use命令' },
          { id: '6-4-6', title: 'アロー関数 7.4' },
        ],
      },
      {
        id: '6-5',
        title: 'ジェネレーター',
        subsections: [
          { id: '6-5-1', title: '例 素数を求めるジェネレーター' },
          { id: '6-5-2', title: 'ジェネレーターの結果を取得する' },
          { id: '6-5-3', title: '一部の処理を他のジェネレーターに委譲する' },
        ],
      },
    ],
  },
  {
    chapter: 7,
    phase: '第3フェーズ',
    title: '標準クラスライブラリ',
    slug: 'chapter-07',
    sections: [
      {
        id: '7-1',
        title: 'オブジェクト指向プログラミングの基本',
        subsections: [
          { id: '7-1-1', title: 'クラスと関数／変数' },
          { id: '7-1-2', title: 'クラスとオブジェクトの関係' },
          { id: '7-1-3', title: 'インスタンス化とメンバーの呼び出し' },
          { id: '7-1-4', title: '静的メソッド／静的プロパティ' },
        ],
      },
      {
        id: '7-2',
        title: 'DateTimeクラス',
        subsections: [
          { id: '7-2-1', title: 'DateTimeオブジェクトの生成' },
          { id: '7-2-2', title: 'formatメソッド' },
          { id: '7-2-3', title: 'createFromFormatメソッド' },
          { id: '7-2-4', title: 'add / subメソッド' },
          { id: '7-2-5', title: 'diffメソッド' },
          { id: '7-2-6', title: '補足 日付／時刻関数' },
        ],
      },
      {
        id: '7-3',
        title: 'DirectoryIteratorクラス',
        subsections: [
          { id: '7-3-1', title: 'フォルダーを開く' },
          { id: '7-3-2', title: 'フォルダー配下の要素を順に取得する' },
          { id: '7-3-3', title: 'ファイル情報を取得する' },
        ],
      },
      {
        id: '7-4',
        title: '外部ライブラリの活用 —— Composer',
        subsections: [
          { id: '7-4-1', title: 'Composerのインストール' },
          { id: '7-4-2', title: 'ライブラリのインストール' },
          { id: '7-4-3', title: 'composerコマンドのその他のサブコマンド' },
        ],
      },
      {
        id: '7-5',
        title: 'HTTPクライアント Guzzle',
        subsections: [
          { id: '7-5-1', title: 'HTTP通信の基本' },
          { id: '7-5-2', title: 'HTTP POSTによる通信' },
          { id: '7-5-3', title: '例 JSONデータを取得する' },
        ],
      },
    ],
  },
  {
    chapter: 8,
    phase: '第4フェーズ',
    title: 'リクエスト情報',
    slug: 'chapter-08',
    sections: [
      {
        id: '8-1',
        title: 'リクエスト情報',
        subsections: [
          { id: '8-1-1', title: 'HTTP通信の確認' },
          { id: '8-1-2', title: 'HTTPメソッドとHTTPステータス' },
          { id: '8-1-3', title: 'スーパーグローバル変数' },
        ],
      },
      {
        id: '8-2',
        title: 'ポストデータ —— $_POST',
        subsections: [
          { id: '8-2-1', title: '例 ポストデータを取得する' },
          { id: '8-2-2', title: 'エスケープ処理の必要性' },
          { id: '8-2-3', title: '例 複数の値を持つ要素にアクセスする' },
        ],
      },
      {
        id: '8-3',
        title: 'クエリ情報 —— $_GET',
        subsections: [
          { id: '8-3-1', title: '例 クエリ情報を取得する' },
          { id: '8-3-2', title: '例 ハイパーリンク経由で値を受け渡しする' },
          { id: '8-3-3', title: 'ポストデータとクエリ情報' },
        ],
      },
      {
        id: '8-4',
        title: 'ヘッダー情報 —— $_SERVER',
        subsections: [
          { id: '8-4-1', title: 'ヘッダー情報の種類' },
          { id: '8-4-2', title: 'ヘッダー情報の利用方法' },
          { id: '8-4-3', title: '例 リクエストヘッダーを取得する' },
          { id: '8-4-4', title: '補足 レスポンスヘッダーを設定する① —— リダイレクト' },
          { id: '8-4-5', title: '補足 レスポンスヘッダーを設定する② —— その他の用法' },
        ],
      },
      { id: '8-5', title: 'サーバー環境変数 —— $_ENV' },
      {
        id: '8-6',
        title: 'クッキー情報 —— $_COOKIE',
        subsections: [
          { id: '8-6-1', title: '例 クッキーの基本的な読み書き' },
          { id: '8-6-2', title: 'クッキー授受の仕組み' },
        ],
      },
      {
        id: '8-7',
        title: 'セッション情報 —— $_SESSION',
        subsections: [
          { id: '8-7-1', title: '例 基本的なセッション情報の読み書き' },
          { id: '8-7-2', title: 'セッションの仕組み' },
          { id: '8-7-3', title: 'セッションを破棄する' },
          { id: '8-7-4', title: 'セッション関連の設定パラメーター' },
        ],
      },
      {
        id: '8-8',
        title: 'アップロード処理の実装 —— $_FILES',
        subsections: [
          { id: '8-8-1', title: '例 画像ファイルのアップロード' },
          { id: '8-8-2', title: '入力フォームでの注意点' },
          { id: '8-8-3', title: 'アップロードの実装処理' },
          { id: '8-8-4', title: 'アップロードのエラー処理' },
          { id: '8-8-5', title: 'アップロード関連の設定パラメーター' },
        ],
      },
    ],
  },
  {
    chapter: 9,
    phase: '第5フェーズ',
    title: 'データベース連携',
    slug: 'chapter-09',
    sections: [
      {
        id: '9-1',
        title: 'データベースの種類',
        subsections: [{ id: '9-1-1', title: 'リレーショナルデータベースの種類' }],
      },
      {
        id: '9-2',
        title: 'データベース操作の基本',
        subsections: [
          { id: '9-2-1', title: 'MariaDB monitorの使い方' },
          { id: '9-2-2', title: 'SQLの基本' },
        ],
      },
      {
        id: '9-3',
        title: 'データベース抽象化レイヤー',
        subsections: [{ id: '9-3-1', title: 'PDO（PHP Data Objects）' }],
      },
      {
        id: '9-4',
        title: 'データベースへの接続',
        subsections: [
          { id: '9-4-1', title: '接続と切断' },
          { id: '9-4-2', title: '例外処理の基本 —— try〜catch〜finally命令' },
          { id: '9-4-3', title: '接続スクリプトの外部化' },
          { id: '9-4-4', title: '接続オプション' },
        ],
      },
      {
        id: '9-5',
        title: 'SQLクエリの発行',
        subsections: [
          { id: '9-5-1', title: '例 入力値を基にデータベースに登録する' },
          { id: '9-5-2', title: '名前付きパラメーターと名前なしパラメーター' },
          { id: '9-5-3', title: 'オートインクリメント値を取得する' },
        ],
      },
      {
        id: '9-6',
        title: '結果セットの取得',
        subsections: [
          { id: '9-6-1', title: 'フェッチメソッド' },
          { id: '9-6-2', title: 'フェッチモード' },
        ],
      },
      {
        id: '9-7',
        title: 'パラメーター値のバインド',
        subsections: [
          { id: '9-7-1', title: 'パラメーターのデータ型を宣言する —— バイナリデータの操作' },
          { id: '9-7-2', title: 'bindValueメソッドとbindParamメソッド' },
        ],
      },
      {
        id: '9-8',
        title: 'トランザクション処理',
        subsections: [{ id: '9-8-1', title: 'トランザクションの活用' }],
      },
    ],
  },
  {
    chapter: 10,
    phase: '第6フェーズ',
    title: 'オブジェクト指向構文',
    slug: 'chapter-10',
    sections: [
      {
        id: '10-1',
        title: 'クラスの定義',
        subsections: [
          { id: '10-1-1', title: '最も簡単なクラス' },
          { id: '10-1-2', title: 'プロパティ' },
          { id: '10-1-3', title: 'メソッド' },
          { id: '10-1-4', title: 'コンストラクター' },
          { id: '10-1-5', title: 'デストラクター' },
          { id: '10-1-6', title: '静的メソッド' },
          { id: '10-1-7', title: '静的プロパティ' },
          { id: '10-1-8', title: 'クラス定数' },
        ],
      },
      {
        id: '10-2',
        title: 'カプセル化',
        subsections: [
          { id: '10-2-1', title: 'アクセス修飾子' },
          { id: '10-2-2', title: 'アクセサーメソッド' },
        ],
      },
      {
        id: '10-3',
        title: '継承',
        subsections: [
          { id: '10-3-1', title: '継承の基本' },
          { id: '10-3-2', title: 'メソッドのオーバーライド' },
          { id: '10-3-3', title: 'スーパークラスのメソッドを呼び出す —— parentキーワード①' },
          { id: '10-3-4', title: 'スーパークラスのコンストラクターを呼び出す —— parentキーワード②' },
          { id: '10-3-5', title: 'オーバーライドの禁止 —— final修飾子' },
          { id: '10-3-6', title: '委譲' },
          { id: '10-3-7', title: '遅延静的束縛' },
        ],
      },
      {
        id: '10-4',
        title: 'ポリモーフィズム',
        subsections: [
          { id: '10-4-1', title: '抽象メソッド' },
          { id: '10-4-2', title: 'インターフェイス' },
          { id: '10-4-3', title: 'instanceof演算子' },
          { id: '10-4-4', title: '無名クラス' },
        ],
      },
      {
        id: '10-5',
        title: 'トレイト',
        subsections: [
          { id: '10-5-1', title: 'トレイトの基本' },
          { id: '10-5-2', title: 'トレイトと多重継承' },
          { id: '10-5-3', title: '例 アクセサーメソッドの実装' },
          { id: '10-5-4', title: '名前競合時の挙動' },
        ],
      },
      {
        id: '10-6',
        title: 'オブジェクトの操作',
        subsections: [
          { id: '10-6-1', title: 'オブジェクトの代入' },
          { id: '10-6-2', title: 'オブジェクトの比較' },
          { id: '10-6-3', title: 'オブジェクトの反復処理' },
          { id: '10-6-4', title: '例 反復処理のカスタマイズ' },
          { id: '10-6-5', title: '例 素数を求めるイテレーター' },
        ],
      },
      {
        id: '10-7',
        title: '例外処理',
        subsections: [
          { id: '10-7-1', title: '例外クラスの型' },
          { id: '10-7-2', title: '例外をスローする —— throw命令' },
          { id: '10-7-3', title: '例外をスローする場合の注意点' },
          { id: '10-7-4', title: 'エラー報告の処理' },
          { id: '10-7-5', title: 'スタックトレース情報' },
          { id: '10-7-6', title: '独自の例外クラス' },
        ],
      },
      {
        id: '10-8',
        title: 'マジックメソッド',
        subsections: [
          { id: '10-8-1', title: '未定義のプロパティを処理する① —— __get / __setメソッド' },
          { id: '10-8-2', title: '未定義のプロパティを処理する② —— __isset / __unsetメソッド' },
          { id: '10-8-3', title: '未定義のメソッドを処理する —— __call / __callStaticメソッド' },
          { id: '10-8-4', title: 'オブジェクトの文字列表現を規定する —— __toStringメソッド' },
          { id: '10-8-5', title: 'オブジェクトを関数として実行する —— __invokeメソッド' },
          { id: '10-8-6', title: 'オブジェクトの複製方法をカスタマイズする —— __cloneメソッド' },
          { id: '10-8-7', title: 'デバッグ情報をカスタマイズする —— __debugInfoメソッド' },
        ],
      },
      {
        id: '10-9',
        title: '名前空間',
        subsections: [
          { id: '10-9-1', title: '名前空間の基本' },
          { id: '10-9-2', title: '名前の記法と名前解決のルール' },
          { id: '10-9-3', title: 'インポート' },
        ],
      },
      {
        id: '10-10',
        title: 'クラスの自動ローディング',
        subsections: [
          { id: '10-10-1', title: 'spl_autoload_register関数' },
          { id: '10-10-2', title: 'spl_autoload_register関数の自動呼び出し' },
          { id: '10-10-3', title: '補足 Composerによる自動ローディングの実装' },
        ],
      },
    ],
  },
  {
    chapter: 11,
    phase: '第7フェーズ',
    title: '高度なプログラミング',
    slug: 'chapter-11',
    sections: [
      {
        id: '11-1',
        title: '属性 8.0',
        subsections: [
          { id: '11-1-1', title: '属性の基本構文' },
          { id: '11-1-2', title: '属性の自作' },
          { id: '11-1-3', title: '補足 リフレクションの主なメソッド' },
        ],
      },
      {
        id: '11-2',
        title: 'セキュリティ対策',
        subsections: [
          { id: '11-2-1', title: 'クロスサイトスクリプティング' },
          { id: '11-2-2', title: 'SQLインジェクション' },
          { id: '11-2-3', title: 'クロスサイトリクエストフォージェリ' },
          { id: '11-2-4', title: 'パストラバーサル' },
          { id: '11-2-5', title: 'メールヘッダーインジェクション' },
          { id: '11-2-6', title: '補足 php.iniによる予防' },
          { id: '11-2-7', title: 'その他の攻撃と予防策' },
        ],
      },
      {
        id: '11-3',
        title: 'ドキュメンテーションコメント',
        subsections: [
          { id: '11-3-1', title: 'ドキュメンテーションコメントの例' },
          { id: '11-3-2', title: 'ドキュメントの生成' },
        ],
      },
      {
        id: '11-4',
        title: 'VSCode + PHP Debug拡張によるデバッグ',
        subsections: [
          { id: '11-4-1', title: 'デバッグ機能の有効化' },
          { id: '11-4-2', title: 'デバッグの実行' },
        ],
      },
    ],
  },
];
