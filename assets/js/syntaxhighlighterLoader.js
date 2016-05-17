(function(sh) { 
  "use strict";
  sh.autoloader(
        'applescript            js/syntaxhighlighter_3.0.83/shBrushAppleScript.js',
        'actionscript3 as3      js/syntaxhighlighter_3.0.83/shBrushAS3.js',
        'bash shell             js/syntaxhighlighter_3.0.83/shBrushBash.js',
        'coldfusion cf          js/syntaxhighlighter_3.0.83/shBrushColdFusion.js',
        'cpp c                  js/syntaxhighlighter_3.0.83/shBrushCpp.js',
        'c# c-sharp csharp      js/syntaxhighlighter_3.0.83/shBrushCSharp.js',
        'css                    js/syntaxhighlighter_3.0.83/shBrushCss.js',
        'delphi pascal          js/syntaxhighlighter_3.0.83/shBrushDelphi.js',
        'diff patch pas         js/syntaxhighlighter_3.0.83/shBrushDiff.js',
        'erl erlang             js/syntaxhighlighter_3.0.83/shBrushErlang.js',
        'groovy                 js/syntaxhighlighter_3.0.83/shBrushGroovy.js',
        'java                   js/syntaxhighlighter_3.0.83/shBrushJava.js',
        'jfx javafx             js/syntaxhighlighter_3.0.83/shBrushJavaFX.js',
        'js jscript javascript  js/syntaxhighlighter_3.0.83/shBrushJScript.js',
        'perl pl                js/syntaxhighlighter_3.0.83/shBrushPerl.js',
        'php                    js/syntaxhighlighter_3.0.83/shBrushPhp.js',
        'text plain             js/syntaxhighlighter_3.0.83/shBrushPlain.js',
        'ps ps1 powershell posh js/syntaxhighlighter_3.0.83/shPowerShell.js',
        'py python              js/syntaxhighlighter_3.0.83/shBrushPython.js',
        'ruby rails ror rb      js/syntaxhighlighter_3.0.83/shBrushRuby.js',
        'sass scss              js/syntaxhighlighter_3.0.83/shBrushSass.js',
        'scala                  js/syntaxhighlighter_3.0.83/shBrushScala.js',
        'sql                    js/syntaxhighlighter_3.0.83/shBrushSql.js',
        'vb vbnet               js/syntaxhighlighter_3.0.83/shBrushVb.js',
        'xml xhtml xslt html    js/syntaxhighlighter_3.0.83/shBrushXml.js'
    );
    sh.defaults['toolbar'] = false;
    sh.defaults['gutter'] = false;
    sh.all()
})(SyntaxHighlighter);