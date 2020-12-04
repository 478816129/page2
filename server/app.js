//引入express
const express=require('express');
//引入cors
const cors=require('cors');
//引入mysql
const mysql=require('mysql');
//创建服务器
const server=express();
server.listen(3000);
//创建连接池
const pool=mysql.createPool({
    host:'127.0.0.1',
    port:3306,
    password:"",
    database:"lg2020",
    connectionLimit:15,
    charset:'utf8',
    user:"root"
});
//创建中间件,post请求时使用
const bodyParser=require('body-parser');
server.use(bodyParser.urlencoded({
    extended:false
}))
//设置cors
server.use(cors({
    origin:['http://127.0.0.1:8080','http://127.0.0.1:8081','http://localhost:8080','http://localhost:8081']
}));
//创建接口
//indexBanner1 请求轮播图1
server.get("/indexBanner1",(req,res)=>{
    let sql='select id,banner from indexBanner1';
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send({message:"查询成功",code:1,results:results})
    })
});
//indexservice 请求服务列表
server.get("/indexservice",(req,res)=>{
    let sql='select id,title1,title1_a,title1_b,title1_c,title1_d,title1_img from indexService';
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send({message:'查询成功',code:1,results:results})
    })
});

//indexclass1请求class1的数据
server.get('/indexclass1',(req,res)=>{
    let sql='select id,class_img from indexclass1';
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send({message:'查询成功',code:1,results:results})
    })
})

//indexclass3请求class3的数据
server.get('/indexclass3',(req,res)=>{
    let sql='select id,img,title1,title12 from indexclass3';
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send({message:'查询成功',code:1,results:results})
    })
})

//bigV请求数据
server.get("/bigV",(req,res)=>{
    let sql='select id,title1,title2,clump_img from bigV';
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send({message:'查询成功',code:1,results});
    })
})
//indexjoin API  请求
server.get("/indexjoin",(req,res)=>{
    let sql='select id,img from indexjoin';
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send({message:'查询成功',code:1,results});
    })
})
//indexBanner2 API 请求
server.get("/indexBanner2",(req,res)=>{
    let sql='select id,articletitle,img,details,part,timeImg,timer,eyeImg,count from indexBanner2';
    pool.query(sql,(err,results)=>{
        if(err)throw err;
        res.send({message:'查询成功',code:1,results});
    })
})


//zhu
// 获取所有文章分类信息的API
server.get('/classroom',(req,res)=>{
    let sql = 'select * from classroom';
    //执行SQL查询语句
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        //响应到客户端的信息
        res.send({message:'查询成功',code:1,results:results});
    });
});
server.get('/dry_goods',(req,res)=>{
    let sql = 'select * from dry_goods';
    //执行SQL查询语句
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        //响应到客户端的信息
        res.send({message:'查询成功',code:1,results:results});
    });
});
server.get('/tools',(req,res)=>{
    let sql = 'select * from tools';
    //执行SQL查询语句
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        //响应到客户端的信息
        res.send({message:'查询成功',code:1,results:results});
    });
});
server.get('/smalltools',(req,res)=>{
    let sql = 'select * from smalltools';
    //执行SQL查询语句
    pool.query(sql,(err,results)=>{
        if(err) throw err;
        //响应到客户端的信息
        res.send({message:'查询成功',code:1,results:results});
    });
});


//wei

// 获取所有文章分类信息的API
server.get('/trading',(req,res)=>{
    //console.log(111);
    let sql='SELECT tid,title,content FROM trading';
    pool.query(sql,(err,results)=>{
      if(err) throw err;
      res.send({message:'查询成功',code:0,results:results});
    });
  });
  //
  server.get('/trading1',(req,res)=>{
    //console.log(1);
    let sql='SELECT pic,ptext,pid FROM tprocess';
    pool.query(sql,(err,results)=>{
      if(err) throw err;
      //console.log(results);
      res.send({message:'查询成功',code:1,result1:results});
    });
  });
  server.get('/trading2',(req,res)=>{
    console.log(2);
    let sql='SELECT title,price,picture,author,account,article,desc1,desc2,desc3,desc4 FROM setmeal';
    pool.query(sql,(err,results)=>{
      if(err) throw err;
      res.send({message:'查询成功',code:2,result2:results});
    });
  });
  server.get('/trading3',(req,res)=>{
    console.log(3);
    let sql='SELECT pic,title,hdesc FROM highservice';
    pool.query(sql,(err,results)=>{
      if(err) throw err;
      res.send({message:'查询成功',code:3,result3:results});
    });
  });
  server.get('/trading4',(req,res)=>{
    console.log(4);
    let sql='SELECT pic1,title1,title2,hadesc,pic2 FROM happyservice';
    pool.query(sql,(err,results)=>{
      if(err) throw err;
      res.send({message:'查询成功',code:4,result4:results});
    });
  });
  