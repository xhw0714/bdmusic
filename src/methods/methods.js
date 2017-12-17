
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
    return fetch("http://localhost:3000/top/list?idx="+payload.idx+"").then(res=>{
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
        return res.text()
    })
}