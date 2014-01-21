---
layout: post
title:  "Unobtrusively retrieving static server side data"
date:   2014-09-01 09:00:01
categories: js
---

Sometimes client-side code requires values from the server-side e.g. you might want to share the validation messages for server-side and client-side form validation.

## Using an inline script

Typically an inline script is used:

	<script>
		<!-- using PHP as an example -->
		var validationMessages = {
			message1: '<?=$foo?>',
			message2: '<?=$bar?>'
		};
	</script>

A trade-off here would be that the page weight is larger for all pages that require validation messages. Additionally, this is obtrusive script and can be a maintenance issue.

## Using inline attributes

Sprinkling additional data within HTML is another popular method to expose server-side values"

	<input type="text" data-validation-message="<?=$foo?>">

Trade-offs include the same as the inline script above but additionally the element has to be retrieved using various DOM APIs which are slower.

## Using an external script

Simply point to a server-side script that populates the values and returns a valid script file:

	<script src="validationMessages.php"></script>

Where validationMessages.php might look something like:

	var validationMessages = {
		message1: '<?=$foo?>',
		message2: '<?=$bar?>'
	};

This means the page weight is small and the external script can be cached.

## Summary

Unobtrusively retrieving static server side data is a little more effort than alternative simpler approaches but this has it's advantages. This technique will certainly provide a more maintainable and potentially more performant application.