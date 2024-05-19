class Singleton {
    constructor(field1, field2) {
      this.field1 = field1;
      this.field2 = field2;
      Singleton.instance = this;
    }

    //restricts the class to a single installation
  
    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton('DefaultField1', 'DefaultField2');
      }
      return Singleton.instance;
    }
  }
  
  console.log(Singleton.getInstance().field1);
  console.log(Singleton.getInstance().field2);
  