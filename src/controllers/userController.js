import User from "../model/userSchema.js"

export const getUser = async (req, res) => {
    const findingQuery = req.params.id ? { _id: req.params.id } : {}

    const foundUser = await User.find(findingQuery)

    res.status(200).json({
        message: 'Its get user router',
        user: foundUser
    })
}
export const postUser = async (req, res) => {
    try {

        const { name, email } = req.body

        // const newUser = await User.create({ name, email })

        const newUser = new User({
            name, email
        })
        await newUser.save()

        res.status(200).json({
            message: 'Its get user router',
            data: newUser
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}