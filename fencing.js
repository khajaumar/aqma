const fencing=( edges, numberOfWires, rate)=>{
    let sum=0;
    for(let i=0; i<edges.length; i++){
        sum=sum + edges[i];

    }
        return sum* numberOfWires*rate;
};

console.log(`Total Cost for fencing= ${fencing([10,15,10,10,10,10,22], 5, 10)}`);