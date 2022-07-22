function Queue() {
  this.items = {};
  this.ini = 0;
  this.end = 0;
}

Queue.prototype.enqueue = function (data) {
  this.items[this.end] = data;
  this.end++;
};


let obj = {};
obj[0] = "First";
obj[1] = "Second";
obj[2] = "Third";


Queue.prototype.dequeue = function () {
  if (this.end === this.ini) {
    return undefined;
  }

  let info = this.items[this.ini];
  delete this.items[this.ini];

  this.ini++;
  return info;
};

Queue.prototype.size = function () {
  return this.end - this.ini;
};

//SOlución con clases
/*class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.end = 0
    }

    enqueue(data){
        this.items[this.end] = data
        this.end++
    }
    
    dequeue(){
        if(this.end === this.front){
            return undefined
        }
    
        const data = this.items[this.front];
        delete this.items[this.front];
        this.front++;
        return data
        
    }
    
    size(){
        return this.end - this.front
    }
        
}*/
