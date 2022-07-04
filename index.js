
function onLoad() {
    let who = [ 'el perro' , 'mi abuela' , 'su tortuga' , 'mi pájaro'];
    let what = ['comer', 'molesto' , 'aplastado' , 'roto' ];
    let when = [ 'antes de clase' , 'justo a tiempo' , 'cuando terminé', 'durante mi almuerzo' , 'mientras estaba orando' ]
    
    for(let i=0;i<=3; i++) {
        let numero_aleatorio_who = Math.floor(Math.random()*4);
        let numero_aleatorio2_what = Math.floor(Math.random()*4);
        let numero_aleatorio3_when = Math.floor(Math.random()*5)
        let arrayWho = who[numero_aleatorio_who];
        let arrayWhat = what[numero_aleatorio2_what];
        let arrayWhen = what[numero_aleatorio3_when];

        console.log(arrayWho + arrayWhat + arrayWhen);
    }

}