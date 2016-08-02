/*

 Before I start - if there are any questions, please shout them out!

 This might be an unusual format for a talk, but I thought that as we're
 demonstrating a library - what better way than with code?

 anyway, without further ado:

  ____  _____ ____  _   ___  __
 |  _ \| ____|  _ \| | | \ \/ /
 | |_) |  _| | | | | | | |\  /
 |  _ <| |___| |_| | |_| |/  \
 |_| \_\_____|____/ \___//_/\_\
 ==============================

 01. What is Redux?

 Redux is a state management paradigm. It's a single source of immutable truth,
 any changes are triggered by `Actions`, and any changes mean the replacement of
 the entire state tree.

 In this way, Redux is entirely compatible with functional programming. However,
 there's nothing that means it can't be used with other paradigms.

 The redux docs say that Redux can be explained in three principles, so I'm
 going to nick them for here:

 - There is a single source of truth
 - State is read only
 - Change is made with pure functions

 (redux docs are at redux.js.org - and they're really good. Check them out.)
*/
