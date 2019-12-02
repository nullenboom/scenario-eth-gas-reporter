pragma solidity ^0.5.0;

contract ParityModulo {
	bool state;
    
 function checkParity(int256 n, int256 m) public {
       state = (n % 2 == m % 2);
   }
   
}
