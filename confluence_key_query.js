<form class="aui">
	<script>
      AJS.toInit(function() {
		  AJS.$("#check-key").click(function() {
			  var validate = /^[0-9a-zA-Z]+$/;
			  var spacekey = AJS.$("#space-key").val();
			  if (spacekey.match(validate)) {
				  AJS.$.ajax({
					  url: "/rest/api/space/" + spacekey,
					  type: "GET",
					  dataType: "json",
					  success: function(msg){
						  alert('No, ' + spacekey + ' has already been used :(');
					  },
					  error: function(err) {
						  alert('Yes! ' + spacekey + ' is available :)');
					  }
				  });
			  }
			  else {
				  alert('Invalid Space Key! It can only contain alphanumeric character (a-z, A-Z, 0-9)');
				  AJS.$("#space-key").focus();
			  }
			  return false;
		  });
	  });
	</script>
	<div class="field-group">
        <label for="space-key">Check Space Key</label>
        <input id="space-key" class="text" type="text">
		<button class="aui-button aui-button-primary" id="check-key">Go!</button>
    </div>
</form>
