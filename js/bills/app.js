// Bill model
var Bill = Backbone.Model.extend({
	defaults: {
		title: '',
		amount: 0.00,
		paid: false
	},
	
	toggle: function() {
		this.save({
			paid: !this.get('paid')
		});
	}
});

// Bill collection
var BillList = Backbone.Collection.extend({
	model: Bill
	
});

Bills = new BillList();

var AppView = Backbone.View.extend({
	el: '#billsApp'
});