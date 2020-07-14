//make a variable Name dateToday & timeToday in your botStar flow before adding this script, both variable data type should be Text

//handling different timezone here, Add your UTC Offset here such as for London(1), for Paris(2) & so on
var offset = 2;

//making date object
var d = new Date();
var utc = d.getTime() + d.getTimezoneOffset() * 60000;
var date_ob = new Date(utc + 3600000 * 2);
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
// getTime
var h = date_ob.getHours();
var m = date_ob.getMinutes();
var s = date_ob.getSeconds();

//finalTime
var finalTime = h + ":" + m + ":" + s;
//final date
let todayDate = date + "/" + month + "/" + year;

done({
  actions: [
    {
      type: "set_variable",
      data: {
        dateToday: todayDate,
        timeToday: finalTime,
      },
    },
  ],
});
