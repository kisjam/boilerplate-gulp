# Template v2.0.0
node.js - v16.17.1
npm - v8.19.2

* Gulp
* Sass
* Nunjucks
* Webpack
* iconfont
* image optimize

# Update
v2.0.0
- node.js、npm、及び関連パッケージの更新
- src/とdist/の一貫性を保つため、PDFや動画などのファイルをコピーするようにしました。
- src内の画像とNunjucksファイルを削除した際にdist側にも反映されるようにしました。
- IE11のサポート終了につきBabelでのトランスパイル終了
- gulpfileをCommonJSからESMへ移行
- htmlhintを導入しました。
- .editorconfigを追加
- 既存のjavascriptをtypescriptに書き換え


# 運用
dist/を直接触らない

# TODO
環境設定ファイル
	Prettier
		設定ファイルだけ

# Future update
Gulp以外の選択肢→Gulpが3年前で更新が止まっている。
それに伴い最近の環境に合わせたライブラリの対応や知見が目に見えて減ってきているので移行を検討
まずGulpで既存環境のアップデート、その後分岐させて11tyに置き換え

index.scssの自動生成
