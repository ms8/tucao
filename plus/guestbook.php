﻿<?php
/**
 *
 * 留言板
 *
 * @version        $Id: guestbook.php 1 10:09 2010-11-10 tianya $
 * @package        DedeCMS.Site
 * @copyright      Copyright (c) 2007 - 2010, DesDev, Inc.
 * @license        http://help.dedecms.com/usersguide/license.html
 * @link           http://www.dedecms.com
 */
require_once(dirname(__FILE__).'/guestbook/guestbook.inc.php');
require_once(DEDEINC.'/datalistcp.class.php');
if(empty($action)) $action = '';
//修改留言
if($action=='admin')
{
    include_once(dirname(__FILE__).'/guestbook/edit.inc.php');
    exit();
}
//保存留言
else if($action=='save')
{
    if(!empty($_COOKIE['GUEST_BOOK_POS'])) $GUEST_BOOK_POS = $_COOKIE['GUEST_BOOK_POS'];
    else $GUEST_BOOK_POS = 'guestbook.php';
    $homepage = preg_replace("#http:\/\/#", '', $homepage);
    $qq = trimMsg($qq);
    $msg = trimMsg(cn_substrR($msg, 1024), 1);
    $tid = empty($tid) ? 0 : intval($tid);
    $reid = empty($reid) ? 0 : intval($reid);

    if($msg=='') {
        showMsg('留言内容不能为空!','-1');
        exit();
    }
    $title = HtmlReplace( cn_substrR($title,60), 1 );
    if($title=='') $title = '无标题';
    
    if($reid != 0)
    {
        $row = $dsql->GetOne("SELECT msg FROM `#@__guestbook` WHERE id='$reid' ");
        $msg = "<div class=\\'rebox\\'>".addslashes($row['msg'])."</div>\n".$msg;
    }

    $query = "INSERT INTO `#@__guestbook`(title,tid,mid,uname,email,homepage,qq,face,msg,ip,dtime,ischeck)
                  VALUES ('$title','$tid','{$g_mid}','$uname','$email','$homepage','$qq','$img','$msg','$ip','$dtime','$needCheck'); ";
    $dsql->ExecuteNoneQuery($query);
    $gid = $dsql->GetLastID();
    if($needCheck==1)
    {
        require_once(DEDEINC."/oxwindow.class.php");
        $msg = "
<font color='red'><b>成功留言,感谢您的反驳！</b></font> &nbsp; <a href='/' style='font-size:14px;font-weight:bold'>点击这里返回首页</a>";
      $wintitle = "留言发布成功提示";
        $wecome_info = "留言发布成功：";
        $win = new OxWindow();
        $win->Init("","js/blank.js","post");
        $win->AddTitle("提示：");
        $win->AddMsgItem("<div style='padding:20px;line-height:300%;font-size:14px'>$msg</div>");
        $winform = $win->GetWindow("hand");
        $win->Display();
    }
    else {
        ShowMsg('成功发送一则留言，但需审核后才能显示！','guestbook.php',0,3000);
    }
    exit();
}
//显示所有留言
else
{
    setcookie('GUEST_BOOK_POS',GetCurUrl(),time()+3600,'/');

    if($g_isadmin) $sql = 'SELECT * FROM `#@__guestbook` ORDER BY id DESC';
    else $sql = 'SELECT * FROM `#@__guestbook` WHERE ischeck=1 ORDER BY id DESC';

    $dlist = new DataListCP();
    $dlist->pageSize = 10;
    $dlist->SetParameter('gotopagerank',$gotopagerank);
    $dlist->SetTemplate(DEDETEMPLATE.'/plus/guestbook.htm');
    $dlist->SetSource($sql);
    $dlist->Display();
}