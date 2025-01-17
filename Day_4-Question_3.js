// 2. Group Anagrams: Given an array of strings, group them into anagrams.

function groupAnagrams(words) {
    const map = new Map();

    for (const word of words) {

        const sortedWord = word.split('').sort().join('');


        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }
        map.get(sortedWord).push(word);
    }


    return Array.from(map.values());
}


const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));

