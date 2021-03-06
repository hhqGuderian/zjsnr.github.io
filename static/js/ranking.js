function genTable(resp) {
    if (resp.code) {
        alert(resp.msg);
        return;
    }
    let option = resp.data;

    if (resp.mail || mail) {
        $('#mail').show();
        option.clickToSelect = true;
        option.columns.unshift({
            checkbox: true
        });
    }

    for (let item of option.data) {
        // 计算是否依然活跃
        let lastActiveTime = new Date(item.lastActiveTime * 1000);
        let now = new Date();
        let maxT = new Date(item.maxT * 1000);
        let minT = new Date(item.minT * 1000);
        
        item.username = '<a href="' + 'index?name=' + item.username + '">' + item.username + '</a>';

        if ((now - maxT) > (24 * 3600 * 1000)) {
            // 可能不在榜上了
            item.username += '<span class="badge badge-info">下榜</span>';
        } else if ((maxT - lastActiveTime) < (13 * 3600 * 1000)) {
            // 出征停止在 13 小时内
            item.username += '<span class="badge badge-warning">活跃</span>';
        } else {
            item.username +=
                '<span class="badge badge-secondary">出征停止</span>';
        }
        // 计算是否是 new 或 老贼
        let firstTime = new Date(item.firstTime * 1000);
        let passedHours = (now - firstTime) / (1000 * 3600);
        if (passedHours < 24) { // 24 小时内新上榜
            item.username += '<span class="badge badge-danger">new!</span>';
        } else if (passedHours >= 5 * 24) { // 出现超过 5 天
            item.username += '<span class="badge badge-danger">老贼!</span>';
        }
        // slice
        let fun = (dt) => {
            return '' + (dt.getMonth() + 1) + '/' + dt.getDate() + ' ' +
                dt.getHours() + ':' + dt.getMinutes();
        };
        item.maxT = fun(maxT);
        item.minT = fun(minT);
        item.lenT = item.lenT.toFixed(2);
    }
    $('#table').bootstrapTable(option);
}

$(document).ready(function () {
    $('#mail').show();

    $.getJSON(
        'https://1596403937898061.cn-beijing.fc.aliyuncs.com/2016-08-15/proxy/zjsnr/v2/ranking',
        genTable);
});

$('#mail').click(function () {
    let selections = $('#table').bootstrapTable('getSelections');
    // console.log(selections);
    // console.log(selections.length);
    if (selections.length == 0) {
        return;
    }
    let mailUrl = 'mailto:cs@moefantasy.com?';
    mailUrl += 'subject=举报' + selections.length + '名用户疑似使用外挂';

    let body = '';
    selections.forEach(item => {
        let username = item.username.replace(/<span.*\/span>/g, '');
        username = username.replace(/<.*?>/g, '');
        let para = '用户名: ' + username + '\n';
        para += '服务器: ' + item.serverName + '\n';
        para += 'UID: ' + item.uid + '\n';
        para += '该用户近' + Math.floor(item.lenT) + '日日均出征在' +
            Math.floor(item.speed / 100) * 100 + '次以上。\n\n';
        body += para;
    });
    let encodeBody = encodeURI(body);

    if (encodeBody.length <= 1800) {
        location.href = mailUrl + '&body=' + encodeBody;
    } else {
        console.log('URL 过长');
        try {
            let inp = document.createElement('textarea');
            document.body.appendChild(inp);
            inp.value = body;
            inp.select();
            document.execCommand('copy', false);
            inp.remove();
            alert('由于长度限制，邮件正文已复制到剪切板，请粘贴到正文发送。');
            window.location.href = mailUrl;
        } catch (e) {
            alert(
                '正文过长无法直接发送；复制邮件正文失败；请尝试选择少量用户多次发送。');
            return;
        }
    }
});
