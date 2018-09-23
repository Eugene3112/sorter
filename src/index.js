class Sorter {
  constructor() {
    
    this.comparator = (a,b) => a - b;
    this.cash = [];
  }

  add(element) {
    
    this.cash.push(element);
  }

  at(index) {
    
    return this.cash[index];
  }

  get length() {
    
    return this.cash.length;
  }

  toArray() {
    
    return this.cash;
  }

  sort(indices) {
    
    let sorterArr = [];
    indices = indices.sort((a,b) => a-b) ;
    for (let i = 0; i < indices.length; i++) {
      sorterArr.push(this.cash[indices[i]]);
    }
    sorterArr.sort(this.comparator);
    for(let i = 0; i < indices.length; i++) {
      this.cash[indices[i]] = sorterArr.shift();
    }

  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;