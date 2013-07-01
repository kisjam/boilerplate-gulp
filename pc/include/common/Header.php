<?php
/**
 * The Header for jbinc.co.jp.
 */
?>
<header id="siteHeader">
	<h1 id="logo"><a href="<?php abs2rel('/index.html'); ?>"><img src="<?php get_common_dir('imgs');?>logo.png" alt="ジャパンビバレッジ" width="161" height="89"></a></h1>
	<div class="inner">
		<p class="tagline"><img src="<?php get_common_dir('imgs');?>tagline.gif" alt="自動販売機オペレーターNo.1" width="262" height="24"></p>
		<ul id="navHeader">
			<li class="faq"><a href="<?php abs2rel('/faq/index.html'); ?>" title="よくあるご質問">よくあるご質問</a></li>
			<li class="base"><a href="<?php abs2rel('/company/base/index.html'); ?>" title="サービス拠点">サービス拠点</a></li>
			<li class="contact"><a href="<?php abs2rel('/contact/index.html'); ?>" title="お問い合わせ窓口">お問い合わせ窓口</a></li>
		<!-- / #navHeader --></ul>
		<nav>
			<ul id="navGlobal">
				<li class="home"><a href="<?php abs2rel('/index.html'); ?>" title="ホーム">ホーム</a></li>
				<li class="vending"><a href="<?php abs2rel('/vending/index.html'); ?>" title="自動販売機"<?php echo get_nav_current(1, 'vending', true); ?>>自動販売機</a></li>
				<li class="officecoffee"><a href="<?php abs2rel('/officecoffee/index.html'); ?>" title="給茶機・コーヒーサービス"<?php echo get_nav_current(1, 'officecoffee', true); ?>>給茶機・コーヒーサービス</a></li>
				<li class="ecology"><a href="<?php abs2rel('/ecology/index.html'); ?>" title="環境への取組み"<?php echo get_nav_current(1, 'ecology', true); ?>>環境への取組み</a></li>
				<li class="company"><a href="<?php abs2rel('/company/index.html'); ?>" title="会社案内"<?php echo get_nav_current(1, 'company', true); ?>>会社案内</a></li>
				<li class="recruit"><a href="<?php abs2rel('/recruit/index.html'); ?>" title="採用情報"<?php echo get_nav_current(1, 'recruit', true); ?>>採用情報</a></li>
			<!-- / #navGlobal --></ul>
		</nav>
	<!-- / .inner --></div>
<!-- / #siteHeader --></header>
