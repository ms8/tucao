<?php
$z[0]=Array("field","",455,475);
$z[0][4]['name']="title";
$z[1]=Array("global","",488,514);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("global","",558,585);
$z[2][4]['name']="cfg_basehost";
$z[3]=Array("global","",617,649);
$z[3][4]['name']="cfg_templets_skin";
$z[4]=Array("global","",800,832);
$z[4][4]['name']="cfg_templets_skin";
$z[5]=Array("global","",909,934);
$z[5][4]['name']="cfg_cmsurl";
$z[6]=Array("global","",1436,1461);
$z[6][4]['name']="cfg_cmsurl";
$z[7]=Array("field","",2449,2476);
$z[7][4]['name']="phpurl";
$z[8]=Array("global","",3385,3410);
$z[8][4]['name']="cfg_phpurl";
$z[9]=Array("global","",3649,3674);
$z[9][4]['name']="cfg_phpurl";
$z[10]=Array("channel","\r\n\r\n<li class=\"menuout\"><a href='[field:typeurl/]' [field:rel/]>[field:typename/]</a></li>",4891,5126);
$z[10][4]['row']="5";
$z[10][4]['type']="top";
$z[10][4]['currentstyle']="<li class='menuout'><a id='highlight' href='~typelink~' ~rel~>~typename~</a></li>";
$z[11]=Array("field","",5786,5806);
$z[11][4]['name']="title";
$z[12]=Array("list","\r\n\r\n<div class=\"block untagged\" id='qiushi_tag_[field:id/]'>\r\n\r\n<div class=\"detail1\"><a href=\"[field:arcurl/]\" title=\"[field:title /]\" target=\"_blank\"></a></div>\r\n\r\n <div class=\"author\">\r\n\r\n[field:mid runphp='yes']\r\n\r\n            \$id = @me;\r\n\r\n            if(\$id != 0){\r\n\r\n              \$sql = \"select * from dede_member where mid = \$id\";\r\n\r\n              \$query = mysql_query(\$sql);\r\n\r\n              \$row = mysql_fetch_array(\$query);\r\n\r\n              if(\$row['face'] == ''){\r\n\r\n                @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\"/>';\r\n\r\n              }else{\r\n\r\n                @me = '<img src=\"'.\$row['face'].'\" width=\"40\" height=\"30\"/>';\r\n\r\n              }\r\n\r\n            }else{\r\n\r\n             @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\" />';\r\n\r\n            }\r\n\r\n            [/field:mid]\r\n\r\n<a href=\"/member/index.php?uid=[field:writer runphp='yes']\$userid = @me;\$row = \$GLOBALS['dsql']->GetOne(\"select userid from dede_member where uname='\$userid' \");@me = \"{\$row['userid']}\";[/field:writer]\" title=\"[field:writer/]\" target=\"_blank\">[field:writer/]</a>\r\n\r\n</div>\r\n\r\n<div class=\"content\" title=\"[field:title /]\">\r\n\r\n[field:id runphp='yes'] \$aid = @me; \$row = \$GLOBALS['dsql']->GetOne(\"Select body From `dede_addonarticle` where aid='\$aid' \"); @me = \"{\$row['body']}\";[/field:id]\r\n\r\n</div>\r\n\r\n<div class=\"tags\"><span class=\"bti\"></span>[field:id runphp='yes']     global \$cfg_cmspath;        \$tags = GetTags(@me);        \$revalue = '';        \$tags = explode(',', \$tags);        foreach(\$tags as \$key => \$value){            if(\$value){                \$revalue .= '<a href=\"'.\$cfg_cmspath.'/tags.php?/'.\$value.'/\">'.\$value.'</a> ';            }        }        @me = \$revalue;     [/field:id]</a>\r\n\r\n  </div>\r\n\r\n<div class=\"bar clearfix\" id=\"qiushi_counts_[/field:id]\">\r\n\r\n<DIV class=\"podigg\" id=\"newdigg[field:id/]\">\r\n\r\n<DIV class=up><A href=\"javascript:void()\" onclick=\"postDigg('good',[field:id/]);\">({dede:field.goodpost/}) </A></DIV>\r\n\r\n<DIV class=down><A href=\"javascript:void()\" onclick=\"postDigg('bad',[field:id/]);\">-({dede:field.badpost/}) </A>\r\n\r\n</DIV>\r\n\r\n</DIV>\r\n\r\n<script language=\"javascript\" type=\"text/javascript\">getDigg([field:id/]);</script>\r\n\r\n<div class=\"comment\">\r\n\r\n<a href=\"javascript:void()\" onclick=\"CheckLogin([field:id/]);\" title=\"评论\" class=\"qiushi_comments\">\r\n\r\n[field:id runphp='yes']\r\n\r\n\$aid = @me;\r\n\r\n\$row = \$GLOBALS['dsql']->GetOne(\"Select count(id) as c from dede_feedback where aid='\$aid' \");\r\n\r\n@me = \"{\$row['c']}\";\r\n\r\n[/field:id]\r\n\r\n</a>\r\n\r\n</div>\r\n\r\n<div class=\"detail\">\r\n\r\n<a title=\"分享\" onClick=\"SharePanel([field:id/]);\"></a>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<div id=\"share_[field:id/]\" style=\"display:none;\">\r\n\r\n<!-- Baidu Button BEGIN -->\r\n\r\n<div class=\"share clearfix\">\r\n\r\n<div id=\"bdshare\" class=\"bdshare_t bds_tools get-codes-bdshare\">\r\n\r\n		  <a class=\"bds_qzone\">QQ空间</a>\r\n\r\n		  <a class=\"bds_tqq\">腾讯微博</a>\r\n\r\n		  <a class=\"bds_tsina\">新浪微博</a>\r\n\r\n		  <a class=\"bds_s51\">51社区</a>\r\n\r\n		  <a class=\"bds_tqf\">腾讯朋友</a>\r\n\r\n		  <a class=\"bds_hi\">百度空间</a>\r\n\r\n		  <a class=\"bds_kaixin001\">开心网</a>\r\n\r\n		  <a class=\"bds_renren\">人人网</a>\r\n\r\n		  <a class=\"bds_tsohu\">搜狐微博</a>\r\n\r\n		  <a class=\"bds_douban\">豆瓣网</a>\r\n\r\n		  <a class=\"bds_tieba\">百度贴吧</a>\r\n\r\n		  <a class=\"bds_baidu\">百度搜藏</a>\r\n\r\n</div><script type=\"text/javascript\" id=\"bdshare_js\" data=\"type=tools\" ></script>\r\n\r\n<script type=\"text/javascript\" id=\"bdshell_js\"></script>\r\n\r\n<script type=\"text/javascript\">\r\n\r\nvar bds_config = {'bdText':'[field:title /]'};\r\n\r\n	document.getElementById(\"bdshell_js\").src =\"http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=\" + new Date().getHours();\r\n\r\n</script>\r\n\r\n</div>\r\n\r\n</div>\r\n\r\n<DIV class=\"comments login\" id=\"qbpl[field:id/]\">\r\n\r\n<DIV id=r4983655>\r\n\r\n<div id='commetcontent[field:id/]'></div>\r\n\r\n<div id='commetcontentNew[field:id/]'></div>\r\n\r\n</DIV>\r\n\r\n<DIV class=input-block id=\"_ajax_feedback[field:id/]\">\r\n\r\n<DIV class=\"logout login-block\"><A href=\"javascript:vote2(-1)\">登录</A>后才能发表评论</DIV></DIV></DIV>\r\n\r\n</div>\r\n\r\n<div class=\"shadow\"></div>\r\n\r\n",5854,10074);
$z[12][4]['orderby']="sortrank";
$z[12][4]['pagesize']="10";
$z[13]=Array("pagelist","",10103,10153);
$z[13][4]['istitem']="pre,next,";
$z[13][4]['listsize']="2";
$z[14]=Array("tag","\r\n      <a href='[field:link/]'>[field:tag /]</a>\r\n      ",10961,11072);
$z[14][4]['row']="30";
$z[14][4]['getall']="1";
$z[14][4]['sort']="month";
$z[15]=Array("flink","[field:link /]",11308,11370);
$z[15][4]['linktype']="2";
$z[15][4]['row']="100";
$z[16]=Array("include","",11812,11847);
$z[16][4]['filename']="foot.htm";
$z[17]=Array("global","",12083,12111);
$z[17][4]['name']="cfg_memberurl";
$z[18]=Array("global","",13926,13953);
$z[18][4]['name']="cfg_basehost";
$z[19]=Array("global","",14186,14212);
$z[19][4]['name']="cfg_cmspath";
$z[20]=Array("global","",14587,14612);
$z[20][4]['name']="cfg_cmsurl";
$z[21]=Array("global","",15275,15303);
$z[21][4]['name']="cfg_soft_lang";
$z[22]=Array("global","",15652,15677);
$z[22][4]['name']="cfg_phpurl";
$z[23]=Array("global","",15823,15848);
$z[23][4]['name']="cfg_cmsurl";
$z[24]=Array("global","",16098,16123);
$z[24][4]['name']="cfg_cmsurl";
$z[25]=Array("global","",16253,16279);
$z[25][4]['name']="cfg_phpurl";

?>