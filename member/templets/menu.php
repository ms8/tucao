<?php
        $add_channel_menu = array();
        //如果为游客访问，不启用左侧菜单
        if(!empty($cfg_ml->M_ID))
        {
            $channelInfos = array();
            $dsql->Execute('addmod',"SELECT id,nid,typename,useraddcon,usermancon,issend,issystem,usertype,isshow FROM `#@__channeltype` ");	
            while($menurow = $dsql->GetArray('addmod'))
            {
                $channelInfos[$menurow['nid']] = $menurow;
                //禁用的模型
                if($menurow['isshow']==0)
                {
                    continue;
                }
                //其它情况
                if($menurow['issend']!=1 || $menurow['issystem']==1 
                || ( !preg_match("#".$cfg_ml->M_MbType."#", $menurow['usertype']) && trim($menurow['usertype'])!='' ) )
                {
                    continue;
                }
                $menurow['ddcon'] = empty($menurow['useraddcon']) ? 'archives_add.php' : $menurow['useraddcon'];
                $menurow['list'] = empty($menurow['usermancon']) ? 'content_list.php' : $menurow['usermancon'];
                $add_channel_menu[] = $menurow;
            }
            unset($menurow);
		?>

<div id="mcpsub">
  <div class="blank5px"></div>
  <div id="menuBody">
    <div class="wrapBor">
      <!-- 内容中心菜单-->
      <h2 class="menuTitle"><b></b>文章管理</h2>
      <dl class="subDl">
        <?php
        //是否启用文章投稿
        if($channelInfos['article']['issend']==1 && $channelInfos['article']['isshow']==1)
        {
        ?>
        <dd class="articles"><a href="../member/content_list.php?channelid=1" title="已发布的文章"><b></b>我的文章</a></dd>
        <dd><strong><a href="../member/article_add.php" class="act" title="分享一些搞笑的事">我要发布>>></a></strong></dd>
        <?php
      	}
           ?>
        <?php
				//是否允许对自定义模型投稿
				if($cfg_mb_sendall=='Y')
				{
				?>
        <?php
					foreach($add_channel_menu as $nnarr) {
					?>
        <dd class="<?php echo $nnarr['nid'];?>"><a href="../member/<?php echo $nnarr['list'];?>?channelid=<?php echo $nnarr['id'];?>" title="已发布的<?php echo $nnarr['typename'];?>"><b></b><?php echo $nnarr['typename'];?></a><a href='archives_do.php?dopost=addArc&channelid=<?php echo $nnarr['id'];?>' class="act" title="发表新文章">发表</a></dd>
        <?php
					} 
					}
					?>
        <!-- 会员中心首页菜单-->
        <?php
        if($cfg_feedback_forbid=='N')
        {
          //<li class="icon feedback"><a href='../member/myfeedback.php'>我的评论</a></li>
        }
        $dsql->Execute('nn','Select indexname,indexurl From `#@__sys_module` where ismember=1 ');
        while($nnarr = $dsql->GetArray('nn'))
        {
        	@preg_match("/\/(.+?)\//is", $nnarr['indexurl'],$matches);
        	$nnarr['class'] = isset($matches[1]) ? $matches[1] : 'channel';
        	$nnarr['indexurl'] = str_replace("**","=",$nnarr['indexurl']);
        ?>
        <dd class="<?php echo $nnarr['class'];?>"><a href="<?php echo $nnarr['indexurl']; ?>"><b></b><?php echo $nnarr['indexname']; ?></a></dd>
        <?php
        }
        ?>
      </dl>
      <!-- 系统设置菜单-->
      <h2 class="menuTitle"><b></b>麻友信息</a></h2>
      <dl>
        <dd><a href="../member/edit_baseinfo.php"><b></b>修改密码</a></dd>
         <dd><a href="../member/edit_fullinfo.php"><b></b>详细资料</a></dd>
        <dd><a href="../member/edit_face.php"><b></b>头像设置</a></dd>
      </dl>
<h2 class="menuTitle"><b></b>博客管理</a></h2>
<dl>
        <dd><a href="<?php echo $myurl; ?>" title="个人空间" target="_blank"><b></b>查看博客>>></a></dd>
        <dd><a href="../member/edit_space_info.php"><b></b>博客设置</a></dd>
        <dd><a href="../member/myfriend.php"><b></b>我的好友</a></dd>
        <dd><a href="../member/guestbook_admin.php"><b></b>最新留言</a></dd>
    </div>
  </div>
</div>
<?php
    }
    ?>

<!--左侧操作菜单项 -->
