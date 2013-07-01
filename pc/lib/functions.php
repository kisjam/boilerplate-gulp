<?php
/**
 * @FUNCTION
 * for 
 */

/**
 * 共通ディレクトリーの取得
 */
function get_nav_current($dir_num = null, $dir_name = null, $echo = false) {
	$arr_dir = explode('/', $_SERVER['SCRIPT_NAME']);
	
	if (isset($arr_dir[$dir_num]) && ($arr_dir[$dir_num] == $dir_name)) {
		if ($echo) {
			$nav_current_txt = ' class="current"';
		} else {
			$nav_current_txt = true;
		}
	}
	
	return $nav_current_txt;
}

?>