<?php
if(!defined('DEDEINC')) exit('Request Error!');

require_once(DEDEINC.'/arc.partview.class.php');
require_once(DEDEINC.'/ftp.class.php');
helper('cache');
@set_time_limit(0);

/**
 * 自由列表类
 *
 * @package          ListView
 * @subpackage       DedeCMS.Libraries
 * @link             http://www.dedecms.com
 */
class IndexBlogView
{
    var $dsql;
    var $dtp;
    var $dtp2;
    var $TypeID;
    var $TypeLink;
    var $PageNo;
    var $TotalPage;
    var $TotalResult;
    var $PageSize;
    var $ChannelUnit;
    var $ListType;
    var $Fields;
    var $PartView;
    var $upPageType;
    var $addSql;
    var $IsError;
    var $CrossID;
    var $IsReplace;
    var $ftp;
    var $remoteDir;
    
    /**
     *  php5构造函数
     *
     * @access    public
     * @param     int  $typeid  栏目ID
     * @param     int  $uppage  上一页
     * @return    string
     */
    function __construct($uppage=1)
    {
        global $dsql,$ftp;
        $this->dsql = &$dsql;
        $this->CrossID = '';
        $this->IsReplace = false;
        $this->IsError = false;
        $this->dtp = new DedeTagParse();
        $this->dtp->SetRefObj($this);
        $this->dtp->SetNameSpace("dede", "{", "}");
        $this->dtp2 = new DedeTagParse();
        $this->dtp2->SetNameSpace("field","[","]");
        $this->upPageType = $uppage;
        $this->ftp = &$ftp;
        $this->remoteDir = '';
        $this->TotalResult = is_numeric($this->TotalResult)? $this->TotalResult : "";
    }

    //php4构造函数
    function IndexBlogView($uppage=0){
        $this->__construct($uppage);
    }
    
    //关闭相关资源
    function Close()
    {

    }

    /**
     *  统计列表里的记录
     *
     * @access    public
     * @param     string
     * @return    string
     */
    function CountRecord()
    {
        global $cfg_list_son,$cfg_need_typeid2,$cfg_cross_sectypeid;
        if(empty($cfg_need_typeid2)) $cfg_need_typeid2 = 'N';
        
        //统计数据库记录
        $this->TotalResult = -1;
        if(isset($GLOBALS['TotalResult'])) $this->TotalResult = $GLOBALS['TotalResult'];
        if(isset($GLOBALS['PageNo'])) $this->PageNo = $GLOBALS['PageNo'];
        else $this->PageNo = 1;

        if($this->TotalResult== -1)
        {
            $cquery = "SELECT COUNT(*) AS dd FROM `#@__archives` WHERE arcrank > -1";
            $row = $this->dsql->GetOne($cquery);
            if(is_array($row))
            {
                $this->TotalResult = $row['dd'];
            }
            else
            {
                $this->TotalResult = 0;
            }
        }
	

        //初始化列表模板，并统计页面总数
        //$this->SetTemplet();
		
        $this->dtp->LoadTemplate($this->tempfile);
        $ctag = $this->dtp->GetTag("page");
        if(!is_object($ctag))
        {
            $ctag = $this->dtp->GetTag("list");
        }
        if(!is_object($ctag))
        {
            $this->PageSize = 20;
        }
        else
        {
            if($ctag->GetAtt("pagesize")!="")
            {
                $this->PageSize = $ctag->GetAtt("pagesize");
            }
            else
            {
                $this->PageSize = 20;
            }
        }
        $this->TotalPage = ceil($this->TotalResult/$this->PageSize);
    }

	function SetTemplet($tempfile){
		if($tempfile == ''){
			$this->tempfile = $GLOBALS['cfg_basedir'].$GLOBALS['cfg_templets_dir']."/".$GLOBALS['cfg_df_style']."/index.htm";
		}else{
			$this->tempfile = $tempfile;
		}
		if(!file_exists($this->tempfile) || !is_file($this->tempfile)){
            echo "模板文件不存在，无法解析文档！";
            exit();			
		}
		
	}
    /**
     *  列表创建HTML
     *
     * @access    public
     * @param     string  $startpage  开始页面
     * @param     string  $makepagesize  创建文件数目
     * @param     string  $isremote  是否为远程
     * @return    string
     */
    function MakeHtml($startpage=1, $makepagesize=0, $isremote=0, $file)
    {
        global $cfg_remote_site;
        if(empty($startpage))
        {
            $startpage = 1;
        }		
        $this->CountRecord();
        $this->ParseTempletsFirst();
		$this->MakePageSize = $makepagesize;
        $totalpage = ceil($this->TotalResult/$this->PageSize);
        if($totalpage==0)
        {
            $totalpage = 1;
        }
        
		$murl = '';
        if($makepagesize > 0)
        {
            $endpage = $startpage+$makepagesize;
        }
        else
        {
            $endpage = ($totalpage+1);
        }
        if( $endpage >= $totalpage+1 )
        {
            $endpage = $totalpage+1;
        }
        if($endpage==1)
        {
            $endpage = 2;
        }
		
		$fielname = basename($file);//包括扩展名
		$filepath = str_replace($fielname, '', $file);//文件路径
		$fielnames = explode('.', $fielname);//分割文件名数组
		
		$this->f_prefix = $f_prefix = $fielnames[1];//取得文件后缀（不包括.）
		$this->f_name = $f_name = basename($file, '.'.$f_prefix);//纯文件名

		
        for($this->PageNo=$startpage; $this->PageNo < $endpage; $this->PageNo++){
			$this->ParseDMFields($this->PageNo,1);
			$this->dtp->SaveTo($filepath.$f_name.'_'.$this->PageNo.'.'.$f_prefix);			
			copy($filepath.$f_name.'_1.'.$f_prefix, $file);	
            //如果启用远程发布则需要进行判断
            if($cfg_remote_site=='Y'&& $isremote == 1)
            {
                //分析远程文件路径
                $remotefile = str_replace(DEDEROOT, '',$makeFile);
                $localfile = '..'.$remotefile;
                $remotedir = preg_replace('/[^\/]*\.html/', '',$remotefile);
                //不相等则说明已经切换目录则可以创建镜像
                $this->ftp->rmkdir($remotedir);
                $this->ftp->upload($localfile, $remotefile, 'acii');
            }
        }
        return $murl;
    }

    /**
     *  显示列表
     *
     * @access    public
     * @return    void
     */
    function Display()
    {
        $this->CountRecord();
        $this->ParseTempletsFirst();
        $this->ParseDMFields($this->PageNo,0);
        $this->dtp->Display();
    }

    /**
     *  获得站点的真实根路径
     *
     * @access    public
     * @return    string
     */
    function GetTruePath()
    {
        $truepath = $GLOBALS["cfg_basedir"];
        return $truepath;
    }

    /**
     *  获得真实连接路径
     *
     * @access    public
     * @param     string  $nurl  地址
     * @return    string
     */
    function GetTrueUrl($nurl)
    {
        if($this->Fields['moresite']==1)
        {
            if($this->Fields['sitepath']!='')
            {
                $nurl = preg_replace("/^".$this->Fields['sitepath']."/", '', $nurl);
            }
            $nurl = $this->Fields['siteurl'].$nurl;
        }
        return $nurl;
    }

    /**
     *  解析模板，对固定的标记进行初始给值
     *
     * @access    public
     * @return    string
     */
    function ParseTempletsFirst()
    {
        if(isset($this->TypeLink->TypeInfos['reid']))
        {
            $GLOBALS['envs']['reid'] = $this->TypeLink->TypeInfos['reid'];
        }
        $GLOBALS['envs']['typeid'] = $this->TypeID;
        $GLOBALS['envs']['topid'] = GetTopid($this->Fields['typeid']);
        $GLOBALS['envs']['cross'] = 1;
        MakeOneTag($this->dtp,$this);
    }

    /**
     *  解析模板，对内容里的变动进行赋值
     *
     * @access    public
     * @param     int  $PageNo  页数
     * @param     int  $ismake  是否编译
     * @return    string
     */
    function ParseDMFields($PageNo,$ismake=1)
    {
        //替换第二页后的内容
        if(($PageNo>1 || strlen($this->Fields['content'])<10 ) && !$this->IsReplace)
        {
            $this->dtp->SourceString = str_replace('[cmsreplace]','display:none',$this->dtp->SourceString);
            $this->IsReplace = true;
        }
        foreach($this->dtp->CTags as $tagid=>$ctag)
        {
            if($ctag->GetName()=="list")
            {
                $limitstart = ($this->PageNo-1) * $this->PageSize;
                $row = $this->PageSize;
                if(trim($ctag->GetInnerText())=="")
                {
                    $InnerText = GetSysTemplets("list_fulllist.htm");
                }
                else
                {
                    $InnerText = trim($ctag->GetInnerText());
                }
                $this->dtp->Assign($tagid,
                $this->GetArcList(
                $limitstart,
                $row,
                $ctag->GetAtt("col"),
                $ctag->GetAtt("titlelen"),
                $ctag->GetAtt("infolen"),
                $ctag->GetAtt("imgwidth"),
                $ctag->GetAtt("imgheight"),
                $ctag->GetAtt("listtype"),
                $ctag->GetAtt("orderby"),
                $InnerText,
                $ctag->GetAtt("tablewidth"),
                $ismake,
                $ctag->GetAtt("orderway")
                )
                );
            }
            else if($ctag->GetName()=="pagelist")
            {
                $list_len = trim($ctag->GetAtt("listsize"));
                $ctag->GetAtt("listitem")=="" ? $listitem="index,pre,pageno,next,end,option" : $listitem=$ctag->GetAtt("listitem");
                if($list_len=="")
                {
                    $list_len = 3;
                }
                if($ismake==0)
                {
                    $this->dtp->Assign($tagid,$this->GetPageListDM($list_len,$listitem));
                }
                else
                {
                    $this->dtp->Assign($tagid,$this->GetPageListST($list_len,$listitem));
                }
            }
            else if($PageNo!=1 && $ctag->GetName()=='field' && $ctag->GetAtt('display')!='')
            {
                $this->dtp->Assign($tagid,'');
            }
        }
    }

    /**
     *  获得要创建的文件名称规则
     *
     * @access    public
     * @param     int  $typeid  栏目ID
     * @param     string  $wname
     * @param     string  $typedir  栏目目录
     * @param     string  $defaultname  默认名称
     * @param     string  $namerule2  栏目规则
     * @return    string
     */
    function GetMakeFileRule($typeid,$wname,$typedir,$defaultname,$namerule2)
    {
        $typedir = MfTypedir($typedir);
        if($wname=='index')
        {
            return $typedir.'/'.$defaultname;
        }
        else
        {
            $namerule2 = str_replace('{tid}',$typeid,$namerule2);
            $namerule2 = str_replace('{typedir}',$typedir,$namerule2);
            return $namerule2;
        }
    }

    /**
     *  获得一个单列的文档列表
     *
     * @access    public
     * @param     int  $limitstart  限制开始  
     * @param     int  $row  行数 
     * @param     int  $col  列数
     * @param     int  $titlelen  标题长度
     * @param     int  $infolen  描述长度
     * @param     int  $imgwidth  图片宽度
     * @param     int  $imgheight  图片高度
     * @param     string  $listtype  列表类型
     * @param     string  $orderby  排列顺序
     * @param     string  $innertext  底层模板
     * @param     string  $tablewidth  表格宽度
     * @param     string  $ismake  是否编译
     * @param     string  $orderWay  排序方式
     * @return    string
     */
    function GetArcList($limitstart=0,$row=10,$col=1,$titlelen=30,$infolen=250,
    $imgwidth=120,$imgheight=90,$listtype="all",$orderby="default",$innertext="",$tablewidth="100",$ismake=1,$orderWay='desc')
    {
        global $cfg_list_son,$cfg_digg_update;
        
        $typeid=$this->TypeID;
        
        if($row=='') $row = 10;
        if($limitstart=='') $limitstart = 0;
        if($titlelen=='') $titlelen = 100;
        if($infolen=='') $infolen = 250;
        if($imgwidth=='') $imgwidth = 120;
        if($imgheight=='') $imgheight = 120;
        if($listtype=='') $listtype = 'all';
        if($orderWay=='') $orderWay = 'desc';
        
        if($orderby=='') {
            $orderby='default';
        }
        else {
            $orderby=strtolower($orderby);
        }
        
        $tablewidth = str_replace('%','',$tablewidth);
        if($tablewidth=='') $tablewidth=100;
        if($col=='') $col=1;
        $colWidth = ceil(100/$col);
        $tablewidth = $tablewidth.'%';
        $colWidth = $colWidth.'%';
        
        $innertext = trim($innertext);
        if($innertext=='') {
            $innertext = GetSysTemplets('list_fulllist.htm');
        }

        //排序方式
        $ordersql = '';
        if($orderby=="senddate" || $orderby=="id") {
            $ordersql=" ORDER BY arc.id $orderWay";
        }
        else if($orderby=="hot" || $orderby=="click") {
            $ordersql = " ORDER BY arc.click $orderWay";
        }
        else if($orderby=="lastpost") {
            $ordersql = "  ORDER BY arc.lastpost $orderWay";
        }
        else {
            $ordersql=" ORDER BY arc.pubdate $orderWay";
        }	
		$this->addSql = "arc.arcrank > -1";
		$query = "SELECT arc.*,tp.typedir,tp.typename,tp.isdefault,tp.defaultname,
           tp.namerule,tp.namerule2,tp.ispart,tp.moresite,tp.siteurl,tp.sitepath
           FROM `#@__archives` arc
           LEFT JOIN `#@__arctype` tp ON arc.typeid=tp.id
           WHERE {$this->addSql} $ordersql LIMIT $limitstart,$row";		
        $this->dsql->SetQuery($query);
        $this->dsql->Execute('al');
        $t2 = ExecTime();

        //echo $t2-$t1;
        $artlist = '';
        $this->dtp2->LoadSource($innertext);
        $GLOBALS['autoindex'] = 0;
        for($i=0;$i<$row;$i++)
        {
            if($col>1)
            {
                $artlist .= "<div>\r\n";
            }
            for($j=0;$j<$col;$j++)
            {
                if($row = $this->dsql->GetArray("al"))
                {
                    $GLOBALS['autoindex']++;
                    $ids[$row['id']] = $row['id'];

                    //处理一些特殊字段
                    $row['infos'] = cn_substr($row['description'],$infolen);
                    $row['id'] =  $row['id'];
					if($cfg_digg_update > 0)
					{
						$prefix = 'diggCache';
						$key = 'aid-'.$row['id'];
						$cacherow = GetCache($prefix, $key);
						$row['goodpost'] = $cacherow['goodpost'];
						$row['badpost'] = $cacherow['badpost'];
						$row['scores'] = $cacherow['scores'];
					}

                    if($row['corank'] > 0 && $row['arcrank']==0)
                    {
                        $row['arcrank'] = $row['corank'];
                    }

                    $row['filename'] = $row['arcurl'] = GetFileUrl($row['id'],$row['typeid'],$row['senddate'],$row['title'],$row['ismake'],
                    $row['arcrank'],$row['namerule'],$row['typedir'],$row['money'],$row['filename'],$row['moresite'],$row['siteurl'],$row['sitepath']);
                    $row['typeurl'] = GetTypeUrl($row['typeid'],MfTypedir($row['typedir']),$row['isdefault'],$row['defaultname'],
                    $row['ispart'],$row['namerule2'],$row['moresite'],$row['siteurl'],$row['sitepath']);
                    if($row['litpic'] == '-' || $row['litpic'] == '')
                    {
                        $row['litpic'] = $GLOBALS['cfg_cmspath'].'/images/defaultpic.gif';
                    }
                    if(!preg_match("/^http:\/\//i", $row['litpic']) && $GLOBALS['cfg_multi_site'] == 'Y')
                    {
                        $row['litpic'] = $GLOBALS['cfg_mainsite'].$row['litpic'];
                    }
                    $row['picname'] = $row['litpic'];
                    $row['stime'] = GetDateMK($row['pubdate']);
                    $row['typelink'] = "<a href='".$row['typeurl']."'>".$row['typename']."</a>";
                    $row['image'] = "<img src='".$row['picname']."' border='0' width='$imgwidth' height='$imgheight' alt='".preg_replace("/['><]/", "", $row['title'])."'>";
                    $row['imglink'] = "<a href='".$row['filename']."'>".$row['image']."</a>";
                    $row['fulltitle'] = $row['title'];
                    $row['title'] = cn_substr($row['title'],$titlelen);
                    if($row['color']!='')
                    {
                        $row['title'] = "<font color='".$row['color']."'>".$row['title']."</font>";
                    }
                    if(preg_match('/c/', $row['flag']))
                    {
                        $row['title'] = "<b>".$row['title']."</b>";
                    }
                    $row['textlink'] = "<a href='".$row['filename']."'>".$row['title']."</a>";
                    $row['plusurl'] = $row['phpurl'] = $GLOBALS['cfg_phpurl'];
                    $row['memberurl'] = $GLOBALS['cfg_memberurl'];
                    $row['templeturl'] = $GLOBALS['cfg_templeturl'];

                    //编译附加表里的数据
                    foreach($row as $k=>$v)
                    {
                        $row[strtolower($k)] = $v;
                    }
                    foreach($this->ChannelUnit->ChannelFields as $k=>$arr)
                    {
                        if(isset($row[$k]))
                        {
                            $row[$k] = $this->ChannelUnit->MakeField($k,$row[$k]);
                        }
                    }
                    if(is_array($this->dtp2->CTags))
                    {
                        foreach($this->dtp2->CTags as $k=>$ctag)
                        {
                            if($ctag->GetName()=='array')
                            {
                                //传递整个数组，在runphp模式中有特殊作用
                                $this->dtp2->Assign($k,$row);
                            }
                            else
                            {
                                if(isset($row[$ctag->GetName()]))
                                {
                                    $this->dtp2->Assign($k,$row[$ctag->GetName()]);
                                }
                                else
                                {
                                    $this->dtp2->Assign($k,'');
                                }
                            }
                        }
                    }
                    $artlist .= $this->dtp2->GetResult();
                }//if hasRow

            }//Loop Col

            if($col>1)
            {
                $i += $col - 1;
                $artlist .= "    </div>\r\n";
            }
        }//Loop Line

        $t3 = ExecTime();

        //echo ($t3-$t2);
        $this->dsql->FreeResult('al');
        return $artlist;
    }

    /**
     *  获取静态的分页列表
     *
     * @access    public
     * @param     string  $list_len  列表宽度
     * @param     string  $list_len  列表样式
     * @return    string
     */
    function GetPageListST($list_len,$listitem="index,end,pre,next,pageno")
    {
        $prepage = $nextpage = '';
        $prepagenum = $this->PageNo-1;
        $nextpagenum = $this->PageNo+1;
        if($list_len=='' || preg_match("/[^0-9]/", $list_len))
        {
            $list_len=3;
        }
        $totalpage = ceil($this->TotalResult/$this->PageSize);	
        
		//强制将静态页面的页面最大值设置为后台允许生成的最大值，避免出现无法访问
		if($totalpage > $this->MakePageSize){
			$totalpage = $this->MakePageSize;
		}
		
		
		if($totalpage<=1 && $this->TotalResult>0)
        {

            return "<span class=\"pageinfo\">共 <strong>1</strong>页<strong>".$this->TotalResult."</strong>条记录</span>\r\n";
        }
        if($this->TotalResult == 0)
        {
            return "<span class=\"pageinfo\">共 <strong>0</strong>页<strong>".$this->TotalResult."</strong>条记录</span>\r\n";
        }
        $purl = $this->GetCurUrl();
        $maininfo = "<span class=\"pageinfo\">共 <strong>{$totalpage}</strong>页<strong>".$this->TotalResult."</strong>条</span>\r\n";	
        
		$tnamerule = $this->f_name.'_{page}.'.$this->f_prefix;

        //获得上一页和主页的链接
        if($this->PageNo != 1)
        {
            $prepage.="<a href='".str_replace("{page}",$prepagenum,$tnamerule)."'>上一页</a>\r\n";
            $indexpage="<a href='".str_replace("{page}",1,$tnamerule)."'>首页</a>\r\n";
        }
        else
        {
            $indexpage="首页\r\n";
        }

        //下一页,未页的链接
        if($this->PageNo!=$totalpage && $totalpage>1)
        {
            $nextpage.="<a href='".str_replace("{page}",$nextpagenum,$tnamerule)."'>下一页</a>\r\n";
            $endpage="<a href='".str_replace("{page}",$totalpage,$tnamerule)."'>末页</a>\r\n";
        }
        else
        {
            $endpage="末页\r\n";
        }

        //option链接
        $optionlist = '';

        $optionlen = strlen($totalpage);
        $optionlen = $optionlen*12 + 18;
        if($optionlen < 36) $optionlen = 36;
        if($optionlen > 100) $optionlen = 100;
        $optionlist = "<select name='sldd' style='width:{$optionlen}px' onchange='location.href=this.options[this.selectedIndex].value;'>\r\n";
        for($mjj=1;$mjj<=$totalpage;$mjj++)
        {
            if($mjj==$this->PageNo)
            {
                $optionlist .= "<option value='".str_replace("{page}",$mjj,$tnamerule)."' selected>$mjj</option>\r\n";
            }
            else
            {
                $optionlist .= "<option value='".str_replace("{page}",$mjj,$tnamerule)."'>$mjj</option>\r\n";
            }
        }
        $optionlist .= "</select>\r\n";

        //获得数字链接
        $listdd="";
        $total_list = $list_len * 2 + 1;
        if($this->PageNo >= $total_list)
        {
            $j = $this->PageNo-$list_len;
            $total_list = $this->PageNo+$list_len;
            if($total_list>$totalpage)
            {
                $total_list=$totalpage;
            }
        }
        else
        {
            $j=1;
            if($total_list>$totalpage)
            {
                $total_list=$totalpage;
            }
        }
        for($j;$j<=$total_list;$j++)
        {
            if($j==$this->PageNo)
            {
                //$listdd.= "<li class=\"thisclass\">$j\r\n";
				$listdd.="<a class='now' href='".str_replace("{page}",$j,$tnamerule)."'>".$j."</a>\r\n";
            }
            else
            {
                $listdd.="<a href='".str_replace("{page}",$j,$tnamerule)."'>".$j."</a>\r\n";
            }
        }
        $plist = '';
        if(preg_match('/index/i', $listitem)) $plist .= $indexpage;
        if(preg_match('/pre/i', $listitem)) $plist .= $prepage;
        if(preg_match('/pageno/i', $listitem)) $plist .= $listdd;
        if(preg_match('/next/i', $listitem)) $plist .= $nextpage;
        if(preg_match('/end/i', $listitem)) $plist .= $endpage;
        if(preg_match('/option/i', $listitem)) $plist .= $optionlist;
        if(preg_match('/info/i', $listitem)) $plist .= $maininfo;
        
        return $plist;
    }

    /**
     *  获取动态的分页列表
     *
     * @access    public
     * @param     string  $list_len  列表宽度
     * @param     string  $list_len  列表样式
     * @return    string
     */
    function GetPageListDM($list_len,$listitem="index,end,pre,next,pageno")
    {
        global $cfg_rewrite;
        $prepage = $nextpage = '';
        $prepagenum = $this->PageNo-1;
        $nextpagenum = $this->PageNo+1;
        if($list_len=='' || preg_match("/[^0-9]/", $list_len))
        {
            $list_len=3;
        }
        $totalpage = ceil($this->TotalResult/$this->PageSize);		
		if($totalpage<=1 && $this->TotalResult>0)
        {
            return "<span class=\"pageinfo\">共 1 页/".$this->TotalResult." 条记录</span>\r\n";
        }
        if($this->TotalResult == 0)
        {
            return "<span class=\"pageinfo\">共 0 页/".$this->TotalResult." 条记录</span>\r\n";
        }
        $maininfo = "<span class=\"pageinfo\">共 <strong>{$totalpage}</strong>页<strong>".$this->TotalResult."</strong>条</span>\r\n";
        
        $purl = $this->GetCurUrl();
        // 如果开启为静态,则对规则进行替换
        if($cfg_rewrite == 'Y')
        {
            $nowurls = preg_replace("/\-/", ".php?", $purl);
            $nowurls = explode("?", $nowurls);
            $purl = $nowurls[0];
        }

        $geturl = "TotalResult=".$this->TotalResult."&";
        $purl .= '?'.$geturl;
        
        $optionlist = '';

        //获得上一页和下一页的链接
        if($this->PageNo != 1)
        {
            $prepage.="<a href='".$purl."PageNo=$prepagenum'>上一页</a>\r\n";
            $indexpage="<a href='".$purl."PageNo=1'>首页</a>\r\n";
        }
        else
        {
            $indexpage="<a>首页</a>\r\n";
        }
        if($this->PageNo!=$totalpage && $totalpage>1)
        {
            $nextpage.="<a href='".$purl."PageNo=$nextpagenum'>下一页</a>\r\n";
            $endpage="<a href='".$purl."PageNo=$totalpage'>末页</a>\r\n";
        }
        else
        {
            $endpage="<a>末页</a>\r\n";
        }


        //获得数字链接
        $listdd="";
        $total_list = $list_len * 2 + 1;
        if($this->PageNo >= $total_list)
        {
            $j = $this->PageNo-$list_len;
            $total_list = $this->PageNo+$list_len;
            if($total_list>$totalpage)
            {
                $total_list=$totalpage;
            }
        }
        else
        {
            $j=1;
            if($total_list>$totalpage)
            {
                $total_list=$totalpage;
            }
        }
        for($j;$j<=$total_list;$j++)
        {
            if($j==$this->PageNo)
            {
                //$listdd.= "<li class=\"thisclass\"><a>$j</a>\r\n";
				$listdd.="<a class='now' href='".$purl."PageNo=$j'>".$j."</a>\r\n";
            }
            else
            {
                $listdd.="<a href='".$purl."PageNo=$j'>".$j."</a>\r\n";
            }
        }

        $plist = '';
        if(preg_match('/index/i', $listitem)) $plist .= $indexpage;
        if(preg_match('/pre/i', $listitem)) $plist .= $prepage;
        if(preg_match('/pageno/i', $listitem)) $plist .= $listdd;
        if(preg_match('/next/i', $listitem)) $plist .= $nextpage;
        if(preg_match('/end/i', $listitem)) $plist .= $endpage;
        if(preg_match('/option/i', $listitem)) $plist .= $optionlist;
        if(preg_match('/info/i', $listitem)) $plist .= $maininfo;
        
        if($cfg_rewrite == 'Y')
        {
            $plist = str_replace('.php?tid=', '-', $plist);
            $plist = str_replace('&TotalResult=', '-', $plist);
            $plist = preg_replace("/&PageNo=(\d+)/i",'-\\1.html',$plist);
        }
        return $plist;
    }

    /**
     *  获得当前的页面文件的url
     *
     * @access    public
     * @return    string
     */
    function GetCurUrl()
    {
        if(!empty($_SERVER['REQUEST_URI']))
        {
            $nowurl = $_SERVER['REQUEST_URI'];
            $nowurls = explode('?', $nowurl);
            $nowurl = $nowurls[0];
        }
        else
        {
            $nowurl = $_SERVER['PHP_SELF'];
        }
        return $nowurl;
    }
}//End Class
