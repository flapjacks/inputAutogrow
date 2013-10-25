<!DOCTYPE html>
<html>
	<head>
		<title>test page</title>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
		<script type="text/javascript" src="inputAutogrow.js"></script>
		<script type="text/javascript">
		$(document).ready(function() {
			$('#one').inpAutoGrow()
			$('#two').inpAutoGrow()
		})
		</script>
		<style type="text/css">
			#one {
				font-size: 15px;
				padding: 3px 5px;
			}
			#two {
				font-size: 20px;
				padding: 15px;
				text-indent: 3px;
				letter-spacing: 3px;
			}
		</style>
	</head>
	
	<body>
		<div id="wrapper">
			<input type="text" id="one" />
			<input type="text" id="two" placeholder="well just look how long this default is!" />
		</div>

	</body>
</html>

