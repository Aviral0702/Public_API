import express from express;
import axios from axios;
const app = express();
app.use(express.static("public"));

const port = 3000;

app.get("/", async (req,res)=>{

})

app.listen(port,()=>{
    console.log(`Server is listening at port ${port}`);
})
