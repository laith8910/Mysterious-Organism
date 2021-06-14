// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAeqourFactory = (num, dna) => {return{
  number: num,
  DNA: dna,
  mutate(){
    let randBase = this.DNA[Math.floor(Math.random() * 15)];
    let newBase = '';
    do {
      newBase = returnRandBase()
    }
    while (newBase === randBase);
   let randBaseIndex = (this.DNA).findIndex( (elm) => {return elm === randBase})
    this.DNA[randBaseIndex] = newBase;
   return this.DNA;
  },
  compareDNA(cObj){
    let counter = 0 ;
    let length = 15 ;
    for(let i =0 ; i < length; i++){
      if (cObj.DNA[i] === this.DNA[i]){
        counter ++
      };}
      let percentage = (counter/15)*100 + '%';
      console.log(`Specimen #${this.number} and Specimen #${cObj.number} share ${percentage} of the same DNA`)
    },
    willLikelySurvive(){
      let counter = 0;
      let sequence = this.DNA;
      sequence.forEach( elm => {
        if (elm === 'C' || elm === 'G'){
          counter ++ 
        }
      });
      if (counter/15 >= 0.6){
        return true
      }
      else {return false}
    }

  }
  
};

let organisms = [];
const createManyMonsters = (number) => {
  for (i=0 ; i<number ; i++){
   organisms[i] =  pAeqourFactory(i, mockUpStrand());
  }
}

createManyMonsters(30);
