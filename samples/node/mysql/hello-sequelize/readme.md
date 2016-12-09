## mysql基础

### 访问数据库

程序运行的时候，数据都是在内存中的。当程序终止的时候，通常都需要将数据保存到磁盘上，无论是保存到本地磁盘，还是通过网络保存到服务器上，最终都会将数据写入磁盘文件。  
而如何定义数据的存储格式就是一个大问题。如果我们自己来定义存储格式，比如保存一个班级所有学生的成绩单：  
名字|成绩
----|----
A|123
B|123

- 表格的映射，比如说年级的表和班级的表，一年级则需要映射到班级，那么这两个表则有映射关系；SELECT * FROM classes WHERE grade_id = '1';

### NoSQL

### 安装MySQL
MySQL的配置文件默认存放在/etc/my.cnf或者/etc/mysql/my.cnf：
```
[client]
default-character-set = utf8

[mysqld]
default-storage-engine = INNODB
character-set-server = utf8
collation-server = utf8_general_ci
```

### 一切的基础都OK了，下面就是node.js程序怎么去链接MySQL数据库
访问MySQL数据库只有一种方法，就是通过网络发送SQL命令，然后，MySQL服务器执行后返回结果。  
对于Node.js程序，访问MySQL也是通过网络发送SQL命令给MySQL服务器。  
这个访问MySQL服务器的软件包通常称为MySQL驱动程序。不同的编程语言需要实现自己的驱动，MySQL官方提供了Java、.Net、Python、Node.js、C++和C的驱动程序，官方的Node.js驱动目前仅支持5.7以上版本，而我们上面使用的命令行程序实际上用的就是C驱动。  

### Model
在app.js中，通过sequelize.define()返回的Pet成为Model，它表示一个数据模型。  
Pet.create({})方法就是为了创建数据。  
Pet.findAll({}) 为异步返回的一个或一组对象称为Model实例，每个实例都可以直接通过JSON.stringify序列化成JSON字符串。  
所以：使用Sequelize操作数据库的一般步骤就是：  
首先引入sequelize；  
其次实例化一个
```
new Sequelize(config.database,config.username,config.password,{
    host:config.host,
    dialect:'mysql',
    pool:{
        max:5,
        min:0,
        idle:30000
    }
}) 
```
再次就是用var Pet = sequelize.define('pet',{})来获得一个数据模型；
再次就是用数据模型的方法，Pet.create(),Pet.findAll()返回一个或者一组对象称为Model实例；   
如果要更新实例，先对实例属性赋新值，再调用save（）方法；   
如果是要删除实例，直接调用destroy方法；   
注意findAll()方法可以直接接收where、order这些参数，这将要生成的SQL语句是对应的。  
