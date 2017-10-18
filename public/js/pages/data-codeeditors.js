/* data-codeeditors page javascript */
Theme.pages = (function (parent, me) {
    
    me.init = function() {
        parent.log('Running data-codeeditors page javascript');
        me.ace1();
        me.ace2();
        me.ace3();
        me.codemirror1();
        me.codemirror2();
        me.codemirror3();
    };
    
    me.ace1 = function() {
        var editor = ace.edit('aceeditor1');
        editor.setTheme('ace/theme/monokai');
        editor.getSession().setMode('ace/mode/javascript');
        document.getElementById('aceeditor1').style.fontSize='14px';
    };
    
    me.ace2 = function() {
        var editor = ace.edit('aceeditor2');
        editor.setTheme('ace/theme/clouds');
        editor.getSession().setMode('ace/mode/css');
        document.getElementById('aceeditor2').style.fontSize='14px';
    };
    
    me.ace3 = function() {
        var editor = ace.edit('aceeditor3');
        editor.getSession().setMode('ace/mode/html');
        document.getElementById('aceeditor3').style.fontSize='14px';
        editor.setReadOnly(true);
    };
    
    me.codemirror1 = function() {
        var codemirror = CodeMirror(document.getElementById('codemirror1'), {
            value: "/**\n* You are looking at CodeMirror right now. Go ahead and play with it!\n* CodeMirror has support for 100+ language modes and 46 color themes!\n*/\n\nfunction add(x, y) {\n    var resultString = \"The result of your sum is: \";\n    var result = x + y;\n    return resultString + result;\n}\nvar addResult = add(3, 2);\nconsole.log(addResult);",
            mode: "javascript",
            theme: 'the-matrix',
            lineNumbers: true
        });
    };
    
    me.codemirror2 = function() {
        var codemirror = CodeMirror(document.getElementById('codemirror2'), {
            value: "/* You are looking at ACE right now. Go ahead and play with it! */\n\n#idname, .classname {\n    position: relative;\n}\n#idname:after, .classname:after {\n    position: absolute;\n    top: 7px;\n    left: 10px;\n    content: \"\\f058\";\n    font-family: FontAwesome;\n    font-size: 40px;\n    line-height: 1em;\n}",
            mode: "css",
            theme: 'neat',
            lineNumbers: true
        });
    };
    
    me.codemirror3 = function() {
        var codemirror = CodeMirror(document.getElementById('codemirror3'), {
            value: "<!DOCTYPE html>\n    <html>\n        <head>\n            <meta charset=\"UTF-8\">\n            <title>Title of the document</title>\n        </head>\n    <body>\n        <!-- You are looking at ACE right now, in 'readonly' mode -->\n        <h1>Hello World!</h1>\n        <pp>This tag is wrong - note the red warning.</p>\n        <img src=\"smiley.gif\" alt=\"Smiley face\" height=\"42\" width=\"42\">\n    </body>\n</html>",
            mode : "text/html",
            htmlMode: true,
            readOnly: true,
            lineNumbers: true
        });
    };
    
    return me;
}(Theme, Theme.pages));

/* Call now */
Theme.pages.init();

