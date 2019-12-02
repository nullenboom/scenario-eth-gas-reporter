pragma solidity ^0.5.0;

contract ParityModuloTwo {
	bool state;
    
 function checkParity(int256 n, int256 m) public {
       state = ((n + m) % 2 == 0);
   }
   
}
