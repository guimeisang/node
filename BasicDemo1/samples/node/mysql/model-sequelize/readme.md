## Model
一个大型的web app通常都有几十个映射表，一个映射表就是一个Model，都是按照自己的洗好，那么业务代码就不好写。Model不统一，很多代码也无法复用。  
1. 首先我们要定义的是Model存放的文件夹必须在models内，并且以model命名，例如：Pet.js,User.js等；  
2. 其次每一个Model必须准守一套规则：  
    - 统一主键，名称必须是id，类型必须是STRING(50)；
    - 主键可以自己指定，也可以由框架自动生成（如果为null或undefined）；
    - 所有字段默认为NOT NULL，除非显式指定；
    - 统一timestamp机制，每个Model必须有createdAt、updatedAt和version，分别记录创建时间、修改时间和版本号。其中，createdAt和updatedAt以BIGINT存储时间戳，最大的好处是无需处理时区，排序方便。version每次修改时自增。  
3.     