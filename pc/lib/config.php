<?php
	/**
	 * @ DEFINE
	 */
	define("WEBSITE_NAME", "");
	define("DOMAIN", $_SERVER['SERVER_NAME']);
	
	// HTML HEAD
	define("HTML_HEAD_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/HtmlHead.php");
	define("HTML_HEAD_CSS_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/HtmlHeadCSS.php");
	define("HTML_HEAD_JS_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/HtmlHeadJs.php");
	define("HTML_HEAD_END_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/HtmlHeadEnd.php");
	
	// LAYOUT
	define("HEADER_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/Header.php");
	define("FOOTER_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/Footer.php");

	// SIDEBAR
	define("SIDEBAR_NAVIGATION_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/SidebarNav.php");
	define("SIDEBAR_BTN_PATH", $_SERVER['DOCUMENT_ROOT']."/include/common/SidebarBtn.php");
	
	// LOAD FUNCTION
	require_once($_SERVER['DOCUMENT_ROOT']."/lib/functions.php");
?>