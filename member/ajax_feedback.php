<?php
/**
 * @version        $Id: ajax_feedback.php 1 8:38 2010年7月9日Z tianya $
 * @package        DedeCMS.Member
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__).'/config.php');
AjaxHead();
if($myurl == '') exit('');

else
{
	$aid = intval($aid);
    $uid  = $cfg_ml->M_LoginID;
    $face = $cfg_ml->fields['face'] == '' ? $GLOBALS['cfg_memberurl'].'/images/nopic.gif' : $cfg_ml->fields['face'];
	
    //echo "用户名：{$cfg_ml->M_UserName} <input name=\"notuser\" type=\"checkbox\" id=\"notuser\" value=\"1\" />匿名评论\r\n";
	
	echo "<FORM class=logout action=# method=post id=feedback".$aid."><input type=hidden name=dopost value=send /><input type=hidden name=comtype value=comments><input type=hidden name=aid value=".$aid." /><input type=hidden name=fid id=feedbackfid value=0 /><INPUT type=hidden name=comment[parent_id]> <INPUT value=4983655 type=hidden name=comment[article_id]> ";
	echo "<TEXTAREA class=comment_input original id=commentc".$aid."></TEXTAREA>";
	echo " <DIV class=row><INPUT value=0 type=hidden name=comment[anonymous]><BUTTON id=comment_submit  type=button onClick=PostComment(".$aid.")>发表</BUTTON><LABEL for=comment_anonymous><INPUT type=checkbox name=notuser id=dcmp-submit-guest> 匿名评论</LABEL> </DIV></FORM>";
	
    if($cfg_feedback_ck=='Y')
    {
        echo "验证码：<input name=\"validate\" type=\"text\" id=\"validate\" size=\"10\" style=\"height:18px;width:60px;margin-right:6px;text-transform: uppercase;\" class=\"nb\" />";
        echo "<img src='{$cfg_cmsurl}/include/vdimgck.php' style='cursor:pointer' id='validateimg' onclick=\"this.src=this.src+'?'\"  title='点击我更换图片' alt='点击我更换图片' />\r\n";
    }
}

