$(function(){

	//Определение переменных
	var calculator = $('#calculator'),
	mini = $('#mini'),
	display = $(calculator).find('#display input'),
	current = 0,
    num,
	op = '',
	value,
	arrNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	//Числа с мыши
	$(calculator).find('.number').on('click', function(){
		value = $(this).val();
		if(num){
			display.val(value)
			num = '';
		}
		else{
			if(display.val() ===  '0'){
				display.val(value);
			}
			else{
				display.val(display.val() + value)
			}
		}
	});


	//Числа с клавиатуры
	$(document).keypress(function(e){
		if(num){
			if(e.keyCode == '48'){
				display.val(arrNum[9]);
				mini.val(mini.val() + arrNum[9]);
			}
			else if(e.keyCode == '49'){
				display.val(arrNum[0]);
				mini.val(mini.val() + arrNum[0]);
			}
			else if(e.keyCode == '50'){
				display.val(arrNum[1]);
				mini.val(mini.val() + arrNum[1]);
			}
			else if(e.keyCode == '51'){
				display.val(arrNum[2]);
				mini.val(mini.val() + arrNum[2]);
			}
			else if(e.keyCode == '52'){
				display.val(arrNum[3]);
				mini.val(mini.val() + arrNum[3]);
			}
			else if(e.keyCode == '53'){
				display.val(arrNum[4]);
				mini.val(mini.val() + arrNum[4]);
			}
			else if(e.keyCode == '54'){
				display.val(arrNum[5]);
				mini.val(mini.val() + arrNum[5]);
			}
			else if(e.keyCode == '55'){
				display.val(arrNum[6]);
				mini.val(mini.val() + arrNum[6]);
			}
			else if(e.keyCode == '56'){
				display.val(arrNum[7]);
				mini.val(mini.val() + arrNum[7]);
			}
			else if(e.keyCode == '57'){
				display.val(arrNum[8]);
				mini.val(mini.val() + arrNum[8]);
			}
			num = '';
		}
		else{
			if(display.val() ===  '0' && mini.val() === ''){
				if(e.keyCode == '48'){
					display.val(arrNum[9]);
					mini.val(arrNum[9]);
				}
				else if(e.keyCode == '49'){
					display.val(arrNum[0]);
					mini.val(arrNum[0]);
				}
				else if(e.keyCode == '50'){
					display.val(arrNum[1]);
					mini.val(arrNum[1]);
				}
				else if(e.keyCode == '51'){
					display.val(arrNum[2]);
					mini.val(arrNum[2]);
				}
				else if(e.keyCode == '52'){
					display.val(arrNum[3]);
					mini.val(arrNum[3]);
				}
				else if(e.keyCode == '53'){
					display.val(arrNum[4]);
					mini.val(arrNum[4]);
				}
				else if(e.keyCode == '54'){
					display.val(arrNum[5]);
					mini.val(arrNum[5]);
				}
				else if(e.keyCode == '55'){
					display.val(arrNum[6]);
					mini.val(arrNum[6]);
				}
				else if(e.keyCode == '56'){
					display.val(arrNum[7]);
					mini.val(arrNum[7]);
				}
				else if(e.keyCode == '57'){
					display.val(arrNum[8]);
					mini.val(arrNum[8]);
				}
			}
			else{
				if(e.keyCode == '48'){
					display.val(display.val() + arrNum[9]);
					mini.val(mini.val() + arrNum[9]);
				}
				else if(e.keyCode == '49'){
					display.val(display.val() + arrNum[0]);
					mini.val(mini.val() + arrNum[0]);
				}
				else if(e.keyCode == '50'){
					display.val(display.val() + arrNum[1]);
					mini.val(mini.val() + arrNum[1]);
				}
				else if(e.keyCode == '51'){
					display.val(display.val() + arrNum[2])
					mini.val(mini.val() + arrNum[2]);
				}
				else if(e.keyCode == '52'){
					display.val(display.val() + arrNum[3])
					mini.val(mini.val() + arrNum[3]);
				}
				else if(e.keyCode == '53'){
					display.val(display.val() + arrNum[4])
					mini.val(mini.val() + arrNum[4]);
				}
				else if(e.keyCode == '54'){
					display.val(display.val() + arrNum[5])
					mini.val(mini.val() + arrNum[5]);
				}
				else if(e.keyCode == '55'){
					display.val(display.val() + arrNum[6])
					mini.val(mini.val() + arrNum[6]);
				}
				else if(e.keyCode == '56'){
					display.val(display.val() + arrNum[7])
					mini.val(mini.val() + arrNum[7]);
				}
				else if(e.keyCode == '57'){					
					display.val(display.val() + arrNum[8])
					mini.val(mini.val() + arrNum[8]);
				}
			}
		}
	});

	//Операции с мыши
	$(calculator).find('.operation input[type="button"]').on('click', function(){
		if($(this).val() === '%'){ procent(); return}
		else if($(this).val() === '+/-'){ plus(); return}
		else if($(this).val() === '√'){ sq(); return}
		else if($(this).val() === '.'){ decimal(); return}
		else if($(this).val() === 'x2'){ squared(); return}
		else if($(this).val() === 'x3'){ cubed(); return}
		else if($(this).val() === 'del'){ delLast(); return}
		else if($(this).val() === 'C') clear();

		if (num && op != '=')
		{
			display.val(current);
		}
		else
		{
			num = true;
			if ('+' === op){
				current += parseFloat(display.val());
				display.val(current)
			}
			else if ('-' === op){
				current -= parseFloat(display.val());
				display.val(current)
			}
			else if ('*' === op){
				current *= parseFloat(display.val());
				display.val(current)
			}
			else if ('/' === op){
				current /= parseFloat(display.val());
				display.val(current)
			}
			else
				current = parseFloat(display.val());
				display.val(current);
				op = $(this).val();
			
		}
		
	});


	//Мини-дисплей
	$(calculator).find('input[type="button"]').on('click', function(){
		if($(this).val() === '=');
		else if($(this).val() === 'C') clearmini();
		else if(
				$(this).val() === 'x2'|| 
				$(this).val() === 'x3'|| 
				$(this).val() === '√' ||
				$(this).val() === '%') mini.val('');
		else if($(this).val() === 'del'){
			mini.val(mini.val() + '');
		}
		else if($(this).val() === '+/-') minZ();
		else{
			mini.val(mini.val() + $(this).val());
		}

	});


	//Функции для разных операций
	function procent(){
		display.val((parseFloat(display.val() / 100)) * parseFloat(current));
	}
	function plus(){
		display.val(parseFloat(display.val() * -1));
	};
	function squared(){
		display.val(parseFloat(display.val() * display.val()));
	}
	function cubed(){
		display.val(parseFloat(display.val() * display.val() * display.val()));
	}
	function sq(){
		display.val(parseFloat(display.val()));
		display.val(Math.sqrt(display.val()));
	}
	function decimal(){
		var read = display.val();
		if(num){
			read = '0.'
			num = false;
		}
		else{
			if(read.indexOf('.') === -1) read += '.';
		}
		display.val(read);
	}
	function minZ(){
		mini.val(parseFloat(mini.val() * -1));
	}

	//Функции сброса для двух дисплеев
	function clear(){
		current = 0;
		op = '';
		display.val('0');
	}
	function clearmini(){
		mini.val('');
	}
 	
 	//Удаление последнего для двух дисплеев
	function delLast(){
		if(display.val() === '0') return;
		var str = display.val();
		str = str.substring(0, str.length - 1);
		display.val(str);

		var str2 = mini.val();
		str2 = str2.substring(0, str2.length - 1);
		mini.val(str2);

		if(display.val() === '') display.val('0')
	}

});
