/////////database Eguru/////////

const teacherAuth=new mongoose.Schema(
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
        default:'instructor'
    },
    resetPasswordToken:{
        type:String,
        default:''
    }

}
);
const teacherProfile=new mongoose.Schema(
    {
        email:String,
        name:{ 
            firstname:String ,
            lastname:String 
        },
        Address:{
            country:String,
            state:String,
            city:String
        },
        phone:[ ],
        whatsapp: String,
        socialLinks:[
            {platform:String, url:Link}
        ],
        profilePic:Image,
        status:String,
        totCourses:Integer,
        totMembs:Integer,
        experiences:[],
        achievements:[],
        skills:[],
        gitRepo:Link

    }
    );

const pageDetails=new mongoose.Schema(
    {
        email:String,
        title:{
            type:String,
            required:true,
        },
        tag:String,
        author:String,
        descript:String,
        introTxt:String,
        conclTxt:String,
        searchBox:Boolean,
        about:String,
        contacts:[],
        populatity:Float,
        dateCreated:Date,
        categories:[],
        courses:[]
    }
    );

    const course=new mongoose.Schema(
        {
            pageId:ObjectId,

            name:{
                type:String,
                trim:true,
                required:true,
                unique:true
            },
            category:[],
            duration:{
                type:Integer,
                default:"0"
            },
            rating:{
                type:Float,
                default:"0"
            },
            members:{
                total:Integer,
                mems:[
                    {
                        membid:ObjectId,
                        name:String,
                        validity:TimeRanges,
                    }
                ]
            },
            lastUpdated:Date,
            roadMap:[
                {
                    sectionName:String,
                    subcontents:[ 
                    {
                        serialNo:Integer,
                        file:File,
                        type:('video','doc','assign'),
                        title:{
                                       type:String,
                                       required:true,
                           },
                        views:Integer,
                        likes:Integer,
                        feedbacks:[
                                        { 
                                            type:('question','comment'), 
                                            author:{
                                                name:String,
                                                memid:ObjectId
                                            } 
                                        }
                         ],
                        size:Size
                        }
                   ]
               }
            ]

        }
    );

    const studentDetail=new mongoose.Schema(
    {
        email:String,
        memid:String,
        name:{ 
            firstname:String ,
            lastname:String 
        },
        Address:{
            country:String,
            state:String,
            city:String
        },
        phone:[ ],
        eduStatus:String,
        profilePic:Image,
        totCourses:Integer,
        courses:[
            {
                courseid:ObjectId,
                pageid:ObjectId,
                intructorName:String,
                progress:Float,
                scores:Float,
                validity:TimeRanges,
                EnrolledDate:Date

            }
        ]
    }
);