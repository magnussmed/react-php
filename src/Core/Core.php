<?php
/**
* ReactPhp/Core
*
* @package    ReactPhp
* @copyright  2020 ReactPhp
* @author     Magnus Smed
* @version    1.0.0
*/

namespace ReactPhp\Core;

/**
* Class Core
*
* @package ReactPhp
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
