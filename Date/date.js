function showDate(){
    var date=new Date();

    let hour=date.getHours();
    let min=date.getMinutes();
    let sec=date.getSeconds();

    let day=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();
    let currentDate=`${day}-${month}-${year}  ${hour}:${min}:${sec}`;
    document.write(currentDate);
}