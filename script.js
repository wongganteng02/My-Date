var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+6282332959952'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>082332959952</label></div> </a> <a href='mailto:santritwoline594@gmail.com'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/wongganteng02'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/6282332959952'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/Wongganteng0212'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/r.derikusuma?igsh=aGhvYXN5dWQ4N3U3'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> <a href='Lihat profil Deri kusuma Wardani di LinkedIn https://id.linkedin.com/in/deri-kusuma-wardani-64842a394/in/vinayak-patil-793bb5206/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/foto-cv.jpg' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>CV Deri Kusuma.pdf</label></div><a href='assets/cv-deri.pdf' download='cv-deri.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/place/Jl.+Raya+Menganti+Balong+Dinding+No.33,+RT.19%2FRW.05,+Pengampon,+Setro,+Gresik,+Kabupaten+Gresik,+Jawa+Timur+61174/@-7.1245182,112.6019993,16z/data=!4m6!3m5!1s0x2e78076607923387:0x8801d3aaf9535963!8m2!3d-7.2991347!4d112.6085628!16s%2Fg%2F11kq2ktwpc?utm_campaign=ml-ardl-aht_2025&g_ep=Eg1tbF8yMDI1MTIwOF8wIOC7DCoASAJQAQ%3D%3D' class='map'></iframe></div><label class='add'><address>RT19 RW05 <br>'Balong Dinding'<br>Sidowungu, Menganti<br>Gresik, Jawa Timur, <br>INDONESIA 61174</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "sedang mengetik...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello👋🏻,<br><br>Nama saya <span class='bold'><a class='alink'><br>Deri Kusuma Wardani</a>.</span><br><br>Saya adalah Mahasiswa Teknik Informatika <span class='bold'>Universitas Madani Indonesia 👨🏻‍💻📚</span><br><br>Saya sangat ingin mengetahui tentang peluang karir potensial, jadi saya akan senang untuk mengobrol tentang lowongan pekerjaan di bidang teknik.<br><br>Kirim <span class='bold'>view</span> untuk mengetahui lebih banyak tentang saya.<br>");
            }, 2000);
            break;
        case "view":
            sendTextMessage("<span class='sk'>Kirim keyword untuk mendapatkan informasi yang ingin anda ketahui tentang saya...<br>Contoh:<br><span class='bold'>'skil'</span> - Untuk mengetahui keterampilan saya<br><span class='bold'>'cv'</span> - Untuk mengetahui biodata saya<br><span class='bold'>'education'</span> - Untuk detail pendidikan saya<br><span class='bold'>'addres'</span> - Untuk mengetahui alamat saya<br><span class='bold'>'contact'</span> - Untuk menghubungi saya<br><span class='bold'>'project'</span> - Untuk detail project saya<br><span class='bold'>'clear'</span> - Untuk membersihkan obrolan<br><span class='bold'>'about'</span> - Untuk mengetahui tentang situs ini</span>");
            break;
        case "cv":
            sendTextMessage(resumeString);
            break;
        case "skil":
            sendTextMessage("<span class='sk'>Saat ini saya sedang menempuh gelar Sarjana Kompiter (S.Kom) di bidang Teknik Informatika.<br><br>Saya nyaman menulis code dengan bahasa-bahasa berikut:<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Kotlin<br>Dart<br>Python<br>CSS<br>HTML</span><br><br>Saya memiliki pengalaman dengan framework berikut:<span class='bold'><br>Android<br>Flutter<br>ReactJs<br>GTK</span><br><br>Saya menggunakan <span class='bold'>Arch Linux</span> Sebagai driver harian di HP Oppo Reno 6 <br>OS:Arch Linux<br>DE:Gnome<br>(Lebih sering) <br>Kde<br>(Sering)<br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("Saat ini saya sedang menempuh gelar Sarjana Teknik (S.Kom) di bidang Teknik Informatika dari Jalur KIP Beasiswa.<br>Tahun Masuk : 2025<br><br>Disamping kuliah, saya juga menjadi Guru Tahfidz Al-Qur'an di Pesantren Ushulul Hikmah Al-Ibrohimi<br>Tahun Guru: 2024<br><br><br>Saya juga telah meyelesaikan pendidikan di pesantren, menghafal Al-Qur'an 30 Juz<br>Tahun Khatam: 2023");
            break;

        case "addres":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("🛠️💻 Situs web portofolio ini dibangun menggunakan HTML, CSS, dan JavaScript dari NOL!<br><br>👨🏻‍💻<br>Designed and Developed<br>by <a class='alink' target='_blank' href='https://www.instagram.com/r.derikusuma?igsh=aGhvYXN5dWQ4N3U3'><span class='bold'>Deri Kusuma</a><br>Dengan ❤️😂</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "project":
            sendTextMessage("Anda ingin melihat proyek-proyek saya? Silakan kunjungi akun Github saya.<br><br><div class='social'><a target='_blank' href='https://github.com/wongganteng02'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Maaf, aku mggak paham...Kirim 'view' untuk mengetahui lebih lanjut tentang penggunaannya.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
