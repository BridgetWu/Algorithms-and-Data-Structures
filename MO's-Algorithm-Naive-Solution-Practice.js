class Query{
    constructor(L, R)
    {
        this.L = L;
        this.R = R;
    }
}

function printQuerySums(a, n , q, m){
    for (let i = 0; i < m; i++){
        let L = q[i].L, R = q[i].R;
        console.log(L);
        console.log(R);

        let sum = 0;
        for (let j = L; j <= R; j++){
            sum += a[j];
        }
        console.log('Sum from [' + L + ',' + R + '] is ' + sum);
    }
}

let a = [1, 1, 2, 1, 3, 4, 5, 6, 8];
let n = a.length;
let q = [];

q.push(new Query(0, 4));
q.push(new Query(1, 3));
q.push(new Query(2, 4));

let m = q.length;

printQuerySums(a, n , q, m);
