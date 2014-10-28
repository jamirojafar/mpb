/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
	
		doReady();
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};
var currentSection = 0;
var cntPoems = 0;

function doReady() {
		
		//window.plugins.toast.showLongBottom('Welkom in mijn gedichtenbundel');
		/* toast('swipe links voor andere gedichten','long');*/
		$('section:gt(0)').hide();
		cntPoems = $('section').size();
		var w = $(document).width();
		var h = $(document).height();
	    //$('footer').prepend(w + ' x ' + h  + ' ');
		//window.plugins.toast.showLongBottom(w + ' x ' + h  + ' ');			

		$( window ).on( "orientationchange", function( event ) {
			//$( "footer" ).html( event.orientation );
			w = $(document).width();
			h = $(document).height();
			ha = $('document').height();
			//window.plugins.toast.showLongBottom(w + ' x ' + h  + ' ');			
		});
		
		 $( "article" ).on( "swipe", swipeHandler );		 
		 $( "#to-next" ).on("click", swipeHandler);
		 $( "#to-prev" ).on("click", swipeHandler2);
		 $( "#to-menu" ).on("click", function() { window.plugins.toast.showLongCenter('Gedichtenbundel\n=============\nAbu Saebu\njamirojafar@yahoo.co.id\n\ncopyright 2014');
												});		 
		  function swipeHandler( event ){
					$('section:eq('+ currentSection +')').fadeOut('slow',
					function() {
							currentSection++;
							if (currentSection >= cntPoems) {
								currentSection = 0;
							}
							window.plugins.toast.showLongBottom((currentSection*1 + 1) + '/' + cntPoems);
							$('section:eq('+ currentSection +')').addClass('current').fadeIn('slow');					
					}).removeClass('current');
		  }
		  
		  function swipeHandler2( event ){
					$('section:eq('+ currentSection +')').fadeOut('slow',
					function() {
							currentSection--;
							if (currentSection < 0) {
								currentSection = cntPoems-1;
							}
							window.plugins.toast.showLongBottom((currentSection*1 + 1) + '/' + cntPoems);
							$('section:eq('+ currentSection +')').addClass('current').fadeIn('slow');					
					}).removeClass('current');
		  }


}

