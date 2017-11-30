var path = require('path');

var config = {
    port : '3335',
	//  proxy_host : 'tdollar.cn',
    //proxy_host : '192.168.0.215:8080',//交银
	//proxy_host : 'szltech.f3322.org:28180',
	//proxy_host: 'szltech.f3322.org:27182',
	//proxy_host :"http://cdollar.cn",// 活动
	//proxy_host :"192.168.0.18",//活动测试环境
    //proxy_host :"192.168.0.215:8081",///鑫元中台测试环境
	//proxy_host:'221.133.228.92:10002',
	proxy_host:'https://app.fund001.com',
    static_path : 'public'
};
module.exports = config;