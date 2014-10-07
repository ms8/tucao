<?php
$z[0]=Array("id","",43,54);
$z[1]=Array("arcurl","",88,103);
$z[2]=Array("title","",112,127);
$z[3]=Array("mid","\r\n            \$id = @me;\r\n            if(\$id != 0){\r\n              \$sql = \"select * from dede_member where mid = \$id\";\r\n              \$query = mysql_query(\$sql);\r\n              \$row = mysql_fetch_array(\$query);\r\n              if(\$row['face'] == ''){\r\n                @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\"/>';\r\n              }else{\r\n                @me = '<img src=\"'.\$row['face'].'\" width=\"40\" height=\"30\"/>';\r\n              }\r\n            }else{\r\n             @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\" />';\r\n            }\r\n            ",182,824);
$z[3][4]['runphp']="yes";
$z[4]=Array("writer","\$userid = @me;\$row = \$GLOBALS['dsql']->GetOne(\"select userid from dede_member where uname='\$userid' \");@me = \"{\$row['userid']}\";",859,1029);
$z[4][4]['runphp']="yes";
$z[5]=Array("writer","",1038,1053);
$z[6]=Array("writer","",1071,1086);
$z[7]=Array("title","",1130,1145);
$z[8]=Array("id"," \$aid = @me; \$row = \$GLOBALS['dsql']->GetOne(\"Select body From `dede_addonarticle` where aid='\$aid' \"); @me = \"{\$row['body']}\";",1149,1310);
$z[8][4]['runphp']="yes";
$z[9]=Array("id","     global \$cfg_cmspath;        \$tags = GetTags(@me);        \$revalue = '';        \$tags = explode(',', \$tags);        foreach(\$tags as \$key => \$value){            if(\$value){                \$revalue .= '<a href=\"'.\$cfg_cmspath.'/tags.php?/'.\$value.'/\">'.\$value.'</a> ';            }        }        @me = \$revalue;     ",1365,1720);
$z[9][4]['runphp']="yes";
$z[10]=Array("id","",1830,1841);
$z[11]=Array("id","",1912,1923);
$z[12]=Array("id","",2032,2043);
$z[13]=Array("id","",2155,2166);
$z[14]=Array("id","",2250,2261);
$z[15]=Array("id","\r\n\$aid = @me;\r\n\$row = \$GLOBALS['dsql']->GetOne(\"Select count(id) as c from dede_feedback where aid='\$aid' \");\r\n@me = \"{\$row['c']}\";\r\n",2306,2473);
$z[15][4]['runphp']="yes";
$z[16]=Array("id","",2549,2560);
$z[17]=Array("id","",2601,2612);
$z[18]=Array("title","",3463,3478);
$z[19]=Array("id","",3711,3722);
$z[20]=Array("id","",3771,3782);
$z[21]=Array("id","",3817,3828);
$z[22]=Array("id","",3891,3902);

?>