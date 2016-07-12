/* Write a function that takes a phone number that contains letters and converts it into a digit only number

ex: 1-800-contact --> 1(800) 266-8228
the function should allow users to use characers like -, (), /, or spaces to divide parts of the number like 1-800

function should only allow phone numbers with 7, 10, or 11 characters in the phone number
*/

//turn letters to numbers//
function convertPhoneNumber(phoneNumber){
	var phoneNumber = phoneNumber.split('');
	phoneNumber.map(function(character){
		switch(character){
			case ['a', 'b', 'c'].indexOf(character) > -1:
				character = 2;
				break;
			case ['d', 'e', 'f'].indexOf(character) > -1:
				character = 3;
				break;
			case ['g', 'h', 'i'].indexOf(character) > -1:
				character = 4;
				break;
			default:
				return:
		}
	})	

}

function removeThings (phoneNumber){
	var thingsToRemove = '-/()';
	phone.forEach(function(character){
		if(thingsToRemove.indexOf(character) > -1)
			phoneNumber.
	}
}

//function testRegex(input) {
//    var output = input.replace(/[^a-z0-9]/gi, '')
//    console.log(output)
//}
//
