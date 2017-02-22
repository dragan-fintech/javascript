function foo(arg1, options)
{
    console.log('arg1=', arg1)
    console.log('pera=', options.pera)
    console.log('zika=', options.zika)
}

function goo(arg1, mynames)
{
    console.log('arg1=', arg1)
    console.log('pera=', mynames.pera)
    console.log('zika=', mynames.zika)
}

function hoo(options1, options2)
{
    console.log('opt1.arg1=', options1.arg1)
    console.log('opt2.arg1=', options2.arg1)
    console.log('opt2.arg2=', options2.arg2)
}

foo('first argument', {zika: 5, pera:'pera_arg'})
goo('first argument', {pera:'perica', zika: 'zikica'})
hoo({arg1: 1}, {arg1:2, arg2: 3})
