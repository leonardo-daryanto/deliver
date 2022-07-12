
namespace array {
    /**
     *  Make a block do deliver an array e.g. food array delivered to list array
     */
    //% block
    //% group="Advanced"
    export function deliver(firstArray: any, secondArray: any, getValueFromSecondArray: number): void {
        firstArray.unshift(secondArray[getValueFromSecondArray])
    }
}
