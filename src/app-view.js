define(['react'], function(React) {

	return React.createClass({

		render: function() {
			return React.DOM.div(null, 
				React.DOM.button({onClick: this.handleClicked}, 'go!'),
				this.props.content);
		},

		handleClicked: function(e) {
			this.props.onButtonClicked(e);
		}
	});
});