const SVG_STORE_S =  "<svg  xmlns='http://www.w3.org/2000/svg'  width='20' height='20' fill='currentColor' class='bi bi-shop-window ' viewBox='0 0 16 16'><path d='M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z'/></svg>";
const SVG_STORE_L =  "<svg  xmlns='http://www.w3.org/2000/svg'  width='40' height='40' fill='currentColor' class='bi bi-shop-window ' viewBox='0 0 16 16'><path d='M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z'/></svg>";
const SVG_PLUS  = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-plus-lg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z'/></svg>";
const SVG_MINUS = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-dash-lg' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z'/></svg>";
const SVG_FACEBOOK =  "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-facebook' viewBox='0 0 16 16'><path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z'/></svg>";
const SVG_INSTAGRAM =  "<svg xmlns='http://www.w3.org/2000/svg'width='25' height='25'  fill='currentColor'class='bi bi-instagram' viewBox='0 0 16 16'><path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z'/></svg>";
const SVG_TWITTER = "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='currentColor' class='bi bi-twitter' viewBox='0 0 16 16'><path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z'/></svg>";
const SVG_TABELLA_S = "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-table' viewBox='0 0 16 16'><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z'/></svg>";
const SVG_TABELLA_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-table' viewBox='0 0 16 16'><path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z'/></svg>";
const SVG_ARROW = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-arrow-clockwise' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z'/><path d='M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z'/></svg>";
const SVG_LOCK_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-lock-fill' viewBox='0 0 16 16'><path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/></svg>";
const SVG_LOCK_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='white' class='bi bi-lock-fill' viewBox='0 0 16 16'><path d='M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z'/></svg>";
const SVG_UNLOCK_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-unlock-fill' viewBox='0 0 16 16'><path d='M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z'/></svg>";
const SVG_UNLOCK_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='white' class='bi bi-unlock-fill' viewBox='0 0 16 16'><path d='M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2z'/></svg>";
const SVG_TROFEO_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-trophy' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z'/></svg>";
const SVG_TROFEO_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-trophy' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z'/></svg>";
const SVG_TROFEO_FILL_S = "<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='currentColor' class='bi bi-trophy-fill' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z'/></svg>";
const SVG_TROFEO_FILL_L = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='currentColor' class='bi bi-trophy-fill' viewBox='0 0 16 16'><path d='M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935z'/></svg>";

var myModal = new bootstrap.Modal(document.getElementById("avvisoVincita"));



const CARTELLA = 0;
const TABELLONE = 1;
const NESSUNA = 2;
var statoSceltaTipoCartella = NESSUNA;

const ATTESA = 0;
const PRONTO = 1;
var statoPartita = ATTESA;

const avvisoNessunaCartella = "<div class='container mt-3 mb-3 opacity-75' style='max-width:1000px'><h3 >Nessuna cartella acquistata</h3><p class='lead'><small><em>Prima di giocare compra subito delle cartelle e dai inizio al divertimento</em></small></p></div>";
const avvisoMassimoCartelle = "<p class='mt-3 lead opacity-75'><small><em>Numero massimo di cartelle raggiunto. Non puoi comprare altre cartelle.</em></small></p>";
const x = window.matchMedia("(max-height: 640px) and (min-width: 600px)");
const y = window.matchMedia("(max-height: 680px) and (max-width: 600px)");
const z =  window.matchMedia("(max-width: 780px)");
const s =  window.matchMedia("(max-width: 1000px)");

function footerResponsive(x) {
    if(statoSceltaTipoCartella == NESSUNA){
        if (x.matches ) document.getElementsByTagName("footer")[0].classList.remove('fixed-bottom');
        else document.getElementsByTagName("footer")[0].classList.add('fixed-bottom');
    }
    return x.matches;
}
function sectionResponsive(x) {
    if(statoSceltaTipoCartella != NESSUNA){
        
        if (x.matches ) {
        
            document.getElementsByClassName("colLeft")[0].classList.remove('col-sm-5');
            document.getElementsByClassName("colRight")[0].classList.remove('col-sm-7');
            document.getElementsByClassName("colLeft")[0].classList.remove('border-end');
            document.getElementsByClassName("colLeft")[0].classList.add('col-sm-12');
            document.getElementsByClassName("colRight")[0].classList.add('col-sm-12');
        }
        else {
          
            document.getElementsByClassName("colLeft")[0].classList.add('col-sm-5');
            document.getElementsByClassName("colRight")[0].classList.add('col-sm-7');
            document.getElementsByClassName("colLeft")[0].classList.add('border-end');
            document.getElementsByClassName("colLeft")[0].classList.remove('col-sm-12');
            document.getElementsByClassName("colRight")[0].classList.remove('col-sm-12');
        
        }
    }
    return x.matches;
}
function sectionerResponsive(x) {

    if(statoPartita == PRONTO){
        if (x.matches ) {
        
            document.getElementsByClassName("colLefter")[0].classList.remove('col-sm-5');
            document.getElementsByClassName("colRighter")[0].classList.remove('col-sm-7');
            document.getElementsByClassName("colLefter")[0].classList.remove('border-end');
            document.getElementsByClassName("colLefter")[0].classList.add('col-sm-12');
            document.getElementsByClassName("colRighter")[0].classList.add('col-sm-12');
        }
        else {
          
            document.getElementsByClassName("colLefter")[0].classList.add('col-sm-5');
            document.getElementsByClassName("colRighter")[0].classList.add('col-sm-7');
            document.getElementsByClassName("colLefter")[0].classList.add('border-end');
            document.getElementsByClassName("colLefter")[0].classList.remove('col-sm-12');
            document.getElementsByClassName("colRighter")[0].classList.remove('col-sm-12');
        
        }
    }
    return x.matches;
}
sectionResponsive(z);
sectionerResponsive(s);
if(footerResponsive(x) == false)footerResponsive(y) ;
x.addListener(footerResponsive);
y.addListener(footerResponsive);
z.addListener(sectionResponsive);
s.addListener(sectionerResponsive);

class Cartella {
    constructor(nomeCartella,tipoCartella,idCartella,quadrante) {
        this.nomeCartella = nomeCartella;   
        this.tipoCartella = inizializzaTipoCartella(tipoCartella,nomeCartella,idCartella,false);
        this.numeriCartella = new Array();
        for(let i = 0; i < 3; i ++) this.numeriCartella[i] = new Array();
        this.idCartella = idCartella;
        this.cartellaPronta = false;
        this.setCelleCartella(tipoCartella,quadrante)
    }
    setCartellaPronta(cartellaPronta){this.cartellaPronta = cartellaPronta;}
    getCartellaPronta(){return this.cartellaPronta;}
    getNomeCartella(){return this.nomeCartella;}
    getTipoCartella(){return this.tipoCartella;}
    getIdCartella(){return this.idCartella;}
    getNumeroCellaCartella(i,j){ return this.numeriCartella[i][j];}
    setNumeroCellaCartella(i,j,n){this.numeriCartella[i][j] = n;}
    setCelleCartella(tipoCartella,quadrante){
        if(tipoCartella == CARTELLA)this.setCelleCartellaStandard();
        else this.setCelleCartellaTabellone(quadrante);
    }
    setTipoCartella(tipoCartella,nomeCartella,idCartella,inizioPartita){this.tipoCartella = inizializzaTipoCartella(tipoCartella,nomeCartella,idCartella,inizioPartita);}
    setCelleCartellaTabellone(quadrante){
        let quadranti= 0;
        let colonne = 0;
        let f = 0;
        for(let  i = 0; i < 3; i ++){
            for(let  j = 0; j < 3; j++){
                colonne = 0;
                for(let  k = 0; k < 10; k ++){
                    f++;
                    if(k == 5){
                        colonne = 0;
                        quadranti++;          
                    }
                    if(quadranti == quadrante){      
                        this.setNumeroCellaCartella(j,colonne,f);
                        colonne++;
                    }     
                }
                    if(j != 2)quadranti--;  
            }
            quadranti++;
        }
    }
    setCelleCartellaStandard(){
        let celleVuote = [];
        let unicaCella = true;
        let unicoNumero = true;
        let app = 0;
        let c = 0;
        let numero = 0;
        for(let i = 0; i < 3; i ++){ 
            c = 0;
            celleVuote = [];
            for(let k = 0; k < 4; k ++){
                celleVuote[k] = Math.floor(Math.random() * 9)
                do{            
                    if(unicaCella == false){
                        unicaCella = true;
                        celleVuote[k] = Math.floor(Math.random() * 9);           
                    }
                    for(let f = 0; f <  celleVuote.length; f ++)
                        if(k != f && celleVuote[k] == celleVuote[f]){
                            unicaCella = false;
                            break;
                        }            
                }while(unicaCella != true);      
            }       
            for(let k = 0; k < 3; k ++){
                for(let f = 0; f < 3; f ++){
                    if(celleVuote[f] > celleVuote[f + 1]){
                        app = celleVuote[f];
                        celleVuote[f] = celleVuote[f + 1];
                        celleVuote[f + 1] = app;
                    }
                }
            }
            for(let j = 0; j < 9; j ++){
                if(j == celleVuote[c]){
                    c++;
                    this.setNumeroCellaCartella(i,j,0);
                }
                else {
                    numero = j * 10 + (1 + Math.floor(Math.random() * 10));
                        do{           
                            if(unicoNumero == false){
                                unicoNumero = true;
                                numero = j * 10 + (1 + Math.floor(Math.random() * 10));         
                            }
                            for(let k = 0; k <  i; k ++)
                                if(this.getNumeroCellaCartella(k,j) == numero){
                                    unicoNumero = false;
                                    break;
                                }         
                        }while(unicoNumero != true);
                        this.setNumeroCellaCartella(i,j,numero);
                }
            }
        }
    }
}

class Botteghino {
    constructor(tipo,max,regole,nome,descrizione,path) {
        this.tipo = tipo;
        this.min = 1;
        this.max = max;
        this.regole = regole;
        this.nome = nome;
        this.descrizione = descrizione;
        this.path = path;
        this.cartella = [];
        this.premi = new Array();
        for(let i = 0; i < 3; i ++)this.premi[i] = new Array();
        this.premi[0] = ["Ambo", "Terna","Quaterna","Cinquina","Tombola"];
        for(let i = 0; i < this.premi[0].length; i ++)this.premi[1][i] = "attesa";
        for(let i = 0; i < this.premi[0].length - 1; i ++)this.premi[2][i] = i + 2;
        this.premi[2][this.premi[0].length - 1] = 15;
        this.tabellone = [];
        for(let i = 0; i < 90; i ++)this.tabellone[i] = false;
    }
    getNumeriPerPremio(i){return this.premi[2][i];}
    getPremioAttuale(){
        let k = 0;
        for(let i = 0; i < this.premi[0].length; i ++){
            if(this.premi[1][i] == "attesa"){
                k = i;
                break;
            }
        }
        return k;
    }
    getNumeroTabellone(i){return this.tabellone[i];}
    setNumeroTabellone(i){this.tabellone[i] = true;}
    getNomePremio(i){return this.premi[0][i];}
    getVincita(i){return this.premi[1][i];}
    setVincita(i,vincita){this.premi[1][i] = vincita}
    getTipo() {return "Botteghino cartelle " + this.tipo +  "<br>" ;}
    getRegole() {return "Puoi acquistare minimo " + this.min + " cartella e massimo "+ this.max+" cartelle. " + this.regole;}
    getNome() {return this.nome;}
    getDescrizione() {return this.descrizione;}
    getPath() {return "../img/" + this.path;}
    eliminaUltimaCartella(){
        for(let i = this.cartella.length -1; i >= 0; i --){
            if(this.cartella[i].getCartellaPronta() == false){
                this.cartella.splice(i,1);
                break;
            }
        }
    }
    eliminaCartellaScelta(i){this.cartella.splice(i,1);}
    resetCartella(){this.cartella = []; for(let i = 0; i < this.premi[0].length; i ++)this.premi[1][i] = "attesa";for(let i = 0; i < 90; i ++)this.tabellone[i] = false;}
    getMaxCartelle(){return this.max;}
    getCartella(){
        let generaCartella ="";
        for(let i = 0; i < this.cartella.length; i ++)generaCartella+=this.getTipoCartella(i);
        return generaCartella;
    }
    getNumeroCartelle(){return this.cartella.length;}
    setCartella(nomeCartella,tipoCartella,idCartella,quadrante){this.cartella.push(new Cartella(nomeCartella,tipoCartella,idCartella,quadrante));}
    getNomeCartella(i){return this.cartella[i].getNomeCartella();}
    getTipoCartella(i){return this.cartella[i].getTipoCartella();}
    getIdCartella(i){ return  this.cartella[i].getIdCartella();}
    getNumeroCellaCartella(i,j,k){return this.cartella[i].getNumeroCellaCartella(j,k);}
    setNumeroCellaCartella(i,j,k,n){this.cartella[i].setNumeroCellaCartella(j,k,n);}
    scambiaCartelle(i,j){
        let appCartella = this.cartella[i];
        this.cartella[i] = this.cartella[j];
        this.cartella[j] = appCartella;
    }
    setTipoCartella(i,tipoCartella,nomeCartella,idCartella,inizioPartita){this.cartella[i].setTipoCartella(tipoCartella,nomeCartella,idCartella,inizioPartita);}
    setCartellaPronta(i,cartellaPronta){this.cartella[i].setCartellaPronta(cartellaPronta);}
    getCartellaPronta(i){return this.cartella[i].getCartellaPronta();}
    getInxById(idCartella){
        let k = 0;
        for( let i = 0; i < this.getNumeroCartelle(); i ++)if(idCartella == this.getIdCartella(i)){
            k = i;
            break;
        }
        return k;
    }
    getCartellePronte(){
        let c = 0;
        for( let i = 0; i < this.getNumeroCartelle(); i ++)if(this.getCartellaPronta(i) == false)c++;
        return c;
    }
}

const botteghino = [];
botteghino.push(new Botteghino("standard ",4,"Le cartelle sono generate casualmente","Cartelle","Acquista la cartella vincente con quei tuoi numeri più fortunati","cartelle.jpg" ));
botteghino.push(new Botteghino("tabellone ",3,"Seleziona i quadranti del tabellone per scegliere le cartelle","Tabellone","Compra le cartelle migliori del tabellone per vincere facilmente","tabellone.jpeg"  ));


function sceltaTipoCartella(tipoCartella){
    statoSceltaTipoCartella = tipoCartella;
    inizializzaPartita();
}
function inizializzaFooter(){
    let generaFooter = "";
    let svgFooter = new Array (SVG_FACEBOOK,SVG_INSTAGRAM,SVG_TWITTER);
    for(let i = 0; i < svgFooter.length;i++){
        generaFooter +=  "<li class='nav-item me-3' >";
        generaFooter +="<a href='#' class='nav-link px-2 text-muted btn btn-light border-0 rounded-circle'>";
        generaFooter += svgFooter[i]; 
        generaFooter +="</a>";
        generaFooter +="</li>";
    }
    document.getElementsByClassName("nav")[0].innerHTML = generaFooter;
}


function eliminaCartellaScelta(tipoCartella,idCartella,eliminazioneSecondaria){
    let aggiornaCartelle = avvisoNessunaCartella;
    let k = botteghino[tipoCartella].getInxById(idCartella);

    if(eliminazioneSecondaria == TABELLONE){
        sceltaQuadrante(idCartella - 1,eliminazioneSecondaria);
        document.getElementsByClassName('quadrante' +(idCartella - 1))[0].innerHTML = "";
    }
    botteghino[tipoCartella].eliminaCartellaScelta(k);
    if(botteghino[tipoCartella].getNumeroCartelle() != 0)aggiornaCartelle = botteghino[tipoCartella].getCartella()
    if(tipoCartella == CARTELLA ) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    document.getElementsByClassName("colRight")[0].innerHTML = aggiornaCartelle;
    inizializzaNumeriCartelle(tipoCartella);
    inizializzaTastoInizio();
}

function cambiaStatoCartella(tipoCartella,idCartella){
    let k = botteghino[tipoCartella].getInxById(idCartella);
    cartellaPronta = true;
    if(botteghino[tipoCartella].getCartellaPronta(k) == true)cartellaPronta = false;
    botteghino[tipoCartella].setCartellaPronta(k,cartellaPronta);
    for( let i = 0; i < botteghino[tipoCartella].getNumeroCartelle(); i ++)botteghino[tipoCartella].setTipoCartella(i,tipoCartella,botteghino[tipoCartella].getNomeCartella(i),botteghino[tipoCartella].getIdCartella(i),botteghino[tipoCartella].getCartellaPronta(i));
    document.getElementsByClassName("colRight")[0].innerHTML = botteghino[tipoCartella].getCartella();
    inizializzaNumeriCartelle(tipoCartella);
    if(tipoCartella == CARTELLA) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    if(tipoCartella == TABELLONE)aggiornaQuadrante();
    
}
function inizializzaTipoCartella(tipoCartella,nomeCartella,idCartella,cartellaPronta){
    let lT = 405;//370 telefono
    let hT = 220;//200 telefono
    let numXrg = 5;
    let svgLock = SVG_LOCK_S;
    if(cartellaPronta != true)svgLock = SVG_UNLOCK_S;
    if(tipoCartella == CARTELLA)numXrg = 9;
    let hQ = hT/3 - 10;
    let lQ = lT/(numXrg + 1);
    let generaCartella = "";
    generaCartella+="<div class=' row m-auto  mt-4 border border-dark rounded-top fw-bold' style=' height:30px; width:" + lT +"px;'>";
    generaCartella+="<div class='col-4 text-start'>"+ nomeCartella +"</div>";
    generaCartella+="<div class='col-4 text-center' ><button class='cartellaPronta"+ idCartella+" btn btn-outline-dark' style='width:25px;height:25px;position:relative;' onclick='cambiaStatoCartella("+ tipoCartella+","+idCartella+")' ><p style='position:absolute;left:2px;top:-2px;'>"+ svgLock +"</p></button></div>";
    if(cartellaPronta != true){
        generaCartella+="<div class='col-4 text-end'>";
        generaCartella+="<button class='btn btn-outline-danger rounded-circle' style='width:25px;height:25px;position:relative;'><p style='position:absolute;left:2px;top:-2px;'onclick='eliminaCartellaScelta(" + tipoCartella+","+ idCartella + ","+ tipoCartella +")'>"+ SVG_MINUS+"</p></button>";
        if(tipoCartella == CARTELLA)generaCartella+="<button class=' btn btn-outline-dark rounded-circle ms-2' onclick='cambiaCartella("+ idCartella+")' style='width:25px;height:25px;position:relative;'><p style='position:absolute;left:2px;top:-2px;'>"+ SVG_ARROW+"</p></button>";
        generaCartella+="</div>";
    }
    generaCartella+="</div>";
    generaCartella += "<div class='row border border-dark  m-auto mb-4 text-center' style='width: " + lT +"px; height: "+ hT+"px;box-shadow: 0 20px 16px -16px grey'>";
    for(let i = 0; i < 3;i++){
        for(let j = 0; j < numXrg;j++){
            idCella = j + (i * 10) + (idCartella * 100);
            generaCartella += "<div  class=' cella"+ idCella +" m-auto mt-1 bg-light border border-dark rounded' style='height: "+hQ +"px;width: "+lQ +"px'><p class ='"+ idCella +" text-center  mt-3 fs-6 fw-bold '></p></div>";
        }
        if( i < 2) generaCartella += "<div class='w-100 '></div>";
    }
    generaCartella += "</div>";
    return generaCartella;

}
function inizializzaTastoInizio(){
    let generaTastoInizio = ""
    if(botteghino[statoSceltaTipoCartella].getNumeroCartelle() != 0)generaTastoInizio  =" <button class='btn btn-outline-light fs-4 font-monospace' style='width:120px;height:50px;' onclick='iniziaPartita()'>GIOCA</button>";
    document.getElementsByClassName("iniziaPartita")[0].innerHTML = generaTastoInizio;
}

function estraiNumero(){
    let numero = Math.floor(Math.random() * 90);
    let unicoNumero = true;
    
    do{
        if(unicoNumero == false){
            unicoNumero = true;
            numero = Math.floor(Math.random() * 90);
          
        }
        for(let i = 0; i <  90; i ++)
            if(botteghino[statoSceltaTipoCartella].getNumeroTabellone(i) == true && numero == i){
                unicoNumero = false;
                break;
            }
        
    }while(unicoNumero != true);
    
    botteghino[statoSceltaTipoCartella].setNumeroTabellone(numero);
   
    numero++;
    document.getElementsByClassName("cella"+ numero)[0].classList.remove("bg-light");
    document.getElementsByClassName("cella"+ numero)[0].classList.remove("border");
    document.getElementsByClassName("cella"+ numero)[0].classList.add("borderd-light");
    document.getElementsByClassName("cella"+ numero)[0].classList.add("bg-warning");
    inizializzaNumeriCartelle(statoSceltaTipoCartella);
    document.getElementsByClassName("numeroEstratto")[0].innerHTML = "<button class='text-dark bg-warning float-end border-5 rounded-circle fs-3 fw-bold'style='width:50px;height:50px;pointer-events: none;cursor: default;'>"+numero+"</button> "
    controllaVincita();
    document.getElementsByClassName("montePremi")[0].innerHTML = inizializzaMontePremi();

  

    if(botteghino[statoSceltaTipoCartella].getVincita(4) != "attesa" ){
        
         document.getElementsByClassName("iniziaPartita")[0].innerHTML =" <button class='btn btn-outline-light fs-4 font-monospace' style='width:160px;height:50px;' onclick='risultatiPartita()'>RISULTATI</button>";
         document.getElementsByClassName("numeroEstratto")[0].innerHTML = "";
         document.getElementsByClassName("corpo")[0].classList.remove("opacity-100");
         document.getElementsByClassName("corpo")[0].classList.add("opacity-75");
      
        }


    
}


function risultatiPartita(){


    document.getElementsByClassName('avvisoVincita')[0].innerHTML = inizializzaAvvisoResocontoVittorie();
    myModal.show();
    document.getElementsByClassName("iniziaPartita")[0].innerHTML = "";
    document.getElementsByClassName("numeroEstratto")[0].innerHTML = "";
    statoSceltaTipoCartella = NESSUNA;
    inizializzaPartita();
}

function controllaVincita(){
    let vincitaTabellone = false;
    let vincitaCartelle = [];
    let numeroCartella = 0;
    let numXrg = 5;
    if(statoSceltaTipoCartella == CARTELLA)numXrg = 9;
    let premioAttuale = botteghino[statoSceltaTipoCartella].getPremioAttuale();
    for(let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle(); i ++)vincitaCartelle[i] = false;

    


    let f = 0;//numero del tabellone (1 a 90)
    let p = 0;//se quadrante pari allora 0 senno allora 5 (0 o 5)
    let g = -4;//incrementa ad ogni riga e 
    //se quadrante dispari -3
    //se quadrante pari incrementa di 3
    let u = - 4;//memorizza g
    let q = 0;//incrementa ad ogni cella e resetta ad ogni riga (1 a 5)

    //f = p + g * 10 + q
    
    let c = 0;//conta numeri stessa riga e solo se tutti premi vinti controlla quadrante e azzera ad ogni quadrante
    
    for( let k = 0; k < 6; k ++){
       
            if( k % 2 == 0){
                p = 0;
                u = u  + 3;
                g = u ;
            }
            else  {
                p = 5;
                g = u;
            }

            c = 0;
            for( let i = 0; i < 3; i ++){
                if(premioAttuale != 4)c = 0;
                g++;
                q = 0;
                for( let j = 0; j < 5; j ++){
                    q++;
                    f = g * 10 + p + q;
                    if(botteghino[statoSceltaTipoCartella].getNumeroTabellone(f - 1) == true)c++;
                    if(c == botteghino[statoSceltaTipoCartella].getNumeriPerPremio(premioAttuale) &&  rilevaQuadranteAcquistato(k) == false)vincitaTabellone = true;
                    
                    
            
                }
            
            }
        

    }

    
    for(let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle();i++){
        c = 0;
        for(let j = 0; j < 3;j++){
            if(premioAttuale != 4)c = 0;
            for(let k = 0; k < numXrg;k++){
            
                numeroCartella = botteghino[statoSceltaTipoCartella].getNumeroCellaCartella(i,j,k);
                if(numeroCartella != 0 && botteghino[statoSceltaTipoCartella].getNumeroTabellone(numeroCartella - 1) == true)c++;
                if(c == botteghino[statoSceltaTipoCartella].getNumeriPerPremio(premioAttuale))vincitaCartelle = true;
                

            }
        }
    }


    if(botteghino[statoSceltaTipoCartella].getVincita(premioAttuale) == "attesa"){

        if(vincitaTabellone == true){
            if(vincitaCartelle == true)botteghino[statoSceltaTipoCartella].setVincita(premioAttuale,"pareggio")
            else botteghino[statoSceltaTipoCartella].setVincita(premioAttuale,"perso")
        }else if (vincitaCartelle == true)botteghino[statoSceltaTipoCartella].setVincita(premioAttuale,"vinto")

        if(botteghino[statoSceltaTipoCartella].getVincita(premioAttuale) != "attesa"){
          
            document.getElementsByClassName('avvisoVincita')[0].innerHTML = inizializzaAvvisoVincita(premioAttuale);
            
            myModal.show();
        
        }
    }

   
}


function iniziaPartita(){
    document.getElementsByClassName("header")[0].classList.remove("opacity-100");
    document.getElementsByClassName("row")[0].classList.remove("opacity-100");
    document.getElementsByClassName("header")[0].classList.add("opacity-75");
    document.getElementsByClassName("row")[0].classList.add("opacity-75");
    
    let generaPartita = ""
    generaPartita  =" <button class='btn btn-light fs-4 font-monospace' style='width:120px;height:50px;' onclick='estraiNumero()' >ESTRAI</button>";
    document.getElementsByClassName("iniziaPartita")[0].innerHTML = generaPartita;
    
    for( let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle(); i ++)
    botteghino[statoSceltaTipoCartella].setTipoCartella(i,statoSceltaTipoCartella,botteghino[statoSceltaTipoCartella].getNomeCartella(i),botteghino[statoSceltaTipoCartella].getIdCartella(i),true);
    document.getElementsByClassName("colRight")[0].innerHTML = botteghino[statoSceltaTipoCartella].getCartella();
    inizializzaNumeriCartelle(statoSceltaTipoCartella);
    document.getElementsByClassName("btnScelta")[CARTELLA].disabled = true;
    document.getElementsByClassName("btnScelta")[TABELLONE].disabled = true;
    for( let i = 0; i < botteghino[statoSceltaTipoCartella].getNumeroCartelle(); i ++)document.getElementsByClassName("cartellaPronta"+botteghino[statoSceltaTipoCartella].getIdCartella(i))[0].disabled = true;
    
    statoPartita = PRONTO;
    generaPartita = inizializzaBotteghinoComune(statoSceltaTipoCartella,true);
    document.getElementsByClassName("colLefter")[0].innerHTML = generaPartita;
    sectionerResponsive(s); 
}
function cambiaCartella(idCartella){
    let k = botteghino[CARTELLA].getInxById(idCartella);

    creaCartella(CARTELLA);
    botteghino[CARTELLA].scambiaCartelle(k,botteghino[CARTELLA].getNumeroCartelle() - 1);
    botteghino[CARTELLA].eliminaUltimaCartella();
    botteghino[CARTELLA].setTipoCartella(k,CARTELLA,botteghino[CARTELLA].getNomeCartella(k),botteghino[CARTELLA].getIdCartella(k),false);
    document.getElementsByClassName("colRight")[0].innerHTML =   botteghino[CARTELLA].getCartella();
    inizializzaNumeriCartelle(CARTELLA); 
}


function rilevaQuadranteAcquistato(quadrante){
    if(statoSceltaTipoCartella == TABELLONE){
        for(let i = 0; i < botteghino[TABELLONE].getNumeroCartelle(); i ++){
            if(quadrante ==  botteghino[TABELLONE].getIdCartella(i) - 1)return true;
        }
    }
    return false;
}
function inizializzaTabellonePartita(){
    document.getElementsByClassName("colRight")[0].classList.add('colRighter');
    document.getElementsByClassName("colRight")[0].classList.remove('colRight');
    document.getElementsByClassName("colLeft")[0].classList.add('colLefter');
    document.getElementsByClassName("colLefter")[0].classList.remove('colLeft');
  
    
    let generaTabellone = "";
    let h = 290;
    let l = 355; 
    let hQ = (h - 10) / 3;
    let lQ = (l - 10) / 2;
    let dC = 25;
    let f = 0;//numero del tabellone (1 a 90)
    let p = 0;//se quadrante pari allora 0 senno allora 5 (0 o 5)
    let g = -4;//incrementa ad ogni riga e 
    //se quadrante dispari -3
    //se quadrante pari incrementa di 3
    let u = - 4;//memorizza g
    let q = 0;//incrementa ad ogni cella e resetta ad ogni riga (1 a 5)

    //f = p + g * 10 + q
    
    
    generaTabellone+="<div class='text-center mb-2 mt-2'>"+ SVG_TABELLA_L+"</div>"
    generaTabellone+="<h2  class='text-center'>Numeri estratti</h2>";
    if(statoSceltaTipoCartella == TABELLONE)generaTabellone+="<p class='label  m-auto mb-3 text-center'style='max-width:300px;'><em>I quadranti del tabello che hai acquistato sono stati offuscati</em></p>"
    generaTabellone+="<div class='mt-4 text-center m-auto border border-secondary rounded-top fw-bold' style=' height:30px; width:" + l +"px;'>Tabellone "+SVG_TABELLA_S +"</div>";
    generaTabellone+="<div class='row row-cols-2  m-auto mb-3 border border-secondary '  style='height:"+ h + "px; width:" + l +"px;'>";
    for( let k = 0; k < 6; k ++){
        if(rilevaQuadranteAcquistato(k) == true)quadranteComprato = "opacity-50";     
        else quadranteComprato = "";
        
        generaTabellone+="<div class='row row-cols-5 " + quadranteComprato+" m-auto border border-secondary'style='height:"+ hQ + "px; width:" + lQ +"px;'>";
     
        if( k % 2 == 0){
            p = 0;
            u = u  + 3;
            g = u ;
        }
        else  {
            p = 5;
            g = u;
        }
        for( let i = 0; i < 3; i ++){
            g++;
            q = 0;
            for( let j = 0; j < 5; j ++){
                q++;
                f = g * 10 + p + q;  
                generaTabellone+= "<div class='cella"+f+" border bg-light rounded-circle m-auto'style='height:"+ dC + "px; width:" + dC +"; position:relative;'><p style='position:absolute;right:3px;' class ='numero"+f+" text-center fs-11 fw-bold'>" + f+"</p></div>"
        
            }
        
        }
        
        generaTabellone+="</div>";
    }
    generaTabellone+="</div>";
    
    generaTabellone +="<div class='montePremi'>";

    generaTabellone+= inizializzaMontePremi();

    generaTabellone+="</div>";
    
    return generaTabellone;
}

function inizializzaMontePremi(){
    let generaMontePremi = "";
    let svgTrofeo = "";
    generaMontePremi+="<div class='text-center mb-2 mt-5'>"+ SVG_TROFEO_FILL_L+"</div>"
    generaMontePremi+="<h2  class='text-center mb-3'>Monte premi</h2>";
    generaMontePremi+="<p class='label  m-auto mb-3 text-center'style='max-width:300px;'><em>Si vincono i premi in base a quanti numeri sono stati estratti sulla stessa riga</em></p>"
    generaMontePremi+="<div class='row m-auto mb-5' style='width:300px;'>";
    for( let k = 0; k < 5; k ++){
        svgTrofeo = SVG_TROFEO_S;
        if(botteghino[statoSceltaTipoCartella].getVincita(k)  != "attesa")   svgTrofeo = SVG_TROFEO_FILL_S;
        generaMontePremi+="<div class='col-2 mb-1 p-1 border-secondary  border-bottom text-end trofeo"+k+"'>"+ svgTrofeo+"</div>";
        generaMontePremi+="<div class='col-6 mb-1 p-1 border-secondary  border-bottom text-start premio"+k+"'>"+botteghino[statoSceltaTipoCartella].getNomePremio(k)+"</div>";
        generaMontePremi+="<div class='col-4 mb-1 p-1 border-secondary border-bottom text-center stato"+k+"'>" + botteghino[statoSceltaTipoCartella].getVincita(k) +"</div>";
    }     
    generaMontePremi +="</div>";
    return generaMontePremi;
}
function inizializzaBotteghinoComune(tipoCartella,inizioPartita){
    let mW = "";
    if (statoPartita == PRONTO)mW = "max-width:600px;"
    generaBotteghinoComune = "";
    generaBotteghinoComune+="<div class='container sticky-top mb-5' style='"+mW+"'>"
    generaBotteghinoComune+="<div style='height:75px;width:100%;'></div>"
    if(inizioPartita != true){
        generaBotteghinoComune+="<div class='text-center mb-2 mt-1'>"+ SVG_STORE_L+"</div>"
        generaBotteghinoComune+="<h2  >" + botteghino[tipoCartella].getTipo() + "</h2>";
        generaBotteghinoComune+="<p  class='lead'>" + botteghino[tipoCartella].getRegole()+ "</p>";
        if(tipoCartella == CARTELLA)generaBotteghinoComune+= inizializzaBottteghinoCartelle();
        else generaBotteghinoComune += inizializzaBottteghinoTabellone();
        generaBotteghinoComune+="<div class='avvisoMassimoCartelle'></div>"
    }else{
        generaBotteghinoComune += inizializzaTabellonePartita();
    }
    generaBotteghinoComune+="</div>";  
    return generaBotteghinoComune;
}
function inizializzaBotteghino(tipoCartella){
    
    let colLeft = "col-sm-5 border-end";
    let colRight = "col-sm-7";
    if (z.matches){
         colLeft = "col-sm-12";
         colRight = "col-sm-12";
    }
    generaBotteghino = "";
    generaBotteghino+="<div class='container'>";
    generaBotteghino+="<div class='row'>";
    generaBotteghino+="<div class='"+ colLeft+" colLeft '>";
    
    generaBotteghino+= inizializzaBotteghinoComune(tipoCartella,false);
    generaBotteghino+="</div>";
    
    generaBotteghino+="<div class='"+ colRight +" colRight m-auto'>";
    generaBotteghino+= avvisoNessunaCartella;
    generaBotteghino+="</div>";
    generaBotteghino+="</div>";
    generaBotteghino+="</div>";
    return generaBotteghino;
}
function inizializzaBottteghinoCartelle(){
    let generaBotteghinoCartelle = "";
    generaBotteghinoCartelle+="<div class='btn-group mb-3'>";
    generaBotteghinoCartelle+="<button type='button' class='btn btn-secondary' disabled>";
    generaBotteghinoCartelle+=SVG_STORE_S;
    generaBotteghinoCartelle+="</button>";
    if(botteghino[CARTELLA].getNumeroCartelle() < botteghino[CARTELLA].getMaxCartelle() ){
        generaBotteghinoCartelle+="<button type='button' class='btn btn-outline-success ms-1 ' onclick='aggiungiCartella("+CARTELLA+")'>";
        generaBotteghinoCartelle+=SVG_PLUS;
        generaBotteghinoCartelle+="</button>";
    }
    if(botteghino[CARTELLA].getNumeroCartelle() != 0 && botteghino[CARTELLA].getCartellePronte() != 0){
        generaBotteghinoCartelle+="<button type='button' class=' ms-1 btn btn-outline-danger'onclick='eliminaUltimaCartella("+CARTELLA+")'>";
        generaBotteghinoCartelle+=SVG_MINUS;
        generaBotteghinoCartelle+="</button>";
    }
    generaBotteghinoCartelle+="</div>";
    return generaBotteghinoCartelle;
}
function eliminaUltimaCartella(tipoCartella){
    aggiornaCartelle = avvisoNessunaCartella;
    botteghino[tipoCartella].eliminaUltimaCartella(tipoCartella);
    if(botteghino[tipoCartella].getNumeroCartelle() != 0)aggiornaCartelle =  botteghino[tipoCartella].getCartella();
    if(tipoCartella == CARTELLA) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    document.getElementsByClassName("colRight")[0].innerHTML =  aggiornaCartelle;
    inizializzaNumeriCartelle(tipoCartella);
    inizializzaTastoInizio();
}


function creaCartella(tipoCartella,quadrante){
    let idCartella = (1 + Math.floor(Math.random() * 90));
    let nomeCartella = "Cartella." + idCartella;
    let unicoNome = true;
    if(tipoCartella == TABELLONE){
        nomeCartella = "Quadrante." + (quadrante + 1);
        idCartella = quadrante + 1;
    }
    else {
        do{
            if(unicoNome == false){
                unicoNome = true;
                idCartella = (1 + Math.floor(Math.random() * 90));
                nomeCartella = "Cartella." + idCartella;
            }
            for(let i = 0; i <  botteghino[tipoCartella].getNumeroCartelle(); i ++)
                if(nomeCartella == botteghino[tipoCartella].getNomeCartella(i)){
                    unicoNome = false;
                    break;
                }
            
        }while(unicoNome != true);
    }

    botteghino[tipoCartella].setCartella(nomeCartella,tipoCartella,idCartella,quadrante);
}
function aggiungiCartella(tipoCartella,quadrante){

    creaCartella(tipoCartella,quadrante);
   


    if(tipoCartella == CARTELLA  ) document.getElementsByClassName("colLeft")[0].innerHTML =   inizializzaBotteghinoComune(CARTELLA,false);
    controlloLimiteCartelle(tipoCartella);
    document.getElementsByClassName("colRight")[0].innerHTML =   botteghino[tipoCartella].getCartella();
    inizializzaNumeriCartelle(tipoCartella);
 
    inizializzaTastoInizio();
}

function inizializzaNumeriCartelle(tipoCartella){
    let numXrg = 5;
    let numero =  "";
    if(tipoCartella == CARTELLA)numXrg = 9;
    for( let k = 0; k < botteghino[tipoCartella].getNumeroCartelle(); k ++){
        for( let i = 0; i < 3; i ++){
            for( let j = 0; j < numXrg; j ++){
                idCella = j + (i * 10) + (botteghino[tipoCartella].getIdCartella(k)* 100);
                if(botteghino[tipoCartella].getNumeroCellaCartella(k,i,j) != 0){
                    numero = botteghino[tipoCartella].getNumeroCellaCartella(k,i,j);
                    if(botteghino[tipoCartella].getNumeroTabellone(numero - 1) == true){
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-white');
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-light');
                        document.getElementsByClassName("cella"+idCella)[0].classList.add('bg-warning');
                    }
                    else{
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-warning');
                        document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-white');
                        document.getElementsByClassName("cella"+idCella)[0].classList.add('bg-light');
                    }
                    document.getElementsByClassName("cella"+idCella)[0].classList.remove('border-secondary');
                    document.getElementsByClassName("cella"+idCella)[0].classList.add('border-dark');
                   
                }
                else {
                    document.getElementsByClassName("cella"+idCella)[0].classList.remove('bg-light');
                    document.getElementsByClassName("cella"+idCella)[0].classList.add('bg-white');
                    document.getElementsByClassName("cella"+idCella)[0].classList.remove('border-dark');
                    document.getElementsByClassName("cella"+idCella)[0].classList.add('border-secondary');
                    numero = ""
                }
             
                document.getElementsByClassName(idCella)[0].innerHTML = numero;
           
            }
        }
    }
}
function controlloLimiteCartelle(tipoCartella){
    let avvisoLimiteCartelle = "";
    if(botteghino[tipoCartella].getNumeroCartelle() == botteghino[tipoCartella].getMaxCartelle() )avvisoLimiteCartelle = avvisoMassimoCartelle;
    document.getElementsByClassName("avvisoMassimoCartelle")[0].innerHTML =  avvisoLimiteCartelle;
}
function inizializzaBottteghinoTabellone(){
    let h = 220;
    let l = 270; 
    let generaBotteghinoTabellone = "";
    generaBotteghinoTabellone+="<div class='mt-4 text-center m-auto border border-secondary rounded-top fw-bold' style=' height:30px; width:" + l +"px;'>Tabellone "+SVG_TABELLA_S +"</div>";
    generaBotteghinoTabellone+="<div class='row row-cols-2  m-auto mb-3 border border-secondary '  style='height:"+ h + "px; width:" + l +"px;'>";
    for( let j = 0; j < 6; j ++)generaBotteghinoTabellone+=" <button class='quadrante" + j+"  m-auto btn btn-light border-secondary '  onclick='sceltaQuadrante("+ j+")' style='height:"+ ((h - 10) / 3) + "px; width:" + ((l - 10) / 2) +"px;'></button>";
    generaBotteghinoTabellone+="</div>";
    return generaBotteghinoTabellone;
}

function inizializzaHeader(){
    let generaHeader = "";
    for(let i = 0; i < botteghino.length;i++){
        generaHeader += "<div class='col'>";
        generaHeader += "<div class='card mb-3' style='max-width: 540px;'>";
        generaHeader += "<div class='row g-0'>";
        generaHeader += "<div class='col-md-4 ' style='background: url("+ botteghino[i].getPath()+") no-repeat center left;background-size: cover;border-radius:5px 0px 0px 5px'>";
        generaHeader += "</div>";
        generaHeader += "<div class='col-md-8'>";
        generaHeader += "<div class='card-body'>";
        generaHeader += "<h5 class='card-title'>"+ botteghino[i].getNome() +"</h5>";
        generaHeader += "<p class='card-text'>"+ botteghino[i].getDescrizione()+"</p>";
        generaHeader += "<button type='button' class='btn btnScelta btn-light' onclick ='sceltaTipoCartella("+ i +")'>";
        generaHeader += "Vai al botteghino ";
        generaHeader += SVG_STORE_S;
        generaHeader += "</button>";
        generaHeader += "</div>";
        generaHeader += "</div>";
        generaHeader += "</div>";
        generaHeader += "</div>";
        generaHeader += "</div>";
    }
  
    document.getElementsByClassName("row")[0].innerHTML = generaHeader;
}
function inizializzaPartita(){
    
    
    inizializzaFooter();
    inizializzaHeader();
    switch(statoSceltaTipoCartella){
        case NESSUNA:
            document.getElementsByClassName("header")[0].classList.remove("opacity-75");
            document.getElementsByClassName("row")[0].classList.remove("opacity-75");
            document.getElementsByClassName("corpo")[0].classList.remove("opacity-75");
            document.getElementsByClassName("header")[0].classList.add("opacity-100");
            document.getElementsByClassName("row")[0].classList.add("opacity-100");
            document.getElementsByClassName("corpo")[0].classList.add("opacity-100");
            botteghino[CARTELLA].resetCartella();
            botteghino[TABELLONE].resetCartella();
            if (x.matches || y.matches)  document.getElementsByTagName("footer")[0].classList.remove('fixed-bottom');
            else document.getElementsByTagName("footer")[0].classList.add('fixed-bottom');
            document.getElementsByClassName("corpo")[0].innerHTML = "<h2 >Nessuna cartella acquistata</h2><p class='lead'>Prima di giocare compra subito delle cartelle e dai inizio al divertimento</p>"
            break;
        default:
            let sceltaOpposta = CARTELLA;
            if(statoSceltaTipoCartella == CARTELLA){
                sceltaOpposta = TABELLONE;
              
            }
            botteghino[sceltaOpposta].resetCartella();
            document.getElementsByTagName("footer")[0].classList.remove('fixed-bottom');
            aggiornaBottoneTipoCartella(statoSceltaTipoCartella);
            document.getElementsByClassName("container")[3].innerHTML = inizializzaBotteghino(statoSceltaTipoCartella);            
            break;
    }
}


function sceltaQuadrante(quadrante,eliminazioneSecondaria){
    let seleziona = true;
    
    for( let i = 0; i < botteghino[TABELLONE].getNumeroCartelle(); i ++)if(botteghino[TABELLONE].getIdCartella(i) == quadrante + 1){
        if(botteghino[TABELLONE].getCartellaPronta(i) == true)seleziona = false;
        else{
            document.getElementsByClassName('quadrante' + quadrante)[0].classList.add('active');
            document.getElementsByClassName('quadrante' + quadrante)[0].classList.remove('active');
            document.getElementsByClassName('quadrante' + quadrante)[0].innerHTML = "";
            seleziona = false;
            if(eliminazioneSecondaria != TABELLONE)eliminaCartellaScelta(TABELLONE,quadrante + 1);
        }
        break;
    }

    if(seleziona == true && botteghino[TABELLONE].getNumeroCartelle() < botteghino[TABELLONE].getMaxCartelle() ){
        document.getElementsByClassName('quadrante' + quadrante)[0].classList.remove('active');
        document.getElementsByClassName('quadrante' + quadrante)[0].classList.add('active');
        aggiungiCartella(TABELLONE,quadrante);

    }
    aggiornaQuadrante();
    controlloLimiteCartelle(TABELLONE);

}
function aggiornaQuadrante(){
    
    for(let i = 0; i < botteghino[TABELLONE].getNumeroCartelle(); i ++){
        let svgLock = SVG_UNLOCK_L;
        if(botteghino[TABELLONE].getCartellaPronta(i) == true)svgLock = SVG_LOCK_L;
        document.getElementsByClassName('quadrante' +(botteghino[TABELLONE].getIdCartella(i) - 1))[0].innerHTML = svgLock;
    }
}
function aggiornaBottoneTipoCartella(bottone){
    inizializzaTastoInizio();
    document.getElementsByClassName("btnScelta")[bottone].classList.remove('btn-light');
    document.getElementsByClassName("btnScelta")[bottone].classList.add('btn-secondary');
    if(bottone == TABELLONE)bottone = CARTELLA;
    else bottone = TABELLONE;
    document.getElementsByClassName("btnScelta")[bottone].classList.remove('btn-secondary');
    document.getElementsByClassName("btnScelta")[bottone].classList.add('btn-light');
}




function inizializzaAvvisoVincita(premioAttuale){
    let generaAvviso = "";
    generaAvviso += "<div class='modal-content'>";
    generaAvviso += "<div class='modal-header bg-warning'>";
    generaAvviso += "<h5 class='modal-title' id='exampleModalLabel'>"+ botteghino[statoSceltaTipoCartella].getNomePremio(premioAttuale) +" riscosso</h5>";
    generaAvviso += "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>";
    generaAvviso += "</div>";
    generaAvviso += "<div class='modal-body '>";
    
    generaAvviso +=  "Hai <strong>" +botteghino[statoSceltaTipoCartella].getVincita(premioAttuale) + "</strong> questo premio<br>";
    generaAvviso += "<small><em>Continua a giocare per vincere altri premi!</em></small>"
    generaAvviso += " <hr>"
    generaAvviso+="<div class='row m-auto ' style='width:200px;'>";
    generaAvviso+="<div class='col-2 mb-1 p-1  text-end trofeo"+premioAttuale+"'>"+ SVG_TROFEO_FILL_S+"</div>";
    generaAvviso+="<div class='col-6 mb-1 p-1  text-start premio"+premioAttuale+"'>"+botteghino[statoSceltaTipoCartella].getNomePremio(premioAttuale)+"</div>";
    generaAvviso+="<div class='col-4 mb-1 p-1 text-center stato"+premioAttuale+"'>" + botteghino[statoSceltaTipoCartella].getVincita(premioAttuale) +"</div>";
    generaAvviso +="</div>";
    generaAvviso += "</div>";
    generaAvviso += "</div>";
    return generaAvviso;
}


function inizializzaAvvisoResocontoVittorie(){
    let generaAvviso = "";
    let svgTrofeo = "";
    let vittorie = 0;
    generaAvviso += "<div class='modal-content'>";
    generaAvviso += "<div class='modal-header bg-warning'>";
    generaAvviso += "<h5 class='modal-title' >Resoconto vittorie</h5>";
    generaAvviso += "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>";
    generaAvviso += "</div>";
    generaAvviso += "<div class='modal-body '>";

    generaAvviso+="<div class='row m-auto mb-3' style='width:200px;'>";
    for( let k = 0; k < 5; k ++){
        if(botteghino[statoSceltaTipoCartella].getVincita(k) != "perso"){
            vittorie++;
            generaAvviso+="<div class='col-2 mb-1 p-1 border-secondary  border-bottom text-end trofeo"+k+"'>"+ SVG_TROFEO_FILL_S+"</div>";
            generaAvviso+="<div class='col-6 mb-1 p-1 border-secondary  border-bottom text-start premio"+k+"'>"+botteghino[statoSceltaTipoCartella].getNomePremio(k)+"</div>";
            generaAvviso+="<div class='col-4 mb-1 p-1 border-secondary border-bottom text-center stato"+k+"'>" + botteghino[statoSceltaTipoCartella].getVincita(k) +"</div>";
        }
    } 
    generaAvviso +="</div>";
    if(vittorie == 0) generaAvviso += "<h5>Nessun premio vinto</h5><hr>Rigioca e sarai piu fortunato"

    generaAvviso += "</div>";
    generaAvviso += "</div>";
    return generaAvviso;
}

