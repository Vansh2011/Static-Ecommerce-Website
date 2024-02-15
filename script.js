//Collection Filter buttons for index page

// init Isotope
var $grid = $(".collection-list").isotope({
  // options
});
// filter items on button click
$(".filter-button-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter");
  resetFilterBtns();
  $(this).addClass("active-filter-btn");
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $(".filter-button-group").find("button");
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("active-filter-btn");
  });
}

function cartCount() {
  count = obj.cartCounter();
  document.getElementById("counter").innerHTML = count;
}

// popup working
const wrapper = document.querySelector(".wrapper");
const btnPopup = document.querySelector(".popupBtn");
const iconClose = document.querySelector(".icon-close");

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});

const wrapperJa = document.querySelector(".wrapperja");
const btnPopupJa = document.querySelector(".popupBtnja");
const iconCloseJa = document.querySelector(".close-ja");

btnPopupJa.addEventListener("click", () => {
  wrapperJa.classList.add("active-popup");
});

iconCloseJa.addEventListener("click", () => {
  wrapperJa.classList.remove("active-popup");
});

const wrapperHo = document.querySelector(".wrapperHo");
const btnPopupHo = document.querySelector(".popupBtnHo");
const iconCloseHo = document.querySelector(".close-ho");

btnPopupHo.addEventListener("click", () => {
  wrapperHo.classList.add("active-popup");
});

iconCloseHo.addEventListener("click", () => {
  wrapperHo.classList.remove("active-popup");
});

const wrapperOh = document.querySelector(".wrapperoh");
const btnPopupOh = document.querySelector(".popupBtnoh");
const iconCloseOh = document.querySelector(".close-oh");

btnPopupOh.addEventListener("click", () => {
  wrapperOh.classList.add("active-popup");
});

iconCloseOh.addEventListener("click", () => {
  wrapperOh.classList.remove("active-popup");
});

const wrapperBl = document.querySelector(".wrapperbl");
const btnPopupBl = document.querySelector(".popupBtnbl");
const iconCloseBl = document.querySelector(".close-bl");

btnPopupBl.addEventListener("click", () => {
  wrapperBl.classList.add("active-popup");
});

iconCloseBl.addEventListener("click", () => {
  wrapperBl.classList.remove("active-popup");
});
const wrapperLs = document.querySelector(".wrapperls");
const btnPopupLs = document.querySelector(".popupBtnls");
const iconCloseLs = document.querySelector(".close-ls");

btnPopupLs.addEventListener("click", () => {
  wrapperLs.classList.add("active-popup");
});

iconCloseLs.addEventListener("click", () => {
  wrapperLs.classList.remove("active-popup");
});
const wrapperSw = document.querySelector(".wrappersw");
const btnPopupSw = document.querySelector(".popupBtnsw");
const iconCloseSw = document.querySelector(".close-sw");

btnPopupSw.addEventListener("click", () => {
  wrapperSw.classList.add("active-popup");
});

iconCloseSw.addEventListener("click", () => {
  wrapperSw.classList.remove("active-popup");
});
const wrapperPu = document.querySelector(".wrapperpu");
const btnPopupPu = document.querySelector(".popupBtnpu");
const iconClosePu = document.querySelector(".close-pu");

btnPopupPu.addEventListener("click", () => {
  wrapperPu.classList.add("active-popup");
});

iconClosePu.addEventListener("click", () => {
  wrapperPu.classList.remove("active-popup");
});
const wrapperAw = document.querySelector(".wrapperaw");
const btnPopupAw = document.querySelector(".popupBtnaw");
const iconCloseAw = document.querySelector(".close-aw");

btnPopupAw.addEventListener("click", () => {
  wrapperAw.classList.add("active-popup");
});

iconCloseAw.addEventListener("click", () => {
  wrapperAw.classList.remove("active-popup");
});
const wrapperGot = document.querySelector(".wrappergot");
const btnPopupGot = document.querySelector(".popupBtngot");
const iconCloseGot = document.querySelector(".close-got");

btnPopupGot.addEventListener("click", () => {
  wrapperGot.classList.add("active-popup");
});

iconCloseGot.addEventListener("click", () => {
  wrapperGot.classList.remove("active-popup");
});
const wrapperSl = document.querySelector(".wrappersl");
const btnPopupSl = document.querySelector(".popupBtnsl");
const iconCloseSl = document.querySelector(".close-sl");

btnPopupSl.addEventListener("click", () => {
  wrapperSl.classList.add("active-popup");
});

iconCloseSl.addEventListener("click", () => {
  wrapperSl.classList.remove("active-popup");
});

const wrapperDj = document.querySelector(".wrapperdj");
const btnPopupDj = document.querySelector(".popupBtndj");
const iconCloseDj = document.querySelector(".close-dj");

btnPopupDj.addEventListener("click", () => {
  wrapperDj.classList.add("active-popup");
});

iconCloseDj.addEventListener("click", () => {
  wrapperDj.classList.remove("active-popup");
});
const wrapperTo = document.querySelector(".wrapperto");
const btnPopupto = document.querySelector(".popupBtnto");
const iconCloseto = document.querySelector(".close-to");

btnPopupto.addEventListener("click", () => {
  wrapperTo.classList.add("active-popup");
});

iconCloseto.addEventListener("click", () => {
  wrapperTo.classList.remove("active-popup");
});
const wrapperTot = document.querySelector(".wrappertot");
const btnPopuptot = document.querySelector(".popupBtntot");
const iconClosetot = document.querySelector(".close-tot");

btnPopuptot.addEventListener("click", () => {
  wrapperTot.classList.add("active-popup");
});

iconClosetot.addEventListener("click", () => {
  wrapperTot.classList.remove("active-popup");
});
const wrapperSh = document.querySelector(".wrappersh");
const btnPopupSh = document.querySelector(".popupBtnsh");
const iconCloseSh = document.querySelector(".close-sh");

btnPopupSh.addEventListener("click", () => {
  wrapperSh.classList.add("active-popup");
});

iconCloseSh.addEventListener("click", () => {
  wrapperSh.classList.remove("active-popup");
});
const wrapperBs = document.querySelector(".wrapperbs");
const btnPopupBs = document.querySelector(".popupBtnbs");
const iconCloseBs = document.querySelector(".close-bs");

btnPopupBs.addEventListener("click", () => {
  wrapperBs.classList.add("active-popup");
});

iconCloseBs.addEventListener("click", () => {
  wrapperBs.classList.remove("active-popup");
});
const wrapperPdt = document.querySelector(".wrapperpdt");
const btnPopupPdt = document.querySelector(".popupBtnpdt");
const iconClosePdt = document.querySelector(".close-pdt");

btnPopupPdt.addEventListener("click", () => {
  wrapperPdt.classList.add("active-popup");
});

iconClosePdt.addEventListener("click", () => {
  wrapperPdt.classList.remove("active-popup");
});
const wrapperWs = document.querySelector(".wrapperws");
const btnPopupWs = document.querySelector(".popupBtnws");
const iconCloseWs = document.querySelector(".close-ws");

btnPopupWs.addEventListener("click", () => {
  wrapperWs.classList.add("active-popup");
});

iconCloseWs.addEventListener("click", () => {
  wrapperWs.classList.remove("active-popup");
});
const wrapperMc = document.querySelector(".wrappermc");
const btnPopupMc = document.querySelector(".popupBtnmc");
const iconCloseMc = document.querySelector(".close-mc");

btnPopupMc.addEventListener("click", () => {
  wrapperMc.classList.add("active-popup");
});

iconCloseMc.addEventListener("click", () => {
  wrapperMc.classList.remove("active-popup");
});

//Collection page filter buttons
// init Isotope
var $gridpg = $(".collection-listpg").isotope({
  // options
});
// filter items on button click
$(".filter-button-grouppg").on("click", "button", function () {
  var filterValuepg = $(this).attr("data-filter");
  resetFilterBtns();
  $(this).addClass("active-filter-btnpg");
  $gridpg.isotope({ filter: filterValuepg });
});

var filterBtnspg = $(".filter-button-grouppg").find("button");
function resetFilterBtns() {
  filterBtnspg.each(function () {
    $(this).removeClass("active-filter-btnpg");
  });
}

function cartCount() {
  count = obj.cartCounter();
  document.getElementById("counter").innerHTML = count;
}
