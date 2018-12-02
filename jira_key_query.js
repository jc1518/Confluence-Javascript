<form class="aui">
	<script>
      AJS.toInit(function() {
		  AJS.$("#check-key").click(function() {
	          var JIRA_HOST = 'YOUR JIRA HOST'; // https://jira.mydomain.com
			  var validate = /^[A-Z]+$/;
			  var projectkey = AJS.$("#project-key").val();
			  if (projectkey.match(validate)) {
				  AJS.$.ajax({
					  url: JIRA_HOST + '/rest/api/2/project/' + projectkey,
					  type: "GET",
    				  xhrFields: {
                          withCredentials: true
                      },
					  success: function(msg){
						  alert('No, ' + projectkey + ' has already been used :(');
					  },
					  error: function(xhr, err) {
						  alert('Yes! ' + projectkey + ' is available :)' + xhr.status);
					  }
				  });
			  }
			  else {
				  alert('Invalid Project Key! It can only contain upper case letters (A-Z)');
				  AJS.$("#project-key").focus();
			  }
			  return false;
		  });
	  });
	</script>
	<div class="field-group">
        <label for="project-key">Check Project Key</label>
        <input id="project-key" class="text" type="text">
		<button class="aui-button aui-button-primary" id="check-key">Go!</button>
    </div>
</form>
