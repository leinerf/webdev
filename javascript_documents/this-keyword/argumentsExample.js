function hello(){
    console.log(arguments.length);
    return function bye(){
        console.log(arguments.length);
    }
}

a = hello(1,2,3);
a(1,2,3,4);