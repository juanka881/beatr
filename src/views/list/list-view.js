define(
[
	'react', 
	'helpers/event',
	'views/list/list-item-view'
], 
function(React, Event, ListItemView) {

	return React.createClass({

		displayName: 'ListView',

		loaded: new Event(),

		defItemTemplate: function(item) {
			return item;
		},

		getInitialState: function() {
			return {
				items: [],
				itemTemplate: this.defItemTemplate
			};
		},

		componentDidMount: function() {
			this.loaded.notify(this);
		},

		render: function() {
			var itemTemplate = this.props.itemTemplate || this.defItemTemplate;
			var items = this.props.items || [];
			var itemViews = items.map(function(item) {
				var content = itemTemplate(item);
				return new ListItemView({content: content});				
			});
			return React.DOM.div({className: 'list-view'}, itemViews);
		}
	});

});