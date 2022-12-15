class MemberList{
    constructor(userId, userName, userEmail, datetime = Date.now()) {
        this.userId = userId;
        this.userName = userName;
        this.userEmail = userEmail;
        this.datetime = datetime;
    }
}

document.memberFrm.addEventListener('submit', (e) => {
    //1.아이디검사
    const idVal = document.querySelector('#userId').value;
    console.log(idVal);
    //첫글자는 반드시 영소문자로 이루어지고, 
    if (!/^[a-z]/.test(idVal)) {
        alert('아이디 첫글자는 영소문자로 입력되야합니다.');
        e.preventDefault();
        return false;
    }
    //아이디의 길이는 4~12글자사이
    if (!/^.{4,12}$/.test(idVal)) {
        alert('아이디의 길이는 4 ~ 12 글자 사이여야합니다.');
        e.preventDefault();
        return false;
    }
    //숫자가 하나이상 포함되어야함.
    if (!/\d/.test(idVal)) {
        alert('아이디는 숫자 하나이상을 포함해야 합니다.');
        e.preventDefault();
        return false;
    }

    //2.비밀번호 확인 검사
    const pwVal = document.querySelector('#pwd').value;
    //숫자/문자/특수문자 포함 형태의 8~15자리 이내의 암호 정규식 
    if (!/^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[(*!&)]).*$/.test(pwVal)) {
        alert('비밀번호는 숫자/문자/특수문자(*!&)가 포함되어야합니다.');
        e.preventDefault();
        return false;
    }
    //비밀번호일치여부 검사
    const pwcheckVal = document.querySelector('#pwdCheck').value;
    if (pwVal !== pwcheckVal) {
        alert('비밀번호가 일치하지 않습니다.');
        e.preventDefault();
        return false;
    }

    //3.이름검사 : 한글2글자 이상만 허용.
    const nameVal = document.querySelector('#userName').value;
    if (!/^[가-힇]{2,}$/.test(nameVal)) {
        alert('이름은 한글2글자 이상만 허용합니다.');
        e.preventDefault();
        return false;
    };

    //4.주민번호체크
    const ssnVal1 = document.querySelector('#ssn1').value;
    if (!/^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(ssnVal1)) {
        alert('주민번호앞자리는 생년원일(예 : 990909)만 입력가능합니다.')
        e.preventDefault();
        return false;
    };

    const ssnVal2 = document.querySelector('#ssn2').value;
    if (!/^[1234]\d{6}$/.test(ssnVal2)) {
        alert('주민번호 뒷자리가 잘못되었습니다.');
        e.preventDefault();
        return false;
    };
    //5.이메일 검사
    const emailVal = document.querySelector('#email').value;
    if (!/^[\w]{4,}@[\w]+(\.[\w]+){1,3}$/.test(emailVal)) {
        alert('이메일은 @가 포함되고 @앞에 영문자,숫자로 4~12글자이여야 합니다.')
        e.preventDefault();
        return false;
    };
    //6. 전화번호 검사
    const telVal1 = document.querySelector('#tel1').value;
    if (!/^\d{2,}$/.test(telVal1)) {
        alert('핸드폰 앞은 두자리 이상입력해야합니다.');
        e.preventDefault();
        return false;
    }

    const telVal2 = document.querySelector('#tel2').value;
    if (!/^\d{3,}$/.test(telVal2)) {
        alert('핸드폰 중간은 3자리 이상입력해야합니다.');
        e.preventDefault();
        return false;
    }

    const telVal3 = document.querySelector('#tel3').value;
    if (!/^\d{4}$/.test(telVal3)) {
        alert('핸드폰 마지막은 4자리만 입력가능합니다.');
        e.preventDefault();
        return false;
    }

    return true;
});

const saveMemberList = () => {
    const memberList = new MemberList(userId.value, userName.value, email.value);
    console.log(memberList);

    const memberLists = JSON.parse(localStorage.getItem('memberLists')) || [];
    memberLists.push(memberList);

    localStorage.setItem('memberLists', JSON.stringify(memberLists));

    document.memberFrm.reset();

}
