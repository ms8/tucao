<div class="block untagged" id='qiushi_tag_[field:id/]'>
<div class="detail1"><a href="[field:arcurl/]" title="[field:title /]" target="_blank"></a></div>
 <div class="author">
[field:mid runphp='yes']
            $id = @me;
            if($id != 0){
              $sql = "select * from dede_member where mid = $id";
              $query = mysql_query($sql);
              $row = mysql_fetch_array($query);
              if($row['face'] == ''){
                @me = '<img src="/member/templets/images/dfboy.png" width="40" height="30"/>';
              }else{
                @me = '<img src="'.$row['face'].'" width="40" height="30"/>';
              }
            }else{
             @me = '<img src="/member/templets/images/dfboy.png" width="40" height="30" />';
            }
            [/field:mid]
<!--<a href="/member/index.php?uid=[field:writer runphp='yes']$userid = @me;$row = $GLOBALS['dsql']->GetOne("select userid from dede_member where uname='$userid' ");@me = "{$row['userid']}";[/field:writer]" title="[field:writer/]" target="_blank">[field:writer/]</a>-->
匿名
</div>
<div class="content" title="[field:title /]">
[field:id runphp='yes'] $aid = @me; $row = $GLOBALS['dsql']->GetOne("Select body From `dede_addonarticle` where aid='$aid' "); @me = "{$row['body']}";[/field:id]
</div>
<div class="tags"><span class="bti"></span>[field:id runphp='yes']     global $cfg_cmspath;        $tags = GetTags(@me);        $revalue = '';        $tags = explode(',', $tags);        foreach($tags as $key => $value){            if($value){                $revalue .= '<a href="'.$cfg_cmspath.'/tags.php?/'.$value.'/">'.$value.'</a> ';            }        }        @me = $revalue;     [/field:id]</a>
  </div>
<div class="bar clearfix" id="qiushi_counts_[/field:id]">
<DIV class="podigg" id="newdigg[field:id/]">
<DIV class=up><A href="javascript:void()" onclick="postDigg('good',[field:id/]);">({dede:field.goodpost/}) </A></DIV>
<DIV class=down><A href="javascript:void()" onclick="postDigg('bad',[field:id/]);">-({dede:field.badpost/}) </A>
</DIV>
</DIV>
<script language="javascript" type="text/javascript">getDigg([field:id/]);</script>
<div class="comment">
<a href="javascript:void()" onclick="CheckLogin([field:id/]);" title="评论" class="qiushi_comments">
[field:id runphp='yes']
$aid = @me;
$row = $GLOBALS['dsql']->GetOne("Select count(id) as c from dede_feedback where aid='$aid' ");
@me = "{$row['c']}";
[/field:id]
</a>
</div>
<div class="detail">
<a title="分享" onClick="SharePanel([field:id/]);"></a>
</div>
</div>
<div id="share_[field:id/]" style="display:none;">
<!-- Baidu Button BEGIN -->
<div class="share clearfix">
<div id="bdshare" class="bdshare_t bds_tools get-codes-bdshare">
		  <a class="bds_qzone">QQ空间</a>
		  <a class="bds_tqq">腾讯微博</a>
		  <a class="bds_tsina">新浪微博</a>
		  <a class="bds_s51">51社区</a>
		  <a class="bds_tqf">腾讯朋友</a>
		  <a class="bds_hi">百度空间</a>
		  <a class="bds_kaixin001">开心网</a>
		  <a class="bds_renren">人人网</a>
		  <a class="bds_tsohu">搜狐微博</a>
		  <a class="bds_douban">豆瓣网</a>
		  <a class="bds_tieba">百度贴吧</a>
		  <a class="bds_baidu">百度搜藏</a>
</div>
<script type="text/javascript" id="bdshare_js" data="type=tools" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
var bds_config = {'bdText':'[field:title /]'};
	document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + new Date().getHours();
</script>
</div>
<!-- Baidu Button END -->
</div>
<DIV class="comments login" id="qbpl[field:id/]">
<DIV id=r4983655>
<div id='commetcontent[field:id/]'></div>
<div id='commetcontentNew[field:id/]'></div>
</DIV>
<DIV class=input-block id="_ajax_feedback[field:id/]">
<DIV class="logout login-block"><A href="javascript:vote2(-1)">登录</A>后才能发表评论</DIV></DIV></DIV>
</div>
<div class="shadow"></div>