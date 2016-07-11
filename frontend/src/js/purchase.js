var util = require('./myutil.js')

function createPurchase(id, orderNo) {
    console.log('[createPurchase] id:' + id + ' orderNo:' + orderNo)
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("[purchase.js] doc.addEventListener()");
    var btnDom = util.q('#btnX').innerHTML = 'ぼたんです';
});

module.exports = {
    create: createPurchase
};
