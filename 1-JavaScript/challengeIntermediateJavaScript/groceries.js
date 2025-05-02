/*Write a function groceries() that takes an array of object literals of grocery items. 
The function should return a string with each item separated by a comma except the last two 
items should be separated by the word 'and'. 
Make sure spaces (' ') are inserted where they are appropriate.*/

function groceries(arr) {
    let items = [];
    for (let i = 0; i<arr.length ; i++){
        items.push(arr[i][`item`]);
    } 

    if(items.length === 1){
        return items[0];
    } else if (items.length === 2){
        return `${items[0]} and ${items[1]}`; 
    } else {
        let result = '';
            for(let i = 0; i<items.length-1 ; i++) {
                result += items[i];
                if (i < items.length - 2) {result += ", "};
                //console.log(result);
            } result += ` and ${items[items.length - 1]}`;
            return result;
    }
}

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
groceries( [{item: 'Cheese Balls'}] );
groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}])
