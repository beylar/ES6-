// Symbolic Secrets: You're building a secure configuration system. Create a function secureConfig(config) 
// that takes an object config and uses a Symbol as a key to store a private property named apiKey. Return the 
// modified config object.


function secureConfig(config){
    const modify = Symbol("id");
    config = {
        [modify]: "left",
        "age": "20"
    }
    // return config[modify]; 
    return config;
}


console.log(secureConfig())