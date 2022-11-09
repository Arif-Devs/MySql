var mysql = require ('mysql')


var DatabaseConnectionConfig = {
    host:'localhost',
    user: 'root',
    pass: '',
    database: 'school'
}

var con = mysql.createConnection(DatabaseConnectionConfig)

con.connect(function (error){

    if(error){
        console.log('Connection faild')
    }
    else{
        console.log('connect successful')
       // InsertData(con)
        DeleteDataById(con)
    }
});

function InsertData(con) {
    let SQLQuery ="INSERT INTO `student_list`( `Name`, `Roll`, `Class`, `email`) VALUES ('HM Younus', '01', 'ten', 'arif@gmail.com')"
    con.query(SQLQuery, function (error){
                if(error){
                    console.log('data faild')
                }
                else{
                    console.log('insert SUCCESS')
                }
    })

    function DeleteDataById(con){
        let SQLQuery = "DELETE FROM `student_list` WHERE `id`='3'";
        con.query(SQLQuery, function (error){
            if(error){
                console.log('data delete faild')
            }
            else{
                console.log('data delete success')
            }
        })
    }









}