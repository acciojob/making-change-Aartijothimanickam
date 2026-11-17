const makeChange = (c) => {
  // your name here
	let a=number(c);
	let q=math.floor(a/25);
	a=a%25;
	if(a!=0)
	{
		let d=math.floor(a/10);
		a=a%10;
	}
	if(a!=0)
	{
		let n=math.floor(a/5);
		a=a%5;
	}
	let p=a;
	return{ q,d,n,p};
	
};

Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));

