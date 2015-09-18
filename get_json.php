<?php
/**
 * Created by JetBrains PhpStorm.
 * User: Vitaliy.Ryepnoy
 * Date: 3/05/13
 * Time: 11:06 AM
 * To change this template use File | Settings | File Templates.
 */
ob_start('ob_gzhandler');

//echo file_get_contents('row_data.json');
//echo file_get_contents('enc_data.json');
echo file_get_contents('full_data.json');
//echo file_get_contents('cars.json');