var express=require('express');
var app=express();
var PORT=process.env.PORT || 3000;
var middleware=require('./middleware.js')

app.use(middleware.logger);
//app.use(middleware.requiredAuthentication);
app.get('/about' ,middleware.requiredAuthentication ,function(req,res){
	res.send('about Us !');
});
app.use(express.static(__dirname + '/public'));
app.listen(PORT,function(){
	console.log('Express sever is started on port '+ PORT +'!');
});
//for knowing our directory
//console.log(__dirname);
//we write here 3000 for avoiding conflict when we open the browser
//wehave to type localhost:3000