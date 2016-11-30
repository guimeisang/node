const Koa = require('koa');
const app = new Koa();
app.use(async(ctx,next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello,koa2!</h1>';
});
app.listen(3000);
console.log('app started at port http://localhost:3000...');
// app.use(async(ctx,next) => {
//     console.log('${ctx.request.method} ${ctx.request.url}');
//     await next();
// })

// app.use(async(ctx,next) => {
//     const start = new Data().getTime();
//     await next();
//     const ms = new Data().getTime() - start;
//     console.log('Time: ${ms}ms');
// })

// app.use(async(ctx,next) => {
//     await next();
//     ctx.type="text/html";
//     ctx.response.body="<h1>hello,koa2</h1>";
// })

// app.use(async (ctx, next) => {
//     if (await checkUserPermission(ctx)) {
//         await next();
//     } else {
//         ctx.response.status = 403;
//     }
// });
