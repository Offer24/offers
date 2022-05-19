var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
var today = new Date();
var dd = today.getDate();
if(dd<10) {
    dd='0'+dd
} 
today = dd;
var d = new Date();
var mydate= new Date()
mydate.setDate(mydate.getDate()-1)
var theyesterday=mydate.getDate()