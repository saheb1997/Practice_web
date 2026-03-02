function getchai(kind :string | Number){
    if(typeof kind ==="string")
    {
        return `Making ${kind} chia----`
    }
    return `chai order:${kind}`
}


function serverChai(msg ? : string){
    if(msg){
        return `Serving ${msg}`
    }
    return `serving default masala chai`
}


function orderChai(size:"small" |"large"|"medium"|number){
    if(size==="small"){
        return `small cutting chai`
    }

    if(size==='large' || size==="medium"){
        return `make extra chai`
    }

    return `chai order #${size}`
}

