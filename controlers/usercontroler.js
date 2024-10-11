import usermodel from "../schema/usermodal.js";
import Jwt from "jsonwebtoken";
const { sign } = Jwt;
import bcrypt from "bcrypt";
const { hash, genSalt, compare } = bcrypt


class clientcontroller {

    static createClient = async (req, res) => {
        try {
            const { fname, lname, email, contact, address, city, state, zip, password, country} = req.body;
            // console.log(req)
            const passhash = async () => {
                const pass = password
                const salt = await genSalt(8);
                const process = await hash(pass, salt)
                return process
            }
            const hashed = await passhash()
            // console.log(hashed)
            const doc = new usermodel({
                Name: fname + " " + lname,
                Email: email,
                Contact: contact,
                Address: address,
                City: city + "/" + state,
                Zipcode: zip,
                Country: country,
                password: hashed,
            })
            const result = await doc.save();
            const id = result._id
            const secret = process.env.JWTOKEN

            const auth_token = () => {
                return sign({ id: id }, secret)
            }

            const auth = auth_token();
            // console.log(auth)

            // console.log(id)
            res.send(auth);
        } catch (error) {
            res.send("error is handling")
        }
    }



    static loginhandler = async (req, res) => {
        try {
            const { contact, password } = req.body;
            const result = await usermodel.find({ Contact: contact })
            const user = result[0]
            if (result) {

                const authen = await compare(password, user.password);

                if (authen) {
                    const id = user._id
                    // console.log(id)
                    const secret = process.env.JWTOKEN

                    const auth_token = () => {
                        return sign({ id: id }, secret)
                    }

                    const auth = auth_token();
                    const final = {
                        auth_token: auth,
                        success: true
                    }

                    res.send(final);
                }
                else {
                    const final = {
                        success: false
                    }

                    res.send(final);
                }
            } else {
                const final = {
                    success: false
                }

                res.send(final);
            }

        } catch (error) {
            const final = {
                success: false
            }

            res.send(final);
        }
    }



    static getAllClient = async (req, res) => {
        try {
            const result = await usermodel.find();
            res.send(result);
        } catch {
            res.send("could not find result")
        }
    }



    static getClientById = async (req, res) => {
        try {
            const id = req.id
            console.log(id)
            const result = await usermodel.findById(id);
            const final = {
                auth_token: result,
                success: true
            }
            res.send(final);
        } catch {
            res.send("could not find result")
        }
    }



    static updateClient = async (req, res) => {
        try {
            const { fname, lname, email, contact, address, city, state, zip, country, cart, password } = req.body;
            const result = await usermodel.findByIdAndUpdate(req.params.id, {
                Name: fname + " " + lname,
                Email: email,
                Contact: contact,
                Address: address,
                City: city + "/" + state,
                Zipcode: zip,
                Country: country,
                password: password,
            });
            res.send(result);
        } catch (error) {
            res.send("canont")
        }
    }



    static deleteClient = async (req, res) => {
        try {
            const result = await usermodel.findByIdAndDelete(req.params.id);
            res.send(result);
        } catch (error) {
            res.send(error)
        }
    }
}


export default clientcontroller;