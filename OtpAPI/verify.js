
router.get('/otp/submit', async (req, res) => {
    const Otp = req.params.otp

    try {
        const otp = await Otp.findOne({ Otp})

        if (!otp) {
            return res.status(404).send('Invalid otp')
        }

        res.send('Otp Verified')
    } catch (e) {
        res.status(500).send()
    }
})