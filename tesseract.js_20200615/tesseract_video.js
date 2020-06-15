document.write('<canvas id="gamecanvas_tesseract" style="display:none;position:absolute;"></canvas>');
document.write('<div id="region" style="z-index:999"><video id="video" width="320" height="240" preload autoplay loop muted></video><br><select id="lang"><option value="afr">Afrikaans</option><option value="amh">Amharic</option><option value="ara">Arabic</option><option value="asm">Assamese</option><option value="aze">Azerbaijani</option><option value="aze_cyrl">Azerbaijani - Cyrillic</option><option value="bel">Belarusian</option><option value="ben">Bengali</option><option value="bod">Tibetan</option><option value="bos">Bosnian</option><option value="bul">Bulgarian</option><option value="cat">Catalan; Valencian</option><option value="ceb">Cebuano</option><option value="ces">Czech</option><option value="chi_sim">Chinese - Simplified</option><option value="chi_tra">Chinese - Traditional</option><option value="chr">Cherokee</option><option value="cym">Welsh</option><option value="dan">Danish</option><option value="deu">German</option><option value="dzo">Dzongkha</option><option value="ell">Greek, Modern (1453-)</option><option value="eng" selected>English</option><option value="enm">English, Middle (1100-1500)</option><option value="epo">Esperanto</option><option value="est">Estonian</option><option value="eus">Basque</option><option value="fas">Persian</option><option value="fin">Finnish</option><option value="fra">French</option><option value="frk">German Fraktur</option><option value="frm">French, Middle (ca. 1400-1600)</option><option value="gle">Irish</option><option value="glg">Galician</option><option value="grc">Greek, Ancient (-1453)</option><option value="guj">Gujarati</option><option value="hat">Haitian; Haitian Creole</option><option value="heb">Hebrew</option><option value="hin">Hindi</option><option value="hrv">Croatian</option><option value="hun">Hungarian</option><option value="iku">Inuktitut</option><option value="ind">Indonesian</option><option value="isl">Icelandic</option><option value="ita">Italian</option><option value="ita_old">Italian - Old</option><option value="jav">Javanese</option><option value="jpn">Japanese</option><option value="kan">Kannada</option><option value="kat">Georgian</option><option value="kat_old">Georgian - Old</option><option value="kaz">Kazakh</option><option value="khm">Central Khmer</option><option value="kir">Kirghiz; Kyrgyz</option><option value="kor">Korean</option><option value="kur">Kurdish</option><option value="lao">Lao</option><option value="lat">Latin</option><option value="lav">Latvian</option><option value="lit">Lithuanian</option><option value="mal">Malayalam</option><option value="mar">Marathi</option><option value="mkd">Macedonian</option><option value="mlt">Maltese</option><option value="msa">Malay</option><option value="mya">Burmese</option><option value="nep">Nepali</option><option value="nld">Dutch; Flemish</option><option value="nor">Norwegian</option><option value="ori">Oriya</option><option value="pan">Panjabi; Punjabi</option><option value="pol">Polish</option><option value="por">Portuguese</option><option value="pus">Pushto; Pashto</option><option value="ron">Romanian; Moldavian; Moldovan</option><option value="rus">Russian</option><option value="san">Sanskrit</option><option value="sin">Sinhala; Sinhalese</option><option value="slk">Slovak</option><option value="slv">Slovenian</option><option value="spa">Spanish; Castilian</option><option value="spa_old">Spanish; Castilian - Old</option><option value="sqi">Albanian</option><option value="srp">Serbian</option><option value="srp_latn">Serbian - Latin</option><option value="swa">Swahili</option><option value="swe">Swedish</option><option value="syr">Syriac</option><option value="tam">Tamil</option><option value="tel">Telugu</option><option value="tgk">Tajik</option><option value="tgl">Tagalog</option><option value="tha">Thai</option><option value="tir">Tigrinya</option><option value="tur">Turkish</option><option value="uig">Uighur; Uyghur</option><option value="ukr">Ukrainian</option><option value="urd">Urdu</option><option value="uzb">Uzbek</option><option value="uzb_cyrl">Uzbek - Cyrillic</option><option value="vie">Vietnamese</option><option value="yid">Yiddish</option></select><br><div id="result" style="color:red"></div></div>');

window.onload = function () {
  var video = document.getElementById('video');
  var canvas = document.getElementById('gamecanvas_tesseract');
  var result = document.getElementById('result');
	
  navigator.mediaDevices
	.getUserMedia({
		audio: false,
		video: {
			facingMode: "user",
			width: 320,
			height: 240
		}
	})
	.then(stream => {
		video.srcObject = stream
		video.onloadedmetadata = () => {       
			video.play();
			canvas.setAttribute("width", video.width);
			canvas.setAttribute("height", video.height);
			result.innerHTML = "";
		}
         }) 	
}


