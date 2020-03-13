<?php
/**
* Handle every GET request
*
* @param
* @return
*/
if ( isset($_GET['test']) ) {
	echo json_encode( array( 'response' => 'success', 'type' => 'yes' ) );
}
?>
