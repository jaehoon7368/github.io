const java = document.getElementById('java');
const c = document.getElementById('c');
const php = document.getElementById('php');
const python = document.getElementById('python');
const html = document.getElementById('html');
const css = document.getElementById('css');
const javascript = document.getElementById('javascript');
const mysql = document.getElementById('mysql');
const mssql = document.getElementById('mssql');
const oracle = document.getElementById('oracle');
const mybatis = document.getElementById('mybatis');
const spring = document.getElementById('spring');
const keepLearning = document.getElementById('keepLearning');
const javaCheck = document.getElementById('javaCheck');
const htmlCheck = document.getElementById('htmlCheck');
const cssCheck = document.getElementById('cssCheck');
const javascriptCheck = document.getElementById('javascriptCheck');
const oracleCheck = document.getElementById('oracleCheck');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    console.log(value);
    
        if(value > 40 && value < 300) {
        java.style = 'left:59%; opacity:1; transition : 1s;';
        javaCheck.style = 'left:57%; opacity:1; transition : 1s;';
        c.style = 'left:59%; opacity:1; transition : 2s;';
        php.style = 'left:59%; opacity:1; transition : 3s;';
        python.style = 'left:59%; opacity:1; transition : 3.5s;';
    }
    else if(value > 300 && value < 500){
        java.style = 'left:82%; opacity:0; transition : 3.5s;';
        javaCheck.style = 'left:82%; opacity:0; transition : 3.5s;';
        c.style = 'left:82%; opacity:0; transition : 3s;';
        php.style = 'left:82%; opacity:0; transition : 2s;';
        python.style = 'left:82%; opacity:0; transition : 1s;';
            
        html.style = 'left:37%; opacity:1; transition : 1s;';
        htmlCheck.style = 'left:35%; opacity:1; transition : 1s;';
        css.style = 'left:37%; opacity:1; transition : 2s;';
        cssCheck.style = 'left:35%; opacity:1; transition : 2s;';
        javascript.style = 'left:37%; opacity:1; transition : 3s;';
        javascriptCheck.style = 'left:35%; opacity:1; transition : 3s;';
    }
        else if (value > 500 && value < 800) {
        html.style = 'left:17%; opacity:0; transition : 3s;';
        htmlCheck.style = 'left:17%; opacity:0; transition : 3s;';
        css.style = 'left:17%; opacity:0; transition : 2s;';
        cssCheck.style = 'left:17%; opacity:0; transition : 2s;';
        javascript.style = 'left:17%; opacity:0; transition : 1s;';
        javascriptCheck.style = 'left:17%; opacity:0; transition : 1s;';
            
        mysql.style = 'left:58%; opacity:1; transition : 1s;';
        mssql.style = 'left:58%; opacity:1; transition : 2s;';
        oracle.style = 'left:58%; opacity:1; transition : 3s;';
        mybatis.style = 'left:30%; opacity:1; transition : 1s;';
        spring.style = 'left:30%; opacity:1; transition : 2s;';
        oracleCheck.style = 'left:56%; opacity:1; transition : 3s;';
        keepLearning.style ='left:20%; opacity:1; transition : 3s;';
        }
    else {
        mysql.style = 'left:88%; opacity:0; transition : 3s;';
        mssql.style = 'left:88%; opacity:0; transition : 2s;';
        oracle.style = 'left:88%; opacity:0; transition : 1s;';
        oracleCheck.style = 'left:88%; opacity:0; transition : 1s;';
        mybatis.style = 'left:10%; opacity:0; transition : 2s;';
        spring.style = 'left:10%; opacity:0; transition : 1s;';
        keepLearning.style = 'left:10%; opacity:0; transition : 1s;';
    }

})