const sqlite3 = require('sqlite3');

module.exports = class Database {
    constructor(dbPath) {
        this.db = new sqlite3.Database(dbPath);
    }

    getList() {
        return new Promise((resolve, reject) => {
            this.db.serialize(() => {
                this.db.all("SELECT * FROM Bookmark", (err, rows) => {
                    !err ? resolve(rows) : reject(err);
                });
            });
        })
    }

    add(name, url) {
        this.db.serialize(() => {
            this.db.run('INSERT INTO Bookmark (name, url, datetime) VALUES ($name, $url, datetime("now", "localtime"))', {
                $name: name,
                $url: url,
            });
        });
    }

    delete(id) {
        this.db.serialize(() => {
            this.db.run('DELETE FROM Bookmark where id = $id', {
                $id: id,
            })
        });
    }

    edit(id, name, url) {
        this.getList().then((data) => {
            const targetRecord = data.find(d => d.id === id);
            this.db.serialize(() => {
                this.db.run('UPDATE Bookmark SET name = $name, url = $url where id = $id', {
                    $id: id,
                    $name: name,
                    $url: url,
                })
            });
        })
    }
}
