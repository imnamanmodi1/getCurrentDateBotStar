//make a variable Name dateToday & timeToday in your botStar flow before adding this script
//making date object
var date_ob = new Date();
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
