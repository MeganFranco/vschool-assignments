var React = require('react');
var ReactDom = require('reactt-dom');

//the paradigm of components --> react is completely component based... 
//ie everything is a component

var HelloWorld = React.createClass({
    //ever contstuctor is going to have a render function:
    render: function(){
        return (
            //where you can write your html
            <h1>Hello World!</h1>
            )
    }
});

ReactDom.rende(
    
    <HelloWorld/>, document.getElementById('app')
)