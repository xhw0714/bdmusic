<?php
// 参数：	tinguid = 877578//歌手ting id

// limits = 6//返回条目数量
header('Access-Control-Allow-Origin:*');
$tinguid=isset($_GET['tinguid'])?$_GET['tinguid']:'';
$limits=isset($_GET['limits'])?$_GET['limits']:'6';
$method = "GET";
$url = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=".$tinguid."&limits=".$limits."&use_cluster=1&order=2";
$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_FAILONERROR, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_ENCODING, "gzip");
curl_exec($curl);
?>