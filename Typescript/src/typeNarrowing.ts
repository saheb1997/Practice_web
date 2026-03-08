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



class kulhadchai{
    serve(){
        return `Serving kulhad chai`
    }

}

class Cutting{
    serve(){
        return `Serving cutting chai`
    }
}

function serve(chai:kulhadchai|Cutting){
    if(chai instanceof kulhadchai)
            {
                return chai.serve()
            }
}

type  chaiOrder ={
    type:string
    sugar: number
}

function ischaiOrder(obj:any):obj is chaiOrder{
    return (
        typeof obj === "object" &&
        obj !== null && 
        typeof obj.type ==="string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item:chaiOrder |string ){
    if(ischaiOrder(item)){
        return `serving ${item.type} chai with ${item.sugar}`

    }
    return `serving custom chai:${item}`
}
