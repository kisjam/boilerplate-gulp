			<nav id="navLocal">
<?php if ($menu == "vending") : ?>
				<h2><a href="<?php abs2rel($menu.'/index.html'); ?>" title="自動販売機サービス"><img src="<?php abs2rel('/'.$menu.'/images/'); ?>/ttl_sidebar.png" alt="自動販売機サービス" width="200" height="34"></a></h2>
				<ul>
					<li><a href="<?php abs2rel($menu.'/combi/index.html'); ?>" title="コンビ機"<?php echo get_nav_current(2, 'combi', true); ?>>コンビ機</a></li>
					<li><a href="<?php abs2rel($menu.'/maker/index.html'); ?>" title="メーカー機"<?php echo get_nav_current(2, 'maker', true); ?>>メーカー機</a></li>
					<li><a href="<?php abs2rel($menu.'/premium/index.html'); ?>" title="プレミアムバール機"<?php echo get_nav_current(2, 'premium', true); ?>>プレミアムバール機</a></li>
					<li><a href="<?php abs2rel($menu.'/glass/index.html'); ?>" title="グラスフロントベンダー機"<?php echo get_nav_current(2, 'glass', true); ?>>グラスフロントベンダー機</a></li>
					<li><a href="<?php abs2rel($menu.'/cup/index.html'); ?>" title="カップ機"<?php echo get_nav_current(2, 'cup', true); ?>>カップ機</a></li>
					<li><a href="<?php abs2rel($menu.'/cp/index.html'); ?>" title="コーヒー＋ペットボトル機"<?php echo get_nav_current(2, 'cp', true); ?>>コーヒー＋ペットボトル機</a></li>
					<li><a href="<?php abs2rel($menu.'/paper/index.html'); ?>" title="紙パック機"<?php echo get_nav_current(2, 'paper', true); ?>>紙パック機</a></li>
					<li><a href="<?php abs2rel($menu.'/food/index.html'); ?>" title="食品自動販売機"<?php echo get_nav_current(2, 'food', true); ?>>食品自動販売機</a></li>
					<li><a href="<?php abs2rel($menu.'/disaster/index.html'); ?>" title="災害救援ベンダー機"<?php echo get_nav_current(2, 'disaster', true); ?>>災害救援ベンダー機</a></li>
					<li><a href="<?php abs2rel($menu.'/flow/index.html'); ?>" title="設置までの流れ"<?php echo get_nav_current(2, 'flow', true); ?>>設置までの流れ</a></li>
				</ul>
<?php elseif ($menu == "officecoffee") : ?>
				<h2><a href="<?php abs2rel($menu.'/index.html'); ?>" title="給茶機・コーヒーサービス"><img src="<?php echo abs2rel('/'.$menu.'/images/'); ?>/ttl_sidebar.png" alt="給茶機・コーヒーサービス" width="200" height="53"></a></h2>
				<ul>
					<li><a href="<?php abs2rel($menu.'/tea/index.html'); ?>" title="給茶機"<?php echo get_nav_current(2, 'tea', true); ?>>給茶機</a></li>
					<li><a href="<?php abs2rel($menu.'/doutor/index.html'); ?>" title="ドトールカップコーヒーマシン"<?php echo get_nav_current(2, 'doutor', true); ?>>ドトールカップコーヒーマシン</a></li>
					<li><a href="<?php abs2rel($menu.'/flavia/index.html'); ?>" title="フラビア機"<?php echo get_nav_current(2, 'flavia', true); ?>>フラビア機</a></li>
					<li><a href="<?php abs2rel($menu.'/coffee/index.html'); ?>" title="コーヒーサーバー機"<?php echo get_nav_current(2, 'coffee', true); ?>>コーヒーサーバー機</a></li>
					<li><a href="<?php abs2rel($menu.'/milano/index.html'); ?>" title="ミラノラウンジ機"<?php echo get_nav_current(2, 'milano', true); ?>>ミラノラウンジ機</a></li>
					<li><a href="<?php abs2rel($menu.'/option/index.html'); ?>" title="オプション商品"<?php echo get_nav_current(2, 'option', true); ?>>オプション商品</a></li>
					<li><a href="<?php abs2rel($menu.'/other/index.html'); ?>" title="その他（スープ等）"<?php echo get_nav_current(2, 'other', true); ?>>その他（スープ等）</a></li>
					<li><a href="<?php abs2rel($menu.'/flow/index.html'); ?>" title="設置までの流れ"<?php echo get_nav_current(2, 'flow', true); ?>>設置までの流れ</a></li>
				</ul>
<?php elseif ($menu == "ecology") : ?>
				<h2><a href="<?php abs2rel($menu.'/index.html'); ?>" title="環境への取組み"><img src="<?php echo abs2rel('/'.$menu.'/images/'); ?>/ttl_sidebar.png" alt="環境への取組み" width="200" height="34"></a></h2>
				<ul class="<?php echo $menu ?>">
					<li><a href="<?php abs2rel($menu.'/history/index.html'); ?>" title="環境保全活動の歩み"<?php echo get_nav_current(2, 'history', true); ?>>環境保全活動の歩み</a></li>
					<li><a href="<?php abs2rel($menu.'/plaza/index.html'); ?>" title="リサイクル・プラザJB"<?php echo get_nav_current(2, 'plaza', true); ?>>リサイクル・プラザJB</a><?php if (get_nav_current(2, 'plaza', false)) : ?><ul>
						<li><a href="<?php abs2rel($menu.'/plaza/recycle/index.html'); ?>" title="リサイクルの仕組み"<?php echo get_nav_current(3, 'recycle', true); ?>>リサイクルの仕組み</a></li>
						<li><a href="<?php abs2rel($menu.'/plaza/study/index.html'); ?>" title="環境学習"<?php echo get_nav_current(3, 'study', true); ?>>環境学習</a></li>
						<li><a href="<?php abs2rel($menu.'/plaza/contest/index.html'); ?>" title="作文コンクール"<?php echo get_nav_current(3, 'contest', true); ?>>作文コンクール</a></li>
						<li><a href="<?php abs2rel($menu.'/plaza/access/index.html'); ?>" title="アクセス・地図"<?php echo get_nav_current(3, 'access', true); ?>>アクセス・地図</a></li>
					</ul><?php endif; ?></li>
					<li><a href="<?php abs2rel($menu.'/network/index.html'); ?>" title="JBリサイクルネットワーク"<?php echo get_nav_current(2, 'network', true); ?>>JBリサイクルネットワーク</a></li>
					<li><a href="<?php abs2rel($menu.'/csr/index.html'); ?>" title="自動販売機を通じたCSR活動のご提案"<?php echo get_nav_current(2, 'csr', true); ?>>自動販売機を通じたCSR活動のご提案</a></li>
				</ul>
<?php elseif ($menu == "company") : ?>
				<h2><a href="<?php abs2rel($menu.'/index.html'); ?>" title="会社案内"><img src="<?php echo abs2rel('/'.$menu.'/images/'); ?>/ttl_sidebar.png" alt="会社案内" width="200" height="34"></a></h2>
				<ul>
					<li><a href="<?php abs2rel($menu.'/philosophy/index.html'); ?>" title="経営理念・方針"<?php echo get_nav_current(2, 'philosophy', true); ?>>経営理念・方針</a></li>
					<li><a href="<?php abs2rel($menu.'/summary/index.html'); ?>" title="会社概要"<?php echo get_nav_current(2, 'summary', true); ?>>会社概要</a></li>
					<li><a href="<?php abs2rel($menu.'/history/index.html'); ?>" title="沿革"<?php echo get_nav_current(2, 'history', true); ?>>沿革</a></li>
					<li><a href="<?php abs2rel($menu.'/ir/index.html'); ?>" title="電子公告"<?php echo get_nav_current(2, 'ir', true); ?>>電子公告</a></li>
					<li><a href="<?php abs2rel($menu.'/base/index.html'); ?>" title="サービス拠点"<?php echo get_nav_current(2, 'base', true); ?>>サービス拠点</a></li>
				</ul>
<?php elseif ($menu == "recruit") : ?>
				<h2><a href="<?php abs2rel($menu.'/index.html'); ?>" title="採用情報"><img src="<?php echo abs2rel('/'.$menu.'/images/'); ?>/ttl_sidebar.png" alt="採用情報" width="200" height="34"></a></h2>
				<ul>
					<li><a href="<?php abs2rel($menu.'/president/index.html'); ?>" title="社長メッセージ"<?php echo get_nav_current(2, 'president', true); ?>>社長メッセージ</a></li>
					<li><a href="<?php abs2rel($menu.'/workplace/index.html'); ?>" title="働く環境"<?php echo get_nav_current(2, 'workplace', true); ?>>働く環境</a></li>
					<li><a href="<?php abs2rel($menu.'/oneday/index.html'); ?>" title="社員の一日"<?php echo get_nav_current(2, 'oneday', true); ?>>社員の一日</a></li>
					<li><a href="<?php abs2rel($menu.'/message/index.html'); ?>" title="社員メッセージ"<?php echo get_nav_current(2, 'message', true); ?>>社員メッセージ</a></li>
					<li><a href="<?php abs2rel($menu.'/guideline/index.html'); ?>" title="募集要項"<?php echo get_nav_current(2, 'guideline', true); ?>>募集要項</a></li>
				</ul>
<?php elseif ($menu == "purpose") : ?>
				<h2><a href="<?php abs2rel($menu.'/index.html'); ?>" title="目的別から探す"><img src="<?php echo abs2rel('/'.$menu.'/images/'); ?>/ttl_sidebar.png" alt="目的別から探す" width="200" height="34"></a></h2>
				<ul>
					<li><a href="<?php abs2rel($menu.'/vending/index.html'); ?>" title="自動販売機を設置したい"<?php echo get_nav_current(2, 'vending', true); ?>>自動販売機を設置したい</a></li>
					<li><a href="<?php abs2rel($menu.'/officecoffee/index.html'); ?>" title="給茶機・コーヒー機器を設置したい"<?php echo get_nav_current(2, 'officecoffee', true); ?>>給茶機・コーヒー機器を設置したい</a></li>
					<li><a href="<?php abs2rel($menu.'/cost/index.html'); ?>" title="節電・コスト削減をしたい"<?php echo get_nav_current(2, 'cost', true); ?>>節電・コスト削減をしたい</a></li>
					<li><a href="<?php abs2rel($menu.'/space/index.html'); ?>" title="スペースを有効活用したい"<?php echo get_nav_current(2, 'space', true); ?>>スペースを有効活用したい</a></li>
					<li><a href="<?php abs2rel($menu.'/safety/index.html'); ?>" title="安全・災害対策を検討したい"<?php echo get_nav_current(2, 'safety', true); ?>>安全・災害対策を検討したい</a></li>
				</ul>
<?php endif; ?>
			<!-- / #navLocal --></nav>
