<?php
/**
* ReactJS Request Handler
*
* @package    ReactPHP
* @copyright  2020 ReactPHP
* @author     Magnus Smed
* @version    1.0.0
*/

require_once dirname($_SERVER['DOCUMENT_ROOT']) . '/vendor/autoload.php';

use ReactPHP\Core\Core;
$core = new Core;

/**
* Handle every GET request
*
* @param
* @return
*/
if ( isset($_GET['test']) ) {
	$core->call_me( $params = false );
}
?>
