define(['react'], function(React) {

	return React.createClass({

		getInitialState: function() {
			return { content: null }
		},

		render: function() {
			return React.DOM.div({className: 'list-item-view'}, this.props.content);
		}
	});

});