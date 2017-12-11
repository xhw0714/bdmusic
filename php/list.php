<?php
//参数：	type = 1-新歌榜,2-热歌榜,6-ktv热歌榜,7-叱咤歌曲榜,8-Billboard单曲榜,9-雪碧音碰音榜,,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜
//size = 10 //返回条目数量
//offset = 0 //获取偏移
$type=isset($_GET['type'])?$_GET['type']:"1";
$size=isset($_GET['size'])?intval($_GET['size']):10;
$offset=isset($_GET['offset'])?intval($_GET['offset']):0;
$method = "GET";
$url = "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=".$type."&size=".$size."&offset=".$offset."";
$curl = curl_init();
curl_setopt($curl, CURLOPT_CUSTOMREQUEST, $method);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_FAILONERROR, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, false);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_ENCODING, "gzip");
curl_exec($curl);
?>