[1mdiff --git a/.bowerrc b/.bowerrc[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/.gitignore b/.gitignore[m
[1mold mode 100644[m
[1mnew mode 100755[m
[1mdiff --git a/npm-debug.log b/npm-debug.log[m
[1mdeleted file mode 100644[m
[1mindex eeff6bd..0000000[m
[1m--- a/npm-debug.log[m
[1m+++ /dev/null[m
[36m@@ -1,37 +0,0 @@[m
[31m-0 info it worked if it ends with ok[m
[31m-1 verbose cli [ '/usr/bin/nodejs', '/usr/bin/npm', 'start' ][m
[31m-2 info using npm@2.14.7[m
[31m-3 info using node@v4.2.1[m
[31m-4 verbose run-script [ 'prestart', 'start', 'poststart' ][m
[31m-5 info prestart foundation-apps-template@1.1.0[m
[31m-6 info start foundation-apps-template@1.1.0[m
[31m-7 verbose unsafe-perm in lifecycle true[m
[31m-8 info foundation-apps-template@1.1.0 Failed to exec start script[m
[31m-9 verbose stack Error: foundation-apps-template@1.1.0 start: `gulp`[m
[31m-9 verbose stack spawn ENOENT[m
[31m-9 verbose stack     at ChildProcess.<anonymous> (/usr/lib/node_modules/npm/lib/utils/spawn.js:17:16)[m
[31m-9 verbose stack     at emitTwo (events.js:87:13)[m
[31m-9 verbose stack     at ChildProcess.emit (events.js:172:7)[m
[31m-9 verbose stack     at maybeClose (internal/child_process.js:818:16)[m
[31m-9 verbose stack     at Process.ChildProcess._handle.onexit (internal/child_process.js:211:5)[m
[31m-10 verbose pkgid foundation-apps-template@1.1.0[m
[31m-11 verbose cwd /maecen/frontend[m
[31m-12 error Linux 3.13.0-65-generic[m
[31m-13 error argv "/usr/bin/nodejs" "/usr/bin/npm" "start"[m
[31m-14 error node v4.2.1[m
[31m-15 error npm  v2.14.7[m
[31m-16 error file sh[m
[31m-17 error code ELIFECYCLE[m
[31m-18 error errno ENOENT[m
[31m-19 error syscall spawn[m
[31m-20 error foundation-apps-template@1.1.0 start: `gulp`[m
[31m-20 error spawn ENOENT[m
[31m-21 error Failed at the foundation-apps-template@1.1.0 start script 'gulp'.[m
[31m-21 error This is most likely a problem with the foundation-apps-template package,[m
[31m-21 error not with npm itself.[m
[31m-21 error Tell the author that this fails on your system:[m
[31m-21 error     gulp[m
[31m-21 error You can get their info via:[m
[31m-21 error     npm owner ls foundation-apps-template[m
[31m-21 error There is likely additional logging output above.[m
[31m-22 verbose exit [ 1, true ][m
[1mdiff --git a/readme.md~ b/readme.md~[m
[1mdeleted file mode 100644[m
[1mindex 4c348ec..0000000[m
[1m--- a/readme.md~[m
[1m+++ /dev/null[m
[36m@@ -1,5 +0,0 @@[m
[31m-# Maecen front-end[m
[31m-Web app based on foundation-apps (angularjs).[m
[31m-[m
[31m-So far localization, routing, and homepage registration has been added.[m
[31m-Currently sanitaztion filters is being worked out.[m
