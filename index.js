//make a variable Name dateToday in your botStar flow before adding this script
//making date object
var date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();

//final date
let todayDate = date + "/" + month + "/" + year;

done({
  actions: [
    {
      type: "set_variable",
      data: {
        dateToday: todayDate,
      },
    },
  ],
});
