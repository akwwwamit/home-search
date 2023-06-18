const express=require("express");
const path=require("path");
const hbs=require("hbs");

const app=express();
const port=process.env.port || 8000;

const assetPath=path.join(__dirname, "../public/");
const viewspath=path.join(__dirname, "../views");
const partialsPath=path.join(__dirname, "../views/partials");

console.log(viewspath);

app.set("view engine", "hbs");
app.set("views", viewspath);
app.use(express.static(assetPath));
hbs.registerPartials(partialsPath);

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/all-agents", (req, res)=>{
    res.render("all-agents");
});

app.get("/agents-detail", (req, res)=>{
    res.render("agent-detail");
});


app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("/contact-us", (req, res)=>{
    res.render("contact-us");
});


app.get("*", (req, res)=>{
    res.render("404error");
});

app.listen(port, ()=>{
    console.log(`Listening in port ${port}`);
});

