// http://www.2ality.com/2011/11/keyword-parameters.html

function foo(arg1, options)
{
    console.log('arg1=', arg1)
    console.log('pera=', options.pera)
    console.log('zika=', options.zika)
}

function goo(arg1, mynames={pera:'pera_def', zika:'zika_def'})
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

// ES6 only
function foo_es6(arg1, {pera='pera_def', zika='zika_def'}={})
{
    console.log('arg1=', arg1)
    console.log('pera=', pera)
    console.log('zika=', zika)
}



// foo('first argument', {zika: 5, pera:'pera_arg'})
// goo('first argument', {pera:'perica', zika: 'zikica'})
goo('first_arg')
// hoo({arg1: 1}, {arg1:2, arg2: 3})

// foo_es6('first argument', {zika: 5, pera:'pera_arg'})
// foo_es6('first argument')
// foo_es6('first argument', {pera:'perica'})
// foo_es6('first argument', {zika: 6})

