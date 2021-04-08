const marked = require('marked')

function mdToHtml(md){

    var result = marked(md)

    return result
}

module.exports = mdToHtml
// loader本质上是一个函数，所以需要暴露函数。

// const marked = require('marked')
// module.exports = source =>{
//     var html = marked(source)
//     return html
// }