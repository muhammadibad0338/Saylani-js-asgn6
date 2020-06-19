/* 


//chapter21-25
//question 1
var a= prompt("Enter your First name");
var b= prompt("Enter your First name");
document.write("Hello "+a+" "+b)




//question 2
var a = prompt("Enter your Favourute phone");
document.write("My Favourute phone is  "+a+"<br>");
document.write("length of string : "+(a.length));



//question 3
a="Pakistani"
document.write("String : "+a+"<br>")
document.write("Index Of n :  ")
document.write(a.indexOf("n"))


//n="asdf"
//if (n.match("e")) {
//	document.write("yes")
//}

//question 4
a="Hello world"
var b =a.lastIndexOf("l");
document.write("String : "+a)
document.write("<br>last inex of l : "+b)



//question 5
var a="Pakistani"
document.write("String : "+a)
var b=a.charAt(3)
document.write("<br>Character at inedx 3 : "+b)


//question 6
var a= prompt("Enter your First name");
var b= prompt("Enter your First name");
var c = a.concat(b);
document.write("Hello "+c);




//question 7
var str ="Hyedrabad";
var res =str.replace("Hyedr", "islam");
document.write(res);


//question 8
var message = "Ali and Sami are best friends. They play cricket and football together"
var mes =message.replace("and", "&");
var mess =mes.replace("and", "&");
document.write(mess);



//question 9
var a ="472"
document.write("Value : "+ a+"<br>"+"type : ")
document.write(typeof a);
var b =Number(a)
document.write("<br>Value : "+ b+"<br>"+"type : ")
document.write(typeof b);




//question 10
var a = prompt("enter lowercase input")
document.write("User input : "+a+"<br>")
var b =a.toUpperCase();
document.write("Upper case : "+b)




//question 11
var a = prompt("enter lowercase input")
document.write("User input : "+a+"<br>")
var b= a.slice(0,1)
var b = b.toUpperCase()
//document.write(b)
var a =a.slice(1,a.length)
var c= b.concat(a)
document.write("<br>Titel case : "+c)


//question 12
var a =35.36;
document.write("Number : "+a+"<br>")
var b =a.toString()
var c =b.replace(".","");
document.write("Result  : "+c)


//question 13
var a = prompt("Enter username")
for (var i = 0; i < a.length; i++) {
	b = a.charAt(i)
	b=b.charCodeAt(0)
	if (b ==33 || b==44 || b==46 || b==64){
		document.write("Enter a valid username")
	}
}




//question 14
var a=["cake","appel pie","cookie","chips","patties"]
document.write(a+"<br>")
var b = prompt("enter item to be search ")
b=b.toLowerCase()
function find(b){
	for (var i =0 ; i< a.length; i++){
	if (a[i]==b) {
		document.write(a[i]+" item is <strong>avaliable</strong> at index "+i+" i our bakery")
		return;
	}
}
document.write("we are sorry "+b+" is <strong>not avaliable</strong> in our bakery")
}

find(b)



//question 15
var a = prompt("Enter Password<br>");
pswrdcheck(a);

function pswrdcheck(a){
	var b= a.slice(0,1)
	b=b.charCodeAt(0)
	var c = a.length
	var cont = 1
	str =false;
	int =false;
	if (b >= 48 && b<=57) {
		document.write("Password can not begin with a number<br>Please Enter a valid password");
		return;
	}
	else if (c<6){
		document.write("Password is short<br>Please Enter a valid password");
		return;
	}
	for (var i = 1; i < a.length; i++){
		var d =a.charAt(i)
		if (d >= 48 && d<=57) {
			int = true;
		}
		if (d>= 65 && d <=90 || d>=97 || d<=122 ) {
			str = true
		}
	}
	if (!str && !int) {
		document.write("Password must contain Alphabet and Number both<br>Please Enter a valid password")
		return
	}

}





//question 16
var university ="University of Karachi";
var str = []
var str =university.split('');
for (var i = 0; i < str.length; i++) {
	document.write(str[i]+"<br>")
}




//question 17
var a = prompt("Enter input");
document.write("User Input: "+a)
var b= a.charAt(a.length-1)
document.write("<br>last Character of input : "+b)




//question 18
var a ="the quick brown fox jumps over the lazy dog"
document.write("there are "+a.match(/the/g).length+" occurences of word the")




//chapter 26 -30
//question 1
var a =+prompt("Enter an number")
document.write("number : "+a)
document.write("<br>round off value : "+Math.round(a));
document.write("<br>floor value : "+Math.floor(a));
document.write("<br>ceil value : "+Math.ceil(a));




//question 2
var a =+prompt("Enter an number")
document.write("number : "+a)
document.write("<br>round off value : "+Math.round(a));
document.write("<br>floor value : "+Math.floor(a));
document.write("<br>ceil value : "+Math.ceil(a));



//question 3
var a = +prompt("Enter negative number")
var b = Math.abs(a)
document.write("The absolute value of "+a+" is " +b)



//question 4
var x = Math.floor((Math.random() * 7) + 1);
document.write("random dice value : "+x)



//question 5
var a = Math.floor((Math.random() * 2) + 1);
if (a==2){
	document.write(a+"<br>random coin value : Heads")
}
else{
	document.write(a+"<br>random coin value : Tails")
}


//question 6
var a = Math.floor((Math.random() * 100) + 1);
document.write("random number between 1 and 100 : "+a)



//question 8
var a = Math.floor((Math.random() * 10) + 1);
var b =prompt("Input a number")
if (a==b){
	document.write("Congragulation  you gess the same number")
}




//chapter 31-34
//question 1
var a = new Date();
document.write(a)





//question 2
var a = new Date();
var b= a.getMonth();
var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
alert("Current Month : "+arr[b])



//question 3
var a = new Date();
var b =a.getDay()
var arr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
alert("today is "+arr[b]);




//question 4
var a = new Date()
var d = a.getDay()
if (d==0 || d==6){
	alert("It’s Fun day")
}





//question 5
var a = new Date();
var b = a.getDate();
if (b<16){
	alert("First fifteen days of the month")
}
else{
	alert("Last days of the month")
}







//question 6
var a = new Date()
document.write("Current Date : "+a)
var b= a.getTime()
document.write("<br>Elapsed millisecond since Jan. 1, 1970 : "+b)
var min = b/(1000*3600)
document.write("<br>Elapsed minutes since Jan. 1, 1970 : "+min)





//question 7
var a = new Date()
b=a.getHours()
if (b < 12){
	alert("Its AM")
}
else{
	alert("It's PM")
}



//question 8
var laterDate = new Date("Dec 31, 2020")
document.write(laterDate)




//question 9
var a = new Date("Jun 18, 2015")
b=a.getTime()
var today = new Date()
var tomili = today.getTime()
var d = tomili-b
d=d/(1000*3600*24)
//d=Math.round(d)
document.write(Math.round(d)+" days have passed since 1st Ramadan,2015")




//question 10
 var start = new Date("Jan 01, 2015")
 var startsec = start.getTime()
 var end = new Date("Dec 05, 2015")
 var endsec = end.getTime()
 document.write("On reference date "+end+"<br>")
 var dif = endsec-startsec;
 document.write(dif/(1000*60)+" seconds had passed since begining of 2015")




//question 11
var a = new Date()
document.write("Current date : "+a+"<br>")
ab =a.getHours()
var d = new Date();
a=ab-1
d.setHours(a)
document.write("1 hour ago, it was "+d)



//question 12
var a = new Date()
document.write("Current date : "+a+"<br>")
ab =a.getFullYear()
var d = new Date();
a=ab-100
d.setFullYear(a)
document.write("100 year back, it was "+d)






//question 13
var age = prompt("enter your age")
var a = new Date()
var year = a.getFullYear()
document.write("Your age is "+age)
dif=year-age
document.write("<br>Your birth year is "+dif)



//question 14
var name ="ABC Customer"
var a = new Date();
var b= a.getMonth();
var arr=["January","February","March","April","May","June","July","August","September","October","November","December"];
var month = arr[b]
var unit = 410
var chrg = 16
var net = unit*chrg
var late =350
var gross =net +late

document.write("<h1>K-Electric Bill </h1>")
document.write("<br>Customer Name  "+name)
document.write("<br> Current Month "+month)
document.write("<br>  Number of units "+unit)
document.write("<br> Charges per unit "+chrg+"<br>")

document.write("<br>Net Amount Payable (within Due Date) "+net)
document.write("<br>Late Payment Surcharge  "+late)
document.write("<br>Gross Amount Payable (after Due Date)  "+gross)









//chapter 35-38
//question 1
function dateandtime(){
	var a = new Date()
	alert(a)
}
dateandtime()



//question 2
var a = prompt("Enter your First Name")
var b = prompt("Enter your last Name")
Name(a,b)
 function Name(a,b){
 	document.write("Hello "+a+" "+b)
 }

 
 //question 3

 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
document.write(Add(a,b))

 function Add(a,b){
 	return a+b;
 }

 

 //question 4
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
var c = prompt("Enter Character")
document.write(Calculator(a,b,c))

function Calculator(a,b,c){
	if (c=="+") {
		return a+b
	}
	else if (c=="-") {
		return a-b
	}
	else if (c=="/") {
		return a/b
	}
	else if (c=="%") {
		return a%b
	}
}



//question 5
 var a = +prompt("Enter number")
Square(a)
 function Square(a){
 	document.write(Math.pow(a,2))
 }


 
 //question 6
 var a = +prompt("Enter number")
 document.write(Factorial(a))

 function Factorial(n) { 
            if (n === 0) {  
                return 1;  
            } 
            else {  
                return n * Factorial( n - 1 );  
            } 
 }

 


 //questionn 7
 var a = +prompt("Enter first number")
var b = +prompt("Enter last number")
Counting(a,b)

function Counting(a,b){
	for (var i = a; i <= b; i++){
		document.write(i+"<br>")
	}
}



//question 8 
function hypotenuse(a, b) {
               function square(x) { return x*x; }
               return Math.sqrt(square(a) + square(b));
}
document.write(hypotenuse(1,2))



//question 9
var a = +prompt("Enter width")
var b = +prompt("Enter height")

function CalculatesArea(w,h){
	document.write("<br>Area of Rectangle : "+(w*h))
}

CalculatesArea(a,b)
CalculatesArea(8,4)



//question 10
function palindrome(str){
	var splitString = str.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
	if (str == joinArray){
		document.write("String is palindrome")
	}
	else{
		document.write("String is not palindrome")
	}
}
palindrome("mad")
palindrome("madam")




//question 11
var a ="the quick brown fox";
UppperCase(a);

function UppperCase(str){
	document.write("Example String : " +str+"<br>")
	x=str.slice(0,1)
	y=x.toUpperCase()
	var sttr= str.split('')
	for (var i = 0; i < sttr.length; i++) {
		if (sttr[i] == ' '){
			j=i+1
			k=sttr[j].toUpperCase()
			sttr[j]=k
		}
	}
	sttr[0]=y
	var abc =sttr.join("")
	document.write("Expected Output : "+abc)
}




//question 12
var a="Web Development Tutorial"

LongestWord(a)

function LongestWord(str){
	var ar =str.split('')
	var b =1
	var arr=[0]
	var word=[]
	var count =[]
	for (var i = 0; i < ar.length; i++) {
		if (ar[i] == ' ') {
			arr[b]=i
			b+=1
		}
	}
	arr[b]=ar.length
	b=0
	//document.write(arr)
	for (var i = 0; i < arr.length-1; i++) {
		j=i+1
		word[b]=str.slice(arr[i],arr[j])
		b=b+1
	}
	b=0
	//document.write("<br>"+word)
	for (var i = 0; i < word.length; i++) {
		if (b ==0){
		count[b]=word[b].length
		b=b+1
	}
	else{
		count[b]=word[b].length-1
		b=b+1
	}
	}
	//document.write("<br>"+count)
	var max =Math.max(...count)
	//document.write(" <br>"+max)
	var ind =count.indexOf(max)
	document.write("EXAMPLE STRING : "+str)
	document.write("<br>EXPECTED OUTPUT : "+word[ind])
}


//question 13
function Occurrences(a,b){
	a=a.toLowerCase()
	var ar= a.split('')
	var count =0
	for (var i = 0; i < ar.length; i++) {
		if (ar[i]==b) {
			count+=1
		}
	}
	document.write("Occurrences of letter "+b+" is : "+count)
}
Occurrences("JSResourceS.com","o")



//question 14
function calcCircumference(r){
	var a = Math.PI
	var circum = 2*a*r
	document.write("The circumference is : "+circum+"<br>")
}

function calcArea(r){
	var a = Math.PI
	ra =Math.pow(r,2)
	var area =a*ra
	document.write("The area is : "+area)
}
calcCircumference(2)
calcArea(2)









*/