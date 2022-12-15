window.addEventListener('load', () => {
    renderMemberList();
    // localStorage.clear();
});

const datetimeFormatter = (date) =>{
        const f = (n) => n >= 10 ? n : "0" +n;
        const MM = f(date.getMonth() + 1);
        const dd = f(date.getDate());
        const HH = f(date.getHours());
        const mm = f(date.getMinutes());

        return `${MM}/${dd} ${HH}:${mm}`;
    }


const renderMemberList = (memberLists = JSON.parse(localStorage.getItem('memberLists'))) => {
    const tbody = document.querySelector('#memberList tbody');
    tbody.innerHTML = "";

    if (memberLists) {
        memberLists.forEach(({ userId, userName, userEmail, datetime }, index) => {
            tbody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${userId}</td>
                <td>${userName}</td>
                <td>${userEmail}</td>
                <td>${datetimeFormatter(new Date(datetime))}</td>
            </tr>
            `;
        }) 
    }
    else{
            tbody.innerHTML = `<tr><td colspan = "5" style = 'text-align: center;'>등록된 방명록이 없습니다.</td></tr>`;
        }
}