podcastApp.factory('getUniqueShow', [function(){

	return {
		getItem: function(data, id) {
			if(!data)
				return;

			for (var i = 0; i < data.length - 1; i++) {

				if(id == 'latest'){
					return data[0];
				}

				if(id == data[i].id){
					return data[i];
				}
			}
		}
	};
}]);