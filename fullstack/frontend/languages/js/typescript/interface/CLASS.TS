
interface Compa{
    ngin:string
    handels:string
    wheels:number
}


interface Vehicls extends Compa{
    
    drive:()=>void
}



class Cycle  implements Vehicls{

    
    constructor(){
  
    }
    ngin: string
    handels: string
    wheels: number
    drive: () => void
}
class MoterCycle{
    wheels:string
    handles:string
   
    constructor(){
        this.wheels
        this.handles
    }
}
class Auto{
    wheels:string
    handles:string
    chatni:string
    constructor(){
        this.wheels
        this.handles
    }
}