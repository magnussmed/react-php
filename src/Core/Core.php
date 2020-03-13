<?php
/**
* ReactPHP/Core
*
* @package    ReactPHP
* @copyright  2020 ReactPHP
* @author     Magnus Smed
* @version    1.0.0
*/

namespace ReactPHP\Core;

/**
* Class Core
*
* @package ReactPHP
*/
class Core {

	/**
	* Make a test function
	*
	* @param
	* @return
	*/
	public function call_me( $params = false ) {

		# Echo the response to ReactJS
		echo json_encode( array( 'response' => 'Works.', 'type' => 'xhr' ) );
	}
}
?>
