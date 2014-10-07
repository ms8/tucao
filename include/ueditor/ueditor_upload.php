<?php
//---  初始化文件引入
require_once(dirname(__FILE__)."/../common.inc.php");
require_once(DEDEINC."/image.func.php");
require_once(DEDEINC."/userlogin.class.php");
Ajaxhead();

$fileSize = 2048;//文件上传大小限制，单位KB
//----  初始化变量
$cuserLogin = new userLogin();

$return = array();
$url = $title = '';
$state = 'SUCCESS';


//上传的文件相关变量
$tmp_file_name = $_FILES["picdata"]["name"];//文件文件名
$tmp_file_size = $_FILES["picdata"]["size"];//文件大小
$tmp_file_type = strtolower(strrchr($_FILES["picdata"]["name"], '.'));//文件类型后缀 .jpg
$sparr = Array("image/pjpeg","image/jpeg","image/gif","image/png","image/xpng","image/wbmp");

$fullTitle = htmlspecialchars($_POST['pictitle'], ENT_QUOTES);                

$mdir = '/uploads/allimg/'.MyDate($cfg_addon_savetype, time());//附件保存目录
$newFileName = $cuserLogin->getUserID().'-'.dd2char(MyDate("ymdHis", time()).mt_rand(100,999));//新的文件名
$fullFileName = $mdir.'/'.$newFileName;//新文件名全称（不含后缀）
$cfg_imgtype = explode('|', $cfg_imgtype);//允许上传的图片类型，后台设置的数组

//上传的临时目录
$tmpdir = DEDEDATA.'/uploadtmp';
if(!is_dir($tmpdir)){
	MkdirAll($tmpdir, $cfg_dir_purview);
	CloseFtp();
}
$tmp_file_new = $tmpdir.'/'.preg_replace("/(.*)[\/]/isU", "", $_FILES["picdata"]['name']);
move_uploaded_file($_FILES["picdata"]['tmp_name'], $tmp_file_new);
$srcInfo = GetImageSize($tmp_file_new, $info);

//---- 上传前的准备，检测目标目录是否存在，不存在就创建一个
if(!is_dir($cfg_basedir.$mdir)){
	MkdirAll($cfg_basedir.$mdir, $cfg_dir_purview);
    CloseFtp();
}
//---- 禁止未登录的用户上传
if($cuserLogin->getUserID() <=0 ){
	$state = "ERROR";
	@unlink($tmp_file_new);	
}
//---- 检测图片格式
if(!in_array(substr($tmp_file_type, 1), $cfg_imgtype)){
	$state = "TYPE";
	@unlink($tmp_file_new);	
}
if(!is_array($srcInfo)){
	$state = "TYPE";
	@unlink($tmp_file_new);
}else{
	if(!in_array($srcInfo['mime'], $sparr)){
		$state = "TYPE";
		@unlink($tmp_file_new);		
	}
}
//---- 检测文档大小
if($tmp_file_size > $fileSize * 1024){
	$state = "SIZE";
	@unlink($tmp_file_new);	
}

$pathfullfilename = $fullFileName.$tmp_file_type;

$move = copy($tmp_file_new, $cfg_basedir.$pathfullfilename);
if($move){
	$nt = time();
	$sizes = getimagesize($pathfullfilename, $info);
	$imgwidthValue = $sizes[0];
	$imgheightValue = $sizes[1];
	$imgsize = filesize($pathfullfilename);	
	$inquery = "INSERT INTO `#@__uploads`(arcid,title,url,mediatype,width,height,playtime,filesize,uptime,mid)
	VALUES ('0','$filename','".$pathfullfilename."','1','$imgwidthValue','$imgheightValue','0','{$imgsize}','{$nt}','".$cuserLogin->getUserID()."'); ";
	$dsql->ExecuteNoneQuery($inquery);
	$fid = $dsql->GetLastID();
	AddMyAddon($fid, $pathfullfilename);	
}else{
	$state = "ERROR";
}
@unlink($tmp_file_new);
$return['url'] = $pathfullfilename;
$return['title'] = $fullTitle;
$return['state'] = $state;
echo echo_json_encode($return);
exit();

function echo_json_encode($return){
	return json_encode($return);
}
?>