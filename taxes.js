/*function calculateTaxes(income) {
    if(!Number.isFinite(income)){
        throw new ettor('BAD INCOME');
    }
    if (income >30000){
        return income *.25;
    }
    else {
        return income *.15;
    }
}*/


function calculateTaxes(income){
    if(income >30000) {
        return income *.25;
    }
    else {
        return income * .15;
    }
}

function removeDupes(values){
   return [...new Set(values)] ;
}
