var reverseWords = function (s) {
    let n = s.length;
    let str = [];
    let end = n - 1;
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === " ") {
            if (i + 1 <= end) {
                str.push(s.slice(i + 1, end + 1));
                str.push(" ");
            }
             end = i - 1;

        }

    }
    if (end >= 0) {
        str.push(s.slice(0, end + 1));
    }


    return str.join("").trim();
};

console.log(reverseWords("the sky is blue"))