max v2;#N vpatcher 267 44 469 206;#P origin 0 -240;#P window setfont "Sans Serif" 9.;#P newex 419 142 100 196617 bgcolor 255 205 84;#P comment 18 48 41 196617 pitch;#P user com 17 140 50 196617 4;#K set 0 29538 27680 12848 12343;#K end;#P window linecount 2;#P user com 17 108 167 196617 29;#K set 0 16672 30309 29305 8290 24932 8304 26996 25448 11635 26729 26228 25970 11789 20338 26983 26990 24940 8304 24948 25448 14880 28271 25205 31073 29557 8307 24939 28526 25697;#K end;#P window linecount 1;#N pp 3 mix 0 127;#P hidden newobj -64 179 79 196617 pp 3 mix 0 127;#N pp 1 pitch -48. 48. semitones;#P hidden newobj -138 64 143 196617 pp 1 pitch -48. 48. semitones;#N pp 2 gr.size 8. 500. ms;#P hidden newobj 349 58 115 196617 pp 2 gr.size 8. 500. ms;#N vpatcher 37 59 637 459;#P window setfont "Sans Serif" 9.;#P newex 122 94 27 196617 t b f;#P newex 50 76 62 196617 / 8.175798;#P newex 50 50 70 196617 mtof;#P newex 50 119 165 196617 expr ($f1 - 1.0) * ( -1000. / $f2);#P newex 224 120 79 196617 s ---grain-size;#P inlet 122 74 15 0;#P inlet 50 30 15 0;#P outlet 50 141 15 0;#P connect 1 0 5 0;#P connect 5 0 6 0;#P connect 6 0 4 0;#P fasten 7 0 4 0 127 115 55 115;#P connect 4 0 0 0;#P connect 2 0 7 0;#P fasten 7 1 4 1 144 115 210 115;#P connect 2 0 3 0;#P pop;#P newobj -164 -171 41 196617 p calcs;#P newex 408 114 124 196617 buffer~ ---wdfc sine.aiff;#P user ezdac~ -120 114 -76 147 0;#P message -206 -363 31 196617 open;#N sfplay~  1 120960 0 ;#P newobj -206 -333 60 196617 sfplay~;#P message -140 -362 14 196617 1;#P newex -250 66 31 196617 dac~;#P newex -222 -297 42 196617 plugin~;#P newex -245 -72 60 196617 crossfade~;#P number 420 -206 35 9 0 0 0 3 0 0 0 221 221 221 222 222 222 0 0 0;#P message 420 -151 51 196617 recall \$1;#P button 356 -205 15 0;#P number 373 -205 35 9 0 0 0 3 0 0 0 221 221 221 222 222 222 0 0 0;#P newex 356 -178 27 196617 i;#P message 356 -151 59 196617 capture \$1;#P message 419 -124 62 196617 windowsize;#N plugconfig;#C useviews 0 1 0 0;#C numprograms 4;#C preempt 1;#C sigvschange 1;#C sigvsdefault 32;#C windowsize;#C defaultview DirtyShifter 0 0 0;#C dragscroll 1;#C noinfo;#C package sbl;#C setprogram 1 default 0 0.5 0.044715 0.551181;#C setprogram 2 harmonization 0 0.572917 0.020325 0.669291;#C setprogram 3 underwater 0 0.1875 0.071138 1.;#C setprogram 4 singer 0 0.864583 0.912602 0.748031;#C uniqueid 128 252 158;#C initialpgm 1;#C category 4;#P newobj 356 -99 55 196617 plugconfig;#P newex 407 94 128 196617 buildassist @path sine.aiff;#P hidden newex -176 -239 45 196617 loadbang;#P newex -219 -270 27 196617 +~;#P flonum 18 65 35 9 0 0 0 3 0 0 0 221 221 221 222 222 222 0 0 0;#P flonum 147 65 35 9 8. 500. 3 3 0 0 0 221 221 221 222 222 222 0 0 0;#P newex -245 6 48 196617 plugout~;#P message -77 -174 23 196617 0.5;#P message -186 -180 14 196617 0;#P newex -173 -152 39 196617 p-shift;#P newex -219 -153 39 196617 p-shift;#P comment 146 48 41 196617 gr.size;#P comment -180 -73 52 196617 dry sound;#P comment -122 -73 63 196617 effect sound;#P comment 87 88 25 196617 mix;#P user hslider 18 84 19 147 128 1 0 0;#P connect 9 0 25 0;#P fasten 12 0 23 0 -278 -109;#P connect 23 0 9 0;#P connect 9 1 25 1;#P connect 27 0 24 0;#P connect 6 0 23 1;#P connect 5 0 23 1;#P connect 24 0 12 0;#P fasten 12 0 5 0 -214 -203 -214 -203;#P connect 23 0 9 1;#P connect 28 0 27 0;#P connect 26 0 27 0;#P connect 31 0 5 1;#P connect 24 1 12 1;#P hidden connect 0 0 23 2;#P connect 7 0 5 2;#P hidden connect 13 0 7 0;#P fasten 12 0 6 0 -214 -203 -168 -203;#P hidden connect 11 0 31 0;#P connect 31 0 6 1;#P connect 8 0 6 2;#P connect 27 1 26 0;#P hidden connect 11 0 33 0;#P hidden connect 10 0 31 1;#P hidden connect 13 0 8 0;#P hidden connect 0 0 34 0;#P hidden connect 33 0 11 0;#P hidden connect 34 0 0 0;#P hidden connect 32 0 10 0;#P hidden connect 10 0 32 0;#P connect 20 0 18 0;#P connect 18 0 17 0;#P connect 16 0 15 0;#P connect 17 0 15 0;#P connect 21 0 15 0;#P connect 19 0 18 1;#P connect 22 0 21 0;#P pop;