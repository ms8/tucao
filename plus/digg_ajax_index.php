<?php    
    
require_once(dirname(__FILE__)."/../include/common.inc.php");    
   
$action = isset($action) ? trim($action) : '';    
$id = emptyempty($id)? 0 : intval(preg_replace("/[^\d]/",'', $id));    
   
if($id < 1)    
{    
    exit();    
}    
$maintable = 'dede_archives';    
if($action == 'good')    
{    
    $dsql->ExecuteNoneQuery("Update `$maintable` set scores = scores + {$cfg_caicai_add},goodpost=goodpost+1,lastpost=".time()." where id='$id'");    
}    
else if($action=='bad')    
{    
    $dsql->ExecuteNoneQuery("Update `$maintable` set scores = scores - {$cfg_caicai_sub},badpost=badpost+1,lastpost=".time()." where id='$id'");    
}    
$digg = '';    
$row = $dsql->GetOne("Select goodpost,badpost,scores From `$maintable` where id='$id' ");    
if(!is_array($row))    
{    
    exit();    
}    
if($row['goodpost']+$row['badpost'] == 0)    
{    
    $row['goodper'] = $row['badper'] = 0;    
}    
else   
{    
    $row['goodper'] = number_format($row['goodpost']/($row['goodpost']+$row['badpost']),3)*100;    
    $row['badper'] = 100-$row['goodper'];    
}    
   
if(emptyempty($formurl)) $formurl = '';    
if($formurl=='caicai')    
{    
    if($action == 'good') $digg = $row['goodpost'];    
    if($action == 'bad') $digg  = $row['badpost'];    
}    
else   
{    
    $row['goodper'] = trim(sprintf("%4.2f", $row['goodper']));    
    $row['badper'] = trim(sprintf("%4.2f", $row['badper']));        
    $digg = '²Ù×÷Çø£º<a href="javascript:" onclick="javascript:postDigg(\'good\','.$id.')">¶¥</a>£¨'.$row['goodpost'].'£© <a href="javascript:" onclick="javascript:postDigg(\'bad\','.$id.')">²È</a>£¨'.$row['badpost'].'£©';    
}    
AjaxHead();    
echo $digg;    
exit();    
?> 