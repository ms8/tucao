<?php
$z[0]=Array("id","",43,54);
$z[1]=Array("arcurl","",88,103);
$z[2]=Array("title","",112,127);
$z[3]=Array("mid","\r\n            \$id = @me;\r\n            if(\$id != 0){\r\n              \$sql = \"select * from dede_member where mid = \$id\";\r\n              \$query = mysql_query(\$sql);\r\n              \$row = mysql_fetch_array(\$query);\r\n              if(\$row['face'] == ''){\r\n                @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\"/>';\r\n              }else{\r\n                @me = '<img src=\"'.\$row['face'].'\" width=\"40\" height=\"30\"/>';\r\n              }\r\n            }else{\r\n             @me = '<img src=\"/member/templets/images/dfboy.png\" width=\"40\" height=\"30\" />';\r\n            }\r\n            ",180,822);
$z[3][4]['runphp']="yes";
$z[4]=Array("writer","\$userid = @me;\$row = \$GLOBALS['dsql']->GetOne(\"select userid from dede_member where uname='\$userid' \");@me = \"{\$row['userid']}\";",855,1025);
$z[4][4]['runphp']="yes";
$z[5]=Array("writer","",1034,1049);
$z[6]=Array("writer","",1067,1082);
$z[7]=Array("title","",1124,1139);
$z[8]=Array("id"," \$aid = @me; \$row = \$GLOBALS['dsql']->GetOne(\"Select body From `dede_addonarticle` where aid='\$aid' \"); @me = \"{\$row['body']}\";",1143,1304);
$z[8][4]['runphp']="yes";
$z[9]=Array("id","     global \$cfg_cmspath;        \$tags = GetTags(@me);        \$revalue = '';        \$tags = explode(',', \$tags);        foreach(\$tags as \$key => \$value){            if(\$value){                \$revalue .= '<a href=\"'.\$cfg_cmspath.'/tags.php?/'.\$value.'/\">'.\$value.'</a> ';            }        }        @me = \$revalue;     ",1357,1712);
$z[9][4]['runphp']="yes";
$z[10]=Array("id","",1818,1829);
$z[11]=Array("id","",1900,1911);
$z[12]=Array("id","",2020,2031);
$z[13]=Array("id","",2143,2154);
$z[14]=Array("id","",2238,2249);
$z[15]=Array("id","\r\n\$aid = @me;\r\n\$row = \$GLOBALS['dsql']->GetOne(\"Select count(id) as c from dede_feedback where aid='\$aid' \");\r\n@me = \"{\$row['c']}\";\r\n",2294,2461);
$z[15][4]['runphp']="yes";
$z[16]=Array("id","",2537,2548);
$z[17]=Array("id","",2589,2600);
$z[18]=Array("title","",3451,3466);
$z[19]=Array("id","",3697,3708);
$z[20]=Array("id","",3753,3764);
$z[21]=Array("id","",3799,3810);
$z[22]=Array("id","",3869,3880);

?>