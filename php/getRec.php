<?php
//参数：songid = 877578 //歌曲id  num = 5//返回条目数量
header('Access-Control-Allow-Origin:*');
$songid=isset($_GET['songid'])?$_GET['songid']:'';
$num=isset($_GET['num'])?$_GET['num']:'';
$method = "GET";
$url = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=".$songid."&num=".$num."";
$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_FAILONERROR, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_ENCODING, "gzip");
curl_exec($curl);
?>