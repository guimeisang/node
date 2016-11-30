const Koa = require('koa');
//注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const bodyParser = require('koa-bodyparser');

const app = new Koa();

//log request URL
app.use(async(ctx,next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`)
    await next();
});

//add url-route:
router.get('/hello/:name',async(ctx,next) => {
    var name = ctx.params.name;
    ctx.response.body = `<h1>Hello, ${name}!</h1>`;
})

router.get('/', async(ctx,next) => {
    ctx.response.body = `<h1>Index</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" value="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
    `;
})

router.post('/signin',async(ctx,next) =>{
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if(name==="koa"&&password==="12345"){
        ctx.response.body=`<h1>Welcome,${name}!<h1>`
    }else{
        ctx.response.body=`<h1>Login failed</h1>
        <p><a href="/">Try agian</a></p>
        `;
    }    

})


app.use(bodyParser());
//add router middleware
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');


