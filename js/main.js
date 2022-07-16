// Bài 1
/**
 * Khối 1: input
 * num1
 * num2
 * num3
 * 
 * Khối 2: Các bước xử lý
 * khai báo các biến num1, num2, num3
 * So sánh các num1,num2,num3 với nhau
 * - Nếu num1 > num2 và num 2 > num3 
 *   => num3 < num2 < num1
 * 
 * - Nếu num1 > (num2,num3) && num2 < num3
 *   => num2 < num3 < num1
 * 
 * - Nếu num1 > num2 && num1 < num3 && num2 < num3
 *   => num2 < num1 < num3
 * 
 * - Nếu num1 < num2 && num2 > num3 && num1 > num3
 *  => num3 < num1 < num2
 * 
 * - Nếu num1 < num2 && num2 > num3 && num1 < num3
 *  => num1 < num3 < num2;
 * 
 * - Ngược lại các trường hợp trên:
 *  => num1 < num2 < num3
 * 
 * Khối 3: output
 * sắp xếp (num1,num2,num3) theo thứ tự tăng dần
 */
function sapXepNum() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);

    if (num1 > num2 && num2 > num3) {
        document.getElementById("txtResult").innerHTML = num3 + " < " + num2 + " < " + num1;

    } else if(num1 > num2 && num2 < num3 && num1 > num3){
        document.getElementById("txtResult").innerHTML = num2 + " < " + num3 + " < " + num1;

    } else if(num1 > num2 && num2 < num3 && num1 < num3) {
        document.getElementById("txtResult").innerHTML = num2 + " < " + num1 + " < " + num3;

    } else if(num1 < num2 && num2 > num3 && num1 > num3) {
        document.getElementById("txtResult").innerHTML = num3 + " < " + num1 + " < " + num2;
    } else if(num1 < num2 && num2 > num3 && num1 < num3) {
        document.getElementById("txtResult").innerHTML = num1 + " < " + num3 + " < " + num2;
    } else {
        document.getElementById("txtResult").innerHTML = num1 + " < " + num2 + " < " + num3;
    }
}
document.getElementById("sapXep").onclick = sapXepNum;

// Bài 2
/**
 * Khối 1:input
 * bo,me,anh trai,em gai
 * 
 * Khối 2: các bước xử lý
 * khai báo các thành viên trong gia đình
 * Bố = "B"
 * Mẹ = "M"
 * Anh trai = "A"
 * Em gái = "E"
 * 
 * Khối 3:output
 * chào bố, chào mẹ, chào anh trai, chào em gái
 */
function guiLoiChao() {
    var member = document.getElementById("member").value;

    if (member == "B") {
        document.getElementById("txtResult1").innerHTML = "Xin chào Bố !";
    } else if(member == "M"){
        document.getElementById("txtResult1").innerHTML = "Xin chào Mẹ !";
    } else if(member == "A"){
        document.getElementById("txtResult1").innerHTML = "Xin chào Anh trai !";
    } else if(member == "E") {
        document.getElementById("txtResult1").innerHTML = "Xin chào Em gái !";
    } else {
        document.getElementById("txtResult1").innerHTML = "Xin chào Người lạ ơi !";
    }
}
document.getElementById("guiLoiChao").onclick = guiLoiChao;

// Bài 3
/**
 * Khối 1: input
 * soNguyen1
 * soNguyen2
 * soNguyen3
 * 
 * Khối 2:Các bước xử lý
 * khai báo các biến soNguyen1, soNguyen2 ,soNguyen3, count
 * (soNguyen1, soNguyen2, soNguyen3) % 2  
 *      Nếu kết quả = 0; => số chắn , soChan++;
 *          ngược lại khác 0 => số lẻ
 *      
 * 
 * Khối 3: output
 * soChan
 * soLe
 */

function demSoChanLe() {
    var soNguyen1 = Number(document.getElementById("soNguyen1").value);
    var soNguyen2 = Number(document.getElementById("soNguyen2").value);
    var soNguyen3 = Number(document.getElementById("soNguyen3").value);

    var soChan = "";
    var soLe = "";

    if (soNguyen1 % 2 == 0) {
        soChan++;
    } 

    if (soNguyen2 % 2 == 0) {
        soChan++;
    } 

    if (soNguyen3 % 2 == 0) {
        soChan++;
    }
    // console.log(soChan + "Số chẵn", soLe + "số lẻ");
    
    document.getElementById("txtResult2").innerHTML = 3 - (3 - soChan) + " Số chẵn, " + (3 - soChan) + " Số lẻ";
  
}
document.getElementById("dem").onclick = demSoChanLe;

// Bài 4
/**
 * Khối 1: input
 * canh1(a), canh2(b), canh3(c)
 * 
 * Khối 2: Các bước xử lý
 * khai báo các biến canh1(a), canh2(b), canh3(c) do người dùng nhập vào
 *      Nếu a = b = c => tam giác đều
 *      Nếu a = b || a = c || b = c => tam giác cân
 *      Nếu c^2 = a^2 + b^2 => tam giác vuông
 *    Ngược lại các TH trên => tam giác ngẫu nhiên
 * 
 * Khối 3: output
 * tam giác đều
 * tam giác cân
 * tam giác vuông
 * tam giác ngẫu nhiên
 * 
 */

function tamGiacNayLa() {
    var a = Number(document.getElementById("canh1").value);
    var b = Number(document.getElementById("canh2").value);
    var c = Number(document.getElementById("canh3").value);

    if (a == b && a == c && b == c) {
        document.getElementById("txtResult3").innerHTML = "Đây là tam giác đều";
    } else if(a == b || a == c || b == c){
        document.getElementById("txtResult3").innerHTML = "Đây là tam giác cân";
    } else if ((c*c) == (a*a + b*b)) {
        document.getElementById("txtResult3").innerHTML = "Đây là tam giác vuông";
    } else {
        document.getElementById("txtResult3").innerHTML = "Đây là tam giác ngẫu nhiên";
    }
}
document.getElementById("duDoan").onclick = tamGiacNayLa;