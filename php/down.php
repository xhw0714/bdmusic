<?php
// 参数：	songid = 877578//歌曲id

// bit = 24, 64, 128, 192, 256, 320 ,flac//码率

// _t = 1430215999,, //时间戳
header('Access-Control-Allow-Origin:*');
$songid=isset($_GET['songid'])?$_GET['songid']:'';
$bit=isset($_GET['bit'])?$_GET['bit']:'24';
$t=isset($_GET['t'])?$_GET['t']:'1430215999';
$method = "GET";
$url = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.downWeb&songid=".$songid."&bit=".$bit."&_t=".$t."";
$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_FAILONERROR, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_ENCODING, "gzip");
curl_exec($curl);
?>