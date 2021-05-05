export default (req, res) => {
    const URL = process.env.URL;
    const body = req.body;
    if (body['id'].toString().length == 18 || body['id'].toString().length == 19) {
        fetch(
            URL,
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    embeds: [
                        {
                            title: '채용 신청',
                            fields: [
                                {
                                    name: '아이디',
                                    value: body["id"],
                                },
                                {
                                    name: '나이',
                                    value: body["age"],
                                },
                                {
                                    name: '포트폴리오',
                                    value: body["portfolio"]
                                },
                                {
                                    name: '각오',
                                    value: body["determination"]
                                }
                            ],
                        },
                    ],
                }),
            }
        );
    }
    res.send(true)
}