pragma solidity ^0.4.19;


contract HelloWorld {
    string name;

    constructor(string _name) public {
        name = _name;
    }

    function sayHi() public view returns (string) {
        return (name);
    }

    function changeName(string _name) public {
        name = _name;
    }
}