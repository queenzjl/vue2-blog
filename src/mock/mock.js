//使用mock
import Mock from 'mockjs';
//获取mock.Random对象
const Random = Mock.Random;
//mock一组数据
const produceData = function(opt){
    console.log('opt', opt);
    let articles = [];
    for (let i =0; i<30; i++){
        let newArticleObject = {
            title: Random.csentence(5, 12),  //Random.csentence(min, max)
            author_name: Random.cname(),    //random.cname() 随机生成一个常见的中文姓名
            date: Random.date() + ' ' + Random.time(),     //Random.date()指生成的日期字符串的格式，默认为yyyy-MM-dd;Random.time()返回一个随机的时间字符串
            abstract: Random.csentence(69)

        }
        articles.push(newArticleObject);
    }
    return {
        data: articles
    }
}

Mock.mock('/api/articles', 'get', produceData);    //当post或get请求到/api路由时 Mock会拦截请求并返回上面的数据