// here we can take multipe data types
let sub:number | string = '1M'
let apiRequestStatus : 'pending' | 'sucess' | 'error' = 'pending'

// here it give a warning that because i give only three option for select
// apiRequestStatus = 'done'


const orders = ['12','20','28','42']
let currentOrder:string | undefined;


for (let order of orders)
        {
            if(order==="28")
            {
                currentOrder=order
                break
            }
        }
console.log(currentOrder);


