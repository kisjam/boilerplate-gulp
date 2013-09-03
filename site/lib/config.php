<?php
	/**
	 * @ DEFINE
	 */
	define("WEBSITE_NAME", "hoge");
	define("DOMAIN", $_SERVER['SERVER_NAME']);
	
	// HTML HEAD
	define("HTML_HEAD_PATH", $_SERVER['DOCUMENT_ROOT']."/recruit/include/common/Head.php");
	
	// LAYOUT
	define("HEADER_PATH", $_SERVER['DOCUMENT_ROOT']."/recruit/include/common/Header.php");
	define("FOOTER_PATH", $_SERVER['DOCUMENT_ROOT']."/recruit/include/common/Footer.php");

	// javascript
	define("HEAD_JS_PATH", $_SERVER['DOCUMENT_ROOT']."/recruit/include/common/Head_js.php");
	define("JS_PATH", $_SERVER['DOCUMENT_ROOT']."/recruit/include/common/Js.php");
	
	// LOAD FUNCTION
	require_once($_SERVER['DOCUMENT_ROOT']."/recruit/lib/functions.php");
?>