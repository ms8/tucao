<?php
if(!isset($GLOBALS['_vars'])) $GLOBALS['_vars'] = array(); 
$fields = array();
 include $this->CompilerInclude("header.htm");
 ?>
<div class="wrapper">
<div class="mainBox">
<div class="mainBor">
  <div class="west">
  <?php include $this->CompilerInclude("side_icon.htm");
 ?>
  </div>
  <div class="east">
    <dl class="border">
      <dt class="caption"><strong>TA的文章</strong></dt>
      <dd class="body">
<?php
$atts = array();
$atts['tagname'] = 'spacenewart';
$atts['row'] = '10';
$atts['titlelen'] = '60';
$blockValue = MakePublicTag($atts,$this->refObj,$fields); 
if(is_array($blockValue) && count($blockValue) > 0){
foreach( $blockValue as $key=>$fields )
{
?>
        <div class="mp10 dashed">
          <div class="mB10">
          <h3 class="fLeft"><a href="<?php echo $fields['arcurl']; ?>" title="<?php echo $fields['title']; ?>" target="_blank"><?php echo $fields['title']; ?></a></h3>
          <span class="fr aGray">(<?php echo MyDate('Y-m-d h:i',$fields['pubdate']); ?>)</span>
          </div>
          <div class="clear"></div>
          <p class="f14 aBlack lh22"><?php echo $fields['description']; ?></p>
          <div id="artInfo">
            <ul class="fRight fLeftChild">
              <li><a href="<?php echo $fields['arcurl']; ?>" target="_blank" title="<?php echo $fields['title']; ?>">浏览</a>(<?php echo $fields['click']; ?>)</li>
              <li><a href="<?php echo $fields['arcurl']; ?>#comment" target="_blank">评论</a>(<?php echo $fields['scores']; ?>)</li>
            </ul>
          </div>
          <div class="clearfix pB10"></div>
        </div>
        <?php
}
}
?>
        <div class="fRight mB10"><a href="index.php?uid=<?php echo $GLOBALS['_vars']['userid_e']; ?>&action=archives">更多内容&gt;&gt;</a></div>
        <div class="clearfix"></div>
      </dd>
    </dl>
    <div class="box230">
    <?php include $this->CompilerInclude("side_news.htm");
  include $this->CompilerInclude("side_visitor.htm");
  include $this->CompilerInclude("side_search.htm");
 ?>
    </div>
  </div>
</div></div>
</div>
<?php include $this->CompilerInclude("footer.htm");
 ?>
</body>
</html>