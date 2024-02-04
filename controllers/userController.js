import User from "../models/users"

// Create New User
export const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body

    // Check if User Exists
    const existingUser = await User.find({ email })
    if (existingUser) {
        return res.status(401).send("User Already Registered")
    }

    const newUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
    }

    const user = await User.create(newUser)

    return res.status(201).send(user.json())

}

// Log In User
export const logInUser = async (req, res) => {
    const { email, password } = req.body()

    const user = await User.findOne({ email })

    // Check if user is in DB
    if (!user) {
        return res.status(401).send("User not registered")
    }

    // Check if password is right
    const passwordMatch = user.password === password
    if (!passwordMatch) {
        return res.status(403).send("Incorrect Password")
    }

    return res
        .status(200)
        .json({ message: "OK", name: user.name, email: user.email });

}

