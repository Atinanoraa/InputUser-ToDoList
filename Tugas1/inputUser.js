function data(){
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var negara = document.getElementById("negara").value;
    var lahir = 2020-document.getElementById("tahun").value;
    var gender = new Array();
    var gender = document.getElementsByName("jk");
    var jk = "";
    if(gender[0].checked === true){
        jk = gender[0].value;
    }else if(gender[1].checked === true){
        jk = gender[1].value;  
    }else if(gender[2].checked === true){
        jk = gender[2].value;
    }

    var x = document.getElementById("hasil");
    var peringatan = "";
    if(nama==""||email==""||negara==""||lahir==""||jk==""){
        if (nama == '') peringatan+="Harap memasukkan nama terlebih dahulu";
        if (email == '') peringatan+="Harap memasukkan email terlebih dahulu";
        if (negara == '') peringatan+="Harap memasukkan asal negara terlebih dahulu";
        if (lahir == '') peringatan+="Harap memasukkan tahun lahir terlebih dahulu";
        if (jk == '') peringatan="Harap memasukkan jenis kelamin terlebih dahulu";
    }
    else{
        peringatan+= `<h2>Selamat Datang Di hiGirls!</h2>
        <table>
		      <tr>
		        <td>Nama Lengkap </td>
		        <td>:</td>
		        <td>${nama}</td>
		      </tr>
		      <tr>
		        <td>Email </td>
		        <td>:</td>
		        <td>${email}</td>
		      </tr>
		      <tr>
		        <td>Jenis Kelamin </td>
		        <td>:</td>
		        <td>${jk}</td>
		      </tr>
		      <tr>
		        <td>Negara </td>
		        <td>:</td>
		        <td>${negara}</td>
		      </tr>
		      <tr>
		        <td>Umur Anda </td>
		        <td>:</td>
		        <td>${lahir} Tahun</td>
		      </tr>
		</table>`;   
    } 
    x.innerHTML = peringatan;  
}