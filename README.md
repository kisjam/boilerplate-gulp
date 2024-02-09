# boilerplate-gulp

node.js - v16.17.1
npm - v8.19

- Gulp
- Sass
- Nunjucks
- Webpack
- image optimize

## Sass

### /assets/sass/layouts/

ヘッダー・フッターなどのサイト全体に影響するレイアウト関係

### /assets/sass/pages/

ページ固有のスタイル

### /assets/sass/components/shared

基本ここに作る

### /assets/sass/components/\*\*

- .button-XXX, .title-XXX 等は増えてきた適当なタイミングで button/, title/等でまとめる
- 機能または役割（ event/, nav/, など）での分類を推奨する、粒度は考慮しない
- 探しやすくするのが目的なので接頭辞はフォルダ名と合ってる方が良い
- 厳密に運用するつもりはなく、LP なら全部 shared でいいし、別に 1,2 個しかない .button- をフォルダ分けしなくてもいい。
