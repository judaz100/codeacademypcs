// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  }
  // Factory function to create pAequor objects
  function pAequorFactory(specimenNum, dna) {
    return {
      specimenNum: specimenNum,
      dna:dna,
      mutate() {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let currentBase = this.dna[randomIndex];
        let newBase = returnRandBase();
        while (newBase === currentBase){
          newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
        return this.dna;
      },
      compareDNA(otherPAequor) {
        let compare = 0;
        for(let i = 0; i < this.dna.length ; i++) {
          if (this.dna[i] === otherPAequor.dna[i]){
            compare+=1;
            }
        }
        const percentage = (compare / this.dna.length) * 100;
        console.log(`specimen #${this.specimenNum} and specimen #${otherPAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
      },
      willLikelySurvive() {
        let countC=0;
        let countG=0;
        for (let i = 0; i < this.dna.length ; i++) {
          if (this.dna[i]==='C') {
            countC += 1;
          } else if (this.dna[i] === 'G') {
              countG +=1;
          }
        }
        if( (countC + countG) / this.dna.length >= 0.6) {
          return true;
        } else {
          return false;
        }
      },
      complementStrand(){
        const cStrand = [];
        for(let i = 0; i < this.dna.length ; i++){
          if (this.dna[i] === 'T'){
            this.cStrand.push('A') ;
          } else if (this.dna[i] === 'A'){
            this.cStrand.push('T');
          } else if (this.dna[i] === 'G'){
            this.cStrand.push('C');
          } else if (this.dna[i] === 'C'){
            this.cStrand.push('G');
          }
        } return cStrand;
      }
    };
  }
  
  //Creacion de 30 individuos aptos para sobrevivir.
  const survivingPAequor = [];
  let specimenNumber = 1;
  
  while (survivingPAequor.length < 30) {
    const newPAequor = pAequorFactory(specimenNumber,mockUpStrand());
    if (newPAequor.willLikelySurvive()) {
      survivingPAequor.push(newPAequor);
    }
    specimenNumber++;
  }
  console.log(survivingPAequor);
  
  
  
  // Create two instances of pAequor
  const pAequor1 = pAequorFactory(1, mockUpStrand());
  const pAequor2 = pAequorFactory(2, mockUpStrand());
  
  // Log the initial DNA
  console.log('Initial DNA of pAequor1:', pAequor1.dna);
  console.log('Initial DNA of pAequor2:', pAequor2.dna);
  
  // Test the mutate method
  pAequor1.mutate();
  console.log('Mutated DNA of pAequor1:', pAequor1.dna);
  
  // Test the compareDNA method
  pAequor1.compareDNA(pAequor2);  