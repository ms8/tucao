<div class="block untagged" id='qiushi_tag_[field:id/]'>
                <div class="detail1"><a href="[field:arcurl/]" title="[field:title /]" target="_blank"></a></div>
                <div class="media">
                    <a href="#" class="pull-left">
                        [field:mid runphp='yes']
                        $id = @me;
                        if($id != 0){
                        $sql = "select * from dede_member where mid = $id";
                        $query = mysql_query($sql);
                        $row = mysql_fetch_array($query);
                        if($row['face'] == ''){
                        @me = '<img src="/member/templets/images/dfboy.png" width="40" height="40"/>';
                        }else{
                        @me = '<img src="'.$row['face'].'" width="40" height="40"/>';
                        }
                        }else{
                        @me = '<img src="/member/templets/images/dfboy.png" width="40" height="40"/>';
                        }
                        [/field:mid]
                    </a>
                    <div class="media-body">
                        <h4 class="media-heading"><strong>java</strong>么么 <br/><small>/*用写c++的方式思考人生 */</small></h4>

                    </div>
                </div>
                <div class="author">

                    <!--<a href="/member/index.php?uid=[field:writer runphp='yes']$userid = @me;$row = $GLOBALS['dsql']->GetOne("select userid from dede_member where uname='$userid' ");@me = "{$row['userid']}";[/field:writer]" title="[field:writer/]" target="_blank">[field:writer/]</a>-->


                </div>
                <div class="content" title="[field:title /]">
                    [field:id runphp='yes'] $aid = @me; $row = $GLOBALS['dsql']->GetOne("Select body From
                    `dede_addonarticle` where aid='$aid' "); @me = "{$row['body']}";[/field:id]
                </div>
                <div class="tags"><span class="bti"></span>[field:id runphp='yes'] global $cfg_cmspath; $tags =
                    GetTags(@me); $revalue = ''; $tags = explode(',', $tags); foreach($tags as $key => $value){
                    if($value){ $revalue .= '<a href="'.$cfg_cmspath.'/tags.php?/'.$value.'/">'.$value.'</a> '; } } @me
                    = $revalue; [/field:id]</a>
                </div>
                <div class="bar row" id="qiushi_counts_[field:id/]">
                    <DIV class="podigg col-xs-6" id="newdigg[field:id/]">
                        <!--<a href="javascript:;" class="btn btn-default" onclick="postDigg('good',[field:id/]);">({dede:field.goodpost/}) </a>-->
                        <!--<DIV class=up>-->
                            <!--<a href="javascript:;" onclick="postDigg('good',[field:id/]);">({dede:field.goodpost/}) </a>-->
                        <!--</DIV>-->
                        <!--<DIV class=down>-->
                            <!--<a href="javascript:;" onclick="postDigg('bad',[field:id/]);">-({dede:field.badpost/}) </a>-->
                        <!--</DIV>-->
                    </DIV>
                    <script language="javascript" type="text/javascript">getDigg([field:id /]) ;</script>
                    <div class=" col-xs-6 pull-right">
                        <div class="detail">
                            <a title="分享" class="btn btn-danger" onClick="SharePanel([field:id/]);"></a>
                        </div>
                        <div class="comment">
                            <a href="javascript:;" onclick="CheckLogin([field:id/]);" title="评论"
                               class="qiushi_comments">
                                [field:id runphp='yes']
                                $aid = @me;
                                $row = $GLOBALS['dsql']->GetOne("Select count(id) as c from dede_feedback where aid='$aid' ");
                                @me = "{$row['c']}";
                                [/field:id]
                            </a>
                        </div>
                    </div>
                </div>
                <div id="share_[field:id/]" style="display:none;" class="row">
                    <!-- Baidu Button BEGIN -->
                    <div class="col-xs-12">
                        <div class=" share">
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
                            <script type="text/javascript" id="bdshare_js" data="type=tools"></script>
                            <script type="text/javascript" id="bdshell_js"></script>
                            <script type="text/javascript">
                                var bds_config = {'bdText': '[field:title /]'};
                                document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + new Date().getHours();
                            </script>
                        </div>
                    </div>
                    <!-- Baidu Button END -->
                </div>
                <DIV class="comments login" id="qbpl[field:id/]">
                    <DIV id=r4983655>
                        <div id='commetcontent[field:id/]'></div>
                        <div id='commetcontentNew[field:id/]'></div>
                    </DIV>
                    <DIV class=input-block id="_ajax_feedback[field:id/]">
                        <DIV class="logout login-block"><A href="javascript:vote2(-1)">登录</A>后才能发表评论</DIV>
                    </DIV>
                </DIV>
            </div>
            <div class="shadow"></div>