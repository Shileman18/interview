const express=require("express")
const nodemailer=require("nodemailer")
const bodyParser=require("body-parser")
const cors=require("cors")

const app=express()
const port =5000;

app.use(bodyParser.json())
app.use(cors())

let otpStore={}

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"shilemanb@gmail.com",
        pass:"password"
    },
});

app.post("/sendopt",(req,res)=>{
    const {email}=req.body;
    const opt=Math.floor(10000+Math.random()*900000).toString()
    const mailOptions={
        from:"shilemanb@gmail.com",
        to:email,
        subject:"ur opt code ",
        text:`ur otp is ${otp}`

    }
transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
        return res.status(500).send(error.toString())
    }
    otpStore[email]=opt;
    res.status(200).send("otp sent")
})

})

app.post("/varifyotp",(req,res)=>{
    const{email,otp}=req.body;
if(otpStore[email]===otp){
  const templateMailOptions={
    from:"shilemanb@gmail.com",
    to:email,

  }
  transporter.sendMail(templateMailOptions,(error,info)=>{
    if(error){
        return res.status(500).send(error.toString())
    }
    delete otpStore[email];
    res.status(200).send("templete email  sent")

  })
}else{
    res.status(400).send("invalid otp")

}


})

app.listen(port,()=>{`server running on ${port} port`})
