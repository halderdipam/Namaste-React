{
  /* 
<div id='color'>
Hello World
<div id='child'>Hi there..</div>
</div> */
}

const parent = React.createElement(
  "div",
  { id: "color" },
  ["Hello World",React.createElement("div", { id: "child" }, "Hi there..")],
  
);
console.log('React CreateElement',parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
