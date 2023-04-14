import connection from "../config/database";

async function insertUser(email:string ,password:string) {
    try {
        await connection.query(
        `
          INSERT INTO users
          ( email, password)
          VALUES ($1, $2)
          `,
        [email, password]
      );
    } catch (error) {
     console.log(error);
    }
  }

async function getUserByEmail(email:string) {
    return await connection.query(
      `
       SELECT * FROM users
       WHERE email=$1
     `,
     [email]
    );
       
  }

const userRepository = {
    insertUser,
    getUserByEmail,
  };
  
export default userRepository;