Vue.component("video-header", {
  data: function () {
    return {};
  },
  template: `<header>
                <div class= "title">
                    <small class="text-color-primary">Call with</small>
                    <h3>Niloya Kayıkçı</h3>
                </div>
                <div class="info meet">
                    <label class="icon"><span class="ico-calendar"></span>7 Oct, Weds</label>
                    <label class="icon"><span class="ico-clock"></span>10:15AM - 10:30AM</label>
                </div>
                <label class="sub-info">Timezone: Europa/Amsterdam</label>
            </header>`,
});

Vue.component("video-call", {
  data: function () {
    return {};
  },
  template: `
        <div class="componenet-wrapper">
            <div class="video-wrapper">
                
                <video src="" poster="img/Frame1577.jpg" width="336"></video>
                <div class="buttons">
                    <button class="icon" aria-label="Turn on microphone" aria-pressed="false"
                        @click="changeMicrophoneButtonsState('Microphone is turned on', $event)">
                        <span class="ico-microphone">
                        </span>
                    </button>
                    <button class="icon" aria-label="Turn on camera" aria-pressed="false"
                        @click="changeCameraButtonsState('Camera is turned on', $event)">
                        <span class="ico-camera">
                        </span>
                    </button>
                    <button class="icon is-active" aria-label="Open video options" aria-pressed="false"
                        @click="changeOptionsButtonsState($event)">
                        <span class="ico-options">
                        </span>
                    </button>

                </div>
            </div>
            <div class="info caller">
                <label class="icon"><span class="ico-user"></span> Adem İlter</label>
            </div>
        </div>`,
  methods: {
    changeOptionsButtonsState(e) {
      let targetElement = null;
      if (e.target.nodeName == "SPAN") {
        targetElement = e.target.parentElement;
      } else {
        targetElement = e.target;
      }
      resultButtonState = this.changeButtonState(targetElement);

      const optionsElemenet = document.querySelector(
        ".video-component-wrapper"
      );

      console.log(optionsElemenet);
      optionsElemenet.classList.toggle("is-hidden");
    },
    changeMicrophoneButtonsState(message, e) {
      let targetElement = null;
      if (e.target.nodeName == "SPAN") {
        targetElement = e.target.parentElement;
      } else {
        targetElement = e.target;
      }
      if (targetElement.getAttribute("aria-pressed") == "true") {
        message = "Microphone is turned off";
      } else {
        message = "Microphone is turned on";
      }

      resultButtonState = this.changeButtonState(targetElement);
      resultShowMessage = this.showMessage(targetElement, message);
    },
    changeCameraButtonsState(message, e) {
      let targetElement = null;
      if (e.target.nodeName == "SPAN") {
        targetElement = e.target.parentElement;
      } else {
        targetElement = e.target;
      }
      if (targetElement.getAttribute("aria-pressed") == "true") {
        message = "Camera is turned off";
      } else {
        message = "Camera is turned on";
      }

      resultButtonState = this.changeButtonState(targetElement);
      resultShowMessage = this.showMessage(targetElement, message);
    },
    closeInfo(elem) {
      const infoTimeout = setTimeout(function () {
        (document.querySelectorAll(".video-call-info") || []).forEach(
          ($elem) => {
            $elem.remove();
          }
        );
        return "Closed";
      }, 1000);
    },
    changeButtonState(elem) {
      elem.classList.toggle("is-active");

      if (elem.getAttribute("aria-pressed") == "true") {
        elem.setAttribute("aria-pressed", false);
      } else {
        elem.setAttribute("aria-pressed", true);
      }

      return "Changed";
    },
    showMessage(elem, message) {
      const videoCallInfoElem = elem.parentElement.parentElement;

      (document.querySelectorAll(".video-call-info") || []).forEach(($elem) => {
        $elem.remove();
      });

      var newInfo = `<div class="video-call-info" role="info">${message}</div>`;
      this.appendHtml(videoCallInfoElem, newInfo);
      const resultCloseInfo = this.closeInfo(elem);

      //   if (message != null) {
      //     videoCallInfoElem.innerHTML = message;
      //     videoCallInfoElem.style.display = "block";

      //     //const resultClosedInfo = this.closeInfo(videoCallInfoElem);
      //   }
    },
    appendHtml(elem, str) {
      var div = document.createElement("div");
      div.innerHTML = str;
      while (div.children.length > 0) {
        elem.insertBefore(div.children[0], elem.childNodes[0]);
      }
    },
  },
});

Vue.component("video-options", {
  data: function () {
    return {};
  },
  template: `
<div class="video-component-wrapper">
    <div class="field">
        <label>Camera</label>
        <select class="truncate" name="" id="" aria-label="Select video input source" name="camera"
            required>
            <option disabled value="" selected>
                Please select video input source
            </option>
            <option value="1">Facetime HD
                Camera</option>
        </select>
    </div>

    <div class="field">
        <label>Speaker</label>
        <select class="truncate" name="audioOutput" id="" aria-label="Select audio output source" required>
            <option disabled value="" selected>
                Please select audio output source
            </option>
            <option value="1">Built-in Output (Headphone)</option>
        </select>
    </div>

    <div class="field">
        <label>Microphone</label>
        <select class="truncate" name="audioInput" id="" aria-label="Select audio input source" required>
            <option disabled value="" selected>
                Please select audio input source
            </option>
            <option value="1">Built-in Microphone (Default microphone)</option>
        </select>
    </div>

    <div class="field">
        <label>Sound Test</label>
        <button class="ghost" name="exampleSound" aria-label="Play sample audio for test"
            @click="playSound"><svg id="wave" aria-describedby="example sound" role="img" data-name="Layer 1" width="70" height="70"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 38.05">
                <title>Audio Wave</title>
                <path id="Line_1" data-name="Line 1"
                    d="M0.91,15L0.78,15A1,1,0,0,0,0,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H0.91Z" />
                <path id="Line_2" data-name="Line 2"
                    d="M6.91,9L6.78,9A1,1,0,0,0,6,10V28a1,1,0,1,0,2,0s0,0,0,0V10A1,1,0,0,0,7,9H6.91Z" />
                <path id="Line_3" data-name="Line 3"
                    d="M12.91,0L12.78,0A1,1,0,0,0,12,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H12.91Z" />
                <path id="Line_4" data-name="Line 4"
                    d="M18.91,10l-0.12,0A1,1,0,0,0,18,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H18.91Z" />
                <path id="Line_5" data-name="Line 5"
                    d="M24.91,15l-0.12,0A1,1,0,0,0,24,16v6a1,1,0,0,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H24.91Z" />
                <path id="Line_6" data-name="Line 6"
                    d="M30.91,10l-0.12,0A1,1,0,0,0,30,11V27a1,1,0,1,0,2,0s0,0,0,0V11a1,1,0,0,0-1-1H30.91Z" />
                <path id="Line_7" data-name="Line 7"
                    d="M36.91,0L36.78,0A1,1,0,0,0,36,1V37a1,1,0,1,0,2,0s0,0,0,0V1a1,1,0,0,0-1-1H36.91Z" />
                <path id="Line_8" data-name="Line 8"
                    d="M42.91,9L42.78,9A1,1,0,0,0,42,10V28a1,1,0,1,0,2,0s0,0,0,0V10a1,1,0,0,0-1-1H42.91Z" />
                <path id="Line_9" data-name="Line 9"
                    d="M48.91,15l-0.12,0A1,1,0,0,0,48,16v6a1,1,0,1,0,2,0s0,0,0,0V16a1,1,0,0,0-1-1H48.91Z" />
            </svg>Play
            Sound</button>
    </div>
</div>`,
  methods: {
    playSound(e) {
      console.log(e.target);
      $elem = e.target.querySelector("#wave");
      $elem.style.display = "block";

      const sonuc = pauseSound($elem);

      function pauseSound(elem) {
        setTimeout(function () {
          elem.style.display = "none";
          return "Paused";
        }, 5000);
      }
    },
  },
});
