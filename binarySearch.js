function binarySearch(vector,search) {
    let high = vector.length - 1;
    let low = 0;
    let midExport;
    let result = [];

    while (high - low > 1) {
        let mid = Math.floor((high + low) / 2);
        if (vector[mid] == search) { // ¿Por que esto no lo veo en los demas codigos?,
            result = [mid]; // Si el numero a buscar fuera el mid nos ahorraria todo el demas procesamiento
            return result; // Por una sentencia mas lo veo justo, pero tengo esa duda igual y esto no esta tan optimizado.

        } else if(vector[mid] < search) {
            low = mid;
        }
        else {
            high = mid;
        }
        midExport = mid
    }
    if (vector[low] == search) {
        result = [low];
        return result
    }
    else if (vector[high] == search) {
        result = [high];
        return result
    }
    else {
        result = [-1, low ];
        if (low + 1 == vector.length - 1) {
            result[1] = vector.length
        }
        return result
    }
}

let v1 = [ 1, 3, 4, 6, 9, 10,40,60,70,80,81,83];
let v2 = [ 1, 1, 3, 3, 9, 10,40,60,70,80,81,83];
let search = 1000;
// console.log(binarySearch(v, search));

// Binary search exercises
function insertInArray(array, pos, element) {
    let i = 1
    while(array.length - i != pos - 1) {
        array[array.length - i +1] = array[array.length - i]
        i++
    }
    array[pos] = element;

    return array

}

function joinArrays(arr1, arr2) {
    let element;
    for (let i = 0; i < arr1.length; i++) {
        element = binarySearch(arr2, arr1[i]);
        if (element.length == 2) {
            arr2 = insertInArray(arr2,element[1],arr1[i])
        } else {
            arr2 = insertInArray(arr2,element[0],arr1[i])
        }
    }

    return arr2
}

// console.log(v1)
// console.log(v2)
// console.log(joinArrays(v1,v2))
