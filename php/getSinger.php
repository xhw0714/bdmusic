<?php
//参数：	tinguid = 877578 //歌手ting id
$tinguid=isset($_GET['tinguid'])?$_GET['tinguid']:'';
$method = "GET";
$url = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=".$tinguid."";
$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_FAILONERROR, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_ENCODING, "gzip");
curl_exec($curl);
?>