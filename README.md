# README

用React,React-router,redux,fetch写的百度音乐项目。引用百度音乐api（后来引用网易云API）

### 项目运行

注意：运行前请运行下面的API

```javascript
git clone https://github.com/xhw0714/bdmusic.git
cd bdmusic
npm i
npm start 
```



### 项目结构

```
config   //配置文件，系统默认
node_modules //依赖，系统默认
php //api文件 //已经作废
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
	--actions  //redux的actions
	--common //公用的样式图片
		--App.js //主页渲染页面
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
        --singer //歌手详情页面
		--songlists //分类页面
		--ucenter //用户页面
		--toplist //榜单详情页
	--methods //网易云接口的封装 
	--reducer //redux的reducer
	index.js //入口文件
```



### 百度音乐api（因为百度音乐有限制，无法获取音乐。所以换网易云API，在下面有说明）



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



### 网易云API

感谢[Binaryify](https://github.com/Binaryify) 提供的API文件

github: https://github.com/Binaryify/NeteaseCloudMusicApi

文档使用地址:https://binaryify.github.io/NeteaseCloudMusicApi/#/

统一端口3000

运行API

```javascript
git clone https://github.com/Binaryify/NeteaseCloudMusicApi.git
cd NeteaseCloudMusicApi
npm i
node app.js
```

要实现跨域，在app.js文件上加上

```javascript
app.all('*', function (req, res, next) {
  if (req.path !== '/' && !req.path.includes('.')) {
    res.header('Access-Control-Allow-Credentials', true)
    // 这里获取 origin 请求头 而不是用 *
    res.header('Access-Control-Allow-Origin', req.headers['origin'] || '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('Content-Type', 'application/json;charset=utf-8')
  }
  next()
})
```









### 用fetch封装API接口

要使用的时候只要import {相关的接口} from "methods.js"就可以

```javascript

//新歌推荐
export function newSong (){
    return fetch("http://localhost:3000/personalized/newsong").then(res=>{
        return res.json()
    })
}

//获取歌曲信息
export function songDetail (payload){
    return fetch("http://localhost:3000/song/detail?ids="+payload.id+"").then(res=>{
        return res.json()
    })
}

//获取歌曲链接
export function songUrl (payload){
    return fetch("http://localhost:3000/music/url?id="+payload.id+"").then(res=>{
        return res.json()
    })
}

//搜索
// limit : 返回数量,默认为30
// offset : 偏移数量，用于分页,如: 如:(页数-1)*30, 其中 30 为 limit 的值,默认为0

// type: 搜索类型；默认为1即单曲,取值意义:
// 1: 单曲
// 10: 专辑
// 100: 歌手
// 1000: 歌单
// 1002: 用户
// 1004: MV
// 1006: 歌词
// 1009: 电台
export function searchSong(payload){
    payload.limit = payload.limit?payload.limit:"1";
    payload.offset = payload.offset?payload.offset:"0";
    payload.type = payload.type?payload.type:"1";
    return fetch("http://localhost:3000/search?keywords="+payload.keyword+"&limit="+payload.limit+"&offset="+payload.offset+"&type="+payload.type+"").then(res=>{
        return res.json()
    })
}

//排行榜
// 必选参数:
// idx: 对象 key, 对应以下排行榜

// "0": 云音乐新歌榜,   
// "1": 云音乐热歌榜,  
// "2": 网易原创歌曲榜,  
// "3": 云音乐飙升榜,  
// "4": 云音乐电音榜,  
// "5": UK排行榜周榜,  
// "6": 美国Billboard周榜  
// "7": KTV嗨榜,  
// "8": iTunes榜,  
// "9": Hit FM Top榜,  
// "10": 日本Oricon周榜  
// "11": 韩国Melon排行榜周榜,  
// "12": 韩国Mnet排行榜周榜,  
// "13": 韩国Melon原声周榜,  
// "14": 中国TOP排行榜(港台榜),  
// "15": 中国TOP排行榜(内地榜)  
// "16": 香港电台中文歌曲龙虎榜,  
// "17": 华语金曲榜,  
// "18": 中国嘻哈榜,  
// "19": 法国 NRJ EuroHot 30周榜,  
// "20": 台湾Hito排行榜,  
// "21": Beatport全球电子舞曲榜,
// "22": 云音乐ACG音乐榜,
// "23": 云音乐嘻哈榜
export function listTop (payload){
    return fetch("http://localhost:3000/top/list?idx="+payload.idx+"&count="+payload.count).then(res=>{
        return res.json()
    })
}

//获取专辑详情
export function album (payload){
    return fetch("http://localhost:3000/album?id="+payload.id+"").then(res=>{
        return res.json()
    })
}

//获取歌手单曲
export function artistsSong (payload){
    return fetch("http://localhost:3000/artists?id="+payload.id+"").then(res=>{
        return res.json()
    })
}

//获取歌手描述
export function artistsDesc (payload){
    return fetch("http://localhost:3000/artist/desc?id="+payload.id+"").then(res=>{
        return res.json()
    })
}

//获取歌词
export function lyric (payload){
    return fetch("http://localhost:3000/lyric?id="+payload.id+"").then(res=>{
        return res.json()
    })
}
```



### 歌词的处理(根据自己的理解写，大神别喷)

```javascript
 lyric({id}).then(lryic=>{ //获取歌词
   this.setState({
     nowPlayLink:url.data[0].url, //"http://localhost/1.mp3"
     isPlaying:true,
     playingId:id,
     songMes:detail.songs[0]
   },()=>{
     getprogress();
     if(lryic.lrc){
       this.setState({
         lrcArr:lryic.lrc.lyric.split("\n") //歌词分割成数组
       })
     }
   })
 })
```

```javascript
if(lrcArr.length>0){
            //根据时间拆分歌词
            let newTime = 0;
            let lrcshow = lrcArr.map((e,i)=>{
                let newe = e.replace(/\[[^\]]+\]/g,function($0){
                    newTime = Number($0.replace(/\[|\]/g,'').slice(0,2))*60 + Number($0.replace(/\[|\]/g,'').slice(3,5));
                    return '';
                })
                if(newe.trim() === '')return '';
                return {name:newe,time:isNaN(newTime)?0:newTime}
            }).filter(e=>e!=='');
            var item = lrcshow.map((e,i)=>{
                if(lrcshow[i+1]){
                    return <li key={i} className={getCurrentTime>=e.time&&getCurrentTime<lrcshow[i+1].time?"on":''} data-time={e.time}>{e.name}</li>
                }else{
                    return <li key={i} className={getCurrentTime>=e.time?"on":''} data-time={e.time}>{e.name}</li>
                }
            })
        }
```

