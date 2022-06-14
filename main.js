//Bài 1: Kiểm tra số tăng dần
export function  isIncreasingNumber(n) {
    let isFalse = false
    if(typeof n !== 'number' || n < 10 || n > 1000) return isFalse
    
    if(typeof n === 'number' && 10 < n < 1000) {
        const arrN = n.toString().split('')
        arrN.forEach((item, index) => {
            if (arrN.length == 3 
                && arrN.indexOf(item) == 1 
                && parseInt(arrN[index]) < parseInt(arrN[index + 1]))
            {
                isFalse = true
            }
            if (arrN.length == 2
                && parseInt(arrN[index]) < parseInt(arrN[index + 1]))
            {
                isFalse = true
            }

        })
        return isFalse
    }
}

//Bài 2: Kiểm tra số giảm dần

export function isDecreasingNumber(n) {
    let isFalse = false
    if(typeof n !== 'number' || n < 10 || n > 1000) return isFalse
    
    if(typeof n === 'number' && 10 <= n < 1000) {
        const arrN = n.toString().split('')
        arrN.forEach((item, index) => {
            if (arrN.length == 3 
                && arrN.indexOf(item) == 1 
                && parseInt(arrN[index]) > parseInt(arrN[index + 1]))
            {
                isFalse = true
            }
            if (arrN.length == 2
                && parseInt(arrN[index]) > parseInt(arrN[index + 1]))
            {
                isFalse = true
            }

        })
        return isFalse
    }
}

// Bài 3: Kiểm tra số chính phương

export function isPerfectSquare(n) {
    let isFalse = false
    if(typeof n !== 'number' || n < 0 || n > 1000) return isFalse
    if(typeof n === 'number' && 0 < n < 1000) {
        for (let i = 1; i < n; i++) {
            if(Math.pow(i, 2) == n) {      
                isFalse = true      
                break     
            }
        }
        return isFalse
    }        
}

// Bài 6: Kiểm tra số hoàn hảo

export function isPerfectNumber(n) {
    let isFalse = false
    let total = 0
    if(typeof n !== 'number' || n < 0 || n > 1000) return isFalse

    if(typeof n === 'number' && 0 < n < 1000) {

        for (let i = 0; i < n; i++) {
            if (n % i === 0) total += i
        }
        if (total == n && n != 0) isFalse = true
        
        return isFalse
    }
}

// Bài 8: Kiểm tra số có tổng chữ số chia hết cho 10
export function isDivisibleBy10(n) {
    let isFalse = false
    let total = 0
    if(typeof n !== 'number' || n < 0 || n > 1000) return isFalse

    if(typeof n === 'number' && 0 < n < 1000) {
        const arrOfN = n.toString().split('')
        
        for (let i = 0; i < arrOfN.length; i++) {
            total += parseInt(arrOfN[i])
        }
        if (total % 10 === 0) {
            isFalse = true
        }
        
        return isFalse
    }

}

//String

//Bài 1: Ðếm số từ có trong câu

export function countWords(str) {
    return str.split(' ').length
}

//Bài 6: Hiển thị địa chỉ người dùng

export function getDisplayedAddress(address) {
    let {number, street, ward, district, city} = address

    const result = ((number || "...") + " ") + ((street || "...") + ", ") + ((ward || "...") + ", ") + ((district || "...") + ", ") + ((city || "..."))

   return result
}