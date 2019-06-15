//Binding for search-box to enable search button
$('.searchbox-pubkey').keyup(function(){
	let $this = $(this);
	keyUpChecker($this,$('.search-pubkey'));
}).change(function(){
	let $this = $(this);
	keyUpChecker($this,$('.search-pubkey'));
})

//Binding for Copy searched key
$('.searched-key-copy').bind('click',function(){
	Clipboard.copy(session.searchedKey);
	showCopied($('.search-results').find('.copied'));
})

//Search for key button
$('.search-pubkey').bind('click',function(){
	let $this = $(this);
	if(!$this.is(':disabled')){
		lookupKey($('.searchbox-pubkey').val(),$('.search-key-server-list').val());
	}
})