define(
[
	'react', 
	'views/list/list-view',
	'person',
	'app-view'
], 
function(React, ListView, Person, AppView){

	return function() {
		this.run = function() {

			var data = [];

			var names = ['juanka', 'jadesama', 'papamon'];
			var imgsrcs = ['img1.jpg', 'img2.jpg', 'img3.jpg'];

			for(var i = 0; i < 1000; i++) {
				var name = names[i % 3];
				var imgsrc = imgsrcs[i % 3];
				data.push(new Person(i, name, imgsrc));
			}

			var itemTemplate = function(item) {
				return React.DOM.span({key: item.key, className: 'personModel'}, 
					React.DOM.img({src: item.imgsrc}, null),
					React.DOM.span(null, item.name));
			}

			var listView = ListView({items: data, itemTemplate: itemTemplate});

			var handler = function(s) {
				console.log('listView was loaded, sender: ' + s);
			};

			listView.loaded.attach(handler);			

			var onButtonClicked = function(e) {
				data.removeAt(1, 1);
				listView.setProps({items: data});
			}

			var appView = new AppView({ 
				content: listView, 
				onButtonClicked: onButtonClicked
			});

			var mainDiv = document.getElementById('main');
			React.renderComponent(appView, mainDiv);

			listView.loaded.detachAll();

			window.appView = appView;	
		}
	}
});