# EGuru
### EGuru is a web based Learning Management System App, created using **MERN** stack. 
It provides the most customizable and secure infrastructure to launch one’s personalized Educational website,
while facilitating effortless management of e-courses and participants.  

---

. **Home page**
<img src='/images/home.PNG' title='home page'/>

---
**Some of the Features :**
* Secured accounts and session using JSON web tokens and HMAC encryption.
* Facilitates instructor to create fully customizable Page look for his/her website. 
* Provides interactive UI to structure e-course contents.
* Students can explore courses and enroll into them.
* Students have classified access to the content.

  
**Building Blocks of EGuru :**
* Frontend - ReactJS
* Backend - NodeJs [ExpressJS server fraamework]
* Database Tier - MongoDB [hosted at MongoDB Atlas]


[See full documentation of EGuru.](https://github.com/akash99-code/EGuru/blob/master/EGuru%20Docs.pdf)

---

**Peek into Eguru's secured registration and authentication process**  

<img src='/images/reg1.png' title='fill details'/><img src='/images/reg2.png' title='on sumbit'/>  
*Account activation link, which is valid for 10 minutes, is mailed to user’ mail-ID*  

<img src='images/reg3.png' width=600 title="in user's mailbox" />   

*Mailed link directs to Activation Page –*  
<img src='/images/reg4.png' title='registraction successful'/>

[Get all the snapshots of the project here.](https://github.com/akash99-code/EGuru/blob/master/EGuru%20Docs.pdf)

---

**Internal mechanism behind the above process**  
  
  
<img src='/images/Regworkflow.PNG' title='registraction successful'/>

---

**Mongoose schema utilized during the above process**

const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            trim:true,
            required:true,
            unique:true,
            lowercase:true
        },
        name:{
            type:String,
            trim:true,
            required:true
        },
        hashed_password:{
            type:String,
            required:true
        },
        salt:String,
        role:{
            type:String,
            default:'Normal'
        },
        resetPasswordLink:{
            type:String,
            default:''
        },
        pageId:{
            type:String,
            default:''
        },
    },
    {
        collection: 'teacherAuth'
    },
    {
        timeStamp:true
    }
);


[Find out other database schemas utilized by EGuru.](https://github.com/akash99-code/EGuru/blob/master/EGuru%20Docs.pdf)

---

EGuru was completed for the submission of Final Year UG-Project, under a time-span of 2 months.  
Contributors- 
* [Narendra Kumar Reddy](https://github.com/NarendraPolimera)
* [Akash Bairagi](https://github.com/akash99-code/)
      
*This project has not been deployed on internet yet.*




