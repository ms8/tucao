<?php
$z[0]=Array("id","",43,54);
$z[1]=Array("arcurl","",90,105);
$z[2]=Array("title","",114,129);
$z[3]=Array("mid","\r\n\r\n            \$id = @me;\r\n\r\n            if(\$id != 0){\r\n\r\n              \$sql = \"select * from dede_member where mid = \$id\";\r\n\r\n              \$query = mysql_query(\$sql);\r\n\r\n              \$row = mysql_fetch_array(\$query);\r\n\r\n              if(\$row['face'] == ''){\r\n\r\n                @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\"/>';\r\n\r\n              }else{\r\n\r\n                @me = '<img src=\"'.\$row['face'].'\" width=\"40\" height=\"30\"/>';\r\n\r\n              }\r\n\r\n            }else{\r\n\r\n             @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\" />';\r\n\r\n            }\r\n\r\n            ",186,856);
$z[3][4]['runphp']="yes";
$z[4]=Array("writer","\$userid = @me;\$row = \$GLOBALS['dsql']->GetOne(\"select userid from dede_member where uname='\$userid' \");@me = \"{\$row['userid']}\";",891,1061);
$z[4][4]['runphp']="yes";
$z[5]=Array("writer","",1070,1085);
$z[6]=Array("writer","",1103,1118);
$z[7]=Array("title","",1164,1179);
$z[8]=Array("id"," \$aid = @me; \$row = \$GLOBALS['dsql']->GetOne(\"Select body From `dede_addonarticle` where aid='\$aid' \"); @me = \"{\$row['body']}\";",1185,1346);
$z[8][4]['runphp']="yes";
$z[9]=Array("id","     global \$cfg_cmspath;        \$tags = GetTags(@me);        \$revalue = '';        \$tags = explode(',', \$tags);        foreach(\$tags as \$key => \$value){            if(\$value){                \$revalue .= '<a href=\"'.\$cfg_cmspath.'/tags.php?/'.\$value.'/\">'.\$value.'</a> ';            }        }        @me = \$revalue;     ",1403,1758);
$z[9][4]['runphp']="yes";
$z[10]=Array("id","",1870,1881);
$z[11]=Array("id","",1954,1965);
$z[12]=Array("id","",2076,2087);
$z[13]=Array("id","",2205,2216);
$z[14]=Array("id","",2304,2315);
$z[15]=Array("id","\r\n\r\n\$aid = @me;\r\n\r\n\$row = \$GLOBALS['dsql']->GetOne(\"Select count(id) as c from dede_feedback where aid='\$aid' \");\r\n\r\n@me = \"{\$row['c']}\";\r\n\r\n",2362,2537);
$z[15][4]['runphp']="yes";
$z[16]=Array("id","",2621,2632);
$z[17]=Array("id","",2679,2690);
$z[18]=Array("title","",3581,3596);
$z[19]=Array("id","",3839,3850);
$z[20]=Array("id","",3899,3910);
$z[21]=Array("id","",3947,3958);
$z[22]=Array("id","",4021,4032);

?>