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

use PDO;

class Connection {

	private static $conn = NULL;

	/**
	* Open connection to database
	*
	* @param
	* @return connection
	*/
	public function open_connection() {

		if ( self::$conn !== NULL ) {
			return self::$conn;
		}

		$PHP_ENV = getenv( 'PHP_ENV' );
		$dsn = '';
		$username   = '';
		$password   = '';
		$dbname     = 'react_php_com_db';

		if ( $PHP_ENV === 'staging' ) {
			$username = getenv('DB_USER');
			$password = getenv('DB_PASS');
			$dsn = getenv('DB_DSN');
		} else if ( $PHP_ENV === "production" ) {
			$username = getenv('DB_USER');
			$password = getenv('DB_PASS');
			$dsn = getenv('DB_DSN');
		} else {
			$dbname     = 'react_php_com_db';
			$host 		= 'db';
			$username = 'root';
			$password = 'toor';
			$dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
		}

		self::$conn = new PDO( $dsn, $username, $password );
		self::$conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

		return self::$conn;
	}

	/**
	* Close connection to database
	*
	* @param
	*
	* @return close connection
	*/
	public function close_connection() {
		self::$conn = NULL;
	}
}
?>
