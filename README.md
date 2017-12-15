# README

用React,React-router写的百度音乐项目。引用百度音乐api

### 项目结构

```
config   //配置文件，系统默认
node_modules //依赖，系统默认
php //api文件
	--down.php //下载api 
	--getRec.php //相似歌曲，推荐列表api
	--getSinger.php //获取歌手信息
	--getSingNum.php //获取歌手的歌曲
	--lcy.php //获取歌词信息
	--list.php //获取歌曲列表
	--search.php //获取搜索信息
	--songfile.php //获取歌曲文件
	--songmes.php //获取歌曲信息
public //模板文件
scripts //配置文件，系统默认
src //开发文件
	--common //公用的样式图片
	--component //共用组件
		--headNav //头部导航，附带样式
		--playSmall //底部播放器
		--playBig //全屏播放器
		--login //登录注册页
		--search //搜索页
	--container //页面组件
		--artists //歌手页面
		--index //首页
		--listcate //排行版页面
		--songlists //分类页面
		--ucenter //用户页面
		--toplist //榜单详情页
	index.js //入口文件
```



### 百度音乐api



假设文件在本地服务器，全接口链接：http://localhost/bdmusic/php



#### 一、获取列表

```javascript
例： /list.php?type=1&size=10&offset=0

参数：	type = 1-新歌榜,2-热歌榜,11-摇滚榜,12-爵士,16-流行,21-欧美金曲榜,22-经典老歌榜,23-情歌对唱榜,24-影视金曲榜,25-网络歌曲榜

size = 10 //返回条目数量
offset = 0 //获取偏移
```



#### 二、搜索

```javascript
例：/search.php?query=王菲

参数：query = '' //搜索关键字
```



#### 三、歌曲文件

```javascript
例： /songfile.php?songid=877578
//参数：songid = 877578 //歌曲id
```



#### 四、歌曲信息

```javascript
例： /songmes.php?songid=877578
//参数：songid = 877578 //歌曲id
```



#### 五、LRC歌词

```javascript
例 ：/lcy.php??songi=877578
//参数：songid = 877578 //歌曲id
```



#### 六、推荐列表

```javascript
例： /getRec.php?song_id=877578&num=5
//参数：	song_id = 877578
//num = 5//返回条目数量
```



#### 七、下载

```javascript
例  : /down.php?songid=877578&bit=24&t=1393123213

//参数：	songid = 877578//歌曲id
//bit = 24, 64, 128, 192, 256, 320 ,flac//码率
//t = 1430215999,, //时间戳
```



#### 八、歌手信息

```javascript
例 ： /getSinger.php?tinguid=877578
//参数：	tinguid = 877578 //歌手ting id
```



#### 九、歌手歌曲列表

```javascript
例 :  /getsingNum.php?tinguid=877578&limits=6&use_cluster=1&order=2
//参数：	tinguid = 877578//歌手ting id
//limits = 6//返回条目数量
```

