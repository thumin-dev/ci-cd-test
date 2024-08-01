// Get the client
import mysql from 'mysql2/promise';

// import getDatabaseCredentials from '../secrectManager'; // Adjust the path as needed

export default async function db(query, value)
{
    try {
      // const credentials = await getDatabaseCredentials();
      // Create the connection to database
      const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "hopefuel",
        password: "root",
        port: 3306,
        waitForConnections: true,
      });
      console.log('[DB] Database Connected');
      if(!connection){
        console.log("database connection error");
      }

      let [result, field] = await connection.query(query, value);
        console.log("[DB] query success");
      return result;
    } catch (error) {
        console.log("[DB] query error");
        console.error(error);
    }
   
    
}

