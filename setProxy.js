const person = {
    name: 'John Doe',
    age: 12
  };

  const handler = {
    set(target,prop){
        if(prop === "name"){
            //prop = "Mulisa";
        }
    }
  }

  const proxy = new Proxy(person,handler);
  console.log(proxy)