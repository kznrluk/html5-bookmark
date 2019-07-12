#!/usr/bin/env bash
echo ".open sqlite.db" | sqlite3
sqlite3 sqlite.db "
create table bookmark
(
    id       integer
        primary key autoincrement,
    name     text,
    url      text,
    datetime text
);"
