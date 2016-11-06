## global全局对象

在浏览器中，叫window对象。  
在Node.js环境中，也有唯一的全局对象，叫global。  

进入Node.js交互环境（在git bash里面输入node就进入了node交互环境）  

global下面提供很多的方法，比如说process，这个对象技术代表当前node进程。所以可以通过process对象可以或得很多有用的信息   

### 判断js的执行环境
```
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
```
利用这个就可以了