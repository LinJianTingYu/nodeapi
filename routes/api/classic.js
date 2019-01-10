const express = require('express')
const router = express.Router()
var content = [
    {
		"content":"人生不能像做菜，把所有的料准备好才下锅",
	    "fav_nums":377,
	    "id":1,
	    "image":"http://bl.7yue.pro/images/movie.8.png",
	    "index":1,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"李安《饮食男女 》",
	    "type":100
	},
	{
		"content":"繁华闹市灯光普照，然而共你已再没破晓",
	    "fav_nums":233,
	    "id":1,
	    "image":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546879458575&di=a949674c1a69ac9e457522809d290007&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D223147665%2C3153347680%26fm%3D214%26gp%3D0.jpg",
	    "index":2,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"陈奕迅 《倾城》",
	    "type":200,
	    "url":"http://music.163.com/song/media/outer/url?id=27867449.mp3"
	},
	{
		"content":"人世间所有的相遇都是久别后的重逢",
	    "fav_nums":233,
	    "id":1,
	    "image":"https://img3.doubanio.com/view/photo/l/public/p1819887021.webp",
	    "index":3,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"王家卫 《一代宗师》",
	    "type":100
	},
	{
		"content":"长大后谁不是离家出走，茫茫人海里游",
	    "fav_nums":213,
	    "id":4,
	    "image":"http://bl.7yue.pro/images/music.5.png",
	    "index":4,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"卢广仲 《大人中》",
	    "type":200,
	    "url":"http://music.163.com/song/media/outer/url?id=28310544.mp3"
	},
	{
		"content": "在变换的生命里，岁月原来是最大的小偷",
	    "fav_nums": 113,
	    "id":2,
	    "image":"http://bl.7yue.pro/images/movie.4.png",
	    "index":5,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"罗启锐《岁月神偷》",
	    "type":100
	},
	{
		"content": "还要多远才能进入你的心，还要多久才能和你接近",
	    "fav_nums":105,
	    "id":2,
	    "image":"http://p2.music.126.net/wSMfGvFzOAYRU_yVIfquAA==/2946691248081599.jpg?param=300y300",
	    "index":6,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"郭顶 《水星记》",
	    "type":200,
	    "url":"http://music.163.com/song/media/outer/url?id=441491828.mp3"
	},
	{
		"content": "咱们应当在一起，否则太伤天害理了",
	    "fav_nums":105,
	    "id":2,
	    "image":"http://www.wufafuwu.com/uploads/201704/180614/1-1P61413541G16.JPG",
	    "index":7,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"王小波 《爱你就像爱生命》",
	    "type":300
	},
	{
		"content": "忘掉种过的花，重新的出发，放弃理想吧",
	    "fav_nums":105,
	    "id":3,
	    "image":"http://www.wufafuwu.com/uploads/201705/181207/1-1Q20G64TQM.JPG",
	    "index":8,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"谢安琪 《喜帖街》",
	    "type":200,
	    "url":"http://music.163.com/song/media/outer/url?id=308299.mp3"
	},
	{
		"content": "常觉得受到伤害，是因为总期待被善待",
	    "fav_nums":144,
	    "id":2,
	    "image":"http://www.wufafuwu.com/uploads/201706/180823/1-1PR31I422264.JPG",
	    "index":9,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"傅首尔",
	    "type":300
	},
	{
		"content": "你说为什么会有桥啊！因为路，走到头了",
	    "fav_nums": 100,
	    "id":2,
	    "image":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1546926260901&di=78b84bfcd1c8e2875c00b96e194e4751&imgtype=0&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FnYwR8ahiRnARRwmIMKbJKp0oFYzClEqveAUkV1zTH1Wyb1543557303075compressflag.jpeg",
	    "index":10,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"饶晓志 《无名之辈》",
	    "type":100
	},
	{
		"content": "寒冬后，炎夏前，谁会给你春一样的爱恋",
	    "fav_nums":105,
	    "id":3,
	    "image":"http://www.wufafuwu.com/uploads/201705/181207/1-1Q20GA11O64.JPG",
	    "index":11,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"赵雷 《三十岁的女人》",
	    "type":200,
	    "url":"http://music.163.com/song/media/outer/url?id=29567191.mp3"
	},
	{
		"content": "庭有枇杷树，吾妻死之年所手植也，今已亭亭如盖矣",
	    "fav_nums":124,
	    "id":2,
	    "image":"http://www.wufafuwu.com/uploads/201701/180411/1-1P4111RG2914.JPG",
	    "index":12,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"归有光 《项脊轩志》",
	    "type":300
	},
	{
		"content": "人生总是这么痛苦吗？还是只有小时候这样？ 总是如此!",
	    "fav_nums": 199,
	    "id":2,
	    "image":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547522207&di=992e11c2518ecc7a96b6d7f857ae3558&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.sctv.com%2Fnews%2Fent%2F201710%2FW020171013378169897032.jpg",
	    "index":13,
	    "like_status":0,
	    "pubdate":"2018-06-22",
	    "title":"吕克·贝松 《杀手里昂》",
	    "type":100
	}
]

router.get("/latest",(req, res)=>{
	var response = content[0]
	res.json(response)
})
router.get("/:id/next",(req, res)=>{
	var body = JSON.stringify(req.url)     
	var index = body.split("/")[1]
	index++
    var response = content[index-1]
	res.json(response)
})
router.get("/:id/previous",(req, res)=>{
	var body = JSON.stringify(req.url)
	var index = body.split("/")[1]
	index --
    var response = content[index-1]
	res.json(response)
})
router.get("/favor",(req, res)=>{
	var response = content.filter((item)=>{
		return item.like_status == 1
	})
	res.json(response)
})

router.post("/like",(req, res)=>{
	var index = req.body.index - 1
	var response = content[index]
	if (response.like_status === 0 ) {
		response.like_status = 1
		response.fav_nums++
	}else{
		response.like_status = 0
		response.fav_nums--
	}
	content[index] = response
	res.json({response: content})
})

module.exports = router;