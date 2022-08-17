consolex.header(`1. Fill. Напишите функцию, которая заполняет новый массив предоставленным значением.

   /**
    * Описание задачи: Напишите функцию, которая заполняет новый массив 
    * предоставленным значением.
    * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
    * Сложность задачи: 1 of 5
    * @param {number} arraySize - размер массива
    * @param {?} value - значение для массива
    * @returns {Array}
    */
    const fill = (arraySize, value) => {
        throw new Error('Напишите здесь свое решение');
    }
    
    const data = 3;
    const valueToFill = 'a';
    console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
`);
{
    /**
     * Описание задачи: Напишите функцию, которая заполняет новый массив
     * предоставленным значением.
     * Ожидаемый результат: (3, 'a') => ['a', 'a', 'a']
     * Сложность задачи: 1 of 5
     * @param {number} arraySize - размер массива
     * @param {?} value - значение для массива
     * @returns {Array}
     */

    const fill = (arraySize, value) => {
        return new Array(arraySize).fill(value);
    }

    const data = 3;
    const valueToFill = 'a';
    console.log(fill(data, valueToFill)) // ['a', 'a', 'a']
}
/********************************************************************/
consolex.header(`2. Reverse. Напишите функцию, которая разворачивает массив в обратном порядке.
    Пожалуйста, не используйте array.reverse(), чтобы сделать задачу более интересной.

    /**
     * Описание задачи: Напишите функцию, которая разворачивает
     * массив в обратном порядке.
     * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
     * Сложность задачи: 1 of 5
     * @param {Array} array - Массив любых элементов
     * @returns {Array}
     */

    const reverse = (array) => {
        throw new Error('Напишите здесь свое решение');
    }

    const data = [1, 2, 3];
    console.log(reverse(data)); // [3, 2, 1]
`);
{
    /**
     * Описание задачи: Напишите функцию, которая разворачивает
     * массив в обратном порядке.
     * Ожидаемый результат: [1, 2, 3] => [3, 2, 1]
     * Сложность задачи: 1 of 5
     * @param {Array} array - Массив любых элементов
     * @returns {Array}
     */

    const reverse = (array) => {
        let size = array.length >>> 1
        let end = array.length - 1;
        for (let i = 0; i < size; i++) {
            [array[i], array[end - i]] = [array[end - i], array[i]]
        }
        return array;
    }

    const data = [1, 2, 3];
    console.log(reverse(data)); // [3, 2, 1]
}
/********************************************************************/
consolex.header(`3. Compact. Напишите функцию, которая очищает массив от нежелательных значений,
    таких как false, undefined, пустые строки, ноль, null.

    /**
     * Описание задачи: Напишите функцию, которая очищает массив от нежелательных
     * значений, таких как false, undefined, пустые строки, ноль, null.
     * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
     * Сложность задачи: 1 of 5
     * @param {Array} array - Массив любых элементов
     * @returns {Array}
     */

    const compact = (array) => {
        throw new Error('Напишите здесь свое решение');
    }

    const data = [0, 1, false, 2, undefined, '', 3, null];
    console.log(compact(data)) // [1, 2, 3]
`);
{
    /**
     * Описание задачи: Напишите функцию, которая очищает массив от нежелательных
     * значений, таких как false, undefined, пустые строки, ноль, null.
     * Ожидаемый результат: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]
     * Сложность задачи: 1 of 5
     * @param {Array} array - Массив любых элементов
     * @returns {Array}
     */

    const compact = (array) => {
        return array.filter(val => val);
    }

    const data = [0, 1, false, 2, undefined, '', 3, null];
    console.log(compact(data)) // [1, 2, 3]
}
/********************************************************************/
consolex.header(`4. From Pairs. Напишите функцию, которая возвращает объект, составленный из
  значений вложенных массивов. Первое элемент массива - ключ, второй - зачение.

    /**
     * Описание задачи: Напишите функцию, которая возвращает объект, составленный из
     * значений вложенных массивов. Первое значение - ключ, второе - зачение.
     * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
     * Сложность задачи: 2 of 5
     * @param {Array} array - массив, значения которого массивы пар
     * @returns {Array}
     */

    const fromPairs = (array) => {
        throw new Error('Напишите здесь свое решение');
    }

    const data = [['a', 1], ['b', 2]];
    console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }
`);
{
    /**
     * Описание задачи: Напишите функцию, которая возвращает объект, составленный из
     * значений вложенных массивов. Первое значение - ключ, второе - зачение.
     * Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
     * Сложность задачи: 2 of 5
     * @param {Array} array - массив, значения которого массивы пар
     * @returns {Array}
     */

    const fromPairs = (array) => {
        const res = {};
        for (const [key, val] of array) res[key] = val;
        return res;
    }

    const data = [['a', 1], ['b', 2]];
    console.log(fromPairs(data)) // { 'a': 1, 'b': 2 }
}
/********************************************************************/
consolex.header(`5. Without. Напишите функцию, возвращает новый массив без предоставленных значений.
    Используйте примитивные типы.

    /**
     * Описание задачи: Напишите функцию, возвращает новый массив без
     * предоставленных значений. Используйте примитивные типы.
     * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
     * Сложность задачи: 2 of 5
     * @param {Array} array - Массив с примитивными значениями
     * @param {?} args - лист значений для удаления
     * @returns {Array}
     */

    const without = (array, ...args) => {
        throw new Error('Напишите здесь свое решение');
    }

    const data = [1, 2, 3, 1, 2];
    console.log(without(data, 1, 2)); // [3]
`);
{
    /**
     * Описание задачи: Напишите функцию, возвращает новый массив без
     * предоставленных значений. Используйте примитивные типы.
     * Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]
     * Сложность задачи: 2 of 5
     * @param {Array} array - Массив с примитивными значениями
     * @param {?} args - лист значений для удаления
     * @returns {Array}
     */

    const without = (array, ...args) => {
        return array.filter(val => !args.includes(val))
    }

    const data = [1, 2, 3, 1, 2];
    console.log(without(data, 1, 2)); // [3]
}
/********************************************************************/
consolex.header(`6. Unique. Напишите функцию, которая убирает повторяющиеся значения.

    /**
     * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
     * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
     * Сложность задачи: 2 of 5
     * @param {Array<string | number>} array - Массив с примитивными значениями
     * @returns {Array}
     */

    const unique = (array) => {
        throw new Error('Напишите здесь свое решение');
    }

    const data = [1, 2, 1, 2, 3];
    console.log(unique(data)); // [1, 2, 3]
`);
{
    /**
     * Описание задачи: Напишите функцию, которая убирает повторяющиеся значения.
     * Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]
     * Сложность задачи: 2 of 5
     * @param {Array<string | number>} array - Массив с примитивными значениями
     * @returns {Array}
     */

    const unique = (array) => {
        return array.filter((val, index) => !~array.indexOf(val, index + 1))
    }

    const data = [1, 2, 1, 2, 3];
    console.log(unique(data)); // [1, 2, 3]
}
/********************************************************************/
consolex.header(`7. IsEqual. Напишите функцию, которая сравнивает два массива и возвращает true,
    если они идентичны.

    /**
     * Описание задачи: Напишите функцию, которая сравнивает
     * два массива и возвращает true, если они идентичны.
     * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
     * Сложность задачи: 2 of 5
     * @param {Array} firstArray - Массив с примитивными значениями
     * @param {Array} secondArray - Массив с примитивными значениями
     * @returns {boolean}
     */

    const isEqual = (firstArray, secondArray) => {
        throw new Error('Напишите здесь свое решение');
    }

    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4];
    const arr3 = [1, 2, 3, 5];
    const arr4 = [1, 2, 3, 4, 5];
    console.log(isEqual(arr1, arr2)); // true
    console.log(isEqual(arr1, arr3)); // false
    console.log(isEqual(arr1, arr4)); // false
`);
{
    /**
     * Описание задачи: Напишите функцию, которая сравнивает
     * два массива и возвращает true, если они идентичны.
     * Ожидаемый результат: ([1, 2, 3], [1, 2, 3]) => true
     * Сложность задачи: 2 of 5
     * @param {Array} firstArray - Массив с примитивными значениями
     * @param {Array} secondArray - Массив с примитивными значениями
     * @returns {boolean}
     */

    const isEqual = (firstArray, secondArray) => {
        if(firstArray.length !== secondArray.length) return false;
        let res = true;
        for (let i = 0; res && i < firstArray.length; i++) {
            res = firstArray[i] === secondArray[i];
        }
        return res;
    }

    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4];
    const arr3 = [1, 2, 3, 5];
    const arr4 = [1, 2, 3, 4, 5];
    console.log(isEqual(arr1, arr2)); // true
    console.log(isEqual(arr1, arr3)); // false
    console.log(isEqual(arr1, arr4)); // false
}
/********************************************************************/
consolex.header(`8. Flatten. Напишите функцию, которая преобразует глубокий массив в одномерный.
    Пожалуйста, не используйте array.flat(), чтобы сделать задачу интереснее.

    /**
     * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
     * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
     * Сложность задачи: 3 of 5
     * @param {Array} array - Глубокий массив
     * @returns {Array}
     */

    const flatten = (array) => {
        throw new Error('Напишите здесь свое решение');
    }
    const data = [1, 2, [3, 4, [5]]];
    console.log(flatten(data)); // [1, 2, 3, 4, 5]
`);
{
    /**
     * Описание задачи: Напишите функцию, которая преобразует глубокий массив в одномерный.
     * Ожидаемый результат: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]
     * Сложность задачи: 3 of 5
     * @param {Array} array - Глубокий массив
     * @returns {Array}
     */

    const flatten = (array) => {
        for (let i = 0; i < array.length; i++) {
            while (Array.isArray(array[i])) {
                array = array.slice(0, i)
                    .concat(array.slice(i, i + 1).reduce((acc, val) => acc.concat(val), []))
                    .concat(array.slice(i + 1));
            }
        }
        return array;
    }
    const data = [1, 2, [3, 4, [5]]];
    console.log(flatten(data)); // [1, 2, 3, 4, 5]
}
/********************************************************************/
consolex.header(`9. Chunk. Напишите функцию, которая разделяет массив на части заданного размера.

    /**
     * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
     * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
     * Сложность задачи: 3 of 5
     * @param {Array} array - Массив элементов
     * @param {number} size - Размер чанков
     * @returns {Array}
     */

    const chunk = (array, size) => {
        throw new Error('Напишите здесь свое решение');
    }

    const data = [1, 2, 3, 4, 5, 6, 7];
    console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
    console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
`);
{
    /**
     * Описание задачи: Напишите функцию, которая разделяет массив на части заданного размера.
     * Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
     * Сложность задачи: 3 of 5
     * @param {Array} array - Массив элементов
     * @param {number} size - Размер чанков
     * @returns {Array}
     */

    const chunk = (array, size) => {
        const res = [];
        for (let i = 0; i < array.length; i+=size) {
            res.push(array.slice(i, i + size));
        }
        return res;
    }

    const data = [1, 2, 3, 4, 5, 6, 7];
    console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
    console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]
}
/********************************************************************/
consolex.header(`10. Intersection. Напишите функцию, которая создаст массив из уникальных значений,
    которые есть в каждом из предоставленных массивов. Используйте примитивные типы данных.

    /**
     * Описание задачи: Напишите функцию, которая создаст массив из
     * уникальных значений, которые есть в каждом из предоставленных массивов.
     * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
     * Сложность задачи: 4 of 5
     * @param {?} arrays - Массив примитивных значений
     * @returns {Array}
     */

    const intersection = (...arrays) => {
        throw new Error('Напишите здесь свое решение');
    }

    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr3 = ['a', 'b'];
    const arr4 = ['b', 'c'];
    const arr5 = ['b', 'e', 'c'];
    const arr6 = ['b', 'b', 'e'];
    const arr7 = ['b', 'c', 'e'];
    const arr8 = ['b', 'e', 'c'];
    console.log(intersection(arr1, arr2)) // [2]
    console.log(intersection(arr3, arr4, arr5)) // ['b']
    console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
`);
{
    /**
     * Описание задачи: Напишите функцию, которая создаст массив из
     * уникальных значений, которые есть в каждом из предоставленных массивов.
     * Ожидаемый результат: ([1, 2], [2, 3]) => [2]
     * Сложность задачи: 4 of 5
     * @param {?} arrays - Массив примитивных значений
     * @returns {Array}
     */

    const intersection = (...arrays) => {
        if(!arrays.length) return [];
        const res = arrays[0].filter((val, idx, arr) => arr.indexOf(val, idx + 1) === -1);
        for (let i = res.length - 1; i >= 0; i--) {
            let val = res[i];
            for (let j = 1; j < arrays.length; j++) {
                if(!arrays[j].includes(val)){
                    res.splice(i, 1);
                    break;
                }
            }
        }
        return res;
    }
    const arr1 = [1, 2];
    const arr2 = [2, 3];
    const arr3 = ['a', 'b'];
    const arr4 = ['b', 'c'];
    const arr5 = ['b', 'e', 'c'];
    const arr6 = ['b', 'b', 'e'];
    const arr7 = ['b', 'c', 'e'];
    const arr8 = ['b', 'e', 'c'];
    console.log(intersection(arr1, arr2)) // [2]
    console.log(intersection(arr3, arr4, arr5)) // ['b']
    console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']
}
/********************************************************************/
