import jwt from "jsonwebtoken";


const fetchid = async (req, res, next) => {
    try {
        const token = req.header('auth_token');
        const secret = process.env.JWTOKEN;

        // console.log(token)

        if (token) {
            const verify = await jwt.verify(token, secret)
            // console.log(verify)
            if(verify){
                req.id=verify.id
                // console.log(verify.id)
            } else{
                res.status(401).send("password doesnot verified")
            }
        } else{
            res.status(401).send("Token Doesnot verify")
        }
        next();


    } catch (error) {
        res.status(401).send("Access Denied")
    }

}

export default fetchid