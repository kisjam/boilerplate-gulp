<?php
/**
 * @FUNCTION
 * for 
 */

function get_current_dir($recruit_rmdir = false) {
	
	$dir = $_SERVER['SCRIPT_NAME'];
	$arr_dir = explode("/", $dir);
	$path = "";
	foreach ($arr_dir as $value) {
		if (!strstr($value, ".")) {
			$path .= $value."/";
		}
	}
	if ($recruit_rmdir) {
		$path = str_replace('/recruit', '', $path);
	}
	return $path;

}

function is_front() { // top page is true
	
	if (get_current_dir(true) === '/') {
		return true;
	} else {
		return false;
	}

}

function get_current_navclass($dir = '/') {

	$currentClass = 'class="current"';
	$currentDir = get_current_dir();
	if (strstr($currentDir, $dir)) {
		if ($dir == '/recruit/' && !is_front()) {
			return;
		}
		return $currentClass;
	}
	
}

?>