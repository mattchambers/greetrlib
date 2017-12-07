
//semi-colon for precaution in case of errors caused by other libraries that didn't finish w/semis properly 
;(function(global,$){
	//wrap in IIFE for own scope
	
	var Greetr = function(fname, lname, lang){
		//instantiate Greetr

		return new Greetr.init(fname, lname, lang);
	}

	var supportedLangs = ['en','es'];

	var greetings = {
		en: 'Hello',
		es: 'Hola'
	};

	var formalGreetings = {
		en: 'Greetings',
		es: 'Saludos'
	};

	var logMsgs = {
		en: 'Logged In',
		es: 'Inicio Sesion'
	}

	Greetr.prototype = {

		fullName: function(){
			return this.fname + ' ' + this.lname;
		},

		validate: function(){
			if (supportedLangs.indexOf(this.lang) === -1) {
				throw "Invalid language";
			}
		},

		greeting: function(){
			return greetings[this.lang] + ' ' + this.fname + '!';
		},

		formalGreeting: function(){
			return formalGreetings[this.lang]+' '+this.fullName();
		},

		greet: function(formal){
			var msg; 

			if (formal){
				msg = this.formalGreeting();
			}else{
				msg = this.greeting();
			}

			console.log(msg);
			//make method chainable
			return this;
		},

		log: function(){
			if(console){
				//check if console for IE browsers
				console.log(logMsgs[this.lang] + ': ' + this.fullName());
			}

			//make chainable
			return this;

		},

		setLang: function(lang){
			//update lang property on obj
			this.lang = lang;
			//check if lang supported
			this.validate();

			//make chainable
			return this;
		},

		HTMLGreeting: function(selector, formal){
			//ensure jQuery is included
			if(!$){
				throw 'jQuery not loaded';
			}

			//ensure jQuery selector is given
			if (!selector) {
				throw 'Missing jQuery selector';
			}

			var msg;
			if (formal) {
				msg = this.formalGreeting();
			}else{
				msg = this.greeting();

			}
			//this is where jQuery is being used inside the library
			//the selector param should be passed for this method
			$(selector).html(msg);

			//make chainable
			return this;

		}

	};

	Greetr.init = function(fname, lname, lang){

		var self = this;
		
		self.fname = fname || '';
		self.lname = lname || '';
		self.lang = lang || 'en';

	}

	//link init proto to Greetr proto
	Greetr.init.prototype = Greetr.prototype;
	

	//make aliases
	global.Greetr = Greetr;
	global.G$ = Greetr;


}(window, jQuery));
