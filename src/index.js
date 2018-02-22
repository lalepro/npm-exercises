'use-strict';

{
    const $ = require('jquery');

    const sayHello = () => {
        console.log("Hello");
    };

    sayHello();

    $('h1').click(function(event) {
        $(event.target).css("background-color", "grey");
    });


}