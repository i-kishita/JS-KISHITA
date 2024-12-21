/*const heading = React.createElement("h1", {}, "hello from react");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);*/


/*<div id="parent">
    <div id=" child">
        <h1 id="heading"></h1>
    </div>
</div>

if we want to make nested structure we create element at child argument

if we want to add siblings then we make array of children 
*/

/*const parent = React.createElement("div", {id: " parent"},
                    React.createElement("div", {id: "child"},
                     React.createElement("h1", {id: "heading"}, "hello i am heading")
                    )
                    
                );*/

const parent = React.createElement("div", {id: " parent"},
                      React.createElement("div", {id: "child"},[
                        React.createElement("h1", {id: "heading"}, "hello i am heading"),
                        React.createElement("h2", {id: "heading"}, "hello i am heading two")
                       ]
                    )
                    
                );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);