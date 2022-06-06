const fs    = require('fs');
const Hjson = require('hjson');

const snippet_file  = './glsl.code-snippets';
const template_file     = './template.md'
const read_me_file  = './README.md'

let doc = '';

fs.readFile(template_file, 'utf8', (err, data) => {

    doc = data;

    fs.readFile(snippet_file, 'utf8', snippet_read);

});

function snippet_read (err, data) {

    if (err) { console.log(err); return; }

    const snippets = Hjson.parse(data);

    fs.truncate(read_me_file, 0, () => {

        doc += "\n\n";
        doc += "## Index";
        doc += "\n\n";

        let groups = {
            uncat: [],
        };

        for (let [name, snippet] of Object.entries(snippets)) {

            const name_parts = name.split(': ');

            if (name_parts.length > 1) { 
                if (!groups.hasOwnProperty(name_parts[0])) groups[name_parts[0]] = [];
                groups[name_parts[0]][name_parts[1]] = snippet;
            } else {
                groups.uncat[name_parts[0]] = snippet;
            }

        }

        for (let [group, snippets] of Object.entries(groups)) {

            if (group == 'uncat') continue;

            const anchor = group.replace(' ', '-').toLowerCase();

            doc += `- [${group}s](#${anchor})\n`;

        }

        doc += "## Reference";
        doc += "\n\n";

        for (let [group, snippets] of Object.entries(groups)) {

            if (group != 'uncat') doc += "## " + group + "s\n\n";
            doc += "| Prefix | Name | Description |\n";
            doc +=  "| - | - | - |\n";

            for (let [name, snippet] of Object.entries(snippets)) {

                doc += "| `";
                doc += snippet.prefix.join('`, `');
                doc += "` | " + name + " | " + snippet.description + " |\n";

            }

        }

        console.log(groups);

        fs.writeFile(read_me_file, doc,  err2 => {

            if (err2) { console.log(err); return; }

            console.log('Done.');

        });

    });




}