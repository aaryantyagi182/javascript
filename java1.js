var x=5;
console.log(x)
//variable are reasign and redeclared
//for reasign
var x='bob';
console.log(x)

var z
console.log(z);

console.log(typeof(x));

var my=['aaa','bbb','ccc'];

console.log(my[1]);

//presidence
//.,[]
//++,--
// /,*
// +,-

// ===these three equals check equality + type

console.log('1'==1);
console.log('1'==='1');
console.log([]==0);
console.log([]=='0');

var random=['tree',795,[0,1,2]];
console.log(random.length)
console.log(random.join(','));
console.log(random.toString())
console.log(random.push(34));

var age = 19

if(age>=18){
var x='eligible';
}else{
var x='not eligible';
}

var y=20;
if(true)
{
var y=10;
console.log(y);
}
console.log(y);

var change=function(x){
	return x*x*x;
}
console.log(change(4));

function sum(change,x)
{
	return change(x)+x;
}
console.log(sum(change,5));

function addsquares(a, b){
	function square(x){
		return x*x;
	}
	return square(a)+square(b);
}
a=addsquares(2,3);
console.log(a)

var x="abc";
console.log(typeof(x));

var y=new String("abc");
console.log(typeof(y));
x==y;
x===y;

word="lorem"
word.repeat(3)
/*
str1="lorem"
str2="ipsum"
str1=str2.concat(str1)
console.log(str1.toUpperCase())
str2.endsWith('sum')
str1.startsWith('lo')
str1.include('ps')
*/

var chr='';
for(var i=1;i<=5;i++)
{
	for (var j=1;j<=i;j++)
	{
		chr=chr+j;
	}console.log(chr);
	chr='';
}


var i=1;chr='';
for(i=5;i>0;i--)
{
	for (var j=1;j<=i;j++)
	{
		chr=chr+'*';
	}console.log(chr);
	chr='';
}

var i=1;
while(i<=10)
{
	for (var j=i;j<=10;j++)
	{
		chr=chr+j;
		if(j==1||j==3||j==6||j==10)
		{
			i=j+1;
			break
		}
	}console.log(chr);
	chr='';
}
