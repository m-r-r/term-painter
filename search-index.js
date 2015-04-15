var searchIndex = {};
searchIndex['term_painter'] = {"items":[[0,"","term_painter","This is a crate for coloring and formatting terminal output. Simple\nexample:",null,null],[3,"Style","","Saves all properties of a style. Implements `ToStyle`, so you can call\nstyle modifiers on it.",null,null],[12,"fg","","",0,null],[12,"bg","","",0,null],[12,"bold","","",0,null],[12,"dim","","",0,null],[12,"underline","","",0,null],[12,"blink","","",0,null],[12,"reverse","","",0,null],[12,"secure","","",0,null],[3,"Painted","","Saves a style and a reference to something that will be printed in that\nstyle. That something of type `T` needs to implement at least one of\n`std::fmt::Debug` and `std::fmt::Display`.",null,null],[4,"Color","","Lists all possible Colors. It implements `ToStyle` so it's possible to call\n`ToStyle`'s methods directly on a `Color` variant like:",null,null],[13,"Normal","","",1,null],[13,"Black","","",1,null],[13,"Red","","",1,null],[13,"Green","","",1,null],[13,"Yellow","","",1,null],[13,"Blue","","",1,null],[13,"Magenta","","",1,null],[13,"Cyan","","",1,null],[13,"White","","",1,null],[13,"BrightBlack","","",1,null],[13,"BrightRed","","",1,null],[13,"BrightGreen","","",1,null],[13,"BrightYellow","","",1,null],[13,"BrightBlue","","",1,null],[13,"BrightMagenta","","",1,null],[13,"BrightCyan","","",1,null],[13,"BrightWhite","","",1,null],[4,"Attr","","Lists possible attributes. It implements `ToStyle` so it's possible to call\n`ToStyle`'s methods directly on a `Attr` variant like:",null,null],[13,"Plain","","Just default style",2,null],[13,"Bold","","",2,null],[13,"Dim","","",2,null],[13,"Underline","","",2,null],[13,"Blink","","",2,null],[13,"Reverse","","",2,null],[13,"Secure","","",2,null],[8,"ToStyle","","Everything that can be seen as part of a style. This is the core of this\ncrate. All functions (\"style modifier\") consume self and return a modified\nversion of the style.",null,null],[10,"to_style","","",3,{"inputs":[{"name":"tostyle"}],"output":{"name":"style"}}],[11,"fg","","Sets the foreground (text) color.",3,{"inputs":[{"name":"tostyle"},{"name":"color"}],"output":{"name":"style"}}],[11,"bg","","Sets the background color.",3,{"inputs":[{"name":"tostyle"},{"name":"color"}],"output":{"name":"style"}}],[11,"bold","","Makes the text bold.",3,{"inputs":[{"name":"tostyle"}],"output":{"name":"style"}}],[11,"dim","","Dim mode.",3,{"inputs":[{"name":"tostyle"}],"output":{"name":"style"}}],[11,"underline","","Underlines the text.",3,{"inputs":[{"name":"tostyle"}],"output":{"name":"style"}}],[11,"blink","","Underlines the text.",3,{"inputs":[{"name":"tostyle"}],"output":{"name":"style"}}],[11,"reverse","","Underlines the text.",3,{"inputs":[{"name":"tostyle"}],"output":{"name":"style"}}],[11,"secure","","Secure mode.",3,{"inputs":[{"name":"tostyle"}],"output":{"name":"style"}}],[11,"paint","","Wraps the style specified in `self` and something of arbitrary type\ninto a `Painted`. When `Painted` is printed it will print the arbitrary\nsomething with the given style. `T` needs to implement\n`std::fmt::Display` or `std::fmt::Debug`.",3,{"inputs":[{"name":"tostyle"},{"name":"t"}],"output":{"name":"painted"}}],[11,"with","","Executes the given function, applying the style information before\ncalling it and resetting after it finished.",3,{"inputs":[{"name":"tostyle"},{"name":"f"}],"output":{"name":"r"}}],[11,"eq","","",1,{"inputs":[{"name":"color"},{"name":"color"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"color"},{"name":"color"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"color"}],"output":{"name":"color"}}],[11,"fmt","","",1,{"inputs":[{"name":"color"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",1,{"inputs":[{"name":"color"}],"output":{"name":"color"}}],[11,"to_style","","Returns a Style with default values and the `self` color as foreground\ncolor.",1,{"inputs":[{"name":"color"}],"output":{"name":"style"}}],[11,"eq","","",2,{"inputs":[{"name":"attr"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"attr"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"attr"}],"output":{"name":"attr"}}],[11,"fmt","","",2,{"inputs":[{"name":"attr"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"to_style","","Returns a Style with default values and the `self` attribute enabled.",2,{"inputs":[{"name":"attr"}],"output":{"name":"style"}}],[11,"eq","","",0,{"inputs":[{"name":"style"},{"name":"style"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"style"},{"name":"style"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"style"}],"output":{"name":"style"}}],[11,"fmt","","",0,{"inputs":[{"name":"style"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[{"name":"style"}],"output":{"name":"style"}}],[11,"to_style","","Dummy implementation that just returns `self`.",0,{"inputs":[{"name":"style"}],"output":{"name":"style"}}],[11,"fmt","","Implementation for `T: Display` -> to print with `{}`.",4,{"inputs":[{"name":"painted"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","Implementation for `T: Debug` -> to print with `{:?}`.",4,{"inputs":[{"name":"painted"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[3,"Style"],[4,"Color"],[4,"Attr"],[8,"ToStyle"],[3,"Painted"]]};
searchIndex['term'] = {"items":[[0,"","term","Terminal formatting library.",null,null],[4,"Attr","","Terminal attributes for use with term.attr().",null,null],[13,"Bold","","Bold (or possibly bright) mode",0,null],[13,"Dim","","Dim mode, also called faint or half-bright. Often not supported",0,null],[13,"Italic","","Italics mode. Often not supported",0,null],[13,"Underline","","Underline mode",0,null],[13,"Blink","","Blink mode",0,null],[13,"Standout","","Standout mode. Often implemented as Reverse, sometimes coupled with Bold",0,null],[13,"Reverse","","Reverse mode, inverts the foreground and background colors",0,null],[13,"Secure","","Secure mode, also called invis mode. Hides the printed text",0,null],[13,"ForegroundColor","","Convenience attribute to set the foreground color",0,null],[13,"BackgroundColor","","Convenience attribute to set the background color",0,null],[5,"stdout","","Return a Terminal wrapping stdout, or None if a terminal couldn't be\nopened.",null,{"inputs":[],"output":{"name":"option"}}],[5,"stderr","","Return a Terminal wrapping stderr, or None if a terminal couldn't be\nopened.",null,{"inputs":[],"output":{"name":"option"}}],[0,"terminfo","","Terminfo database interface.",null,null],[3,"TermInfo","term::terminfo","A parsed terminfo database entry.",null,null],[12,"names","","Names for the terminal",1,null],[12,"bools","","Map of capability name to boolean value",1,null],[12,"numbers","","Map of capability name to numeric value",1,null],[12,"strings","","Map of capability name to raw (unexpanded) string",1,null],[3,"TerminfoTerminal","","A Terminal that knows how many colors it supports, with a reference to its\nparsed Terminfo database record.",null,null],[4,"Error","","A terminfo creation error.",null,null],[13,"TermUnset","","TermUnset Indicates that the environment doesn't include enough information to find\nthe terminfo entry.",2,null],[13,"MalformedTerminfo","","MalformedTerminfo indicates that parsing the terminfo entry failed.",2,null],[13,"IoError","","io::Error forwards any io::Errors encountered when finding or reading the terminfo entry.",2,null],[0,"searcher","","ncurses-compatible database discovery",null,null],[5,"get_dbpath_for_term","term::terminfo::searcher","Return path to database entry for `term`",null,{"inputs":[{"name":"str"}],"output":{"name":"option"}}],[0,"parser","term::terminfo","TermInfo format parsing.\nncurses-compatible compiled terminfo format parsing (term(5))",null,null],[0,"compiled","term::terminfo::parser","ncurses-compatible compiled terminfo format parsing (term(5))",null,null],[5,"parse","term::terminfo::parser::compiled","Parse a compiled terminfo entry, using long capability names if `longnames`\nis true",null,{"inputs":[{"name":"read"},{"name":"bool"}],"output":{"name":"result"}}],[5,"msys_terminfo","","Create a dummy TermInfo struct for msys terminals",null,{"inputs":[],"output":{"name":"terminfo"}}],[7,"boolfnames","","",null,null],[7,"boolnames","","",null,null],[7,"numfnames","","",null,null],[7,"numnames","","",null,null],[7,"stringfnames","","",null,null],[7,"stringnames","","",null,null],[0,"parm","term::terminfo","Parameterized string expansion",null,null],[3,"Variables","term::terminfo::parm","Container for static and dynamic variable arrays",null,null],[4,"Param","","Types of parameters a capability can use",null,null],[13,"Words","","",3,null],[13,"Number","","",3,null],[5,"expand","","Expand a parameterized capability",null,null],[11,"clone","","",3,{"inputs":[{"name":"param"}],"output":{"name":"param"}}],[11,"new","","Return a new zero-initialized Variables",4,{"inputs":[{"name":"variables"}],"output":{"name":"variables"}}],[11,"fmt","term::terminfo","",1,{"inputs":[{"name":"terminfo"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",2,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",2,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"cause","","",2,{"inputs":[{"name":"error"}],"output":{"name":"option"}}],[11,"fmt","","",2,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_env","","Create a TermInfo based on current environment.",1,{"inputs":[{"name":"terminfo"}],"output":{"name":"result"}}],[11,"from_name","","Create a TermInfo for the named terminal.",1,{"inputs":[{"name":"terminfo"},{"name":"str"}],"output":{"name":"result"}}],[11,"from_path","","Parse the given TermInfo.",1,{"inputs":[{"name":"terminfo"},{"name":"path"}],"output":{"name":"result"}}],[11,"fg","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"color"}],"output":{"name":"result"}}],[11,"bg","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"color"}],"output":{"name":"result"}}],[11,"attr","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"attr"}],"output":{"name":"result"}}],[11,"supports_attr","","",5,{"inputs":[{"name":"terminfoterminal"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"reset","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"result"}}],[11,"get_ref","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"t"}}],[11,"get_mut","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"t"}}],[11,"unwrap","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"t"}}],[11,"new_with_terminfo","","Create a new TerminfoTerminal with the given TermInfo and Write.",5,{"inputs":[{"name":"terminfoterminal"},{"name":"t"},{"name":"terminfo"}],"output":{"name":"terminfoterminal"}}],[11,"new","","Create a new TerminfoTerminal for the current environment with the given Write.",5,{"inputs":[{"name":"terminfoterminal"},{"name":"t"}],"output":{"name":"option"}}],[11,"write","","",5,null],[11,"flush","","",5,{"inputs":[{"name":"terminfoterminal"}],"output":{"name":"result"}}],[0,"color","term","Terminal color definitions",null,null],[6,"Color","term::color","Number for a terminal color",null,null],[17,"BLACK","","",null,null],[17,"RED","","",null,null],[17,"GREEN","","",null,null],[17,"YELLOW","","",null,null],[17,"BLUE","","",null,null],[17,"MAGENTA","","",null,null],[17,"CYAN","","",null,null],[17,"WHITE","","",null,null],[17,"BRIGHT_BLACK","","",null,null],[17,"BRIGHT_RED","","",null,null],[17,"BRIGHT_GREEN","","",null,null],[17,"BRIGHT_YELLOW","","",null,null],[17,"BRIGHT_BLUE","","",null,null],[17,"BRIGHT_MAGENTA","","",null,null],[17,"BRIGHT_CYAN","","",null,null],[17,"BRIGHT_WHITE","","",null,null],[6,"StdoutTerminal","term","Alias for stderr terminals.",null,null],[6,"StderrTerminal","","Alias for stderr terminals.",null,null],[8,"Terminal","","A terminal with similar capabilities to an ANSI Terminal\n(foreground/background colors etc).",null,null],[10,"fg","","Sets the foreground color to the given color.",6,{"inputs":[{"name":"terminal"},{"name":"color"}],"output":{"name":"result"}}],[10,"bg","","Sets the background color to the given color.",6,{"inputs":[{"name":"terminal"},{"name":"color"}],"output":{"name":"result"}}],[10,"attr","","Sets the given terminal attribute, if supported.  Returns `Ok(true)`\nif the attribute was supported, `Ok(false)` otherwise, and `Err(e)` if\nthere was an I/O error.",6,{"inputs":[{"name":"terminal"},{"name":"attr"}],"output":{"name":"result"}}],[10,"supports_attr","","Returns whether the given terminal attribute is supported.",6,{"inputs":[{"name":"terminal"},{"name":"attr"}],"output":{"name":"bool"}}],[10,"reset","","Resets all terminal attributes and color to the default.",6,{"inputs":[{"name":"terminal"}],"output":{"name":"result"}}],[10,"get_ref","","Gets an immutable reference to the stream inside",6,{"inputs":[{"name":"terminal"}],"output":{"name":"t"}}],[10,"get_mut","","Gets a mutable reference to the stream inside",6,{"inputs":[{"name":"terminal"}],"output":{"name":"t"}}],[8,"UnwrappableTerminal","","A terminal which can be unwrapped.",null,null],[10,"unwrap","","Returns the contained stream, destroying the `Terminal`",7,{"inputs":[{"name":"unwrappableterminal"}],"output":{"name":"t"}}],[11,"clone","","",0,{"inputs":[{"name":"attr"}],"output":{"name":"attr"}}],[11,"eq","","",0,{"inputs":[{"name":"attr"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"attr"},{"name":"attr"}],"output":{"name":"bool"}}],[11,"fmt","","",0,{"inputs":[{"name":"attr"},{"name":"formatter"}],"output":{"name":"result"}}]],"paths":[[4,"Attr"],[3,"TermInfo"],[4,"Error"],[4,"Param"],[3,"Variables"],[3,"TerminfoTerminal"],[8,"Terminal"],[8,"UnwrappableTerminal"]]};
initSearch(searchIndex);
