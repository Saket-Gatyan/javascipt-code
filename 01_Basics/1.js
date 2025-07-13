const accountId = 144553
let accountEmail="saket@google.com"
var accountPassword="12345"
accountCity="Bokaro"
var accountState;
//accountId = 2 . This is not allowed
accountEmail="hxh@hx.com"
accountPassword= "212121"
accountCity="Ambala"


console.log(accountId);

/* Prefer not to use var 
because of issue in block and functional scope
*/

console.table([accountId,accountPassword,accountCity,accountState])