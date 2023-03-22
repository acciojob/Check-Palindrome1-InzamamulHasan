// complete the given function

function palindrome(str){
	let i=0;
	let j=str.length-1;
	while(i<j){
		if(str.chatAt(i)!=str.chatAt(j)){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
