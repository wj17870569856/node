const htmlObj = {
    '/api/a': () => `<html>
        <b>hello world</b>
        <div>**** 大家好, 我是a ****</div>
    </html>`,
    '/api/b': () => `<html>
        <b>hello world</b>
        <div>**** 大家好, 我是b ****</div>
    </html>`
}

exports.renderHtml = (url) => {
    return htmlObj[url]();
}