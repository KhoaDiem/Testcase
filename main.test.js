import {isIncreasingNumber, 
    isDecreasingNumber, 
    isPerfectSquare,
    isPerfectNumber,
    isDivisibleBy10,
    countWords,
    getDisplayedAddress,
    } from './main.js'

    //Bài 1: Kiểm tra số tăng dần
    test('check n is Increasing Number', () => {
        [12, 13, 14, 15, 16, 17, 18, 19, 123, 26 ,28, 456, 567, 789].forEach(e => {
          expect(isIncreasingNumber(e)).toBe(true);
        });
        [112, 113, 321, 432, 21, 11, 987, 12345].forEach(e => {
          expect(isIncreasingNumber(e)).toBe(false);
        });
        [undefined, null, -1, ''].forEach(e => {
          expect(isIncreasingNumber(e)).toBe(false);
        });
      });

      //Bài 2: Kiểm tra số giảm dần
test('check n is Decreasing Number', () => {
    [321, 432, 987, 32, 31, 51, 91, 95, 96, 81, 62, 21].forEach(e => {
      expect(isDecreasingNumber(e)).toBe(true)
    });
    [9, 8, 2, 1, 12, 11, 22, 998, 988, 221, 211, 54321].forEach(e => {
      expect(isDecreasingNumber(e)).toBe(false);
    });
    [undefined, null, -1, ''].forEach(e => {
      expect(isDecreasingNumber(e)).toBe(false);
    });
  })

  // Bài 5: Kiểm tra số chính phương
  test('check n is Perfect Square Number', () => {
    [4, 9, 16, 25, 36].forEach(e => {
      expect(isPerfectSquare(e)).toBe(true)
    });
    [6, 5, 7, 13, 444, 112, '', -1, null, undefined].forEach(e => {
      expect(isPerfectSquare(e)).toBe(false);
    })
  })
  
  // Bài 6: Kiểm tra số hoàn hảo
  test('check n is Perfect Number', () => {
    [6, 28, 496].forEach(e => {
      expect(isPerfectNumber(e)).toBe(true)
    });
    [5, 7, 13, 8128, 1112, 13, undefined, null, -1, ''].forEach(e => {
      expect(isPerfectNumber(e)).toBe(false);
    })
  })

  // Bài 8: Kiểm tra số có tổng chữ số chia hết cho 10

test('check n is Divisible By 10', () => {
    [127, 19, 91].forEach(e => {
      expect(isDivisibleBy10(e)).toBe(true)
    });
    [12, 56, 77, 99 , 1234, undefined, null, -1, ''].forEach(e => {
      expect(isDivisibleBy10(e)).toBe(false);
    })
  })

  //String

//Bài 1: Ðếm số từ có trong câu

test('count Words', () => {
    expect(countWords('hung do')).toBe(2)
    expect(countWords('hello')).toBe(1)
    expect(countWords('good work men')).toBe(3)
  })
  
  //Bài 6: Hiển thị địa chỉ người dùng

test('display address user', () => {
    expect(getDisplayedAddress({
      number: 123,
      street: 'Nguyen Cong Tru',
      ward: 'Ward 11',
      district: 'Binh Thanh District',
      city: 'HCMC'
     })
     ).toBe('123 Nguyen Cong Tru, Ward 11, Binh Thanh District, HCMC')
  })