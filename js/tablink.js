 var url = document.location.toString(); 
if (url.match('#')) { 
    $('#myTabs a[href=#'+url.split('#')[1]+']').tab('show') ; 
} 
// Change hash for page-reload 
$('#myTabs a').on('shown', function (e) { 
    window.location.hash = e.target.hash; 
});// JavaScript Document