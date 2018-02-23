function isPalindrome(str){
	if(typeof str != 'string'){
		console.log("Please give me a string.")
	} else {
		const word = str.toUpperCase()
		if(word === word.split('').reverse().join(''))
			return true
	}
	return false
}

function isHalfCheckPalindrome(str){
	if(typeof str != 'string'){
		console.log("Please give me a string.")
		return false
	} else {
		const word = str.toUpperCase()
		for(let i = 0; i < word.length/2; i++){
			if(word.charAt(i) != word.charAt(word.length-1-i)) return false
		}
	}
	return true
}