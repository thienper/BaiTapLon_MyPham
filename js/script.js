$(document).ready(function () {
    $("#fname").blur(function () {
        kiemtraFname();
    });
    $("#lname").blur(function () {
        kiemtraLname();
    });
    $("#username").blur(function () {
        kiemtraUsername();
    });
    $("#password").blur(function () {
        kiemtraMK();
    });

    function kiemtraFname() {
        let regex = /[A-Z][a-z]+/;
        let chuoi = $("#fname").val();
        let kq = regex.test(chuoi);
        if (kq) {
            $("#errorfname").html("*").css("color", "green");
        } else {
            $("#errorfname").html("Họ không hợp lệ").css("color", "red");
        }
    }
    function kiemtraLname() {
        let regex = /[A-Z][a-z]+/;
        let chuoi = $("#lname").val();
        let kq = regex.test(chuoi);
        if (kq) {
            $("#errorlname").html("*").css("color", "green");
        } else {
            $("#errorlname").html("Tên  không hợp lệ").css("color", "red");
        }
    }
    function kiemtraUsername() {
        let regex = /[a-zA-Z!@#$%^&*()-_]+/;
        let chuoi = $("#username").val();
        let kq = regex.test(chuoi);
        if (kq) {
            $("#errorusername").html("*").css("color", "green");
        } else {
            $("#errorusername").html("Tên đăng nhập không hợp lệ").css("color", "red");
        }
    }
    function kiemtraMK() {
        let regex = /[a-zA-Z!@#$%^&*()-_]+/;
        let chuoi = $("#password").val();
        let kq = regex.test(chuoi);
        if (kq) {
            $("#errormk").html("*").css("color", "green");
        } else {
            $("#errormk").html("Mật khẩu không hợp lệ").css("color", "red");
        }
    }
});
//Dang ki

function signup(e) {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = {
        fname: fname,
        lname: lname,
        username: username,
        password: password,
    };
    localStorage.setItem(username, JSON.stringify(user));
    window.location.href = "../html/TrangChu.html";
    alert("Đăng ký thành công");
}


//Dang nhap
function login(e) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let user = localStorage.getItem(username);
    let data = JSON.parse(user);
    if (user == null) {
        alert("vui long nhap tai khoan va mat khau");
    } else if (username == data.username && password == data.password) {
        alert("dang nhap thanh cong");
        window.location.href = "TrangChu.html"
    } else {
        alert("Dang nhap that bai");
    }
}
//scroll
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
document.getElementById("contact").addEventListener("click", function () {
    scrollToBottom();
});





