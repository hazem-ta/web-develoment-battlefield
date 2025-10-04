import pg from "pg";

const db = new pg.Client({
    user: "uu",
    host: "localhost",
    database: "mydb",
    password: "password",
    port: 5432,
});

db.connect();

db.query("select * from capitals" , (err,res) => {
    if (err){
        console.log("Error" , err.stack);
    }else{
        let quiz = res.rows;
        console.log(typeof(quiz));

    }

    db.end();
});


