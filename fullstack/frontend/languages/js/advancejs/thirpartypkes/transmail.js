var nodemailer=require('nodemailer')

var trnsp=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'waseemahmed116@gmail.com',
        pass:'1ac13cs034'
    }
})

var options={
    from:'waseemahmed116@gmail.com',
    to:'mailtokhushi13@gmail.com',
    subject:'test third party pakage',
    text:'hello how r u '
}

trnsp.sendMail(options,(err,res)=>{
    if(err)throw err
    console.log('mail send')
})