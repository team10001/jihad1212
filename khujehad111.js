	 var rain={'a':function(){let _0x2122e1=window['location']['href'],_0x345e90=window['location']['origin']+'/',_0x39968d=window['location']['origin']+'/?m=1',_0x36b004,_0xc4998,_0xe65c91,_0x36a7aa,_0x22d4f1,_0x218338,_0x3c28ad,_0x41d844=/(\/\d+\/)/gi,_0x16244b=/(\/\d+\/\d+\/)/gi,_0xa38dcd=/(\/\d+\/\d+\/\S+[\\.]html)/gi,_0x585b58=/(\/p\/.*)/gi,_0x582d4f=/(\/search([//?])q.*)/gi,_0x5c064c=/(\/search\/label\/.*)/gi,_0x5441d6=/(\/search([//?])updated.*)/gi,_0x18d1af=/(\/b\/post-preview.*)/gi;if(_0x2122e1['match'](_0x585b58)){_0x36b004='isPage';}else{if(_0x2122e1['match'](_0xa38dcd)){_0x36b004='isPost';}else{if(_0x2122e1==_0x345e90||_0x2122e1==_0x39968d||_0x2122e1['match'](_0x582d4f)||_0x2122e1['match'](_0x5c064c)||_0x2122e1['match'](_0x5441d6)||_0x2122e1['match'](_0x41d844)||_0x2122e1['match'](_0x16244b)){_0x36b004='isMultipleItems';}else{if(_0x2122e1['match'](_0x18d1af)){_0x36b004='isPreview';}}}};if(_0x36b004=='isMultipleItems'){console['log']('isMultipleItems');rain['i']();}else{if(_0x36b004=='isPost'||_0x36b004=='isPreview'){console['log']('isPost');rain['c']();rain['d']();rain['f']();rain['k']();}else{if(_0x36b004=='isPage'||_0x36b004=='isPreview'){console['log']('isPage');}}};if(_0x36b004!='isPreview'){console['log']('!isPreview');rain['j']();}},'b':function(){$(document)['scroll'](function(){return $(document)['scrollTop']()>0x12c?$('.totop')['addClass']('show'):$('.totop')['removeClass']('show');}),$('.totop')['click'](function(){return $('html,body')['animate']({'scrollTop':'0'});});$('img')['each'](function(){$(this)['attr']('src',$(this)['data']('src'))['removeAttr']('data-src');});},'c':function(){if(document['getElementById']('HTML3')){document['getElementById']('HTML3')['classList']['add']('newwebTengah');};let _0x58a874=document['querySelectorAll']('.newwebTengah');if(_0x58a874){setTimeout(function(){let _0x5aeed1=document['querySelectorAll']('.post-body\x20br,\x20.post-body\x20p'),_0x232f24=_0x58a874['length']+0x1,_0x3592f2=_0x5aeed1['length']/_0x232f24;c=Array['from']({'length':_0x232f24},(_0x4ad583,_0x26ae8c)=>_0x26ae8c+0x1),d=c['slice'](0x0,-0x1);for(let _0x54dbae=0x0;_0x54dbae<d['length'];_0x54dbae++){let _0x59b7c4=d[_0x54dbae],_0x2e1a60=parseInt(_0x3592f2*_0x59b7c4);if(_0x5aeed1[_0x2e1a60]['nodeName']=='P'){_0x5aeed1[_0x2e1a60]['parentNode']['insertBefore'](_0x58a874[_0x54dbae],_0x5aeed1[_0x2e1a60]);}else{_0x5aeed1[_0x2e1a60]['parentNode']['insertBefore'](_0x58a874[_0x54dbae],_0x5aeed1[_0x2e1a60]['nextSibling']);}}},0x64);}},'d':function(){!function(_0x48f8dd){var _0x3f1e69='التالي',_0x56ddf6='السابق',_0x29b36b='الأخيرة';var _0x420d3c=_0x48f8dd('a.blog-pager-newer-link'),_0x5325e0=_0x48f8dd('a.blog-pager-older-link'),_0x49524c=$('.home-link');_0x48f8dd['get'](_0x420d3c['attr']('href'),function(_0x5793f2){_0x420d3c['html']('<span>'+_0x3f1e69+'</span>\x20<span>'+_0x48f8dd(_0x5793f2)['find']('.post\x20.post-title')['first']()['text']()+'</span>')['removeClass']('ripple');},'html');_0x48f8dd['get'](_0x5325e0['attr']('href'),function(_0x5a1e8c){_0x5325e0['html']('<span>'+_0x56ddf6+'</span>\x20<span>'+_0x48f8dd(_0x5a1e8c)['find']('.post\x20.post-title')['first']()['text']()+'</span>')['removeClass']('ripple');},'html');_0x49524c['html']('<span>'+_0x29b36b+'</span>\x20<span>'+$('.post-title')['first']()['text']()+'</span>')['removeClass']('ripple');_0x420d3c['parent']()['removeClass']('ripple')['addClass']('stream'),_0x5325e0['parent']()['removeClass']('ripple')['addClass']('stream'),_0x49524c['parent']()['removeClass']('ripple')['addClass']('stream');}(jQuery);},'e':function(_0x311adc){let _0x15a9d7=decodeURIComponent(window['location']['search']['substring'](0x1)),_0x3d85a6=_0x15a9d7['split']('&'),_0x982e11;for(let _0x2720f4=0x0;_0x2720f4<_0x3d85a6['length'];_0x2720f4++){_0x982e11=_0x3d85a6[_0x2720f4]['split']('=');if(_0x982e11[0x0]===_0x311adc){return _0x982e11[0x1]===undefined?!![]:_0x982e11[0x1];}}},'f':function(){let _0x4f0adc=$('.IthericPagination')['length'];if(_0x4f0adc!=0x0){$('.IthericPagination')['first']()['before']('<div\x20class=\x22IthericPagination\x22\x20style=\x22display:none;\x22>Blogspot\x20Pagination\x20by\x20Itheric.com</div>');$('.IthericPagination')['last']()['after']('<div\x20id=\x22IthericPagination\x22></div><div\x20class=\x22clear\x22></div>');let _0x55819f=$('.IthericPagination'),_0x5aafe9='page',_0x4e9994=rain['e'](_0x5aafe9);_0x55819f['hide']();if(_0x4e9994===undefined){_0x55819f['eq'](0x0)['hide']();_0x55819f['eq'](0x1)['show']();}else{_0x55819f['eq'](_0x4e9994)['show']();};for(i=0x1;i<=_0x4f0adc;i++){$('#IthericPagination')['append']($('<a\x20href=\x22'+window['location']['pathname']+'?'+_0x5aafe9+'='+i+'\x22\x20title=\x22Page\x20'+i+'\x22\x20rel=\x22nofollow\x22>'+i+'</a>'));};_0x4e9994==undefined?$('#IthericPagination\x20>\x20a')['eq'](0x0)['replaceWith'](function(){return $('<span\x20class=\x22selected\x22>1</span>');}):$('#IthericPagination\x20>\x20a')['eq'](rain['e'](_0x5aafe9)-0x1)['replaceWith'](function(){return $('<span\x20class=\x22selected\x22>'+rain['e'](_0x5aafe9)+'</span>');});}else{$('#IthericPagination')['hide']();}},'g':function(){let _0x3b96e0=document['createElement']('script');_0x3b96e0['type']='text/javascript';_0x3b96e0['src']='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js';_0x3b96e0['async']=!![];_0x3b96e0['onload']=function(){rain['a']();rain['b']();rain['l']();otherScript();};document['getElementsByTagName']('head')[0x0]['appendChild'](_0x3b96e0);},'h':{'perPage':function(){return config['halaman_bernomor']['tampilan_per_halaman'];}(),'numPages':function(){return config['halaman_bernomor']['tampilan_nomor_navigasi'];}(),'firstText':function(){return config['halaman_bernomor']['firstText'];}(),'lastText':function(){return config['halaman_bernomor']['lastText'];}(),'a':function(_0x2e4e6f){var _0x3212d3='',_0x372219=parseInt(rain['h']['numPages']/0x2);if(typeof firstText=='undefined'){firstText='الأولى';};if(typeof lastText=='undefined'){lastText='الأخيرة';};if(_0x372219==rain['h']['numPages']-_0x372219){rain['h']['numPages']=_0x372219*0x2+0x1;};pageStart=currentPageNo-_0x372219;if(pageStart<0x1){pageStart=0x1;};lastPageNo=parseInt(_0x2e4e6f/rain['h']['perPage'])+0x1;if(lastPageNo-0x1==_0x2e4e6f/rain['h']['perPage']){lastPageNo=lastPageNo-0x1;};pageEnd=pageStart+rain['h']['numPages']-0x1;if(pageEnd>lastPageNo){pageEnd=lastPageNo;};var _0x29582c=parseInt(currentPageNo)-0x1;if(currentPageNo>0x1){if(currentPage=='page'){_0x3212d3+='<a\x20href=\x22/\x22\x20class=\x22first\x22\x20title=\x22'+firstText+'\x22>'+firstText+'</a>';}else{_0x3212d3+='<a\x20href=\x22/search/label/'+postLabel+'?max-results='+rain['h']['perPage']+'\x22\x20class=\x22first\x22\x20title=\x22'+firstText+'\x22>'+firstText+'</a>';}};if(pageStart>0x1){if(currentPage=='page'){_0x3212d3+='<a\x20href=\x22/\x22\x20title=\x22Page\x201\x22>1</a>';}else{_0x3212d3+='<a\x20href=\x22/search/label/'+postLabel+'?max-results='+rain['h']['perPage']+'\x22\x20title=\x22Page\x201\x22>1</a>';}};if(pageStart>0x2){_0x3212d3+='<span\x20class=\x22dot\x22>...</span>';};for(var _0x457162=pageStart;_0x457162<=pageEnd;_0x457162++){if(currentPageNo==_0x457162){_0x3212d3+='<span\x20class=\x22current\x22>'+_0x457162+'</span>';}else{if(_0x457162==0x1){if(currentPage=='page'){_0x3212d3+='<a\x20href=\x22/\x22\x20title=\x22Page\x201\x22>1</a>';}else{_0x3212d3+='<a\x20href=\x22/search/label/'+postLabel+'?max-results='+rain['h']['perPage']+'\x22\x20title=\x22Page\x201\x22>1</a>';}}else{if(currentPage=='page'){_0x3212d3+='<a\x20onclick=\x22rain.h.d('+_0x457162+');return\x20false\x22\x20title=\x22Page\x20'+_0x457162+'\x22>'+_0x457162+'</a>';}else{_0x3212d3+='<a\x20onclick=\x22rain.h.e('+_0x457162+');return\x20false\x22\x20title=\x22Page\x20'+_0x457162+'\x22>'+_0x457162+'</a>';}}}};if(pageEnd<lastPageNo-0x1){_0x3212d3+='<span\x20class=\x22dot\x22>...</span>';};if(pageEnd<lastPageNo){if(currentPage=='page'){_0x3212d3+='<a\x20onclick=\x22rain.h.d('+lastPageNo+');return\x20false\x22\x20title=\x22Page\x20'+lastPageNo+'\x22>'+lastPageNo+'</a>';}else{_0x3212d3+='<a\x20onclick=\x22rain.h.e('+lastPageNo+');return\x20false\x22\x20title=\x22Page\x20'+lastPageNo+'\x22>'+lastPageNo+'</a>';}};var _0x368822=parseInt(currentPageNo)+0x1;if(currentPageNo<lastPageNo){if(currentPage=='page'){_0x3212d3+='<a\x20class=\x22last\x22\x20onclick=\x22rain.h.d('+lastPageNo+');return\x20false\x22\x20title=\x22'+lastText+'\x22>'+lastText+'</a></span>';}else{_0x3212d3+='<a\x20class=\x22last\x22\x20onclick=\x22rain.h.d('+lastPageNo+');return\x20false\x22\x20title=\x22'+lastText+'\x22>'+lastText+'</a>';}};var _0x4d80b5=document['getElementsByName']('pageArea');var _0x5896e5=document['getElementById']('blog-pager');for(var _0x1510ce=0x0;_0x1510ce<_0x4d80b5['length'];_0x1510ce++){_0x4d80b5[_0x1510ce]['innerHTML']=_0x3212d3;};if(_0x4d80b5&&_0x4d80b5['length']>0x0){_0x3212d3='';};if(_0x5896e5){_0x5896e5['innerHTML']=_0x3212d3,_0x5896e5['classList']['add']('number');}},'b':function(_0x526a65){var _0x54ab33=_0x526a65['feed'];var _0x23824c=parseInt(_0x54ab33['openSearch$totalResults']['$t'],0xa);rain['h']['a'](_0x23824c);},'c':function(){var _0x2b57e7=window['location']['href'];if(_0x2b57e7['indexOf']('/search/label/')!=-0x1){if(_0x2b57e7['indexOf']('?updated-max')!=-0x1){postLabel=_0x2b57e7['substring'](_0x2b57e7['indexOf']('/search/label/')+0xe,_0x2b57e7['indexOf']('?updated-max'));}else{if(_0x2b57e7['indexOf']('?max')!=-0x1){postLabel=_0x2b57e7['substring'](_0x2b57e7['indexOf']('/search/label/')+0xe,_0x2b57e7['indexOf']('?max'));}else{postLabel=_0x2b57e7['substring'](_0x2b57e7['indexOf']('/search/label/')+0xe);}}};if(_0x2b57e7['indexOf']('?q=')==-0x1){if(_0x2b57e7['indexOf']('/search/label/')==-0x1){currentPage='page';if(window['location']['href']['indexOf']('#page=')!=-0x1){currentPageNo=window['location']['href']['substring'](window['location']['href']['indexOf']('#page=')+0x6,window['location']['href']['length']);}else{currentPageNo=0x1;};let _0x2392c8=document['createElement']('script');_0x2392c8['type']='text/javascript';_0x2392c8['src']='/feeds/posts/summary?max-results=1&alt=json-in-script&callback=rain.h.b';_0x2392c8['async']=!![];document['getElementsByTagName']('body')[0x0]['appendChild'](_0x2392c8);}else{currentPage='label';if(_0x2b57e7['indexOf']('max-results=')==-0x1){rain['h']['perPage']=0x14;};if(window['location']['href']['indexOf']('#page=')!=-0x1){currentPageNo=window['location']['href']['substring'](window['location']['href']['indexOf']('#page=')+0x6,window['location']['href']['length']);}else{currentPageNo=0x1;};let _0x529312=document['createElement']('script');_0x529312['type']='text/javascript';_0x529312['src']='/feeds/posts/summary/-/'+postLabel+'?alt=json-in-script&callback=rain.h.b&max-results=1';_0x529312['async']=!![];document['getElementsByTagName']('body')[0x0]['appendChild'](_0x529312);}}},'d':function(_0x318645){jsonstart=(_0x318645-0x1)*rain['h']['perPage'];noPage=_0x318645;var _0x375c76=document['getElementsByTagName']('head')[0x0];var _0x58a91b=document['createElement']('script');_0x58a91b['type']='text/javascript';_0x58a91b['setAttribute']('src','/feeds/posts/summary?start-index='+jsonstart+'&max-results=1&alt=json-in-script&callback=rain.h.f');_0x375c76['appendChild'](_0x58a91b);},'e':function(_0x127241){jsonstart=(_0x127241-0x1)*rain['h']['perPage'];noPage=_0x127241;var _0x8a5940=document['getElementsByTagName']('head')[0x0];var _0x5d969d=document['createElement']('script');_0x5d969d['type']='text/javascript';_0x5d969d['setAttribute']('src','/feeds/posts/summary/-/'+postLabel+'?start-index='+jsonstart+'&max-results=1&alt=json-in-script&callback=rain.h.f');_0x8a5940['appendChild'](_0x5d969d);},'f':function(_0x40ea08){post=_0x40ea08['feed']['entry'][0x0];var _0x25dac1=post['published']['$t']['substring'](0x0,0x13)+post['published']['$t']['substring'](0x17,0x1d);var _0x32b71f=encodeURIComponent(_0x25dac1);if(currentPage=='page'){var _0x210dae='/search?updated-max='+_0x32b71f+'&max-results='+rain['h']['perPage']+'#page='+noPage;}else{var _0x210dae='/search/label/'+postLabel+'?updated-max='+_0x32b71f+'&max-results='+rain['h']['perPage']+'#page='+noPage;};window['location']['href']=_0x210dae;},'g':function(){let _0x1f4d60,_0x1b96b1,_0x3b13be,_0x28ec56;}},'i':function(){if(config['halaman_bernomor']['pakai']){rain['h']['c']();}},'j':function(){if(config['adblock']['pakai']){if(window['adsbygoogle']){console['log']('AdSense\x20terpasang...');let _0x5efa98=document['createElement']('script');_0x5efa98['type']='text/javascript';_0x5efa98['src']='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';_0x5efa98['async']=!![];_0x5efa98['onerror']=function(){let _0x1cf612=document['createElement']('div');_0x1cf612['id']='IthericAdBlock';_0x1cf612['innerHTML']='<div\x20class=\x22isiAds\x22><svg\x20viewBox=\x220\x200\x2024\x2024\x22><path\x20d=\x22M13,13H11V7H13M13,17H11V15H13M12,2A10,10\x200\x200,0\x202,12A10,10\x200\x200,0\x2012,22A10,10\x200\x200,0\x2022,12A10,10\x200\x200,0\x2012,2Z\x22></path></svg>'+config['adblock']['text']+'</div>';document['body']['append'](_0x1cf612);document['body']['style']['overflow']='hidden';};document['getElementsByTagName']('head')[0x0]['appendChild'](_0x5efa98);}else{console['log']('Tidak\x20ada\x20AdSense...');}}},'k':function(){},'l':function(){let _0xff33ce=$('#newwebHeader\x20.header-inner\x20.newwebMenu\x20.MenuList\x20ul\x20li\x20a:not(:only-child)');_0xff33ce['next']('ul')['hide']();_0xff33ce['click'](function(_0x1599f2){_0x1599f2['preventDefault']();$(this)['next']('ul')['slideToggle'](0x12c);$(this)['parent']()['toggleClass']('open');});}};   	
var newWeb_0x10fc = ['LWjCs8Ogwo7CgBjDvARwwprDiMKSfxADHsOkwq7CpC3CkyjDiTldw7hnwrcXbhpjw5vClHBVd8Kxw5R6w43Do1cpw6NEw73DmRcCw6nCs8KawpXDmRfCjB3DoMOWb0/CkGHDmXkYw6nCkGjCrcOGWk01w7zCn8KxRQRQV8K+wobCvsK0HwBLwrrClSXCki1jS8KbcC1vwpJZVkzDgxvCtsKPEWzDvcK4w45oM8KdNcKAw6XDnBE8WcO1IsKRXxvDvG/DvWx+wpBHw7pbw7LCiWTDrcKZR8OVwrEwYcOywpFnwrfCpcO1wp9ew6p/w5fCt8KTwpHCo8O4wqvDn20cBMOKw4lIDcOtHsOBw5jCt8O1w5zCnsKrw4Yswo3CnVfDrGbDum7DosKVw5nDggwEV2MQcTUEZXDCqhUiw4fDkhPDnBlOEyPDlcOgHsKjaARIw5ZWw7HDmcOkw78bwo9Pwq3CnsORwrPDjMOoA03Ct8KjLHkGwo89WcOiw6BfYXUKJ07Ds8KNM8KRcjPDhtmb2pLZiNuq2I53M8Obwr9Lw7DbvNqc2I/ZtkbZmNqu268y27DZn9uqdNuB2I3butqc2JrYqcOc2qXYntqf2q/Citmk2bbZktmM2rbavQnbt9m+f9uR2IPbmdufXtmJ2oDYqtia2pUHY8KZF9qp26HZmRTbhNmW25rCi9uC2qDbmMK925rZudqM26bDs9qL2ZTYgtmB2bjYnsOB2IjZmdmy25vajduF2YLCi9i22K3Zj9qNwpPbqtqM25jYtBHam9uU2qvancOT2q3ZstiF2rjCvNuP2rDZvNiW247bvw3Yh9u026DYmNqCwo/bo9uj2rjYotqR25nDoVLDtMO3', 'eQLDrMKswoRzd8K9', 'wohxVQHDocKG', 'wrc+U1LCksOyUMKowoUrw5HDosKWw7HCosKKUMO3w6nCvgDCll7DmQ==', 'TcObw5sdwqdwwplB', 'w7XDosKgwqBwABow', 'w53Ds8KAcsKqLsOow6Zxwp/CjA==', 'ZcOsw7fCgcKuXMKwwpk=', 'w6kaUMOx', 'w5TCj8ODDcKIb8Osw4INMtqV2L/YiNi02bjbvsK6woDDsWcxw6h5w6/DncO+wrDCg8Oxw4HCqMKBNnQrw4M5wp1OwrjCqcK6wrvDjT7DhRbDimEPw6XCmMOswqnDosOMw6wnw4I2wpHCrsK3AXJuw6RddsK0FF05wow8wrPCh8Ohb8OAw6EicMKUw5TDqWzChnoeR8OzcMOFw7M6YnHCi2giwpJFwrrCpygZB8O0woHCo8KmNTpZX8OCwrp5eMO5wpfDpw8sZ2shwp3DoMKxwp/CpMOUAXHDjRN9wqZ3wqFWGsOsw4IYwq0Dw6w1fD5QwqMXfcKTNMOqwrxAwolNw4slw5XDm2bDq8K0w7BcwrnDuD/Drn/CtgdxwonDnMKucU1rOgdFw6nDssKnNMKLw4XCh8KNw6kKw6kEw4zCscO9wp7CrD/DiEPDscKNw4l4BsOpGDvClcOUwpERY8OGw6TChUx8Onp3QD15f8O3AsOoT8OCe8OnaMKIwoZ0e21hwrA1aEvCoMO2UnvCgBw4F8O3XFpZPBkMwrfCnUBHcBrCq8OGHcK6w6zCgcOVVB7Dqj5vW30Qwq4hw7LChcKSw7jDhx1gwoLCtwHChwQYQCXCjwzDtsKNB8OYRD3DmivCsMOZSUDCsRnDnhfCq8K7woXDmsOCRMOoU2Faw77Dl8OvATzCgBbCgz1iwqx9R8K+JMOFHMOWw67CiE41YcOFwo/DjhTDh3XDki/Ds0LCuMK5wo/CicOTN8Obw5w1wrrCmGnDrMKQYCseBk8IwqvDsFTDisKnwqXDicOKw7wdw6XDlFfaudm02b7Zj9u/2YcQ2KTYjNud263at9i4w7ZTKMKq', 'wqzCqQLDgX5HPHE=', 'eQjDocKqwoRy', 'wozCtmAewqjDgcKt', 'w5oAwqDCvcOS', 'wqYvT8KCwqo0w4LCuA==', 'E8KewqTDtyjCpTrCjA==', 'wrRDY3w=', 'E8KKwrDDkSrCoA==', 'MmjDvMOkwp/CixHDvQ==', 'WiV1fhBHZhU=', 'McOnwr5B', 'wp46w6vDmkEH', 'wogyTFEcw5s=', 'w6AMUcOUwq3Doj52', 'wp3DkH7Duw==', 'cAzDrMKl', 'w6IbRg==', 'f8OhDHjCuMOqwpU=', 'EcKJwrM=', 'wrY+IHhPa3PCqcOaWg==', 'ScOdw5wYwrZ3', 'w7nDs8KgFcOkwrDCqA==', 'wqLDv8KtNMO2wrDCqAbDscOFw77ClsK/EjlV', 'wohmQi3DsMKNRMKwwrbCtGPDt3TCiMKzw50=', 'w44Jwq7Cqg==', 'acK3Y8O7wqAlS8OzB8Knw5Y=', 'w4fCu8OjD8KNHQ==', 'w47CslHDlg7CrhsNw6LCqEM=', 'LMOvw7LDmQ==', 'wrfDr8O5fDvCizNw', 'wqvCvC7Cq0hb', 'wr1tw5MDIg==', 'NMOlwqk=', 'VMO4f3BSQDE6w6jDtRZuwpYSLw==', 'w4vCq3ASwrPDpcKy', 'HcKcwqbDhyHCsA==', 'wr3DrsO5bSzCrSJqfnzDsg==', 'wqBuw5QUPsOM', 'wpnCvk4=', 'w5zCusO/', 'wpphVAfDqsKE', 'wopxVQ==', 'w4MEwrzCocOKw7VVw4o=', 'a8KwZA==', 'NmMrwoZh', 'acKhZMO1wq84esOg', 'e8KiwoTCsDfDiXo=', 'K8KgeMO3wq4oYMOxEcOpw5I=', 'wrwlSVbChMKmC8O0', 'VMKAVh52w6Q='];
   	var newWeb_0x4c7c = function(_0x10fcea, _0x4c7c66) {
   	    _0x10fcea = _0x10fcea - 0x0;
   	    var _0x596937 = newWeb_0x10fc[_0x10fcea];
   	    if (newWeb_0x4c7c['bFvJZA'] === undefined) {
   	        (function() {
   	            var _0x2b6de7;
   	            try {
   	                var _0x1e0b88 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');');
   	                _0x2b6de7 = _0x1e0b88();
   	            } catch (_0xb6e55a) {
   	                _0x2b6de7 = window;
   	            }
   	            var _0x3332d1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
   	            _0x2b6de7['atob'] || (_0x2b6de7['atob'] = function(_0x1e7c2b) {
   	                var _0x4ef8cc = String(_0x1e7c2b)['replace'](/=+$/, '');
   	                var _0x7a313a = '';
   	                for (var _0x37619d = 0x0, _0x3cc6c3, _0x13dfa5, _0x15be4f = 0x0; _0x13dfa5 = _0x4ef8cc['charAt'](_0x15be4f++); ~_0x13dfa5 && (_0x3cc6c3 = _0x37619d % 0x4 ? _0x3cc6c3 * 0x40 + _0x13dfa5 : _0x13dfa5, _0x37619d++ % 0x4) ? _0x7a313a += String['fromCharCode'](0xff & _0x3cc6c3 >> (-0x2 * _0x37619d & 0x6)) : 0x0) {
   	                    _0x13dfa5 = _0x3332d1['indexOf'](_0x13dfa5);
   	                }
   	                return _0x7a313a;
   	            });
   	        }());
   	        var _0x39d26e = function(_0x1c02e5, _0x3964e3) {
   	            var _0x3d90ca = [],
   	                _0x462695 = 0x0,
   	                _0x2cf392, _0x94d421 = '',
   	                _0x58710e = '';
   	            _0x1c02e5 = atob(_0x1c02e5);
   	            for (var _0x45b015 = 0x0, _0x16c937 = _0x1c02e5['length']; _0x45b015 < _0x16c937; _0x45b015++) {
   	                _0x58710e += '%' + ('00' + _0x1c02e5['charCodeAt'](_0x45b015)['toString'](0x10))['slice'](-0x2);
   	            }
   	            _0x1c02e5 = decodeURIComponent(_0x58710e);
   	            var _0x16d926;
   	            for (_0x16d926 = 0x0; _0x16d926 < 0x100; _0x16d926++) {
   	                _0x3d90ca[_0x16d926] = _0x16d926;
   	            }
   	            for (_0x16d926 = 0x0; _0x16d926 < 0x100; _0x16d926++) {
   	                _0x462695 = (_0x462695 + _0x3d90ca[_0x16d926] + _0x3964e3['charCodeAt'](_0x16d926 % _0x3964e3['length'])) % 0x100;
   	                _0x2cf392 = _0x3d90ca[_0x16d926];
   	                _0x3d90ca[_0x16d926] = _0x3d90ca[_0x462695];
   	                _0x3d90ca[_0x462695] = _0x2cf392;
   	            }
   	            _0x16d926 = 0x0;
   	            _0x462695 = 0x0;
   	            for (var _0x3ee787 = 0x0; _0x3ee787 < _0x1c02e5['length']; _0x3ee787++) {
   	                _0x16d926 = (_0x16d926 + 0x1) % 0x100;
   	                _0x462695 = (_0x462695 + _0x3d90ca[_0x16d926]) % 0x100;
   	                _0x2cf392 = _0x3d90ca[_0x16d926];
   	                _0x3d90ca[_0x16d926] = _0x3d90ca[_0x462695];
   	                _0x3d90ca[_0x462695] = _0x2cf392;
   	                _0x94d421 += String['fromCharCode'](_0x1c02e5['charCodeAt'](_0x3ee787) ^ _0x3d90ca[(_0x3d90ca[_0x16d926] + _0x3d90ca[_0x462695]) % 0x100]);
   	            }
   	            return _0x94d421;
   	        };
   	        newWeb_0x4c7c['TJcfcU'] = _0x39d26e;
   	        newWeb_0x4c7c['ovQgiD'] = {};
   	        newWeb_0x4c7c['bFvJZA'] = !![];
   	    }
   	    var _0x5be916 = newWeb_0x4c7c['ovQgiD'][_0x10fcea];
   	    if (_0x5be916 === undefined) {
   	        if (newWeb_0x4c7c['iCZwEL'] === undefined) {
   	            newWeb_0x4c7c['iCZwEL'] = !![];
   	        }
   	        _0x596937 = newWeb_0x4c7c['TJcfcU'](_0x596937, _0x4c7c66);
   	        newWeb_0x4c7c['ovQgiD'][_0x10fcea] = _0x596937;
   	    } else {
   	        _0x596937 = _0x5be916;
   	    }
   	    return _0x596937;
   	};

   	function newWeb_0x5666d9() {
   	    $('html')['html']('<p style=\x27color: #ffffff !important; background: #f84436 !important; padding:30px !important;text-align: center; margin: 150px 24%;  max-width: 100%; font-family: CaremFonts; white-space: inherit; border-radius: 7px !important;font-size: 20px;font-weight: 700; \x27>أوبسس .... يبدو أنك قمت بإزالة رابط الحقوق عن طريق الخطأ  , اما اذا كنت تريد النسخة الكاملة بدون رابط حقوق يرجى مراجعة مدونة الاثير<p> ');
   	    setTimeout(function() {
   	        window['location']['assign']('https://blog.itheric.com');
   	    }, 0x4e20);
   	}
   	var newWeb_0x156d86 = window['location']['hostname']['toLowerCase']();
   	var newWeb_0x187d24 = window['location']['href']['toLowerCase']();
   	var newWeb_0x50c8bc = '';
   	var newWeb_0x369929 = '';
   	newWeb_0x50c8bc += '<a title=\x27الأثير\x27  style=\x27color: #eee !important;background: #00000040 !important;padding: 3px 7px 4px!important;margin-right: 5px !important;border-radius: 7px !important;font-weight: 600 !important;line-height: 1.3 !important;display: inline-block !important;outline: none !important;font-size: 11px !important;border: 1.2px solid #eee !important; \x27 href=\x27https://blog.itheric.com\x27 target=\x27_blank\x27>
    جهاد الخزاعي</a>';
   	if ($('#powered')['length'] !== 0x0) {
   	    if (newWeb_0x156d86['indexOf']('xfost') != -0x1) {
   	        $('#powered')['addClass']('impo')['append'](newWeb_0x369929);
   	    } else {
   	        $('#powered')['addClass']('impo')['append'](newWeb_0x50c8bc);
   	    };
   	    $('footer')['addClass']('impo');
   	    setInterval(function() {
   	        $('.impo')['each'](function() {
   	            if ($(this)['css']('opacity') < 0x1 || $(this)['css']('visibility') == 'hidden' || $(this)['is'](':hidden')) {
   	                newWeb_0x5666d9();
   	            }
   	        });
   	    }, 0x1388);
   	} else {
   	    newWeb_0x5666d9();
   	};

   	function newWeb_0x331f06() {
   	    rain['g']();
   	}
   	window['addEventListener'] ? window['addEventListener']('load', newWeb_0x331f06) : window['attachEvent'] && window['attachEvent']('onload', newWeb_0x331f06);

   	function newWeb_0x317250() {
   	    $(function() {
   	        $('#comments p')['find']('a')['contents']()['unwrap']();
   	    });
   	}
   	$(document)['ready'](function() {
   	    console['log']('document ready!');
   	    var _0x1b0fec = $('.sticky');
   	    var _0x1e9039 = $('.sticky-stopper');
   	    if (!!_0x1b0fec['offset']()) {
   	        var _0x591ca9 = _0x1b0fec['innerHeight']();
   	        var _0x30d1b4 = _0x1b0fec['offset']()['top'];
   	        var _0x2b3061 = 0x0;
   	        var _0x360dd9 = _0x1e9039['offset']()['top'];
   	        var _0x47e2ca = _0x360dd9 - _0x591ca9 - _0x2b3061;
   	        var _0xced12d = _0x47e2ca + _0x2b3061;
   	        $(window)['scroll'](function() {
   	            var _0x42f25e = $(window)['scrollTop']();
   	            if (_0x47e2ca < _0x42f25e) {
   	                _0x1b0fec['css']({
   	                    'position': 'absolute',
   	                    'top': _0xced12d
   	                });
   	            } else if (_0x30d1b4 < _0x42f25e + _0x2b3061) {
   	                _0x1b0fec['css']({
   	                    'position': 'fixed',
   	                    'top': _0x2b3061
   	                });
   	            } else {
   	                _0x1b0fec['css']({
   	                    'position': 'absolute',
   	                    'top': 'initial'
   	                });
   	            }
   	        });
   	    }
   	});

   	function newWeb_0x317250() {
   	    $(function() {
   	        $('#comments p')['find']('a')['contents']()['unwrap']();
   	    });
   	}
