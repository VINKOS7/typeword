function appStart(word, i) {
    let buf = "";

    for (let j = 0;j < i; j++){
        buf += word[j];
    }

    return buf;
}

function appEnd(word, i) {
    let buf = "";

    for (;i < word.length; i++){
        buf += word[i];

    }

    return buf;
}

// true - местоимение
function PronounLibrary(word) {
    switch (word)
    {
        case "я":
        case "ты":
        case "он":
        case "она":
        case "оно":
        case "они":
        case "ваш":
        case "наш":
        case "себя":
        case "мой":
        case "свой":
        case "кто":
        case "что":
        case "чей":
        case "каков":
        case "никто":
        case "этот":
        case "таков":
            return true;

        default: return false;
    }
}

// true - частица
function ParticleLibrary(word) {
    switch (word)
    {
        case "не":
		case "но":
        case "ни":
        case "вот":
        case "вон":
        case "это":
        case "лишь":
        case "почти":
        case "единственно":
        case "то":
        case "даже":
        case "же":
        case "ведь":
        case "таки":
        case "ну":
        case "ли":
		case "ещё":
            return true;

        default: return false;
    }
}

// true - прилагательное
function AdjectiveLibrary(word) {
    switch (word)
    {
        case "ный":
        case "ний":
        case "шный":
        case "шний":
        case "ная":
        case "няя":
        case "шная":
        case "ные":
        case "ние":
        case "шные":
        case "шние":
		case "но":
            return true;

        default: return false;
    }
}

// true - деепричастие
function GerundsLibrary(word) {
    switch (word) {
        case "ая":
        case "аясь":
        case "вши":
        case "ши":
        case "ыв":
        case "вшись":
        case "шиь":
        case "шись":
            return true;
        default: return false;
    }
}

// true - глагол
function VerbLibrary(word) {
    switch (word)
    {
		case "ать":
        case "ешь":
        case "ить":
        case "ет":
        case "ем":
        case "ете":
        case "ут":
        case "ют":
        case "ишь":
        case "ит":
        case "им":
        case "ите":
        case "ат":
        case "ят":
		case "ться":
		case "еть":
            return true;
        default: return false;
    }
}
// true - причастие
function ParticipleLibrary(word) {
    switch (word)
    {
		case "ущий":
        case "ющий":
        case "ащий":
        case "ящий":
        case "емый":
        case "омый":
        case "емый":
        case "имый":
            return true;
        default: return false;
    }
}

// true - наречие
function AdverbLibrary_MOD(bufWORD, word) {        
		if(word == "о"){		
		for(let i = 1; i < 2; i++)
		{
				switch(appStart(bufWORD, i)){
					case "в":
					case "на":
					case "за":
						return true;
				}
			}	
			return false;
		}		
		else if(word == "у"){
			for(let i = 1; i < 2; i++)
			{
				switch(appStart(bufWORD, i)){
					case "с":
					case "со":
					case "за":
						return true;
				}
			}	
			return false;			
		}		
		else if(word == "е")
		{
			for(let i = 1; i < 2; i++)
			{
				switch(appStart(bufWORD, i))
				{
					case "в":
					case "на":
						return true;
				}
			}	
            return false;			
		}			
		else if(word == "а")
		{
			for(let i = 1; i < 2; i++)
			{
				switch(appStart(bufWORD, i))
				{
					case "из":
					case "ис":
					case "до":
						return true;
				}
			}	
            return false;				
		}
		else return false;
				
}

function AdverbLibrary(bufWORD, word) {
    switch (word)
    {
		case "че":
		case "ошо":
        case "ячо":
        case "ежо":
        case "ьче":
        case "още":
        case "ошь":
		case "нно":
		case "ьно":
            return true;
        default: return AdverbLibrary_MOD(bufWORD, word);
	}	
}

function Аn_exceptionLibrary(word) {
	let buf_word = "";
// список сущ нач		
	if(word == "рать") buf_word = "существительное";
	else if(word == "вошь") buf_word = "существительное";
	else if(word == "брошь") buf_word = "существительное";
	else if(word == "бриошь") buf_word = "существительное";
	else if(word == "ветошь") buf_word = "существительное";
	else if(word == "роскошь") buf_word = "существительное";
	else if(word == "пустошь") buf_word = "существительное";
	else if(word == "отче") buf_word = "существительное";
	else if(word == "паче") buf_word = "существительное";
	else if(word == "фольксдойче") buf_word = "существительное";
// список наречии нач сущ кон
	else if(word == "точь-в-точь") buf_word = "наречие";
    else if(word == "вскачь") buf_word = "наречие";
	else if(word == "слева") buf_word = "наречие";
	else if(word == "слегка") buf_word = "наречие";
	else if(word == "сообща") buf_word = "наречие";
	else if(word == "снова") buf_word = "наречие";
	else if(word == "сполна") buf_word = "наречие";
	else if(word == "справа") buf_word = "наречие";
	else if(word == "туда-сюда") buf_word = "наречие";
	else if(word == "завтра") buf_word = "наречие";
// список наречии кон прил нач
	else if(word == "достаточно") buf_word = "прилагательное";
	else if(word == "изысканно") buf_word = "прилагательное";
	else if(word == "изнеможенно") buf_word = "прилагательное";
	else if(word == "сносно") buf_word = "прилагательное";
	else if(word == "снисходительно") buf_word = "прилагательное";
// список прил кон	
	return buf_word;
}

// определение части речи
function Library(bufWORD, word, i) {
    let type = "сущ";
	
	if( i === 0)
	{
	    if(bufWORD.length == word.length)// проверка цельное ли слово, без нее драть будет существительное, как и слово рать let Аn_exceptionBUF = Аn_exceptionLibrary(word);		
		{
		let Аn_exceptionBUF = Аn_exceptionLibrary(word);
			
		if(Аn_exceptionBUF == "");
		else type = Аn_exceptionBUF;
		}
	}  	
	else if (i === 1)
	{
	    if (AdverbLibrary(bufWORD,word) === true) type = "наречие";		
	}
	else if (i === 2)
	{
		if(bufWORD.length == word.length)
			if (PronounLibrary(word) === true) type = "местоимение";// проверка цельное ли слово
 
	}
	else if (i === 3)
	{
		if(bufWORD.length == word.length)
			if (ParticleLibrary(word) === true) type = "частица";// проверка цельное ли слово			      
	}
	else if (i === 4)
	{
		if (GerundsLibrary(word) === true) type = "деепричастие";
	}
	else if (i === 5)
	{
		if (VerbLibrary(word) === true) type = "глагол";
	}
	else if (i === 6)
	{
        if (AdjectiveLibrary(word) === true) type = "прилагательное";
	}
	else if (i === 7)
	{
        if (ParticipleLibrary(word) === true) type = "причастие";
	}

 
	
    return type;
}

function check_letters(letter, BIGorLETTLE){
	let RUS_alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюяAБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
	
	if(BIGorLETTLE == "большая"){
		for(let i = 33; i < 66; i++) 
			if(letter == RUS_alphabet[i]) letter = RUS_alphabet[i - 33];
	}
    else{ 
		for(let i = 0; i < 33; i++) 
			if(letter == RUS_alphabet[i]) letter = RUS_alphabet[i + 33];
	}
	
	return letter;	
}

function TypeWord(bufWORD, q) {

    let typeWord = "существительное";
	let w = "";

    if (bufWORD.length < q)
        q = bufWORD.length;
	
    for (let j = 0; j < 8; j++) {
        for (let i = 1; i <= q; i++) {

            //  тут слово обрезанное тип красив"ая" и тд
            w = appEnd(bufWORD, bufWORD.length - i);
            // тут тип сам процесс
            typeWord = Library(bufWORD, w, j);
			
			w = "";

            if (typeWord !== "сущ") break;
        }
        if (typeWord !== "сущ") break;
    }

    if(typeWord == "сущ")typeWord = "существительное";
	
	return typeWord;
}

$("#btn-run-logic").click(() => {
    // исходное слово
	
    let txt = $("#text-input").val();

    // часть речи по мнению юзера
    let partSpesh = $("#part-input").val();

    // часть речи по мнению логики
	txt = txt.toLowerCase(); // переводит слова в мелкие буквы иначе код робит не корктно. Да, хуита, поэтому здесь этот комент)
	
    let type = TypeWord(txt, 11);

    // не совпадают значит ошибка
    if(partSpesh !== type)
    {
        // кликаем по кнопке не видимой
        // для перенаправления на экран ввода части речи
        // и выходим из функции чтобы не очистить поля
        $("#btn-fail").click();
        return;
    }

    // если угаданно значит очищаем поля и кликаем по кнопке не видимой
    // для перенаправления на нач экран
    $("#text-input").val("");
    $("#part-input").val("");
    $("#btn-success").click();
});

$("a").click(()=>{$("a").removeClass("active")});