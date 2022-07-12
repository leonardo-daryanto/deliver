
namespace arrays {
    /**
     *  Make a block do deliver an array e.g. food array delivered to list array
     */
    //% block
    //% group="Advanced"
    export function deliver(firstArray: any, secondArray: any, getValueFromSecondArray: number): void {
        firstArray.unshift(secondArray[getValueFromSecondArray])
    }
    /**
     *  make a block deliver without index
     */
    //% block
    export function deliverWithLength(firstArray: any, secondArray: any): void {
        firstArray.unshift(secondArray.length)
        
        
    }
}
