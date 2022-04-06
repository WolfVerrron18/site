!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

// прайс на дома конец

function sendReForm(a) {

	var fm = $(a).serialize();

	var elements = document.getElementsByClassName("is-invalid");
	for (var i = 0; i < elements.length; i++) {
	    elements[i].classList.remove("is-invalid");
	}

	var uril = encodeURIComponent(window.location.href);

	console.log(uril);

    var fm = fm + '&url=' + uril;

    console.log(fm);
    $.ajax({
      type: 'POST',
      url: '/ajax/',
      data: fm,
      success: function(data) {
        console.log(data);

        var v = JSON.parse(data);

        for (var i = v.length - 1; i >= 0; i--) {
          $(a + ' #' + v[i]).addClass('is-invalid');
          if(v[i] == '9phone') {
            alert('Проверьте номер телефона! Формат +7(9XX)XXX-XX-XX');
          }
        }

        if(v['successfully'] == true) {
          $(a).html('<center style="padding:20px;margin:0 auto;"><p><b>Спасибо!</b></p><p>Мы скоро с вами свяжемся</p></center>');
          console.log('yes');

          metirkaAction();
          
          var elements = document.getElementsByClassName("is-invalid");
          for (var i = 0; i < elements.length; i++) {
              elements[i].classList.remove("is-invalid");
          }
        }


      },
      error:  function(xhr, str){
        alert('Ошибка: ' + xhr.responseCode);
      }
    });

}




// Генератор таблиц с ценами


  function getPs(tos, nos, product, prodname, proparms, propname, dropname) {

    var bohl = '';

    for (let i = 0; i< tos.length; i++) {

      console.log(tos[i]);

      var hml = '<td>' + nos[i] + '</td>';

      for (var z = 0; z < product.length; z++) {

        for (let n = 0; n< opr[product[z]].length; n++) {


          if(opr[product[z]][n]['sysname'] == tos[i]) {

            if(opr[product[z]][n]['sysname'] == 'ot') {

              var hml = hml + '<td data-label="'+ prodname[z] +'">'+ dropname[z] +' ' + opr[product[z]][n][proparms[z]]+ 'р за м2</td>';

            } else {

              var hml = hml + '<td data-label="'+ prodname[z] +'">'+ dropname[z] +' ' + opr[product[z]][n][proparms[z]] + ' ' + propname[z]+ '</td>';

            }
          }

        }

      }

      var bohl = bohl + '<tr>' + hml + '</tr>'; 

    }

    var hohl = '<th>Квадратура</th>';

    for (let i = 0; i< prodname.length; i++) {

      var hohl = hohl + '<th>' + prodname[i] + '</th>';

    }


    var reto = '<table id="table"><thead><tr>'+ hohl +'</tr></thead><tbody>'+ bohl +'</tbody></table>';

    console.log(reto);

    return reto;

  }


  // Генерация блока доп услуг и химчистки

  function getPsDOP(t, cats_list) {

    if( t == 'dops') {
      
      var parms = opr_dops;
      var cats = app_product_dops_cats;


    }

    if (t == 'him') {

      var parms = app_product_him;
      var cats = app_product_him_cats;

    }
 
    var bohl = '';

    for (let z = cats.length - 1; z >= 0; z--) {

      for (let d = cats_list.length - 1; d >= 0; d--) {

        if(cats_list[d] == cats[z]['id']) {

          var bohl = bohl +  '<div class="col-md-12"><h3 style="font-size:22px;font-weight:bold;padding-top:10px;">'+cats[z]['name']+'</h3></div>';

          for (let i = 0; i < parms.length; i++) {

            if(parms[i]['cat_id'] == cats[z]['id']) {

              console.log(parms[i]);

              var bohl = bohl +  '<div class="col-md-4"><div style="padding:10px 10px;font-size:13px;background: #eaeaea;border-radius:7px;margin:5px 0px;"><b>' + parms[i]['name'] + ':</b> ' + parms[i]['price'] + 'р.</div></div>';
            }
          }
        }
      }
    }

    var reto = '<div style="padding-bottom:20px;"><div class="row">'+ bohl +'</div></div>';

    return reto;

  }

function calc_sum(dops_lls) {

	console.log(dops_lls);

	var type = Number.parseInt(document.getElementById("new_calc_type").value);
	var value = Number.parseInt(document.getElementById("new_calc_value").value);

	var $dop_price = 0;

	if(dops_lls.length > 0) {
		for (var i = dops_lls.length - 1; i >= 0; i--) {

			// alert(opr_dops_calc[dops_lls[i]]['price']);
			var $dop_price = $dop_price+(Number.parseInt(document.getElementById("new_calc_dops["+dops_lls[i]+"]").value*opr_dops_calc[dops_lls[i]]['price']));
		}
	}

	var gl = opr[type];

	for (let i = 0; i< gl.length; i++) {

	if(value >= gl[i]['min'] && value <= gl[i]['max']) {
	  if(gl[i]['per'] == 1) {
	    var $price = Number.parseInt(gl[i]['price'])*Number.parseInt(value);
	  } else {
	    var $price = Number.parseInt(gl[i]['price']);
	  }
	}

	}

	$("#new_calc_summ").html($price+$dop_price);
}

function app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_lls = [], cle_calc_id = '#cle_calc') {

 var select_type = '';

  for (var i = lst_list.length - 1; i >= 0; i--) {

  	var option_select_type = '<option value="'+lst_list[i]+'">'+lst_list_name[i]+'</option>' + option_select_type;

  }

   if(dops_lls.length > 0) {

   	  dops_list = '<div class="row mb-12"><div class="col-sm-10"><h4 style="padding-top:10px;">Дополнительные услуги</h4></div></div>';

	  for (var i = dops_lls.length - 1; i >= 0; i--) {
	  	var dops_list = dops_list + '<div class="row mb-3"><label class="col-sm-8 col-form-label">'+opr_dops_calc[dops_lls[i]]['name']+' - <b>'+opr_dops_calc[dops_lls[i]]['price']+'р.</b></label><div class="col-sm-4"><div class="input-group has-validation"><input type="number" class="form-control form-control-sm"" id="new_calc_dops['+dops_lls[i]+']" name="new_calc_dops['+dops_lls[i]+']" onchange="calc_sum(['+dops_lls+']);" value="" placeholder="0"></div></div></div>';
	  }

	} else dops_list = '';

  if(dops_list != '') {
    var dops_list = '<div class="col-md-12"><a class="btn-link" data-bs-toggle="collapse" href="#collapseCalcDops" role="button" aria-expanded="false" aria-controls="collapseCalcDops"><i class="fa fa-plus" aria-hidden="true"></i> Дополнительные параметры</a><div class="collapse" id="collapseCalcDops"><div class="card card-body">'+dops_list+'</div></div></div>';
  }

  var select_type = '<div class="col-md-12"><label class="form-label"><b>Тип уборки</b></label><select id="new_calc_type" name="new_calc_type" class="form-group form-select" onchange="calc_sum(['+dops_lls+']);">'+option_select_type+'</select></div>';
  var input_value = '<div class="col-md-12"><label class="form-label"><b>Квадратура в м2</b></label><input id="new_calc_value" name="new_calc_value" type="number" class="form-control input_value" placeholder="Квадратура" value="'+lst_list_conf_value_min+'" onchange="calc_sum(['+dops_lls+']);"></div>';
  var line_sum = '<div class="col-md-12"><div class="new_calculator_sum">Предварительная стоимость: <span id="new_calc_summ">-</span>р</div></div>';
  var button = '<div class="col-md-6"><input type="text" class="form-control" placeholder="+7(901)222-11-00" name="asphone" id="asphone"></div><div class="col-md-6">    <a class="btn btn-primary btn-block" onclick="sendReForm(\'#new_form_calc\');">Заказать</a></div>';

  var cle_calc = '<div class="new_calculator_block" id="page_calculator_1"><h2 style="text-align:center;">Рассчитать стоимость</h2><form class="row g-3 new_calculator" id="new_form_calc">' + select_type + ' '+input_value+' '+ dops_list+' '+line_sum+' '+button+'</form><div class="new_calculator_info_text">Стоимость уборки может измениться, как в меньшую сторону, так и в большую, это зависит от сложности работ, объёмов и других нюансов, узнать точную стоимость можно у менеджера.</div></div>';

  $(cle_calc_id).html(cle_calc);

  $("#new_form_calc #asphone").mask("+7(999)999-99-99"); 
  calc_sum(dops_lls);


}



function cle_calculator_index() {

	var lst_list_conf_value = 10;
	var lst_list_conf_value_min = 50;
	var lst_list = ['6', '2', '3', '4', '7', '8'];
	var lst_list_name = ['Генеральная уборка квартиры', 'Уборка квартиры после ремонта',  'Генеральная уборка коттеджа', 'Убрка коттеджа после ремонта', 'Генеральная уборка помещение', 'Уборка помещения после ремонта'];
	var dops_list = [];
	app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_index');

}

function cle_calculator_uborka_jilyh() {

	var lst_list_conf_value = 10;
	var lst_list_conf_value_min = 50;
	var lst_list = ['6', '2', '3', '4', '7', '8'];
	var lst_list_name = ['Генеральная уборка квартиры', 'Уборка квартиры после ремонта',  'Генеральная уборка коттеджа', 'Убрка коттеджа после ремонта', 'Генеральная уборка помещение', 'Уборка помещения после ремонта'];
	var dops_list = ['41', '13', '36', '26', '6', '4', '23', '1', '34', '2', '3', '5', '11'];
	app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_jilyh');

}

function cle_calculator_uborka_kvartir() {

    var lst_list_conf_value = 10;
    var lst_list_conf_value_min = 40;
    var lst_list = ['6', '2'];
    var lst_list_name = ['Генеральная', 'После ремонта'];
    var lst_list_dops = ['41', '13', '36', '26', '6', '4', '23', '1', '34', '2', '3', '5', '11'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, lst_list_dops, '.cle_calculator_uborka_kvartir');

}

function cle_calculator_uborka_kvartir_generalnayna() {

    var lst_list_conf_value = 10;
    var lst_list_conf_value_min = 40;
    var lst_list = ['6'];
    var lst_list_name = ['Генеральная'];
    var lst_list_dops = ['41', '13', '36', '26', '6', '4', '23', '1', '34', '2', '3', '5', '11'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, lst_list_dops, '.cle_calculator_uborka_kvartir_generalnayna');

}

function cle_calculator_uborka_kvartir_remonta() {

    var lst_list_conf_value = 10;
    var lst_list_conf_value_min = 40;
    var lst_list = ['2'];
    var lst_list_name = ['После ремонта'];
    var lst_list_dops = ['41', '13', '36', '26', '6', '4', '23', '1', '34', '2', '3', '5', '11'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, lst_list_dops, '.cle_calculator_uborka_kvartir_remonta');

}

function cle_calculator_uborka_domov() {

    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['3', '4'];
    var lst_list_name = ['Генеральная', 'После ремонта'];
	var dops_list = ['41', '13', '36', '26', '6', '4', '23', '1', '34', '2', '3', '5', '11'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_domov');

}

function cle_calculator_uborka_domov_generalnayna() {

    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['3'];
    var lst_list_name = ['Генеральная'];
	var dops_list = ['41', '13', '36', '26', '6', '4', '23', '1', '34', '2', '3', '5', '11'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_domov_generalnayna');

}

function cle_calculator_uborka_domov_remont() {

    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['4'];
    var lst_list_name = ['После ремонта'];
	var dops_list = ['41', '13', '36', '26', '6', '4', '23', '1', '34', '2', '3', '5', '11'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_domov_remont');

}

function cle_calculator_uborka_ofisov() {
    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['7', '8', '9', '10', '11', '12', '13', '14', '15'];
    var lst_list_name = ['Генеральная', 'После ремонта', '1 раз в неделю', '2 раза в неделю', '3 раза в неделю', '4 раза в неделю', '5 раз в неделю', '6 раз в неделю', '7 раз в неделю'];
   	var dops_list = ['13', '36', '26', '23', '1', '34'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_ofisov');

}

function cle_calculator_uborka_ofisov_regularno() {
    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['9', '10', '11', '12', '13', '14', '15'];
    var lst_list_name = ['1 раз в неделю', '2 раза в неделю', '3 раза в неделю', '4 раза в неделю', '5 раз в неделю', '6 раз в неделю', '7 раз в неделю'];
   	var dops_list = [];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_ofisov_regularno');

}

function cle_calculator_uborka_ofisov_generalnayna() {
    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['7'];
    var lst_list_name = ['Генеральная'];
   	var dops_list = ['13', '36', '26', '23', '1', '34'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_ofisov_generalnayna');

}

function cle_calculator_uborka_ofisov_remont() {
    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['8'];
    var lst_list_name = ['После ремонта'];
   	var dops_list = ['13', '36', '26', '23', '1', '34'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_ofisov_remont');

}

function cle_calculator_uborka_ofisov_razovaya() {
    var lst_list_conf_value = 50;
    var lst_list_conf_value_min = 100;
    var lst_list = ['7', '8'];
    var lst_list_name = ['Генеральная', 'После ремонта'];
   	var dops_list = ['13', '36', '26', '23', '1', '34'];
    app_v2_clc_generate(lst_list, lst_list_name, lst_list_conf_value, lst_list_conf_value_min, dops_list, '.cle_calculator_uborka_ofisov_razovaya');

}






function cle_table_price_uborka_kvartir() {

    var tos = ['40', '50', '60', '70', '80', '90', '100', 'ot'];
    var nos = ['0-40м2 (Однокомнатная)', '40-50м2 (Однокомнатная)', '50-60м2 (двухкомнатная)', '60-70м2 (двухкомнатная)', '70-80м2 (двухкомнатная)', '90-100м2 (трехкомнатная)', '90-100м2 (трехкомнатная)', 'От 100м2'];
    var prodnut = ['6', '2'];
    var dropname = ['От', 'От'];
    var propname = ['р.', 'р.'];
    var proparms = ['price', 'price'];
    var prodname = ['Генеральная', 'После ремонта'];

    $(".cle_table_price_uborka_kvartir").html(getPs(tos, nos, prodnut, prodname, proparms, propname, dropname));

}

function cle_table_price_uborka_kvartir_generalnayna() {

    var tos = ['40', '50', '60', '70', '80', '90', '100', 'ot'];
    var nos = ['0-40м2 (Однокомнатная)', '40-50м2 (Однокомнатная)', '50-60м2 (двухкомнатная)', '60-70м2 (двухкомнатная)', '70-80м2 (двухкомнатная)', '90-100м2 (трехкомнатная)', '90-100м2 (трехкомнатная)', 'От 100м2'];
    var prodnut = ['6'];
    var dropname = ['От'];
    var propname = ['р.'];
    var proparms = ['price'];
    var prodname = ['Генеральная'];

    $(".cle_table_price_uborka_kvartir_generalnayna").html(getPs(tos, nos, prodnut, prodname, proparms, propname, dropname));

}

function cle_table_price_uborka_kvartir_remont() {

    var tos = ['40', '50', '60', '70', '80', '90', '100', 'ot'];
    var nos = ['0-40м2 (Однокомнатная)', '40-50м2 (Однокомнатная)', '50-60м2 (двухкомнатная)', '60-70м2 (двухкомнатная)', '70-80м2 (двухкомнатная)', '90-100м2 (трехкомнатная)', '90-100м2 (трехкомнатная)', 'От 100м2'];
    var prodnut = ['2'];
    var dropname = ['От'];
    var propname = ['р.'];
    var proparms = ['price'];
    var prodname = ['После ремонта'];

    $(".cle_table_price_uborka_kvartir_remont").html(getPs(tos, nos, prodnut, prodname, proparms, propname, dropname));

}

function cle_table_price_uborka_domov() {

    var atos = ['100', '150', '200', '250', '300', '350', '400', 'ot'];
    var anos = ['0-100м2', '100-150м2', '150-200м2', '200-250м2', '250-300м2', '300-350м2', '350-400м2', 'От 400м2'];
    var aprodnut = ['3', '4'];
    var adropname = ['От', 'От'];
    var apropname = ['р.', 'р.'];
    var aproparms = ['price', 'price'];
    var aprodname = ['Генеральная', 'После ремонта'];

    $(".cle_table_price_uborka_domov").html(getPs(atos, anos, aprodnut, aprodname, aproparms, apropname, adropname));

}

function cle_table_price_uborka_domov_generalnayna() {

    var atos = ['100', '150', '200', '250', '300', '350', '400', 'ot'];
    var anos = ['0-100м2', '100-150м2', '150-200м2', '200-250м2', '250-300м2', '300-350м2', '350-400м2', 'От 400м2'];
    var aprodnut = ['3'];
    var adropname = ['От'];
    var apropname = ['р.'];
    var aproparms = ['price'];
    var aprodname = ['Генеральная'];

    $(".cle_table_price_uborka_domov_generalnayna").html(getPs(atos, anos, aprodnut, aprodname, aproparms, apropname, adropname));

}

function cle_table_price_uborka_domov_remont() {

    var atos = ['100', '150', '200', '250', '300', '350', '400', 'ot'];
    var anos = ['0-100м2', '100-150м2', '150-200м2', '200-250м2', '250-300м2', '300-350м2', '350-400м2', 'От 400м2'];
    var aprodnut = ['4'];
    var adropname = ['От'];
    var apropname = ['р.'];
    var aproparms = ['price'];
    var aprodname = ['После ремонта'];

    $(".cle_table_price_uborka_domov_remont").html(getPs(atos, anos, aprodnut, aprodname, aproparms, apropname, adropname));

}
function cle_table_price_uborka_ofisov() {

    var dtos = ['100', '150', '200', '250', '300', '350', '400', 'ot'];
    var dnos = ['0-100м2', '100-150м2', '150-200м2', '200-250м2', '250-300м2', '300-350м2', '350-400м2', 'От 400м2'];
    var dprodnut = ['7', '8'];
    var dropname = ['От', 'От'];
    var dpropname = ['р.', 'р.'];
    var dproparms = ['price', 'price'];
    var dprodname = ['Генеральная', 'После ремонта'];

    $(".cle_table_price_uborka_ofisov").html(getPs(dtos, dnos, dprodnut, dprodname, dproparms, dpropname, dropname));

}
	
function cle_table_price_uborka_ofisov_regularno() {

    var stos = ['100', '200', '300', '400', '500', 'ot'];
    var snos = ['0-100м2', '100-200м2', '200-300м2', '300-400м2', '400-500м2', 'От 400м2'];
    var sprodnut = ['9', '10', '11', '12', '13', '14', '15'];
    var sdropname = ['От', 'От', 'От', 'От', 'От', 'От', 'От'];
    var spropname = ['р.', 'р.', 'р.', 'р.', 'р.', 'р.', 'p.'];
    var sproparms = ['price', 'price', 'price', 'price', 'price', 'price', 'price'];
    var sprodname = ['Уборка 1/6', 'Уборка 2/5', 'Уборка 3/4', 'Уборка 4/3', 'Уборка 5/2', 'Уборка 6/1', 'Уборка 7/0'];

    $(".cle_table_price_uborka_ofisov_regularno").html(getPs(stos, snos, sprodnut, sprodname, sproparms, spropname, sdropname));

}

function cle_table_price_uborka_ofisov_generalnayna() {

    var dtos = ['100', '150', '200', '250', '300', '350', '400', 'ot'];
    var dnos = ['0-100м2', '100-150м2', '150-200м2', '200-250м2', '250-300м2', '300-350м2', '350-400м2', 'От 400м2'];
    var dprodnut = ['7'];
    var dropname = ['От'];
    var dpropname = ['р.'];
    var dproparms = ['price'];
    var dprodname = ['Генеральная'];

    $(".cle_table_price_uborka_ofisov_generalnayna").html(getPs(dtos, dnos, dprodnut, dprodname, dproparms, dpropname, dropname));

}

function cle_table_price_uborka_ofisov_remont() {

    var dtos = ['100', '150', '200', '250', '300', '350', '400', 'ot'];
    var dnos = ['0-100м2', '100-150м2', '150-200м2', '200-250м2', '250-300м2', '300-350м2', '350-400м2', 'От 400м2'];
    var dprodnut = ['8'];
    var dropname = ['От'];
    var dpropname = ['р.'];
    var dproparms = ['price'];
    var dprodname = ['После ремонта'];

    $(".cle_table_price_uborka_ofisov_remont").html(getPs(dtos, dnos, dprodnut, dprodname, dproparms, dpropname, dropname));

}

function cle_table_price_him() {
			   
	cats = ['1', '2', '3', '4', '5', '6'];

	$(".cle_table_price_him").html(getPsDOP('him', cats));
}


function cle_table_price_uborka_dops() {

	cats = ['1', '2', '3', '4', '5', '6'];

    $(".cle_table_price_uborka_dops").html(getPsDOP('dops', cats));


}


$(function() {

    $(".v2-header-form #asphone").mask("+7(999)999-99-99");

	if ($('.cle_calculator_index').length > 0) {

		cle_calculator_index();

	}

	if ($('.cle_calculator_uborka_jilyh').length > 0) {

		cle_calculator_uborka_jilyh();

	}

	if ($('.cle_calculator_uborka_kvartir').length > 0) {

		cle_calculator_uborka_kvartir();

	}

	if ($('.cle_calculator_uborka_kvartir_generalnayna').length > 0) {

		cle_calculator_uborka_kvartir_generalnayna();

	}

	if ($('.cle_calculator_uborka_kvartir_remonta').length > 0) {

		cle_calculator_uborka_kvartir_remonta();

	}


	if ($('.cle_calculator_uborka_domov').length > 0) {

		cle_calculator_uborka_domov();

	}

	if ($('.cle_calculator_uborka_domov_generalnayna').length > 0) {

		cle_calculator_uborka_domov_generalnayna();

	}

	if ($('.cle_calculator_uborka_domov_remont').length > 0) {

		cle_calculator_uborka_domov_remont();

	}

	if ($('.cle_calculator_uborka_ofisov').length > 0) {

		cle_calculator_uborka_ofisov();

	}

	if ($('.cle_calculator_uborka_ofisov_regularno').length > 0) {

		cle_calculator_uborka_ofisov_regularno();

	}

	if ($('.cle_calculator_uborka_ofisov_generalnayna').length > 0) {

		cle_calculator_uborka_ofisov_generalnayna();

	}

	if ($('.cle_calculator_uborka_ofisov_razovaya').length > 0) {

		cle_calculator_uborka_ofisov_razovaya();

	}

	if ($('.cle_calculator_uborka_ofisov_remont').length > 0) {

		cle_calculator_uborka_ofisov_remont();

	}




	if ($('.cle_table_price_uborka_kvartir').length > 0) {

		cle_table_price_uborka_kvartir();

	}

	if ($('.cle_table_price_uborka_kvartir_generalnayna').length > 0) {

		cle_table_price_uborka_kvartir_generalnayna();

	}

	if ($('.cle_table_price_uborka_kvartir_remont').length > 0) {

		cle_table_price_uborka_kvartir_remont();

	}

	if ($('.cle_table_price_uborka_domov').length > 0) {

		cle_table_price_uborka_domov();

	}

	if ($('.cle_table_price_uborka_domov_generalnayna').length > 0) {

		cle_table_price_uborka_domov_generalnayna();

	}

	if ($('.cle_table_price_uborka_domov_remont').length > 0) {

		cle_table_price_uborka_domov_remont();

	}

	if ($('.cle_table_price_uborka_ofisov').length > 0) {

		cle_table_price_uborka_ofisov();

	}

	if ($('.cle_table_price_uborka_ofisov_regularno').length > 0) {

		cle_table_price_uborka_ofisov_regularno();

	}

	if ($('.cle_table_price_uborka_ofisov_generalnayna').length > 0) {

		cle_table_price_uborka_ofisov_generalnayna();

	}

	if ($('.cle_table_price_uborka_ofisov_remont').length > 0) {

		cle_table_price_uborka_ofisov_remont();

	}


	if ($('.cle_table_price_him').length > 0) {

		cle_table_price_him();

	}

	if ($('.cle_table_price_uborka_dops').length > 0) {

		cle_table_price_uborka_dops();

	}

});





  


