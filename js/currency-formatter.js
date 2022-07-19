/** Curreny version v0.110
 * Author : Jose D'lucas
 *
 * @param r
 * @returns {*}
 * English currency format
 * Use in html : input[data-type='currency']
 * Summary : just add the input data-type attribute on your input and add this file to your html
 */


function formatNumber(r){return r.replace(/\D/g,"").replace(/\B(?=(\d{3})+(?!\d))/g,",")}function formatCurrency(r,e){var t=r.val();if(""!==t){var n=t.length,u=r.prop("selectionStart");if(t.indexOf(".")>=0){var a=t.indexOf("."),i=t.substring(0,a),f=t.substring(a);i=formatNumber(i),f=formatNumber(f),"blur"===e&&(f+="00"),t="$"+i+"."+(f=f.substring(0,2))}else t="$"+(t=formatNumber(t)),"blur"===e&&(t+=".00");r.val(t),u=t.length-n+u,r[0].setSelectionRange(u,u)}}$("input[data-type='currency']").on({keyup:function(){formatCurrency($(this))},blur:function(){formatCurrency($(this),"blur")}});