export default (req, res) => {
    const URL = process.env.URL;
    const body = req.body;
    fetch(URL, {
        method: 'POST',
        body: new URLSearchParams({
            content: `디스코드 닉네임 : ${body["discord"]}\n디스코드 아이디 : ${body["id"]}\n나이 : ${body["age"]}\n자기소개 : ${body["intro"]}\n각오 : ${body["determination"]}`
        })
    })
    res.send(true)
}