const express = require("express");
const mongoose = require("mongoose");
var mongo = require('mongodb');
const Admin = require("./modules/Admin");
const Department = require("./modules/Department");
const Doctor = require("./modules/Doctor");
const Doctorlog = require("./modules/Doctorlog");
const Employee = require("./modules/Employee");
const hoddetails = require("./modules/hod");
const Patient = require("./modules/Patient");
const Ward = require("./modules/Ward");
var bodyParser = require('body-parser');
const HODdetails = require("./modules/hod");
const Admission = require("./modules/admission");
const Login = require("./modules/Login");






const app = express();
app.use(express.static("public"));


app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));

//connect ejs file to mongodb database hospital management

const dbURI =
  "mongodb+srv://nagaveniGopal:nagaveni12345@skills.uryg3.mongodb.net/hospitalManagement?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
//create server port number 3000
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

  app.use(bodyParser.json()) 

  //give page render permission
app.get("/",(req,res)=>{
    res.render("index.ejs")
});

app.get("/patient",(req,res)=>{
    res.render("patient.ejs")
});

app.get("/about",(req,res)=>{
  res.render("about.ejs")
});

app.get("/history",(req,res)=>{
  res.render("history.ejs")
});

app.get("/treatment_details",(req,res)=>{
  res.render("treatment.ejs")
});

app.get("/available_doctor",(req,res)=>{
  res.render("available_doctor.ejs")
});

app.get("/employee",(req,res)=>{
    res.render("employee.ejs")
});

app.get("/appointment",(req,res)=>{
  res.render("appointment.ejs")
});


app.get("/hod",(req,res)=>{
    res.render("hod.ejs")
});

app.get("/admission",(req,res)=>{
    res.render("admission.ejs")
});

app.get("/department",(req,res)=>{
    res.render("department.ejs")
});

app.get("/doctor",(req,res)=>{
    res.render("doctor.ejs")
});

app.get("/doctorlog",(req,res)=>{
    res.render("doctorlog.ejs")
});

app.get("/index",(req,res)=>{
    res.render("index.ejs")
});

app.get("/updatepassword",(req,res)=>{
    res.render("updatepassword.ejs")
});

app.get("/ward",(req,res)=>{
    res.render("ward.ejs")
});

app.get("/admin",(req,res)=>{
    res.render("admin.ejs")
});

app.get("/home",(req,res)=>{
    res.render("home.ejs")
});

app.get("/patientLogin",(req,res)=>{
    res.render("patientLogin.ejs")
});

app.get("/deleteemployee/:id",(req,res)=>{
  res.render("deleteemployee.ejs")
});





app.use(
    express.urlencoded({ extended: true })
);

 app.use(bodyParser.json())

 //post employee collection to database through the server
app.post("/employee", async (req, res) => {
    const { name,ph_no,date_of_birth,gender,address,email,joining_date,salary,role} =
      req.body;
    //console.log("request body",req.body);
    try {
      const employee = await Employee.create({
        name,
        ph_no,
        date_of_birth,
        gender,
        address,
        email,
        joining_date,
        salary,
        role,
      
      });
      res.redirect("/employee");
    // res.status(201).json({ Faculty });
  } catch (err) {
    console.log(err);
  }
});

app.post("/department", async (req, res) => {
  const { 
    dept_name,
    start_date } =
    req.body;
  //console.log("request body",req.body);
  try {
    const department = await Department.create({
      dept_name,
      start_date,
    });
    res.redirect("/department");
  // res.status(201).json({ Faculty });
} catch (err) {
  console.log(err);
}
});

app.post("/doctor", async (req, res) => {
  const { name,ph_no,date_of_birth,gender,address,email,joining_date,salary,qualification,speciallization,experience,dept_id } =
    req.body;
  //console.log("request body",req.body);
  try {
    const doctor = await Doctor.create({
      name,
      ph_no,
      date_of_birth,
      gender,
      address,
      email,
      joining_date,
      salary,
      qualification,
      speciallization,
      experience,
      dept_id ,
    });
    res.redirect("/doctor");
  // res.status(201).json({ Faculty });
} catch (err) {
  console.log(err);
}
});

app.post("/hod", async (req, res) => {
  const { hod_id,dept_id,start_date } =
    req.body;
  //console.log("request body",req.body);
  try {
    const hoddetails = await HODdetails.create({
      hod_id,
      dept_id,
      start_date
    });
    res.redirect("/hod");
  // res.status(201).json({ Faculty });
} catch (err) {
  console.log(err);
}
});

app.post("/ward", async (req, res) => {
  const { ward_name,ward_location,ward_status,ward_type,ward_capacity } =
    req.body;
  //console.log("request body",req.body);
  try {
    const ward = await Ward.create({
      ward_name,
      ward_location,
      ward_status,
      ward_type,
      ward_capacity,
    });
    res.redirect("/ward");
  // res.status(201).json({ Faculty });
} catch (err) {
  console.log(err);
}
});

app.post("/patient", async (req, res) => {
  const {name,ph_no,email,date_of_birth,gender,address,blood_group } =
    req.body;
  //console.log("request body",req.body);
  try {
    const patient = await Patient.create({
      
      name,
      ph_no,
      email,
      date_of_birth,
      gender,
      address,
      blood_group,
    });
    res.redirect("/viewpatient");
  // res.status(201).json({ Faculty });
} catch (err) {
  console.log(err);
}
});

app.post("/admin", async (req, res) => {
  const { username, password } = req.body;

  let admin = await Admin.findOne({ username, password });
  if (admin) {
    return res.redirect("/home");
  }
  res.redirect("/admin");
});

app.post("/patientLogin", async (req, res) => {
  const { username, password } = req.body;

  let patientLogin = await Login.findOne({ username, password });
  if (patientLogin) {
    return res.redirect("/appointment");
  }
  res.redirect("/patientLogin");
});

app.post("/admission", async (req, res) => {
  const {patient_id,ward_id,doctor_id,admission_date,discharge_date,bill_amt,status } =
    req.body;
  //console.log("request body",req.body);
  try {
    const admission = await Admission.create({
      patient_id,
      ward_id,
      doctor_id,
      admission_date,
      discharge_date,
      bill_amt,
      status,
    });
    res.redirect("/admission");
  // res.status(201).json({ Faculty });
} catch (err) {
  console.log(err);
}
});


//update collection required data



// app.post("/updateemployee", async (req, res) => {
//   const {employee_id,name,ph_no,address,email,salary} =
//     req.body;
//   try {
//     const employee = await Employee.updateOne({
//       _id:employee_id
//     },{
//       $set: {
//         name,
//         ph_no,
//         address,
//         email,
//         salary,
//       }
//     }
//     );
//     res.redirect("/viewemployee");
//   // res.status(201).json({ Faculty });
// } catch (err) {
//   console.log(err);
// }
// });

       

// app.get("/updateemployee/:id", (req, res,next) => {
//   Employee.findById(req.params.id, (err, result) => {
    
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(result);
//       res.render("updateEmployee.ejs", { result });
//     }
//   });
// });

// const isAuth = (req, res, next) => {
// 	if (req.session.isAuth) {
// 		app.locals.access = req.session.access;
// 		app.locals.auth = req.session.isAuth;
// 		next();
// 	} else {
// 		res.redirect("/");
// 	}
// };

app.get("/editemployee/:id", (req, res) => {
	Employee.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("updateEmployee.ejs", { result });
	});
});

app.get("/copy_employee/:id", (req, res) => {
	Employee.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("employee_copy.ejs", { result });
	});
});



app.post("/updateemployee/:id", async (req, res) => {
	const { Employee_id,name,ph_no,address,email,salary} = req.body;
	try {
		await Employee.findOneAndUpdate(
			{ _id: req.params.id },
			{name,ph_no,address,email,salary },
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				res.redirect("/viewemployee");
			}
		).clone();
	} catch (error) {
		console.error(error);
	}
});

app.get("/editdoctor/:id", (req, res) => {
	Doctor.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("updatedoctor.ejs", { result });
	});
});

app.get("/copy_doctor/:id", (req, res) => {
	Doctor.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("doctor_copy.ejs", { result });
	});
});

app.post("/updatedoctor/:id", async (req, res) => {
	const { name,ph_no,address,email,salary,qualification,speciallization,experience,dept_id} = req.body;
	try {
		await Doctor.findOneAndUpdate(
			{ _id: req.params.id },
			{name,ph_no,address,email,salary,qualification,speciallization,experience,dept_id },
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				res.redirect("/viewdoctor");
			}
		).clone();
	} catch (error) {
		console.error(error);
	}
});

app.get("/editpatient/:id", (req, res) => {
	Patient.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("updatepatient.ejs", { result });
	});
});

app.get("/copy/:id", (req, res) => {
	Patient.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("patient_copy.ejs", { result });
	});
});

app.post("/updatepatient/:id", async (req, res) => {
	const {name,ph_no,email,address,blood_group} = req.body;
	try {
		await Patient.findOneAndUpdate(
			{ _id: req.params.id },
			{name,ph_no,email,address,blood_group },
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				res.redirect("/viewpatient");
			}
		).clone();
	} catch (error) {
		console.error(error);
	}
});


app.get("/editadmission/:id", (req, res) => {
	Admission.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("updateadmission.ejs", { result });
	});
});

app.get("/copy_admission/:id", (req, res) => {
	Admission.find({_id: req.params.id }, function (err, result) {
		if (err) {
			console.log(err);
			return;
		}
		res.render("admission_copy.ejs", { result });
	});
});


app.post("/updateadmission/:id", async (req, res) => {
	const {ward_id,doctor_id,discharge_date,bill_amt,status} = req.body;
	try {
		await Admission.findOneAndUpdate(
			{ _id: req.params.id },
			{ward_id,doctor_id,discharge_date,bill_amt,status},
			(err, result) => {
				if (err) {
					console.log(err);
					return;
				}
				res.redirect("/viewadmission");
			}
		).clone();
	} catch (error) {
		console.error(error);
	}
});



      
      //view all documents in the collection
  
       app.get("/viewemployee", (req, res) => {
        Employee.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("viewemployee.ejs", { result });
          }
        });
      });

      app.get("/employee_details", (req, res) => {
        Employee.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("employee_details.ejs", { result });
          }
        });
      });

      app.get("/viewdepartment", (req, res) => {
        Department.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("viewdepartment.ejs", { result });
          }
        });
      });

      app.get("/department_details", (req, res) => {
        Department.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("department_details.ejs", { result });
          }
        });
      });

      app.get("/viewdoctor", (req, res) => {
        Doctor.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("viewdoctor.ejs", { result });
          }
        });
      });

      app.get("/doctor_details", (req, res) => {
        Doctor.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("doctor_details.ejs", { result });
          }
        });
      });

      app.get("/viewhod", (req, res) => {
        HODdetails.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("viewhod.ejs", { result });
          }
        });
      });

      app.get("/hod_details", (req, res) => {
        HODdetails.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("hod_details.ejs", { result });
          }
        });
      });

      app.get("/viewward", (req, res) => {
        Ward.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("viewward.ejs", { result });
          }
        });
      });

      app.get("/ward_details", (req, res) => {
        Ward.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("ward_details.ejs", { result });
          }
        });
      });

      

      app.get("/viewpatient", (req, res) => {
        Patient.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("viewpatient.ejs", { result });
          }
        });
      });

      app.get("/viewadmission", (req, res) => {
        Admission.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.render("viewadmission.ejs", { result });
          }
        });
      });

      //delete particular document

      app.get("/viewemployee/:id",(req,res,next)=>{
        Employee.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err){
            res.redirect("/viewemployee");
          }
          else{
            console.log("failed to delete employee details")
          }
        });
      });

      app.get("/viewadmission/:id",(req,res,next)=>{
        Admission.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err){
            res.redirect("/viewadmission");
          }
          else{
            console.log("failed to delete admission details")
          }
        });
      });

      app.get("/viewhod/:id",(req,res,next)=>{
        HODdetails.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err){
            res.redirect("/viewhod");
          }
          else{
            console.log("failed to delete HOD details")
          }
        });
      });

      app.get("/viewdepartment/:id",(req,res,next)=>{
        Department.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err){
            res.redirect("/viewdepartment");
          }
          else{
            console.log("failed to delete Department details")
          }
        });
      });

      app.get("/viewdoctor/:id",(req,res,next)=>{
        Doctor.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err){
            res.redirect("/viewdoctor");
          }
          else{
            console.log("failed to delete Doctor details")
          }
        });
      });

      app.get("/viewpatient/:id",(req,res,next)=>{
        Patient.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err){
            res.redirect("/viewpatient");
          }
          else{
            console.log("failed to delete patient details")
          }
        });
      });

      app.get("/viewward/:id",(req,res,next)=>{
        Ward.findByIdAndRemove(req.params.id,(err,doc)=>{
          if(!err){
            res.redirect("/viewward");
          }
          else{
            console.log("failed to delete ward details")
          }
        });
      });

      // app.get("/updateemployee/:id",(req,res,next)=>{
      //   Employee.findById(req.params.id,(err,result)=>{
      //     if(!err){
      //       res.redirect("/updateemployee", { result });
      //     }
      //     else{
      //       console.log("failed to delete ward details")
      //     }
      //   });
      // });

//       app.post("/viewemployee",(req,res,next)=>{
//             const {employee_id,name,ph_no,address,email,salary} =
//     req.body;
//   try {
//     const employee = Employee.updateOne({
//       _id:employee_id
//     },{
//       $set: {
//         name,
//         ph_no,
//         address,
//         email,
//         salary,
      
//     }
//   }
//     );
//     res.redirect("/viewemployee");
//   // res.status(201).json({ Faculty });
// } catch (err) {
//   console.log(err);
// }
//       });
          

      



  
  



