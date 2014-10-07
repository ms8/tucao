<?php
require_once(dirname(__FILE__)."/config.php");
AjaxHead();
if($myurl == '')
{
	exit('');
}
$uid  = $cfg_ml->M_LoginID;$cfg_ml->fields['face'];
?>



<div class="logout">
<a href="<?php echo $cfg_memberurl; ?>/index.php" target="_blank"><?php echo $cfg_ml->M_UserName; ?></a>
<a href="<?php echo $cfg_memberurl; ?>/index_do.php?fmdo=login&dopost=exit" class="exit">退出</a>
</div>