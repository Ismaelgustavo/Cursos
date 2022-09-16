 
 let varA ='a' //b -->b
 let varB ='b' //c -->c
 let varC ='c' //a
 let varNull= null // a

 varNull = varA 
 varA=varB

 varB= varC

 varC=varNull
 
 varNull=null

 console.log(varA,varB,varC,varNull)