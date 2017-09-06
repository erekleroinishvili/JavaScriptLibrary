process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});




// Optional from here onwards


var currentLine = 0;
function readline(a) {
    return a.split("\n")[currentLine++];
}
