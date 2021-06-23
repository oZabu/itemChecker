'use strict';

//使い方&注意
confirm("⚠注意：このwebサイトは試験的な物なので、実際に使うことは出来ません。");
confirm("ブラウザによっては、上手く表示されない場合があります");
confirm("使い方はこちら⇨https://ozabu.github.io/item-checker-guide/item-checker-guide.html");

function changeColor() {
    const changeColor = document.getElementById("changeColor");

    if (changeColor.checked) {
        var CBS = document.getElementById("headerIn");
        CBS.style.boxShadow = "0 0 50px #CDF46E";

        document.body.style.background = "#000";
        document.body.style.color = "#CDF46E";
    } else {
        var CWS = document.getElementById("headerIn");
        CWS.style.boxShadow = "0 0 50px gray";

        document.body.style.background = "white";
        document.body.style.color = "#1A4A43";
    };
    if (changeColor.checked) {


    } else {

    };

};




const itemNameDesu = document.getElementById('itemName');//追加するitemの名前入力する所
const setingT = document.getElementById('setTime');
const addButton = document.getElementById('addButton');//追加ボタン

var clickCount = 0;

function time() {
    var nowTime = new Date();
    var nHou = "00" + nowTime.getHours();
    var nMin = "00" + nowTime.getMinutes();
    var nowSec = nowTime.getSeconds();

    var nowHou = nHou.slice(-2);
    var nowMin = nMin.slice(-2);

    var displayTime = "⬡" + nowHou + ":" + nowMin;
    document.getElementById("nowTime").innerHTML = displayTime;
    var backTime = nowHou + ":" + nowMin + "," + nowSec;
    document.getElementById('backTime').value = backTime;
}


addButton.onclick = () => {

    const T = setingT.value;




    clickCount++;


    const addClickCount = clickCount;
    // document.getElementById('clickCount').value = addClickCount;

    const itemName = itemNameDesu.value//item名引き出す
    //名前が空の時は処理を終了する
    if (itemName.length === 0) {
        return;
    }
    //list
    var management = document.createElement("div");
    management.setAttribute('id', 'list' + addClickCount);
    var managementDiv = document.getElementById("Plist");
    document.body.insertBefore(management, managementDiv);

    //check✅
    var checkBox = document.createElement('input');
    checkBox.setAttribute('id', 'ready' + addClickCount);
    checkBox.setAttribute('class', 'ready');
    checkBox.setAttribute('type', 'checkbox');
    var checkDiv = document.getElementById('list' + addClickCount);
    document.body.insertBefore(checkBox, checkDiv);

    //編集ボタン🎛
    var editButton = document.createElement('button');
    editButton.setAttribute('id', 'edit' + addClickCount);
    editButton.textContent = '編集';
    var editButtonDiv = document.getElementById('list' + addClickCount);
    document.body.insertBefore(editButton, editButtonDiv);

    //表示📲
    var itemNameDisplay = document.createElement('div');
    var itemText = document.createTextNode("[" + T + "]" + itemName);
    itemNameDisplay.setAttribute('id', 'itemText' + addClickCount);
    itemNameDisplay.setAttribute('class', 'itemNameCss');
    itemNameDisplay.appendChild(itemText);
    var itemDiv = document.getElementById('list' + addClickCount);
    document.body.insertBefore(itemNameDisplay, itemDiv);

    //設定時間
    var settingTime = document.createElement("div");
    settingTime.setAttribute('id', 'settingTime' + addClickCount);
    var settingTimeDiv = document.getElementById("list" + addClickCount);
    document.body.insertBefore(settingTime, settingTimeDiv);
    document.getElementById('settingTime' + addClickCount).value = T;

    var checkReady = document.getElementById('ready' + addClickCount);
    //timer
    function timer() {
        const setT = document.getElementById("settingTime" + addClickCount);
        const oneST = setT.value;
        const ST = oneST + ",1"

        const ready = document.getElementById('ready' + addClickCount);

        var backTime = document.getElementById('backTime').value;

        if (ST == backTime) {
            if (ready.checked) {
                window.setTimeout(60000);
                checkReady.checked = false;
            } else {
                var alarmTextName = itemName.slice(-7);

                confirm(alarmTextName + "が準備できていないよ");

            };
        };


    };

    const timerInterval = setInterval(timer, 1000);
    //⏏︎Edit



    const edit = document.getElementById('edit' + addClickCount);//編集ボタン

    edit.onclick = (e) => {
        var e = e || window.event;
        var elem = e.target || e.srcElement;
        var elemId = elem.id;

        let editText = elemId.replace('edit', '');


        clearInterval(timerInterval);//ループ終了

        document.getElementById('clickCount').value = editText;

        var closeButton = document.createElement('button');
        closeButton.setAttribute('id', 'closeButton' + editText);
        closeButton.textContent = '戻る';
        var closeButtonDiv = document.getElementById('list' + editText);
        document.body.insertBefore(closeButton, closeButtonDiv);

        var editItemName = document.createElement('input');
        editItemName.setAttribute('id', 'editItemName' + editText);
        editItemName.setAttribute('class', 'EINC');
        editItemName.setAttribute('type', 'text');
        editItemName.setAttribute('size', '25');
        editItemName.setAttribute('placeholder', 'アイテム名を入力して下さい');
        var editItemNameDiv = document.getElementById('list' + editText);
        document.body.insertBefore(editItemName, editItemNameDiv);

        var editTime = document.createElement('input');
        editTime.setAttribute('id', 'editTime' + editText);
        editTime.setAttribute('class', 'ETC');
        editTime.setAttribute('type', 'time');
        var editTimeDiv = document.getElementById('list' + editText);
        document.body.insertBefore(editTime, editTimeDiv);

        var doneButton = document.createElement('button');
        doneButton.setAttribute('id', 'doneButton' + editText);
        doneButton.textContent = '完了';
        var doneButtonDiv = document.getElementById('list' + editText);
        document.body.insertBefore(doneButton, doneButtonDiv);

    };//編集ボタン終了

};//追加ボタン終了






//////////////////////////////
//             // // // // //
//            // // // // //
//           // // // // // 
//          // // // // //
//         // // // // //
//        // // // // //
//       // // // // // 
//      // // // // //
//     // // // // // 
//    // // // // //
//   // // // // //
//  // // // // //
// // // // // // 
//↓から完了ボタン🕹
function itemeditdone() {



    const editText = document.getElementById('clickCount').value;


    const doneButton = document.getElementById('doneButton' + editText);

    if (!doneButton) {
        return;
    }



    doneButton.onclick = (ed) => {


        var ed = ed || window.event;
        var doneElem = ed.target || ed.srcElement;
        var doneElemId = doneElem.id;


        let editItemC = doneElemId.replace('doneButton', '');

        const editItem = document.getElementById('editItemName' + editItemC);

        const T = document.getElementById('editTime' + editItemC).value;

        const itemName = editItem.value;

        // document.getElementById('date').value = itemName;



        var r1 = document.getElementById('ready' + editItemC);
        var r2 = document.getElementById('edit' + editItemC);
        var r3 = document.getElementById('itemText' + editItemC);
        var r4 = document.getElementById('editItemName' + editItemC);
        var r5 = document.getElementById('doneButton' + editItemC);
        var r6 = document.getElementById('editTime' + editItemC);
        var r7 = document.getElementById('list' + editItemC);
        var r8 = document.getElementById('settingTime' + editItemC);
        var r9 = document.getElementById('closeButton' + editItemC);

        r1.parentNode.removeChild(r1);
        r2.parentNode.removeChild(r2);
        r3.parentNode.removeChild(r3);
        r4.parentNode.removeChild(r4);
        r5.parentNode.removeChild(r5);
        r6.parentNode.removeChild(r6);
        r7.parentNode.removeChild(r7);
        r8.parentNode.removeChild(r8);
        r9.parentNode.removeChild(r9);

        if (itemName.length === 0) {
            return;
        }




        //list
        var management = document.createElement("div");
        management.setAttribute('id', 'list' + editItemC);
        var managementDiv = document.getElementById("Plist");
        document.body.insertBefore(management, managementDiv);

        //check✅
        var checkBox = document.createElement('input');
        checkBox.setAttribute('id', 'ready' + editItemC);
        checkBox.setAttribute('class', 'ready');
        checkBox.setAttribute('type', 'checkbox');
        var checkDiv = document.getElementById('list' + editItemC);
        document.body.insertBefore(checkBox, checkDiv);

        //編集ボタン🎛
        var editButton = document.createElement('button');
        editButton.setAttribute('id', 'edit' + editItemC);
        editButton.textContent = '編集';
        var editButtonDiv = document.getElementById('list' + editItemC);
        document.body.insertBefore(editButton, editButtonDiv);

        //表示📲
        var itemNameDisplay = document.createElement('div');
        var itemText = document.createTextNode("[" + T + "]" + itemName);
        itemNameDisplay.setAttribute('id', 'itemText' + editItemC);
        itemNameDisplay.setAttribute('class', 'itemNameCss');
        itemNameDisplay.appendChild(itemText);
        var itemDiv = document.getElementById('list' + editItemC);
        document.body.insertBefore(itemNameDisplay, itemDiv);

        //設定時間
        var settingTime = document.createElement("div");
        settingTime.setAttribute('id', 'settingTime' + editItemC);
        var settingTimeDiv = document.getElementById("list" + editItemC);
        document.body.insertBefore(settingTime, settingTimeDiv);
        document.getElementById('settingTime' + editItemC).value = T;

        var checkReady = document.getElementById('ready' + editItemC);
        //timer
        function timer() {
            const setT = document.getElementById("settingTime" + editItemC);
            const oneST = setT.value;
            const ST = oneST + ",1"

            const ready = document.getElementById('ready' + editItemC);

            var backTime = document.getElementById('backTime').value;

            if (ST == backTime) {
                if (ready.checked) {
                    window.setTimeout(60000);
                    checkReady.checked = false;
                } else {
                    var alarmTextName = itemName.slice(-7);

                    confirm(alarmTextName + "が準備できてないよ");

                };
            };


        };
        const timerInterval = setInterval(timer, 1000);



        //⏏︎Edit



        const edit = document.getElementById('edit' + editItemC);//編集ボタン

        edit.onclick = () => {


            clearInterval(timerInterval);//ループ終了

            var closeButton = document.createElement('button');
            closeButton.setAttribute('id', 'closeButton' + editText);
            closeButton.textContent = '戻る';
            var closeButtonDiv = document.getElementById('list' + editText);
            document.body.insertBefore(closeButton, closeButtonDiv);

            var editItemName = document.createElement('input');
            editItemName.setAttribute('id', 'editItemName' + editItemC);
            editItemName.setAttribute('class', 'EINC');
            editItemName.setAttribute('type', 'text');
            editItemName.setAttribute('size', '25');
            editItemName.setAttribute('placeholder', 'アイテム名を入力して下さい');
            var editItemNameDiv = document.getElementById('list' + editItemC);
            document.body.insertBefore(editItemName, editItemNameDiv);

            var editTime = document.createElement('input');
            editTime.setAttribute('id', 'editTime' + editItemC);
            editTime.setAttribute('class', 'ETC');
            editTime.setAttribute('type', 'time');
            var editTimeDiv = document.getElementById('list' + editItemC
            );
            document.body.insertBefore(editTime, editTimeDiv);

            var doneButton = document.createElement('button');
            doneButton.setAttribute('id', 'doneButton' + editItemC);
            doneButton.textContent = '完了';
            var doneButtonDiv = document.getElementById('list' + editItemC);
            document.body.insertBefore(doneButton, doneButtonDiv);


        };//編集ボタン終了

    };//完了ボタン終了

};

; function editClose() {

    ; const click = document.getElementById('clickCount').value;

    ; const closeButton = document.getElementById("closeButton" + click);

    ; if (!closeButton) {
        ; return;
        ;
    };

    closeButton.onclick = (ec) => {

        var ec = ec || window.event;
        var closeElem = ec.target || ec.srcElement;
        var closeElemId = closeElem.id;

        let clickCountClose = closeElemId.replace('closeButton', '');

        console.log(clickCountClose);

        var clear1 = document.getElementById("closeButton" + clickCountClose);
        var clear2 = document.getElementById("editItemName" + clickCountClose);
        var clear3 = document.getElementById("editTime" + clickCountClose);
        var clear4 = document.getElementById("doneButton" + clickCountClose);

        clear1.remove();
        clear2.remove();
        clear3.remove();
        clear4.remove();
    };
};

setInterval(time, 1000);
setInterval(itemeditdone, 1000);
setInterval(changeColor, 500);
setInterval(editClose, 1000)
