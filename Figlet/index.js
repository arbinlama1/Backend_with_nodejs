const figlet = require("figlet");
figlet("A   r   b   i  n     T  a  m  a  n  g", function(err,data) {
    if(err) {
        console.log("Somethings went wrong ...");
        console.dir(err);
        return;
    }
    console.log(data);
});